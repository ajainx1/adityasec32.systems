import React from 'react';
import CharityQuizClient from '@/components/charity/CharityQuizClient';
import { ToastProvider } from '@/components/js/ToastContext';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyber Free Rice 🐾 — Play Free Trivia & Feed Stray Dogs | CyberKarma.me',
  description: 'Play free cybersecurity, science, space, and general trivia quizzes to donate real bowls of rice and fund warm meals for stray dogs in Patna, Bihar. 100% Free, Unlimited AI Mode & Field-Verified Impact.',
  keywords: [
    'Cyber Free Rice',
    'CyberKarma',
    'Free Rice Game',
    'Play Trivia Feed Animals',
    'Free Cybersecurity Quiz Game',
    'Feed Stray Dogs Patna',
    'Play to Donate Rice',
    'Ethical Hacking Quiz',
    'Zero Trust Trivia',
    'Non-Profit Educational Game',
    'Stray Dog Rescue Bihar',
    'Patna Animal Welfare',
    'Free Rice Trivia Online',
    'Play Trivia Donate Food',
    'Gamified Philanthropy',
    'Injured Stray Dog First Aid Patna'
  ],
  authors: [{ name: 'Aditya Jain', url: 'https://adityasec32.systems' }],
  creator: 'Aditya Jain',
  publisher: 'CyberKarma Philanthropy',
  openGraph: {
    title: 'Cyber Free Rice 🐾 — Play Free Trivia & Feed Stray Dogs',
    description: 'Every correct answer donates 10 grains of rice to feed real rescue animals and fund medical aid in Patna, Bihar. 100% Free, Unlimited AI Mode & Field-Verified Impact.',
    url: 'https://cyberkarma.me',
    siteName: 'CyberKarma • Cyber Free Rice',
    images: [
      {
        url: 'https://cyberkarma.me/cyberkarma_banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Cyber Free Rice & CyberKarma — Gamified Philanthropic Trivia Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Free Rice 🐾 — Play Free Trivia & Feed Stray Dogs',
    description: 'Answer cybersecurity & trivia questions to donate real bowls of food to street animals in Patna. 100% Free & Impactful.',
    images: ['https://cyberkarma.me/cyberkarma_banner.jpg'],
    creator: '@adityasec32',
  },
  alternates: {
    canonical: 'https://cyberkarma.me',
    languages: {
      'en': 'https://cyberkarma.me',
      'hi': 'https://cyberkarma.me/?lang=hi',
      'es': 'https://cyberkarma.me/?lang=es',
      'fr': 'https://cyberkarma.me/?lang=fr',
      'de': 'https://cyberkarma.me/?lang=de',
      'bn': 'https://cyberkarma.me/?lang=bn',
      'ta': 'https://cyberkarma.me/?lang=ta',
      'te': 'https://cyberkarma.me/?lang=te',
      'ja': 'https://cyberkarma.me/?lang=ja',
      'ar': 'https://cyberkarma.me/?lang=ar',
      'x-default': 'https://cyberkarma.me',
    },
  },
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna',
    'geo.position': '25.5941;85.1376',
    'ICBM': '25.5941, 85.1376',
  },
  icons: {
    icon: [
      { url: '/charity_favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/charity_favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest-quiz.json',
};

const jsonLdWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Cyber Free Rice (CyberKarma)",
  "url": "https://cyberkarma.me",
  "applicationCategory": "EducationalApplication, GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1437",
    "bestRating": "5",
    "worstRating": "1"
  },
  "description": "Gamified educational trivia platform where correct answers in cybersecurity, ecology, physics, and space generate real-world rice donations for stray dogs in Patna, Bihar.",
  "genre": ["Educational Game", "Trivia Game", "Charity Game"],
  "author": {
    "@type": "Person",
    "name": "Aditya Jain",
    "url": "https://adityasec32.systems"
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "CyberKarma Philanthropy",
  "url": "https://cyberkarma.me",
  "logo": "https://cyberkarma.me/icon.svg",
  "description": "Decentralized ethical philanthropy and stray animal rescue initiative funding daily hot meals for street dogs across Patna Division, Bihar.",
  "location": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5941",
      "longitude": "85.1376"
    }
  },
  "sameAs": [
    "https://adityasec32.systems",
    "https://github.com/ajainx1/cyberkarma.me"
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Cyber Free Rice feed real stray animals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For every question you answer correctly on CyberKarma, 10 grains of rice are pledged. Our on-ground volunteers in Patna Division, Bihar purchase fresh rice, nutritional broth, and veterinary supplements to prepare and distribute warm feeding bowls directly to street animals."
      }
    },
    {
      "@type": "Question",
      "name": "Is Cyber Free Rice 100% free to play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! CyberKarma is 100% free with zero financial cost to users. There are no paywalls, hidden subscriptions, or personal capital requirements. Your time and knowledge generate the positive karmic impact."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I view verified field proof photos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can visit our dedicated Real-World Impact Ledger at https://cyberkarma.me/impact to inspect over 110+ verified ground photos, sector timestamps, and geotagged drives across Patna (Rajbansi Nagar, Boring Road, Kankarbagh, Bailey Road, etc.)."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Unlimited AI Quiz generator work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CyberKarma includes an intelligent multi-topic AI engine that generates limitless, custom-tailored quiz questions on any subject you choose—from Cyber Warfare and Zero Trust to Astrophysics and Ancient History—complete with 3D educational explanations for every answer."
      }
    },
    {
      "@type": "Question",
      "name": "Can I play Cyber Free Rice using keyboard shortcuts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Press keys [A, B, C, D] or [1, 2, 3, 4] to select answers instantly, press [Space] or [Enter] to proceed to the next question, and press [H] to use a hint."
      }
    }
  ]
};

