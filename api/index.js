import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai'; 

dotenv.config();
const app = express();
app.use(cors()); 
app.use(express.json());

// Initialize the Google GenAI Client with the key loaded from .env
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Define the model
const GEMINI_MODEL = 'gemini-2.5-flash';

app.post('/api/chat', async (req, res) => {
  try{
    const { message = '', sessionId = '' } = req.body || {};

    // 1. Fast FAQ Rules (Runs first for quick, stable answers)
    const lower = message.toLowerCase();
    if(lower.includes('shipping')){
      return res.json({ reply: 'We ship Pan-India. Standard delivery takes 3–5 business days. Express options are available at checkout.' });
    }
    if(lower.includes('warranty')){
      return res.json({ reply: 'Most components come with a 7-day replacement warranty for manufacturing defects. Check the product page for exact details.' });
    }
    if(lower.includes('order status') || lower.includes('track')){
      return res.json({ reply: 'You can track your order from the My Orders page using your order ID. If you share your order ID, I can look it up.' });
    }

    // 2. GEMINI API Fallback (Intelligent Response)
    if(process.env.GEMINI_API_KEY) {
      const prompt = `You are Astra's helpful e-commerce assistant for electronic components. Be concise, friendly, and ask one follow-up question. The customer message is: "${message}"`;
      
      const response = await ai.models.generateContent({
          model: GEMINI_MODEL,
          contents: [{ role: "user", parts: [{ text: prompt }] }]
      });

      const reply = response.text?.trim() || 'I\'m having trouble connecting to my knowledge base. Can you try rephrasing?';
      return res.json({ reply });
    }

    // 3. Simple Fallback echo (Should NOT run if the key is loaded)
    return res.json({ reply: `You said: ${message}` });
    
  }catch(err){
    // This catches the crash and reports the error cleanly in the terminal.
    console.error("Gemini API call failed. Key is likely invalid or expired.", err);
    // Tell the client there was a server issue.
    return res.status(500).json({ reply: 'Server error. Please try again later.' });
  }
});
