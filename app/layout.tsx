import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ember & Oak | Luxury Wood-Fired Fine Dining Kenya',
  description: 'Experience Michelin-caliber charcoal gastronomy, prime dry-aged steaks, and custom wine pairings. Premium fine dining branches in Nairobi (Westlands), Mombasa (Nyali), Kisumu (Riat Hills), and Nakuru.',
  keywords: 'fine dining Kenya, Ember and Oak, luxury restaurant Nairobi, steakhouse Westlands, gourmet dining Mombasa, Riat Hills restaurant Kisumu, wine pairing Nairobi, wood fired steak Kenya',
  openGraph: {
    title: 'Ember & Oak | Luxury Wood-Fired Fine Dining Kenya',
    description: 'Michelin-caliber charcoal gastronomy, premium dry-aged steaks, and artisanal wine pairings in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Ember & Oak Fine Dining Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember & Oak | Premium Dining',
    description: 'The epitome of charcoal gastronomy and sensory elegance in Kenya.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Ember & Oak",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    "priceRange": "$$$$",
    "servesCuisine": "Wood-fired Gastronomy, Prime Aged Steaks, Fine Wine Pairings",
    "acceptsReservations": "true",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mwanzi Road, Westlands",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "addressCountry": "KE"
    },
    "telephone": "+254 711 000 001",
    "url": "https://emberandoak.co.ke",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "23:00"
      }
    ],
    "department": [
      {
        "@type": "Restaurant",
        "name": "Ember & Oak Nairobi",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mwanzi Road, Westlands",
          "addressLocality": "Nairobi",
          "addressRegion": "Nairobi County",
          "addressCountry": "KE"
        },
        "telephone": "+254 711 000 001"
      },
      {
        "@type": "Restaurant",
        "name": "Ember & Oak Mombasa",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Links Road, Nyali",
          "addressLocality": "Mombasa",
          "addressRegion": "Mombasa County",
          "addressCountry": "KE"
        },
        "telephone": "+254 711 000 002"
      },
      {
        "@type": "Restaurant",
        "name": "Ember & Oak Kisumu",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Riat Hills Estate",
          "addressLocality": "Kisumu",
          "addressRegion": "Kisumu County",
          "addressCountry": "KE"
        },
        "telephone": "+254 711 000 003"
      },
      {
        "@type": "Restaurant",
        "name": "Ember & Oak Nakuru",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Milimani Estate Road",
          "addressLocality": "Nakuru",
          "addressRegion": "Nakuru/Nakuru County",
          "addressCountry": "KE"
        },
        "telephone": "+254 711 000 004"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF6F0] text-[#111111] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

