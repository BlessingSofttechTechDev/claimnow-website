import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateEmail, validatePhone } from '@/lib/validation';
import { rateLimit } from '@/lib/rateLimit';

// Email configuration
const EMAIL_USER = process.env.EMAIL_USER || '';
const EMAIL_PASS = process.env.EMAIL_PASS || '';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'contact@claimnow.ai';

// Auto-detect Gmail vs Custom SMTP
const isGmail = EMAIL_USER.includes('@gmail.com');

// Configure nodemailer transporter
const transporter = isGmail
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })
  : nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields except company are required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid or disposable email address' },
        { status: 400 }
      );
    }

    if (!validatePhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Must be at least 10 digits' },
        { status: 400 }
      );
    }

    // Rate limiting
    const rateLimitResult = rateLimit(email.toLowerCase(), 3, 60 * 60 * 1000);
    if (!rateLimitResult.allowed) {
      const resetTime = new Date(rateLimitResult.resetTime!).toLocaleTimeString();
      return NextResponse.json(
        {
          error: `Rate limit exceeded. You can submit again at ${resetTime}`,
          resetTime: rateLimitResult.resetTime,
        },
        { status: 429 }
      );
    }

    // Email to ClaimNow team
    const mailOptionsToTeam = {
      from: EMAIL_USER,
      to: RECIPIENT_EMAIL,
      subject: `🚀 New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #16a34a; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">📩 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone wants to connect with ClaimNow AI!</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">📧 Email:</span>
                <div class="value"><a href="mailto:${email}" style="color: #16a34a; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">📱 Phone:</span>
                <div class="value"><a href="tel:${phone}" style="color: #16a34a; text-decoration: none;">${phone}</a></div>
              </div>
              ${company ? `
              <div class="field">
                <span class="label">🏢 Company:</span>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value">${message}</div>
              </div>
              <div class="footer">
                <p>⏰ Submitted at: ${new Date().toLocaleString()}</p>
                <p>Respond within 24 hours for best engagement!</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply to user
    const mailOptionsToUser = {
      from: EMAIL_USER,
      to: email,
      subject: '✅ Thank you for contacting ClaimNow AI',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .cta { background: #16a34a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; font-weight: bold; }
            .stats { display: flex; justify-content: space-around; margin: 30px 0; }
            .stat { text-align: center; }
            .stat-number { font-size: 32px; font-weight: bold; color: #16a34a; }
            .stat-label { color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🎉 Thank You, ${name}!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Thank you for reaching out to <strong>ClaimNow AI</strong>! We've successfully received your inquiry and our team will review it shortly.</p>
              
              <div class="stats">
                <div class="stat">
                  <div class="stat-number">99%+</div>
                  <div class="stat-label">Accuracy</div>
                </div>
                <div class="stat">
                  <div class="stat-number">10x</div>
                  <div class="stat-label">Faster Processing</div>
                </div>
                <div class="stat">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">Automation</div>
                </div>
              </div>

              <p><strong>What happens next?</strong></p>
              <ul>
                <li>✅ Our team will review your message within 24 hours</li>
                <li>📞 We'll reach out to schedule a personalized demo</li>
                <li>🚀 Discover how ClaimNow AI can transform your claims process</li>
              </ul>

              <div style="text-align: center;">
                <a href="https://claimnow.ai" class="cta">Learn More About ClaimNow AI</a>
              </div>

              <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                In the meantime, feel free to explore our website to learn more about how we're revolutionizing medical claims automation with AI.
              </p>

              <p style="margin-top: 20px;">Best regards,<br><strong>The ClaimNow AI Team</strong></p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionsToTeam);
    await transporter.sendMail(mailOptionsToUser);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you soon.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Contact API is running',
    emailConfigured: !!EMAIL_USER && !!EMAIL_PASS,
  });
}
