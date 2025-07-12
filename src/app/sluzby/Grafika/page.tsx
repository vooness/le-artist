import Navbar from "../../components/Navbar";
import GraphicDesignPage from "../../components/grafik";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tvorba grafiky a grafický design | Le Artist",
  description:
    "Specializuji se na tvorbu grafiky, grafický design a vizuální identitu. Nabízím logo design, branding, tisk materiály, digitální grafiku, ilustrace a kompletní vizuální řešení s kreativním a profesionálním přístupem.",
  keywords: [
    "tvorba grafiky",
    "grafický design",
    "graphic design",
    "logo design",
    "tvorba loga",
    "branding",
    "vizuální identita",
    "corporate identity",
    "tiskové materiály",
    "digitální grafika",
    "ilustrace",
    "grafické návrhy",
    "reklamní grafika",
    "plakáty",
    "letáky",
    "vizitky",
    "bannery",
    "social media grafika",
    "packaging design",
    "web grafika",
    "ikonky",
    "infografiky",
    "prezentační materiály",
    "marketing materiály",
    "creative design",
    "visual communication",
    "brand design",
    "grafický návrh",
    "maskot design",
    "character design"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://yourwebsite.com/sluzby/tvorba-grafiky",
    languages: {
      cs: "https://yourwebsite.com/cs/sluzby/tvorba-grafiky",
      en: "https://yourwebsite.com/en/services/graphic-design",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Tvorba grafiky a grafický design | Le Artist",
    description:
      "Profesionální tvorba grafiky a grafický design. Specializuji se na logo design, branding, vizuální identitu, tiskové materiály a digitální grafiku s kreativním přístupem.",
    url: "https://yourwebsite.com/sluzby/tvorba-grafiky",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-grafika.jpg",
        width: 1200,
        height: 630,
        alt: "Tvorba grafiky a design - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tvorba grafiky a grafický design | Le Artist",
    description:
      "Profesionální tvorba grafiky, logo design a branding. Kreativní grafické řešení pro tisk i digitální média s důrazem na vizuální identitu.",
    images: ["https://yourwebsite.com/og-image-grafika.jpg"],
  },
  authors: [{ name: "Le Artist", url: "https://yourwebsite.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff6b35",
  other: {
    abstract:
      "Profesionální služby v oblasti tvorby grafiky, grafického designu, logo designu a brandingu s kreativním přístupem a důrazem na vizuální identitu.",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    HandheldFriendly: "True",
    "graphic-designer": "true",
    "logo-designer": "true",
    "branding-specialist": "true",
  },
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