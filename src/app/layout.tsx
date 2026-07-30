import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Background3D from "@/components/3d/Background3D";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import TelegramVisitorLogger from "@/components/TelegramVisitorLogger";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aditya Jain — SME Cybersecurity Engineer & Purple Teaming",
  description: "Portfolio of Aditya Jain — 4+ years enterprise SecOps, EDR/SIEM SME, Purple Teaming, Threat Hunting, and Incident Response.",
  manifest: "/manifest.json",
  metadataBase: new URL("https://adityasec32.systems"),
  alternates: {
    canonical: "https://adityasec32.systems",
  },
  openGraph: {
    title: "Aditya Jain — SME Cybersecurity Engineer",
    description: "4+ years enterprise SecOps, SentinelOne/EDR SME, Wazuh SIEM, Purple Teaming, and Threat Hunting.",
    url: "https://adityasec32.systems",
    siteName: "AdityaSec Systems",
    locale: "en_US",
    type: "website",
  },
  other: {
    'google-adsense-account': 'ca-pub-6072468142870937',
    'theme-color': '#0f172a',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aditya Jain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aditya Jain",
    "jobTitle": "SME Cybersecurity Engineer",
    "url": "https://adityasec32.systems",
    "sameAs": [
      "https://cyberkarma.me",
      "https://jumpstreet.tech"
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6072468142870937" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6072468142870937"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${mono.variable} antialiased bg-[var(--bg)] text-[var(--fg)]`}
      >
        <Background3D />
        <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-[#ff9933] via-white to-[#128807]"></div>
        {children}
        <Footer />
        <CookieConsent />
        <PWAInstallPrompt />
        <TelegramVisitorLogger />
      </body>
    </html>
  );
}
