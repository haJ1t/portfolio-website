import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import LazyCursorTrail from "@/components/effects/LazyCursorTrail";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

// Basic metadata URL using local host for dev context, user should update for prod
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://halitozger.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Halit Ozger | Full Stack Developer & AI/ML Engineer",
    template: "%s | Halit Ozger",
  },
  description: "Portfolio of Halit Ozger, a Full Stack Developer and AI/ML Engineer based in London. Specialized in building intelligent web applications with React, Next.js, Django, and Machine Learning.",
  keywords: [
    "Halit Ozger",
    "Halit Özger",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Web Developer London",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Halit Ozger", url: siteConfig.social.github }],
  creator: "Halit Ozger",
  publisher: "Halit Ozger",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    title: "Halit Ozger | Full Stack Developer & AI/ML Engineer",
    description: "Building intelligent, scalable web applications with modern technologies and AI capabilities.",
    siteName: "Halit Ozger",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Halit Ozger - Full Stack Developer & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halit Ozger | Full Stack Developer & AI/ML Engineer",
    description: "Building intelligent, scalable web applications with modern technologies and AI capabilities.",
    images: ["/og"],
    creator: "@haltozger",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Placeholder for actual code
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LazyCursorTrail />
        {children}
      </body>
    </html>
  );
}
