import Navbar from "../components/Navbar";
import OnlineCourses from "../components/OnlineCourses";
import Footer from "../components/Footer";
import FuturisticFAQ from "../components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Kolik stojí webové stránky a grafické služby | Le Artist Ostrava",
  description:
    "Odpovědi na nejčastější otázky o cenách a realizaci webových řešení, Shoptet customizace, grafických služeb, video tvorby a online kurzů s AI. Kompletní přehled procesů spolupráce v Ostravě a ČR.",
  keywords: [
    // Voice search a otázky - velmi nízká konkurence
    "kolik stojí webové stránky",
    "kolik stojí logo design",
    "kolik stojí shoptet úpravy",
    "kolik stojí video tvorba",
    "kolik stojí online kurzy",
    "kolik stojí interaktivní kvízy",
    
    // Long-tail otázky s vysokou konverzí
    "jak dlouho trvá tvorba webových stránek",
    "jak probíhá tvorba loga",
    "jak funguje shoptet customizace",
    "jak se vytváří firemní video",
    "jak se tvoří online kurzy",
    
    // Kde otázky - lokální SEO
    "kde vytvořit webové stránky ostrava",
    "kde udělat logo design ostrava",
    "kde najít shoptet specialista",
    "kde vytvořit firemní video",
    
    // Co obsahuje otázky
    "co obsahuje webové řešení",
    "co obsahuje brandmanuál",
    "co obsahuje video postprodukce",
    "co obsahuje online kurz",
    
    // Procesní otázky
    "jak vybrat správný design",
    "jak optimalizovat webové stránky",
    "jak nastavit shoptet e-shop",
    "jak vytvořit efektivní video",
    
    // Cenové kombinace služeb
    "cena webových stránek s logem",
    "cena kompletní vizuální identity",
    "cena shoptet e-shop s designem",
    "cena firemního video balíčku",
    
    // Technické FAQ
    "responzivní design co to je",
    "SEO optimalizace jak funguje",
    "SCORM kompatibilita vysvětlení",
    "H5P interaktivní obsah",
    "Adobe Articulate 360 kurzy",
    
    // Tradiční FAQ termíny
    "FAQ často kladené otázky",
    "Le Artist otázky",
    "doba realizace",
    "proces spolupráce",
    "technická podpora",
    "údržba webů",
    
    // Lokální SEO
    "grafické služby ostrava cena",
    "webdesign ostrava cena",
    "video služby ostrava cena",
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
    canonical: "https://le-artist.cz/faq"
  },
  openGraph: {
    title: "FAQ - Kolik stojí webové stránky a grafické služby | Le Artist Ostrava",
    description:
      "Odpovědi na nejčastější otázky o cenách webových řešení, Shoptet customizace, grafických služeb a video tvorby. Kompletní přehled procesů spolupráce v Ostravě a ČR.",
    url: "https://le-artist.cz/faq",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ - Často kladené otázky o cenách služeb | Le Artist Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Kolik stojí webové stránky a grafické služby | Le Artist Ostrava",
    description:
      "Rychlé odpovědi na otázky o cenách webových řešení, grafických služeb, video tvorby a online kurzů. Kompletní přehled procesů spolupráce.",
    images: ["https://le-artist.cz/og-image-faq.jpg"]
  },
  authors: [
    { name: "Le Artist", url: "https://le-artist.cz" }
  ]
};

export default function Home() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      
      {/* FAQ Section */}
      <main className="min-h-screen bg-[#0f172a] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <FuturisticFAQ className="max-w-6xl mx-auto" />
        </div>
      </main>
      
      {/* Footer Component */}
      <Footer />
    </>
  );
}