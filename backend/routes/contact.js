const express = require('express');
const { Resend } = require('resend');

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY || '');

// GET /api/contact
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact API Running"
  });
});

// POST /api/contact
router.post('/', async (req, res, next) => {
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

    if (data.error) {
      throw new Error(data.error.message || 'Resend error occurred.');
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      data: data.data
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
