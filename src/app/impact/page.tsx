import React from 'react';
import ImpactPageClient from '@/components/charity/ImpactPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impact Ledger — Verified Stray Animal Feeding Proofs | CyberKarma',
  description: 'Inspect verified ground proof photos, timestamps, and geotagged drives of stray animal feeding and medical rescue across Patna Division, Bihar.',
  keywords: [
    'CyberKarma Impact',
    'Real World Animal Feeding Patna',
    'Stray Dog Rescue Photos Bihar',
    'Verified Field Proof Patna Division',
    'Transparent Charity Proof Ledger',
    'Free Rice Stray Dogs Ground Truth',
    'Animal Welfare Patna'
  ],
  authors: [{ name: 'Aditya Jain', url: 'https://adityasec32.systems' }],
  creator: 'Aditya Jain',
  publisher: 'CyberKarma Philanthropy',
  openGraph: {
    title: 'Impact Ledger — Verified Stray Animal Feeding Proofs',
    description: 'Explore verified photo proof and field logs of stray animal feeding and rescue work across Patna Division, Bihar.',
    url: 'https://cyberkarma.me/impact',
    siteName: 'CyberKarma Impact Ledger',
    images: [
      {
        url: 'https://cyberkarma.me/cyberkarma_banner.jpg',
        width: 1200,
        height: 630,
        alt: 'CyberKarma Real-World Impact Ledger — 110+ Verified Photos in Patna',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impact Ledger — Verified Stray Animal Feeding Proofs',
    description: 'Verified field proof of stray animal feeding and rescue work in Patna.',
    images: ['https://cyberkarma.me/cyberkarma_banner.jpg'],
    creator: '@adityasec32',
  },
  alternates: {
    canonical: 'https://cyberkarma.me/impact',
  },
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna',
    'geo.position': '25.5941;85.1376',
    'ICBM': '25.5941, 85.1376',
  },
};

const jsonLdImpact = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "CyberKarma Verified Animal Relief Ledger",
  "description": "Transparent on-ground proof ledger documenting 110+ verified stray canine feeding drives in Patna Division, Bihar.",
  "provider": {
    "@type": "NGO",
    "name": "CyberKarma Philanthropy",
    "url": "https://cyberkarma.me"
  },
  "spatialCoverage": {
    "@type": "Place",
    "name": "Patna Division, Bihar, India",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5941",
      "longitude": "85.1376"
    }
  }
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
      "name": "Real-World Impact Ledger",
      "item": "https://cyberkarma.me/impact"
    }
  ]
};

export default function ImpactPage() {
  const combinedJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      jsonLdImpact,
      jsonLdBreadcrumb
    ]
  };

  return (
    <>
      <section style={{ display: 'contents' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
        />
      </section>
      <ImpactPageClient />
    </>
  );
}
