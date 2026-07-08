import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY || '');

// Rate limiting map (simple in-memory rate limiting for spam protection)
const ipRequestCounts = new Map<string, { count: number, resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 contact requests per minute

app.post('/api/contact', async (req: express.Request, res: express.Response) => {
  const ip = req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || 'unknown-ip';
  const currentTime = Date.now();

  // Rate Limiting check
  const ipData = ipRequestCounts.get(ip);
  if (ipData) {
    if (currentTime < ipData.resetTime) {
      if (ipData.count >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
      }
      ipData.count++;
    } else {
      ipRequestCounts.set(ip, { count: 1, resetTime: currentTime + RATE_LIMIT_WINDOW });
    }
  } else {
    ipRequestCounts.set(ip, { count: 1, resetTime: currentTime + RATE_LIMIT_WINDOW });
  }

  const { name, email, message } = req.body;

  // STEP 1: Validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Full Name is required.' });
  }
  if (!email || !email.trim()) {
    return res.status(400).json({ error: 'Email Address is required.' });
  }
  
  // Basic Email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  // STEP 2: Send email using Resend
  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'nikhilbhadauriya2500@gmail.com',
      subject: `New Portfolio Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0F172A; max-width: 600px; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px;">
          <h2 style="color: #06B6D4; margin-top: 0;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38BDF8;">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #F8FAFC; padding: 15px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); white-space: pre-wrap; font-size: 14px;">${message}</div>
          <hr style="border: 0; border-top: 1px solid rgba(0,0,0,0.08); margin: 20px 0;" />
          <p style="font-size: 11px; color: #94A3B8; margin-bottom: 0;">Sent via Nikhil Bhadauriya's Portfolio</p>
        </div>
      `
    });

    if (!data.data || data.error) {
      throw new Error(data.error?.message || 'Resend error');
    }

    return res.status(200).json({ success: true, data: data.data });
  } catch (error: any) {
    console.error('Email Delivery Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email. Please check your credentials.' });
  }
});

// Port configuration for running locally
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Contact API server running locally on port ${PORT}`);
});

export default app;
