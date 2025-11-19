// This file should be named 'api/index.js' in your Vercel structure

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai'; 

dotenv.config();
const app = express();
app.use(cors()); 
app.use(express.json());

// Initialize the Google GenAI Client with the key loaded from Vercel/dotenv
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const GEMINI_MODEL = 'gemini-2.5-flash';

app.post('/api/chat', async (req, res) => {
  const { message = '' } = req.body || {};
  const lower = message.toLowerCase();

  // 1. Fast FAQ Rules (Runs first)
  if(lower.includes('shipping')){
    return res.json({ reply: 'We ship Pan-India. Standard delivery takes 3–5 business days. Express options are available at checkout.' });
  }
  if(lower.includes('warranty')){
    return res.json({ reply: 'Most components come with a 7-day replacement warranty for manufacturing defects. Check the product page for exact details.' });
  }
  if(lower.includes('order status') || lower.includes('track')){
    return res.json({ reply: 'You can track your order from the My Orders page using your order ID. If you share your order ID, I can look it up.' });
  }

  // 2. GEMINI API Call (The part that fails)
  if(process.env.GEMINI_API_KEY) {
    try {
      // This is the call that may throw an error due to invalid key or rate limit.
      const response = await ai.models.generateContent({
          model: GEMINI_MODEL,
          contents: [{ role: "user", parts: [{ text: `You are Astra's helpful e-commerce assistant for electronic components. Be concise, friendly, and ask one follow-up question. The customer message is: "${message}"` }] }]
      });

      const reply = response.text?.trim() || 'My AI is having trouble connecting to the knowledge base. Try asking again.';
      return res.json({ reply });

    } catch (err) {
      // 3. 🛑 BULLETPROOF FAILOVER: If the key is rejected or rate-limited,
      //    we catch the error, log it on Vercel, and send a graceful 200 response.
      console.error("Vercel Gemini API call failed. Key likely invalid or rate-limited.", err.message);
      return res.json({ reply: 'Sorry, our intelligent assistant is currently under high load or experiencing a temporary connection issue. I can still help with common FAQs like shipping or warranty.' });
    }
  }

  // 4. Final Fallback Echo (Should not be hit if the key is configured on Vercel)
  return res.json({ reply: `You said: ${message}` });
});

// Vercel Serverless Function Export
module.exports = app;