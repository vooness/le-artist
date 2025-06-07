import Navbar from "../components/Navbar";
import OnlineCourses from "../components/OnlineCourses";
import Footer from "../components/Footer";
import FuturisticFAQ from "../components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Často kladené otázky - FAQ | Le Artist",
  description:
    "Najděte odpovědi na nejčastější otázky o našich službách - webové stránky, e-shopy, grafický design, video tvorba, online kurzy a interaktivní kvízy. Kompletní přehled cen, termínů realizace a procesů spolupráce.",
  keywords: [
    "FAQ",
    "často kladené otázky",
    "Le Artist otázky",
    "webové stránky cena",
    "shoptet e-shop cena",
    "grafický design cena",
    "logo cena",
    "video tvorba cena",
    "online kurzy",
    "interaktivní kvízy",
    "React.js",
    "Next.js",
    ".NET Core",
    "doba realizace",
    "proces spolupráce",
    "technická podpora",
    "údržba webů",
    "SEO optimalizace",
    "responzivní design",
    "e-learning moduly",
    "SCORM",
    "Moodle",
    "Adobe Creative Suite",
    "motion graphics",
    "video střih",
    "4K video",
    "brand identita",
    "vizuální identita",
    "tiskoviny",
    "merchandise",
    "webdesign kurzy",
    "programování kurzy",
    "grafika kurzy"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.le-artist.cz/faq",
    languages: {
      cs: "https://www.le-artist.cz/cs/faq",
      en: "https://www.le-artist.cz/en/faq",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Často kladené otázky - FAQ | Le Artist",
    description:
      "Kompletní přehled odpovědí na nejčastější otázky o našich službách. Zjistěte ceny, termíny realizace a procesy pro webové stránky, e-shopy, grafický design, video tvorbu a online kurzy.",
    url: "https://www.le-artist.cz/faq",
    siteName: "Le Artist",
    images: [
      {
        url: "https://www.le-artist.cz/og-image-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ - Často kladené otázky | Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Často kladené otázky - FAQ | Le Artist",
    description:
      "Najděte rychlé odpovědi na otázky o cenách, termínech a procesech našich služeb - od webových stránek po online kurzy a video tvorbu.",
    images: ["https://www.le-artist.cz/og-image-faq.jpg"],
  },
  authors: [
    { name: "Le Artist", url: "https://www.le-artist.cz" }
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f172a",
  other: {
    abstract:
      "Kompletní FAQ sekce s odpověďmi na otázky o webových stránkách, e-shopech, grafickém designu, video tvorbě, online kurzech a interaktivních kvízech. Ceny, termíny, procesy spolupráce.",
    distribution: "global",
    rating: "general",
    "revisit-after": "3 days",
    HandheldFriendly: "True",
  },
  category: "technology",
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