import Navbar from "../../components/Navbar";
import InteractiveServicesPage from "../../components/cviceni";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interaktivní kvízy a H5P cvičení pro školy | Le Artist Ostrava",
  description:
    "Profesionální tvorba interaktivních kvízů a H5P cvičení pro školy a firmy. Specializujeme se na Adobe Articulate 360, firemní kvízy, HR kvízy a vzdělávací platformy pro střední školy v Ostravě a ČR.",
  keywords: [
    // Nejvyšší priorita - nízká konkurence z výzkumu
    "interaktivní kvízy",
    "kvíz builder",
    "interaktivní dotazníky",
    "tvorba kvízů pro firmy",
    "firemní kvízy",
    
    // Technické specializace - velmi nízká konkurence
    "H5P cvičení",
    "H5P interaktivní obsah",
    "Adobe Articulate 360",
    "Articulate Storyline",
    "SCORM kompatibilní kvízy",
    
    // Vzdělávací segment
    "kvízy pro školy",
    "interaktivní cvičení střední školy",
    "vzdělávací kvízy",
    "e-learning pro školy",
    "online cvičení studenti",
    
    // B2B segment - velmi nízká konkurence
    "HR kvízy",
    "kvízy pro B2B marketing",
    "firemní školení kvízy",
    "onboarding kvízy",
    "compliance kvízy",
    
    // Emerging trendy - nulová konkurence
    "AI kvízy",
    "chytré kvízy",
    "adaptivní kvízy",
    "gamifikace ve vzdělávání",
    
    // Long-tail fráze
    "tvorba interaktivních cvičení",
    "mikrolearning kvízy",
    "vzdělávací aplikace na míru",
    "interaktivní testy online",
    
    // Lokální SEO
    "kvízy ostrava",
    "e-learning ostrava",
    "interaktivní obsah moravskoslezský kraj",
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
    canonical: "https://le-artist.cz/sluzby/interaktivni-kviz"
  },
  openGraph: {
    title: "Interaktivní kvízy a H5P cvičení pro školy | Le Artist Ostrava",
    description:
      "Profesionální tvorba interaktivních kvízů a H5P cvičení pro školy a firmy. Specializujeme se na Adobe Articulate 360, firemní kvízy a vzdělávací platformy v Ostravě a ČR.",
    url: "https://le-artist.cz/sluzby/interaktivni-kviz",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image-interactive.jpg",
        width: 1200,
        height: 630,
        alt: "Interaktivní kvízy a H5P cvičení - Le Artist Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Interaktivní kvízy a H5P cvičení pro školy | Le Artist Ostrava",
    description:
      "Profesionální tvorba interaktivních kvízů pomocí H5P a Adobe Articulate 360. Firemní kvízy, HR kvízy a vzdělávací platformy pro školy v ČR.",
    images: ["https://le-artist.cz/og-image-interactive.jpg"]
  },
  authors: [{ name: "Le Artist", url: "https://le-artist.cz" }]
};

export default function Home() {
  return (
    <>
      <Navbar />
      <InteractiveServicesPage />
      <Footer />
    </>
  );
}