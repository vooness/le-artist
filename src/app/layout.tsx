import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MotionWrapper from "./components/MotionWrapper";
import { OrganizationSchema, PersonSchema } from "./components/StructuredData";

// Google Font
const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Le Artist - Komplexní webové služby, grafika a Shoptet úpravy | Ostrava",
  description:
    "Profesionální webové stránky na míru, grafický design, video tvorba, Shoptet e-shop úpravy a online kurzy. Specializujeme se na responzivní weby, brandmanuály a interaktivní kvízy pro firmy v Ostravě a celé České republice.",
  keywords: [
    // Hlavní brand
    "le artist",
    "grafické studio ostrava",
    
    // Webové stránky (z výzkumu)
    "webové stránky na míru",
    "responzivní webové stránky",
    "levné webové stránky",
    "webdesign ostrava",
    "tvorba webů",
    
    // Shoptet (niche specializace)
    "shoptet úpravy",
    "shoptet customizace",
    "shoptet specialista",
    "shoptet api integrace",
    
    // Grafický design (alternativní termíny)
    "grafické řešení",
    "vizuální identita",
    "brandmanuál",
    "logo design",
    "designové služby",
    
    // Video (technické termíny)
    "video tvorba",
    "video postprodukce",
    "firemní video",
    "video editace",
    
    // Online vzdělávání
    "online kurzy",
    "lektorství",
    "firemní školení",
    
    // Interaktivní prvky
    "interaktivní kvízy",
    "kvízy pro firmy",
    
    // Lokální SEO
    "ostrava grafik",
    "webdesigner ostrava",
    "moravskoslezský kraj",
    "česká republika"
  ],
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    title: "Le Artist - Webové stránky, grafika, Shoptet úpravy | Ostrava",
    description:
      "Profesionální tvorba webových stránek na míru, grafický design, video produkce a Shoptet e-shop úpravy. Specializujeme se na responzivní weby, brandmanuály a online kurzy pro firmy v Ostravě a ČR.",
    url: "https://le-artist.cz",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Artist - Profesionální webové služby a design v Ostravě"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Artist - Webové stránky, grafika, Shoptet úpravy | Ostrava",
    description:
      "Profesionální tvorba webových stránek, grafický design, video produkce a Shoptet úpravy. Specializujeme se na responzivní weby a brandmanuály pro firmy v Ostravě a ČR.",
    images: ["https://le-artist.cz/og-image.jpg"]
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
  alternates: {
    canonical: "https://le-artist.cz"
  }
};

// Root layout with Framer Motion config wrapper
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        {/* Structured Data Schema */}
        <OrganizationSchema />
        <PersonSchema />
      </head>
      <body className={cn(inter.className, "bg-gray-900")}>
        {/* MotionWrapper disables animations on mobile via Framer Motion */}
        <MotionWrapper>
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}