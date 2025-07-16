import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt a poptávka služeb | Le Artist Ostrava",
  description:
    "Kontaktujte Le Artist pro poptávku webových řešení, Shoptet customizace, grafických služeb, video tvorby a online kurzů. Bezplatná konzultace a cenová nabídka pro firmy v Ostravě a České republice.",
  keywords: [
    // Kontaktní kombinace s službami - nízká konkurence
    "kontakt webdesign ostrava",
    "kontakt grafické služby ostrava",
    "kontakt shoptet specialista",
    "kontakt video tvorba ostrava",
    "kontakt online kurzy",
    
    // Poptávkové termíny - vysoká konverze
    "poptávka webových stránek",
    "poptávka grafického designu",
    "poptávka shoptet úprav",
    "poptávka video služeb",
    "poptávka online kurzů",
    
    // Konzultační termíny
    "bezplatná konzultace webdesign",
    "konzultace grafické služby",
    "konzultace shoptet řešení",
    "konzultace video projektů",
    
    // Cenové dotazy
    "cenová nabídka webové stránky",
    "cenová nabídka logo design",
    "cenová nabídka shoptet úpravy",
    "cenová nabídka video tvorba",
    
    // Lokální business termíny
    "digitální služby ostrava kontakt",
    "webové služby ostrava kontakt",
    "grafické studio ostrava kontakt",
    "video produkce ostrava kontakt",
    
    // Specifické služby kontakt
    "kontakt webové řešení",
    "kontakt brandmanuál",
    "kontakt firemní video",
    "kontakt interaktivní kvízy",
    "kontakt AI kurzy",
    
    // Procesní kontakt
    "jak objednat webové stránky",
    "jak objednat logo design",
    "jak objednat shoptet úpravy",
    "jak objednat video",
    
    // Tradiční kontaktní termíny
    "kontakt",
    "kontaktujte mě",
    "le artist kontakt",
    "osobní služby",
    "remote služby",
    "profesionální služby",
    
    // Lokální SEO
    "ostrava kontakt",
    "moravskoslezský kraj služby",
    "česká republika digitální služby",
    "severní morava webdesign"
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
    canonical: "https://le-artist.cz/kontakt"
  },
  openGraph: {
    title: "Kontakt a poptávka služeb | Le Artist Ostrava",
    description:
      "Kontaktujte Le Artist pro poptávku webových řešení, grafických služeb, video tvorby a online kurzů. Bezplatná konzultace a cenová nabídka v Ostravě a ČR.",
    url: "https://le-artist.cz/kontakt",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image-kontakt.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt a poptávka služeb | Le Artist Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt a poptávka služeb | Le Artist Ostrava",
    description:
      "Kontaktujte Le Artist pro webové řešení, grafické služby, video tvorbu a online kurzy. Bezplatná konzultace a cenová nabídka v Ostravě a ČR.",
    images: ["https://le-artist.cz/og-image-kontakt.jpg"]
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

      {/* Contact Form Component */}
      <ContactForm />

      {/* Footer Component */}
      <Footer />
    </>
  );
}