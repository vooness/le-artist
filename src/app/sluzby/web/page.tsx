import Navbar from "../../components/Navbar";
import WebServicesPage from "../../components/web";
import Footer from "../../components/Footer";
import InvestmentSection from "@/app/components/investice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tvorba webů a webdesign | Le Artist",
  description:
    "Specializuji se na tvorbu moderních webových stránek, webdesign a vývoj webových aplikací. Nabízím responzivní weby, e-shopy, landing pages a kompletní web development s důrazem na UX/UI design a SEO optimalizaci.",
  keywords: [
    "tvorba webů",
    "webdesign",
    "web development",
    "tvorba webových stránek",
    "responzivní weby",
    "moderní webdesign",
    "webové aplikace",
    "landing pages",
    "UX design",
    "UI design",
    "frontend development",
    "e-commerce weby",
    "SEO optimalizace",
    "mobilní weby",
    "CMS systémy",
    "WordPress",
    "Next.js",
    "React weby",
    "webové řešení",
    "corporate weby",
    "prezentační weby",
    "portfoliové weby",
    "business weby",
    "custom webdesign",
    "web developer",
    "webový specialista"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://yourwebsite.com/sluzby/tvorba-webu",
    languages: {
      cs: "https://yourwebsite.com/cs/sluzby/tvorba-webu",
      en: "https://yourwebsite.com/en/services/web-development",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Tvorba webů a webdesign | Le Artist",
    description:
      "Profesionální tvorba moderních webových stránek a webdesign. Specializuji se na responzivní weby, e-shopy, landing pages a webové aplikace s důrazem na UX/UI design a SEO optimalizaci.",
    url: "https://yourwebsite.com/sluzby/tvorba-webu",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-web.jpg",
        width: 1200,
        height: 630,
        alt: "Tvorba webů a webdesign - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tvorba webů a webdesign | Le Artist",
    description:
      "Profesionální tvorba moderních webových stránek, webdesign a web development. Responzivní weby, e-shopy a webové aplikace s důrazem na UX/UI.",
    images: ["https://yourwebsite.com/og-image-web.jpg"],
  },
  authors: [{ name: "Le Artist", url: "https://yourwebsite.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff6b35",
  other: {
    abstract:
      "Profesionální služby v oblasti tvorby webových stránek, webdesign a web development s důrazem na moderní design, responzivitu a SEO optimalizaci.",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    HandheldFriendly: "True",
    "web-developer": "true",
    "webdesign-specialist": "true",
    "frontend-expert": "true",
  },
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