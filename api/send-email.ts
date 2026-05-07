import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message || !subject) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,      // Your Gmail address
      pass: process.env.GMAIL_APP_PASS,  // Your Gmail App Password
    },
  });

  const mailOptions = {
    from: `"Watertight Consultants Website" <${process.env.GMAIL_USER}>`,
    to: `${process.env.GMAIL_USER}, admin@offing.biz, info@watertightconsultants.com`, // Sends to multiple recipients
    replyTo: email,             // Reply goes directly to the sender
    subject: `New Inquiry: ${subject} — from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background: #0A192F; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
          <h1 style="color: #F97316; margin: 0; font-size: 22px; letter-spacing: 2px;">WATERTIGHT CONSULTANTS</h1>
          <p style="color: #ffffff80; margin: 5px 0 0; font-size: 13px;">New Website Inquiry</p>
        </div>
        <div style="padding: 30px; background: #fff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; width: 120px;"><strong>Name</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Email</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Phone</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;"><strong>Subject</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #666; font-size: 13px; margin-bottom: 8px;"><strong>Message</strong></p>
            <div style="background: #f8f8f8; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; border-left: 4px solid #F97316;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        <div style="text-align: center; padding: 16px; background: #f8f8f8; border-radius: 0 0 6px 6px;">
          <p style="color: #999; font-size: 12px; margin: 0;">This message was sent from the contact form at watertightconsultants.com</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