const jsonLdBreadcrumb = {
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
      "name": "Cyber Free Rice Quiz",
      "item": "https://cyberkarma.me/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Field Proof Ledger",
      "item": "https://cyberkarma.me/impact"
    }
  ]
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Feed Stray Animals for Free by Playing Online Trivia",
  "description": "Learn how playing trivia questions on CyberKarma generates free rice donations and medical care for street dogs in Patna, Bihar.",
  "totalTime": "PT2M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Choose a Subject or AI Category",
      "text": "Select from Cybersecurity, Wildlife Care, Space, Science, Math, Geography, or create a custom AI topic.",
      "url": "https://cyberkarma.me/"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Answer Trivia Questions Correctly",
      "text": "Each correct answer pledges 10 grains of rice to the community animal welfare pool.",
      "url": "https://cyberkarma.me/"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Accumulate Meals & Verify Field Delivery",
      "text": "Every 50 grains funds 1 full warm street meal. Inspect geotagged photo proof on the Impact Ledger.",
      "url": "https://cyberkarma.me/impact"
    }
  ]
};

const jsonLdSocialEvent = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Daily Street Dog Rescue & Feeding Drives in Patna",
  "startDate": "2026-08-01T17:00:00+05:30",
  "endDate": "2026-12-31T21:00:00+05:30",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Patna Division Corridors",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rajbansi Nagar & Boring Road",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800001",
      "addressCountry": "IN"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "CyberKarma Philanthropy",
    "url": "https://cyberkarma.me"
  },
  "description": "Daily verified field feeding rounds and injured street animal medical aid funded by online trivia players across the globe."
};

export default function CharityQuizPage() {
  const combinedJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      jsonLdWebApp,
      jsonLdOrganization,
      jsonLdFaq,
      jsonLdBreadcrumb,
      jsonLdHowTo,
      jsonLdSocialEvent
    ]
  };

  return (
    <ToastProvider>
      <section style={{ display: 'contents' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
        />
      </section>
      <CharityQuizClient />
    </ToastProvider>
  );
}
