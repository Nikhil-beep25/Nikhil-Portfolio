const express = require('express');
const { Resend } = require('resend');

const router = express.Router();
// Initialize with a fallback to prevent app crash on startup if ENV is missing
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

// GET /api/contact
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact API Running"
  });
});

// POST /api/contact
router.post('/', async (req, res) => {
  console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = req.body;

    // STEP 1: Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Full Name is required.' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, error: 'Email Address is required.' });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message is required.' });
    }

    // STEP 2: Send email using Resend API
    const timestamp = new Date().toISOString();
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'nikhilbhadauriya2500@gmail.com',
      subject: `New Portfolio Contact Request - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nTimestamp: ${timestamp}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0F172A; max-width: 600px; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px;">
          <h2 style="color: #8B5CF6; margin-top: 0;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #A78BFA;">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #F8FAFC; padding: 15px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); white-space: pre-wrap; font-size: 14px;">${message}</div>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          <hr style="border: 0; border-top: 1px solid rgba(0,0,0,0.08); margin: 20px 0;" />
          <p style="font-size: 11px; color: #94A3B8; margin-bottom: 0;">Sent via Nikhil Bhadauriya's Portfolio</p>
        </div>
      `
    });

    if (data.error) {
      const resendError = new Error(data.error.message || 'Resend error occurred.');
      resendError.details = data.error;
      throw resendError;
    }

    return res.status(200).json({
      success: true,
      message: 'Message received successfully',
      data: data.data
    });

  } catch (error) {
    console.error("Resend Error:", error);
    
    const errorMessage = process.env.NODE_ENV === 'production' 
      ? 'Failed to send message. Please try again.' 
      : error.message || 'Resend error occurred.';

    return res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
});

module.exports = router;
