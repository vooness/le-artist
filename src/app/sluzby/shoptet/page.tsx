import Navbar from "../../components/Navbar";
 import ShoptetServicesPage from "../../components/shoptet";
 import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mé služby - Le Artist",
  description:
    "Osobně nabízím širokou škálu služeb – od webdesignu a grafiky, přes video editaci, tvorbu reklam, úpravy Shoptetu, e-shopů, logo design, maskoty až po lektorství. Každou službu poskytuji s individuálním přístupem a maximální péčí o detail.",
  keywords: [
    "mé služby",
    "webdesign",
    "grafika",
    "video editace",
    "tvorba reklam",
    "reklamní kampaně",
    "úpravy Shoptetu",
    "e-shop",
    "eshop",
    "logo design",
    "tvorba loga",
    "maskoti",
    "lektorství",
    "osobní služby",
    "profesionální služby",
    "digitální marketing",
    "branding",
    "internetový obchod",
    "reklamní design",
    "online marketing",
    "SEO"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://yourwebsite.com/sluzby",
    languages: {
      cs: "https://yourwebsite.com/cs/sluzby",
      en: "https://yourwebsite.com/en/services",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Mé služby - Le Artist",
    description:
      "Osobně nabízím služby v oblasti webdesignu, grafiky, video editace, tvorby reklam, úprav Shoptetu, e-shopů, logo designu a maskotů – vše s individuálním přístupem pro Vaše specifické potřeby.",
    url: "https://yourwebsite.com/sluzby",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-sluzby.jpg",
        width: 1200,
        height: 630,
        alt: "Mé služby - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mé služby - Le Artist",
    description:
      "Nabízím osobní služby v oblasti webdesignu, grafiky, video editace, tvorby reklam, úprav Shoptetu, e-shopů, logo designu a maskotů. Kontaktujte mě pro individuální nabídku.",
    images: ["https://yourwebsite.com/og-image-sluzby.jpg"],
  },
  authors: [{ name: "Le Artist", url: "https://yourwebsite.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  other: {
    abstract:
      "Osobně poskytuju služby v oblasti webdesignu, grafiky, video editace, tvorby reklam, úprav Shoptetu, e-shopů, logo designu a maskotů, vždy s individuálním přístupem.",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    HandheldFriendly: "True",
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
