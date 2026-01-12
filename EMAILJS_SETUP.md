# EmailJS Setup Guide

This guide will help you set up EmailJS to send lead information from the contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template variables in your email template:

```
Subject: New Lead from Evoke AI Contact Form

Body:
New Lead Generated
Evoke AI Contact Form Submission

Full Name: {{from_name}}
Company: {{from_company}}
Email: {{from_email}}
Phone: {{from_phone}}
Location: {{from_location}}

The Vision:
{{message}}

Submitted on: {{date}} at {{time}}
```

4. Copy your **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in the dashboard
2. Find your **Public Key** under API Keys
3. Copy the Public Key

## Step 5: Configure Environment Variables

Create a `.env` file in the `evoke-app` directory with the following:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 6: Restart Development Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the lead notification

## Troubleshooting

- **"Email service is not configured"**: Make sure all environment variables are set correctly
- **"Failed to send message"**: Check that your EmailJS service is properly connected
- **No emails received**: Verify your email service connection in EmailJS dashboard

## Template Variables Available

The following variables are sent to your EmailJS template:

- `from_name` - User's full name
- `from_company` - Company name
- `from_email` - User's email address
- `from_phone` - Phone number
- `from_location` - Location
- `message` - The vision/message
- `to_name` - Recipient name (set to "Evoke AI Team")
- `date` - Submission date
- `time` - Submission time

## Security Note

The Public Key is safe to expose in client-side code. Never share your Private Key or API Secret.
