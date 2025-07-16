import Navbar from "../../components/Navbar";
import WebServicesPage from "../../components/web";
import Footer from "../../components/Footer";
import InvestmentSection from "@/app/components/investice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webové řešení a responzivní webové stránky na míru | Le Artist Ostrava",
  description:
    "Profesionální webové řešení a responzivní webové stránky na míru. Specializujeme se na levné webové stránky pro malé firmy, AI webové stránky a webové stránky s administrací v Ostravě a ČR.",
  keywords: [
    // Klíčová slova s nízkou konkurencí z výzkumu
    "webové řešení",
    "online prezentace",
    "responzivní webové stránky na míru",
    "webové stránky s administrací",
    
    // Long-tail fráze s vysokou konverzí
    "levné webové stránky pro malé firmy",
    "webové stránky pro malé firmy",
    "rychlé webové stránky",
    "kvalitní webové stránky",
    
    // Emerging trendy - nízká konkurence
    "AI webové stránky",
    "no-code webové stránky",
    "automatizované webové stránky",
    "chytré webové stránky",
    
    // Niche specializace s minimální konkurencí
    "webové stránky pro kadeřnictví",
    "web pro ordinaci",
    "internetová prezentace restaurace",
    "webové stránky pro služby",
    "business webové stránky",
    
    // Tradiční termíny
    "tvorba webů",
    "webdesign",
    "tvorba webových stránek",
    "responzivní weby",
    "moderní webdesign",
    
    // Technické termíny
    "React weby",
    "Next.js weby",
    "webové aplikace",
    "frontend development",
    "custom webdesign",
    
    // B2B segment
    "corporate weby",
    "firemní webové stránky",
    "prezentační weby",
    "portfoliové weby",
    
    // Lokální SEO - střední města z výzkumu
    "webdesign ostrava",
    "webové stránky ostrava",
    "webdesign hradec králové",
    "webdesign ústí nad labem",
    "webdesign jihlava",
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
    canonical: "https://le-artist.cz/sluzby/tvorba-webu"
  },
  openGraph: {
    title: "Webové řešení a responzivní webové stránky na míru | Le Artist Ostrava",
    description:
      "Profesionální webové řešení a responzivní webové stránky na míru. Specializujeme se na levné webové stránky pro malé firmy a AI webové stránky v Ostravě a ČR.",
    url: "https://le-artist.cz/sluzby/tvorba-webu",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image-web.jpg",
        width: 1200,
        height: 630,
        alt: "Webové řešení a responzivní webové stránky - Le Artist Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Webové řešení a responzivní webové stránky na míru | Le Artist Ostrava",
    description:
      "Profesionální webové řešení, responzivní webové stránky na míru a AI webové stránky. Levné webové stránky pro malé firmy v Ostravě a ČR.",
    images: ["https://le-artist.cz/og-image-web.jpg"]
  },
  authors: [{ name: "Le Artist", url: "https://le-artist.cz" }]
};

export default function Home() {
  return (
    <>
      <Navbar />
      <WebServicesPage />
      <InvestmentSection />
      <Footer />
    </>
  );
}