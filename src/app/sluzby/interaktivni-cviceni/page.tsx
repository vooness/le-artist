import Navbar from "../../components/Navbar";
import InteractiveServicesPage from "../../components/cviceni";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tvorba interaktivních cvičení a kvízů | Le Artist",
  description:
    "Specializuji se na tvorbu interaktivních cvičení, kvízů a edukačního obsahu. Vytvářím engaging e-learning materiály, online kurzy, interaktivní prezentace a vzdělávací aplikace s moderním designem a uživatelsky přívětivým rozhraním.",
  keywords: [
    "interaktivní cvičení",
    "tvorba kvízů",
    "interaktivní kvízy",
    "e-learning",
    "online kurzy",
    "edukační obsah",
    "vzdělávací materiály",
    "interaktivní prezentace",
    "gamifikace",
    "vzdělávací aplikace",
    "online výuka",
    "digitální vzdělávání",
    "interaktivní obsah",
    "vzdělávací hry",
    "mikrolearning",
    "adaptive learning",
    "quiz maker",
    "educational design",
    "instructional design",
    "learning management",
    "online assessment",
    "interaktivní testy",
    "vzdělávací platformy",
    "custom e-learning",
    "educational technology",
    "learning experience"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://yourwebsite.com/sluzby/interaktivni-cviceni",
    languages: {
      cs: "https://yourwebsite.com/cs/sluzby/interaktivni-cviceni",
      en: "https://yourwebsite.com/en/services/interactive-exercises",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Tvorba interaktivních cvičení a kvízů | Le Artist",
    description:
      "Profesionální tvorba interaktivních cvičení, kvízů a e-learning obsahu. Specializuji se na engaging vzdělávací materiály, online kurzy a interaktivní prezentace s moderním designem.",
    url: "https://yourwebsite.com/sluzby/interaktivni-cviceni",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-interactive.jpg",
        width: 1200,
        height: 630,
        alt: "Interaktivní cvičení a kvízy - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tvorba interaktivních cvičení a kvízů | Le Artist",
    description:
      "Profesionální tvorba interaktivních cvičení, kvízů a e-learning obsahu. Engaging vzdělávací materiály a online kurzy s moderním designem.",
    images: ["https://yourwebsite.com/og-image-interactive.jpg"],
  },
  authors: [{ name: "Le Artist", url: "https://yourwebsite.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff6b35",
  other: {
    abstract:
      "Profesionální služby v oblasti tvorby interaktivních cvičení, kvízů a e-learning obsahu pro moderní digitální vzdělávání a online kurzy.",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    HandheldFriendly: "True",
    "e-learning-specialist": "true",
    "interactive-content-creator": "true",
    "educational-designer": "true",
  },
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