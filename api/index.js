// api/index.js (The final, self-contained chatbot server)

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // Still useful for general setup but not for an API key

dotenv.config();
const app = express();
app.use(cors()); 
app.use(express.json());

// --- ASTRA KNOWLEDGE BASE (Compiled from js/products.js and HTML files) ---
const ASTRA_PRODUCTS = [
  { id: 1, name: "Arduino Uno", price: 350, description: "Robust microcontroller board powered by the ATmega328P, perfect for prototyping." },
  { id: 2, name: "Raspberry Pi 4", price: 2500, description: "Powerful single-board computer with a quad-core Cortex-A72 processor and 4GB RAM." },
  { id: 3, name: "Jumper Wires", price: 80, description: "Essential set of 40 male-to-male/female wires (10cm length) for circuit building." },
  { id: 4, name: "Breadboard", price: 120, description: "400-point solderless breadboard, cornerstone for electronics prototyping." },
  { id: 5, name: "LFR KIT", price: 1600, description: "Line Following Robot (LFR) Kit including a chassis, DC motors, and IR sensors." },
  { id: 6, name: "DJI Mini 4 Pro Drone Fly More Combo Plus", price: 118000, description: "Premium ultralight drone with 4K HDR video and omnidirectional obstacle sensing." },
  { id: 7, name: "35A 2-5S BLHELI_S 4 in 1 ESC", price: 2500, description: "High-performance electronic speed controller (ESC) for FPV drones." },
  { id: 8, name: "SDT Q100 Brushed Quadcopter Frame Kit", price: 599, description: "Lightweight, durable frame kit with 100mm wheelbase for micro drones." },
  { id: 9, name: "8520 Coreless Motors With 75mm Propellers", price: 499, description: "High efficiency coreless motors and propellers for micro drones." },
  { id: 10, name: "65MM CW and CCW Blade Propeller", price: 99, description: "Set of 65mm propellers for micro drones (Note: duplicate entry)." },
  { id: 11, name: "30A Brushless Electronic Speed Controller", price: 299, description: "Compact, high-efficiency 30A ESC for drones/RC planes, supports 2-4S LiPo." },
  { id: 12, name: "A2212 KV2200 Brushless Motor", price: 449, description: "High-performance 2200KV motor for 2-3S LiPo batteries." },
  { id: 13, name: "A2212 KV1000 Brushless Motor", price: 399, description: "Versatile 1000KV motor for stable, long-duration flights, 3-4S LiPo." }
];

// Helper function to find products by keyword
function findProducts(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);
  const matches = ASTRA_PRODUCTS.filter(p => 
    terms.some(term => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term))
  );

  if (matches.length === 0) {
    return "I couldn't find any products matching your query. Please try searching for 'Arduino', 'Drone', or 'Motor'.";
  }

  const list = matches.map(p => 
    ` • ${p.name} (₹${p.price}) - ${p.description}`
  ).join('\n');

  return `I found ${matches.length} product(s):\n${list}`;
}

// --- MAIN ROUTE HANDLER ---
app.post('/api/chat', (req, res) => {
  const { message = '' } = req.body || {};
  const lower = message.toLowerCase();
  let reply = '';

  // 1. **PRODUCT LOOKUP**
  if (lower.includes('product') || lower.includes('list') || lower.includes('find') || lower.includes('stock') || lower.includes('price')) {
    reply = findProducts(lower);
  }

  // 2. **POLICY & CONTACT LOOKUP**
  else if (lower.includes('shipping') || lower.includes('delivery')) {
    reply = "Shipping is free for orders above ₹1000; otherwise, a flat ₹50 fee is charged. Delivery typically takes 4–7 business days.";
  }
  else if (lower.includes('warranty') || lower.includes('return') || lower.includes('refund')) {
    reply = "We offer a 7-day replacement warranty for manufacturing defects. Orders can be canceled within 12 hours. Refunds are processed within 7-10 business days.";
  }
  else if (lower.includes('coupon') || lower.includes('discount')) {
    reply = "Yes! You can use the coupon code **DISCOUNT20** to get a 20% discount on your order total.";
  }
  else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
    reply = "You can contact us via email at astra.io.in@gmail.com or call us at +91 9706508938 or +91 9045996369.";
  }
  else if (lower.includes('payment gateway') || lower.includes('payu')) {
    reply = "The primary checkout is integrated with the **PayU** payment gateway. Our policy documents also mention working with Razorpay.";
  }
  
  // 3. **GENERAL GREETINGS/FALLBACK**
  else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    reply = "Hello! I am Astra Assistant. How can I help you with your order, product specifications, or any of our policies?";
  }
  else {
    reply = "I specialize in answering questions about ASTRA products (e.g., 'Arduino Uno'), shipping, warranty, and contact information. Could you try asking a specific question?";
  }

  // Final success response (200 OK)
  return res.status(200).json({ reply });
});

// Vercel Serverless Function Export
module.exports = app;