import Navbar from "../../components/Navbar";
import ShoptetServicesPage from "../../components/shoptet";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoptet specialista a customizace | Le Artist Ostrava",
  description:
    "Profesionální Shoptet specialista pro customizace, API integrace a úpravy šablon. Nabízíme také Shopify e-shopy a custom React/Next.js řešení. Shoptet migrace, audit a optimalizace v Ostravě a ČR.",
  keywords: [
    // Nejvyšší priorita - nízká konkurence z výzkumu
    "shoptet specialista",
    "shoptet customizace",
    "shoptet api integrace",
    "shoptet premium partner",
    "shoptet migrace",
    
    // Technické termíny s velmi nízkou konkurencí
    "shoptet šablony na míru",
    "shoptet api integrace pomoc",
    "shoptet výkon optimalizace",
    "shoptet audit e-shopu",
    "shoptet development",
    
    // Tradiční Shoptet termíny
    "shoptet eshop",
    "tvorba shoptet",
    "úpravy shoptet",
    "shoptet design",
    "shoptet e-shop",
    
    // Alternativní platformy
    "shopify eshop",
    "shopify development",
    "shopify customizace",
    "shopify vs shoptet",
    
    // Custom řešení
    "custom react eshop",
    "next.js e-commerce",
    "react e-shop development",
    "headless commerce",
    "custom e-commerce řešení",
    
    // B2B vs B2C segmentace z výzkumu
    "shoptet b2b portál",
    "shoptet retail setup",
    "enterprise e-commerce",
    
    // Emerging trendy
    "shoptet ai chatbot",
    "shoptet automatizace",
    "shoptet ai integrace",
    
    // Lokální SEO
    "shoptet ostrava",
    "e-shop development ostrava",
    "moravskoslezský kraj",
    "česká republika"
  ],
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: "https://le-artist.cz/sluzby/shoptet-eshop"
  },
  openGraph: {
    title: "Shoptet specialista a customizace | Le Artist Ostrava",
    description:
      "Profesionální Shoptet specialista pro customizace, API integrace a úpravy šablon. Nabízíme také Shopify e-shopy a custom React/Next.js řešení v Ostravě a ČR.",
    url: "https://le-artist.cz/sluzby/shoptet-eshop",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image-shoptet.jpg",
        width: 1200,
        height: 630,
        alt: "Shoptet specialista a e-shop development - Le Artist Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoptet specialista a customizace | Le Artist Ostrava",
    description:
      "Profesionální Shoptet specialista pro customizace, API integrace a custom React/Next.js e-commerce řešení. Shopify a Shoptet development v ČR.",
    images: ["https://le-artist.cz/og-image-shoptet.jpg"]
  },
  authors: [{ name: "Le Artist", url: "https://le-artist.cz" }]
};

export default function Home() {
  return (
    <>
      <Navbar />
      <ShoptetServicesPage />
      <Footer />
    </>
  );
}