# ClaimNow AI - Next.js Website

Advanced medical claims automation platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Features

- ✅ Server-side rendering with Next.js App Router
- ✅ Serverless API routes for contact form
- ✅ Email functionality with nodemailer
- ✅ Side navigation with hover-to-reveal
- ✅ Floating demo button
- ✅ Smooth scroll animations
- ✅ Forest/green theme with custom colors
- ✅ Fully responsive design
- ✅ SEO optimized with metadata
- ✅ Structured data for FAQ
- ✅ Form validation with Zod
- ✅ Rate limiting for API
- ✅ Toast notifications with Sonner

## 🛠️ Setup Instructions

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
RECIPIENT_EMAIL=contact@claimnow.ai
\`\`\`

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🚀 Deployment to Vercel

1. Push code to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy!

---

**Built with ❤️ by ClaimNow AI**
