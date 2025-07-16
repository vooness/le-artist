import Navbar from "../../components/Navbar";
import VideoServicesPage from "../../components/videa";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firemní video na klíč a video postprodukce | Le Artist Ostrava",
  description:
    "Profesionální tvorba firemních videí na klíč, video postprodukce a reklamní spoty. Specializujeme se na vertical video tvorbu, video color grading, sound design a korporátní video produkci v Ostravě a ČR.",
  keywords: [
    // Vysoký potenciál z výzkumu - B2B zaměřené
    "firemní video na klíč",
    "korporátní video produkce",
    "video pro startupy",
    "video pro SaaS firmy",
    "business video tvorba",
    
    // Technické termíny s nízkou konkurencí
    "video postprodukce",
    "video color grading",
    "video sound design",
    "video střih profesionální",
    "video editing services",
    
    // Emerging trendy s minimální konkurencí
    "vertical video tvorba",
    "AI video generování",
    "AI video editing",
    "automatizovaný video střih",
    
    // Specifické platformy a formáty
    "TikTok video tvorba",
    "Instagram Reels produkce",
    "YouTube Shorts tvorba",
    "video pro sociální sítě",
    "krátká reklamní videa",
    
    // Niche specializace
    "animované explainer video",
    "drone video natáčení",
    "motion graphics design",
    "video marketing kampaně",
    "reklamní spoty tvorba",
    
    // Tradiční termíny
    "tvorba videí",
    "video editace",
    "reklamní videa",
    "video produkce",
    "video služby",
    
    // B2B specifické
    "produktová videa",
    "prezentační videa",
    "školící videa",
    "onboarding videa",
    
    // Lokální SEO
    "video služby ostrava",
    "video produkce ostrava",
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
    canonical: "https://le-artist.cz/sluzby/video-tvorba"
  },
  openGraph: {
    title: "Firemní video na klíč a video postprodukce | Le Artist Ostrava",
    description:
      "Profesionální tvorba firemních videí na klíč, video postprodukce a reklamní spoty. Specializujeme se na vertical video tvorbu a korporátní video produkci v Ostravě a ČR.",
    url: "https://le-artist.cz/sluzby/video-tvorba",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image-video.jpg",
        width: 1200,
        height: 630,
        alt: "Firemní video produkce a postprodukce - Le Artist Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Firemní video na klíč a video postprodukce | Le Artist Ostrava",
    description:
      "Profesionální tvorba firemních videí, video postprodukce, color grading a vertical video tvorba. Reklamní spoty a korporátní video produkce v ČR.",
    images: ["https://le-artist.cz/og-image-video.jpg"]
  },
  authors: [{ name: "Le Artist", url: "https://le-artist.cz" }]
};

export default function Home() {
  return (
    <>
      <Navbar />
      <VideoServicesPage />
      <Footer />
    </>
  );
}