import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postup tvorby webu - Le Artist",
  description:
    "Osobně Vám představuji postup tvorby webových stránek od úvodní konzultace a návrhu designu až po finální implementaci. Poznejte, jak krok za krokem vytvářím moderní, responzivní a SEO optimalizované weby, přesně přizpůsobené Vašim potřebám.",
  keywords: [
    "postup tvorby webu",
    "tvorba webových stránek",
    "jak se vytváří web",
    "webdesign",
    "responzivní web",
    "moderní weby",
    "SEO optimalizace",
    "kreativní design",
    "web development",
    "návod na tvorbu webu",
    "krok za krokem tvorba webu",
    "osobní tvorba webu"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourwebsite.com/postup-tvorby-webu",
    languages: {
      cs: "https://yourwebsite.com/cs/postup-tvorby-webu",
      en: "https://yourwebsite.com/en/web-creation-process",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Postup tvorby webu - Le Artist",
    description:
      "Poznejte můj osobní postup tvorby webových stránek, kde Vám krok za krokem ukážu, jak vzniká moderní a funkční web s responzivním designem a SEO optimalizací.",
    url: "https://yourwebsite.com/postup-tvorby-webu",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-webu.jpg",
        width: 1200,
        height: 630,
        alt: "Postup tvorby webu - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postup tvorby webu - Le Artist",
    description:
      "Poznejte můj osobní postup tvorby webu. Krok za krokem Vám ukážu, jak vzniká moderní, responzivní a SEO optimalizovaný web.",
    images: ["https://yourwebsite.com/og-image-webu.jpg"],
  },
  authors: [{ name: "Le Artist", url: "https://yourwebsite.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  other: {
    abstract:
      "Osobně Vám představuji svůj postup tvorby webových stránek - od konzultace a návrhu designu až po finální realizaci moderního webu.",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    HandheldFriendly: "True",
  },
};

export default function Home() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      

      {/* Footer Component */}
      <Footer />
    </>
  );
}
