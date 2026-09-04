import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Background3D from "@/components/3d/Background3D";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import TelegramVisitorLogger from "@/components/TelegramVisitorLogger";
import WelcomeBanner from "@/components/WelcomeBanner";
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

const isCyberKarmaSite = process.env.NEXT_PUBLIC_SITE_MODE === "cyberkarma";

export const metadata: Metadata = isCyberKarmaSite
  ? {
      title: "Cyber Free Rice — Trivia for Animal Welfare",
      description: "Play free cybersecurity and general knowledge trivia on CyberKarma and review the impact ledger for animal welfare work in Patna.",
      keywords: [
        "Cyber Free Rice",
        "CyberKarma",
        "Free trivia game",
        "Cybersecurity quiz",
        "Charity game",
        "Stray animal support",
        "Patna animal welfare",
      ],
      manifest: "/manifest-quiz.json",
      metadataBase: new URL("https://cyberkarma.me"),
      alternates: {
        canonical: "https://cyberkarma.me",
      },
      openGraph: {
        title: "Cyber Free Rice — Trivia for Animal Welfare",
        description: "Free trivia platform with an impact ledger for animal welfare work in Patna.",
        url: "https://cyberkarma.me",
        siteName: "Cyber Free Rice & CyberKarma",
        images: [
          {
            url: "/cyberkarma_banner.jpg",
            width: 1200,
            height: 630,
            alt: "Cyber Free Rice — Gamified Trivia to Feed Animals",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Cyber Free Rice — Trivia for Animal Welfare",
        description: "Free trivia platform with an impact ledger for animal welfare work in Patna.",
        images: ["/cyberkarma_banner.jpg"],
      },
      icons: {
        icon: [
          { url: "/charity_favicon.svg", type: "image/svg+xml" },
          { url: "/favicon.svg", type: "image/svg+xml" },
        ],
        shortcut: "/charity_favicon.svg",
        apple: "/apple-touch-icon.png",
      },
      other: {
        "google-adsense-account": "ca-pub-6072468142870937",
        "theme-color": "#0f0414",
      },
      appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "CyberKarma",
      },
    }
  : {
    title: "Aditya Jain — Cybersecurity Engineer",
    description: "Cybersecurity portfolio covering vulnerability management, DevSecOps, SIEM/EDR tuning, threat hunting, and enterprise security engineering.",
      keywords: [
        "Aditya Jain",
        "Cybersecurity Engineer",
        "Vulnerability Management",
        "DevSecOps",
        "Purple Teamer",
        "SecOps",
        "Threat Hunting",
        "SentinelOne",
        "Wazuh SIEM",
        "Check Point NGFW",
        "Fortinet FortiGate",
        "Palo Alto",
        "DFIR",
        "VAPT",
        "Active Directory Security",
        "NIST CSF",
        "CERT-In"
      ],
      manifest: "/manifest.json",
      metadataBase: new URL("https://adityasec32.systems"),
      alternates: {
        canonical: "https://adityasec32.systems",
      },
      openGraph: {
        title: "Aditya Jain — Cybersecurity Engineer",
        description: "Cybersecurity portfolio with engineering case studies, demos, and project highlights.",
        url: "https://adityasec32.systems",
        siteName: "AdityaSec Systems",
        images: [
          {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Aditya Jain — Cybersecurity Engineer & Purple Teamer",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Aditya Jain — Cybersecurity Engineer",
        description: "Cybersecurity portfolio with engineering case studies, demos, and project highlights.",
        images: ["/og-image.jpg"],
      },
      icons: {
        icon: [
          { url: "/favicon.svg", type: "image/svg+xml" },
          { url: "/icon.svg", type: "image/svg+xml" },
        ],
        shortcut: "/favicon.svg",
        apple: "/apple-touch-icon.png",
      },
      other: {
        "google-adsense-account": "ca-pub-6072468142870937",
        "theme-color": "#020617",
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
  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CyberKarma",
    "url": "https://cyberkarma.me",
    "applicationCategory": "EducationalApplication, GameApplication",
    "operatingSystem": "All (Web, iOS, Android, Desktop)",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "description": "Free gamified educational trivia platform with an impact ledger for animal welfare work in Patna, Bihar.",
    "image": "https://cyberkarma.me/og-image.jpg",
    "screenshot": "https://cyberkarma.me/cyberkarma_hero_mascot.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Person",
      "name": "Aditya Vardhan Jain",
      "url": "https://adityasec32.systems"
    }
  };

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "CyberKarma Animal Welfare & Educational Initiative",
    "url": "https://cyberkarma.me",
    "logo": "https://cyberkarma.me/charity_favicon.svg",
    "founder": {
      "@type": "Person",
      "name": "Aditya Vardhan Jain",
      "jobTitle": "Founder & Cybersecurity Engineer",
      "url": "https://adityasec32.systems",
      "sameAs": [
        "https://www.linkedin.com/in/ajainx1",
        "https://github.com/ajainx1"
      ]
    },
    "location": {
      "@type": "Place",
      "name": "Patna Division, Bihar, India"
    }
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CyberKarma",
    "url": "https://cyberkarma.me",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cyberkarma.me/charity-quiz?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does CyberKarma support animal welfare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CyberKarma uses trivia as a participation layer for animal welfare initiatives and links to an impact ledger for transparency."
        }
      },
      {
        "@type": "Question",
        "name": "Is CyberKarma free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. CyberKarma is free to use and includes educational trivia categories and a separate impact page."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find the impact page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit https://cyberkarma.me/impact to review the impact ledger."
        }
      }
    ]
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cyberkarma.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Home",
        "item": "https://cyberkarma.me/#main-content"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Impact & Field Proof",
        "item": "https://cyberkarma.me/impact"
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#0B0F0E" />
        <meta name="google-adsense-account" content="ca-pub-6072468142870937" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="icon" type="image/svg+xml" href="/charity_favicon.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href={isCyberKarmaSite ? "/manifest-quiz.json" : "/manifest.json"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="alternate" hrefLang="en" href={isCyberKarmaSite ? "https://cyberkarma.me/" : "https://adityasec32.systems/"} />
        <link rel="alternate" hrefLang="hi" href={isCyberKarmaSite ? "https://cyberkarma.me/?lang=hi" : "https://adityasec32.systems/"} />
        <link rel="alternate" hrefLang="x-default" href={isCyberKarmaSite ? "https://cyberkarma.me/" : "https://adityasec32.systems/"} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdApp, jsonLdOrg, jsonLdWebSite, jsonLdFAQ, jsonLdBreadcrumbs]) }}
        />
        <Script
          id="sw-cleanup"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistrations().then(function(registrations) { for (var r of registrations) { r.unregister(); } }); }`
          }}
        />
        <Script
          id="adsbygoogle-init"
          strategy="lazyOnload"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6072468142870937"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${mono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-slate-950 font-bold rounded-lg shadow-lg font-mono">
          Skip to main content
        </a>
        <noscript>
          <div className="p-6 bg-slate-900 text-emerald-400 text-center font-mono text-sm border-b border-emerald-500/30">
            <strong>Aditya Jain SecOps Portfolio requires JavaScript.</strong> 4+ years Enterprise SecOps, EDR/SIEM SME, Purple Teaming & Threat Hunting.
          </div>
        </noscript>
        <WelcomeBanner />
        {!isCyberKarmaSite && <Background3D />}
        {!isCyberKarmaSite && <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-[#ff9933] via-white to-[#128807]"></div>}
        {children}
        <Footer />
        <CookieConsent />
        <PWAInstallPrompt />
        <TelegramVisitorLogger />
      </body>
    </html>
  );
}
