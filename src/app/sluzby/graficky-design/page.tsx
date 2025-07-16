import Navbar from "../../components/Navbar";
import GraphicDesignPage from "../../components/grafik";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grafické řešení a brandmanuály | Le Artist Ostrava",
  description:
    "Profesionální grafické řešení, brandmanuály a designové služby v Ostravě. Specializujeme se na vizuální identitu, logo manuály, obalový design a grafiku pro sociální sítě. Kreativní grafika na míru pro firmy v ČR.",
  keywords: [
    // Nízko konkurenční termíny z výzkumu
    "grafické řešení",
    "brandmanuál",
    "logo manuál", 
    "designové služby",
    "vizuální identita",
    "obalový design",
    
    // Long-tail fráze s vysokou konverzí
    "kreativní grafika na míru",
    "grafika pro sociální sítě",
    "návrh loga pro malé firmy",
    "grafické služby ostrava",
    
    // Tradiční termíny
    "grafický design",
    "logo design",
    "branding",
    "tvorba grafiky",
    
    // Technické termíny
    "DTP služby",
    "reklamní bannery",
    "billboardy design",
    "corporate identity",
    
    // Specifické služby
    "tiskové materiály",
    "digitální grafika",
    "prezentační materiály",
    "marketing materiály",
    "vizitky design",
    "letáky design",
    
    // Lokální SEO
    "grafik ostrava",
    "graphic design ostrava",
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
    canonical: "https://le-artist.cz/sluzby/graficky-design"
  },
  openGraph: {
    title: "Grafické řešení a brandmanuály | Le Artist Ostrava",
    description:
      "Profesionální grafické řešení, brandmanuály a designové služby. Specializujeme se na vizuální identitu, logo manuály a kreativní grafiku na míru pro firmy v Ostravě a ČR.",
    url: "https://le-artist.cz/sluzby/graficky-design",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image-grafika.jpg",
        width: 1200,
        height: 630,
        alt: "Grafické řešení a design - Le Artist Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Grafické řešení a brandmanuály | Le Artist Ostrava",
    description:
      "Profesionální grafické řešení, brandmanuály a designové služby. Kreativní grafika na míru pro firmy v Ostravě a České republice.",
    images: ["https://le-artist.cz/og-image-grafika.jpg"]
  },
  authors: [{ name: "Le Artist", url: "https://le-artist.cz" }]
};

export default function Home() {
  return (
    <>
      <Navbar />
      <GraphicDesignPage />
      <Footer />
    </>
  );
}