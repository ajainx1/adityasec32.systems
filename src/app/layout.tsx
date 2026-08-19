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

const isCyberKarmaSite = process.env.NEXT_PUBLIC_SITE_MODE === "cyberkarma";

export const metadata: Metadata = isCyberKarmaSite
  ? {
      title: "Cyber Free Rice 🐾 | Play Cybersecurity & Trivia Game to Feed Stray Animals",
      description: "Answer cybersecurity, ethical hacking, and general knowledge trivia to donate real bowls of rice and fund warm meals for stray dogs in Patna. 100% free gamified charity.",
      keywords: [
        "Cyber Free Rice",
        "Free Rice Game",
        "Play Trivia Feed Animals",
        "Cybersecurity Quiz Game",
        "Play to Donate",
        "Charity Trivia Game",
        "Stray Animal Feeding Patna",
        "Gamified Ethical Hacking Quiz",
        "CyberKarma"
      ],
      manifest: "/manifest-quiz.json",
      metadataBase: new URL("https://cyberkarma.me"),
      alternates: {
        canonical: "https://cyberkarma.me",
      },
      openGraph: {
        title: "Cyber Free Rice 🐾 — Play Trivia, Feed Real Stray Animals",
        description: "Every correct answer generates free rice grains and funds warm street animal meals in Patna. Level up, build streaks, and play to make a real-world difference!",
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
        title: "Cyber Free Rice 🐾 — Play Trivia, Feed Real Stray Animals",
        description: "Answer cybersecurity & trivia questions to donate real bowls of food to street animals. 100% Free & Impactful.",
        images: ["/cyberkarma_banner.jpg"],
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
      title: "Aditya Jain — Cybersecurity Engineer & Purple Teamer",
      description: "Network Security & NGFW Architecture (Palo Alto · Check Point · Fortinet) · VAPT · SIEM/EDR · DFIR — securing 750+ government endpoints & Critical National Infrastructure.",
      keywords: [
        "Aditya Jain",
        "Cybersecurity Engineer",
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
        title: "Aditya Jain — Cybersecurity Engineer & Purple Teamer",
        description: "Network Security & NGFW Architecture (Palo Alto · Check Point · Fortinet) · VAPT · SIEM/EDR · DFIR — securing 750+ government endpoints & Critical National Infrastructure.",
        url: "https://adityasec32.systems",
        siteName: "AdityaSec Systems",
        images: [
          {
            url: "/og_image.png",
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
        title: "Aditya Jain — Cybersecurity Engineer & Purple Teamer",
        description: "Network Security & NGFW Architecture (Palo Alto · Check Point · Fortinet) · VAPT · SIEM/EDR · DFIR — securing 750+ government endpoints & Critical National Infrastructure.",
        images: ["/og_image.png"],
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
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aditya Jain",
    "jobTitle": "Cybersecurity Engineer & Network Security Architect",
    "url": "https://adityasec32.systems",
    "image": "https://adityasec32.systems/og_image.jpg",
    "worksFor": {
      "@type": "Organization",
      "name": "Ebix Technologies / NIC (MeitY)"
    },
    "alumniOf": "Manipal University",
    "knowsAbout": [
      "Cybersecurity",
      "Network Security",
      "Palo Alto NGFW",
      "Check Point Firewall",
      "Fortinet FortiGate",
      "Purple Teaming",
      "Threat Hunting",
      "SentinelOne EDR",
      "Wazuh SIEM",
      "Active Directory Exploitation",
      "VAPT",
      "DFIR",
      "CERT-In Compliance",
      "NIST CSF"
    ],
    "sameAs": [
      "https://cyberkarma.me",
      "https://github.com/ajainx1",
      "https://www.linkedin.com/in/adityajainx1/"
    ]
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AdityaSec Systems & CyberKarma",
    "url": "https://adityasec32.systems",
    "alternateName": ["CyberKarma", "Cyber Free Rice", "Aditya Jain Portfolio"],
    "description": "Enterprise SecOps engineering portfolio and non-profit gamified educational trivia platform funding verified street dog feeding drives in Patna, Bihar.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cyberkarma.me/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#0B0F0E" />
        <meta name="google-adsense-account" content="ca-pub-6072468142870937" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="alternate" hrefLang="en" href="https://adityasec32.systems/" />
        <link rel="alternate" hrefLang="hi" href="https://adityasec32.systems/" />
        <link rel="alternate" hrefLang="x-default" href="https://adityasec32.systems/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdPerson, jsonLdWebSite]) }}
        />
        <Script
          id="sw-cleanup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistrations().then(function(registrations) { for (var r of registrations) { r.unregister(); } }); }`
          }}
        />
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
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
