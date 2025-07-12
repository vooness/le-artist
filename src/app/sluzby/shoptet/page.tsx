import Navbar from "../../components/Navbar";
import ShoptetServicesPage from "../../components/shoptet";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoptet Eshop - Tvorba a úpravy | Le Artist",
  description:
    "Specializuji se na tvorbu a úpravy Shoptet eshopů. Nabízím kompletní služby pro váš online obchod - design, customizace, optimalizace, SEO a technické úpravy Shoptet platformy s individuálním přístupem.",
  keywords: [
    "shoptet eshop",
    "tvorba shoptet",
    "úpravy shoptet",
    "shoptet design",
    "shoptet customizace",
    "shoptet e-shop",
    "shoptet online obchod",
    "shoptet šablony",
    "shoptet optimalizace",
    "shoptet SEO",
    "e-commerce shoptet",
    "internetový obchod shoptet",
    "shoptet webdesign",
    "shoptet úpravy design",
    "shoptet programování",
    "shoptet specialista",
    "shoptet expert",
    "shoptet services",
    "online prodej",
    "e-shop tvorba",
    "shoptet consulting"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://yourwebsite.com/sluzby/shoptet-eshop",
    languages: {
      cs: "https://yourwebsite.com/cs/sluzby/shoptet-eshop",
      en: "https://yourwebsite.com/en/services/shoptet-eshop",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Shoptet Eshop - Tvorba a úpravy | Le Artist",
    description:
      "Profesionální tvorba a úpravy Shoptet eshopů. Specializuji se na design, customizace, optimalizace a technické úpravy Shoptet platformy. Získejte moderní a funkční online obchod.",
    url: "https://yourwebsite.com/sluzby/shoptet-eshop",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-shoptet.jpg",
        width: 1200,
        height: 630,
        alt: "Shoptet Eshop služby - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoptet Eshop - Tvorba a úpravy | Le Artist",
    description:
      "Specializuji se na tvorbu a úpravy Shoptet eshopů. Design, customizace, optimalizace a technické úpravy pro váš úspěšný online obchod.",
    images: ["https://yourwebsite.com/og-image-shoptet.jpg"],
  },
  authors: [{ name: "Le Artist", url: "https://yourwebsite.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff6b35",
  other: {
    abstract:
      "Profesionální služby pro Shoptet eshopy - tvorba, úpravy, design, customizace a optimalizace online obchodů na Shoptet platformě.",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    HandheldFriendly: "True",
    "shoptet-specialist": "true",
    "e-commerce-expert": "true",
  },
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