# Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS, showcasing my professional work and projects.

## 🌐 Live Website

**Visit my portfolio:** [cvarner.me](https://www.cvarner.me)

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Integrated email functionality using EmailJS
- **Project Showcase**: Interactive gallery of my work and projects
- **About Section**: Personal information and professional background
- **Resume Download**: Direct access to my resume
- **Fast Performance**: Built with Next.js for optimal speed and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (ES6+)
- **Email Service**: EmailJS
- **Deployment**: Vercel
- **Domain**: GoDaddy (cvarner.me)

## 📁 Project Structure

```
PortfolioProject/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   ├── aboutme_photos/
│   ├── project_photos/
│   ├── work_photos/
│   ├── images/
│   └── CarolineVarner_Resume.pdf
├── package.json
├── next.config.mjs
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/carolinevarner/Portfolio.git
cd Portfolio/PortfolioProject
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality. To set up your own:

1. Create an EmailJS account
2. Update the email service configuration in the contact form component
3. Add your EmailJS credentials to the environment variables

## 🚀 Deployment

This website is deployed on Vercel with a custom domain from GoDaddy.

### Deployment URLs:
- **Production**: [cvarner.me](https://www.cvarner.me)
- **Vercel URL**: [portfolio-project-1j51pw55m-caroline-varner-s-projects.vercel.app](https://portfolio-project-1j51pw55m-caroline-varner-s-projects.vercel.app)

### Deployment Commands:
```bash
# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# Inspect domain configuration
vercel domains inspect cvarner.me
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Typography**: Custom font combinations using Google Fonts (Montserrat, Open Sans, Ovo, Playfair Display)
- **Color Scheme**: Professional color palette with smooth gradients
- **Animations**: Subtle hover effects and transitions
- **Images**: Optimized images for fast loading

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Caroline Varner**
- Portfolio: [cvarner.me](https://www.cvarner.me)
- Email: [varner4262@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/caroline-varner/]

---

Built with ❤️ using Next.js and deployed on Vercel


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
