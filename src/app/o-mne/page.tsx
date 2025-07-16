import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyTrustMeSection from "../components/WhyTrustMe";
import type { Metadata } from "next";
import SkillSection from "../components/SkillSection";
import WhyTrustMe from "../components/WhyTrustMe";

export const metadata: Metadata = {
  title: "O mně - Le Artist | Webdesigner a vývojář z Ostravy",
  description:
    "Jsem kreativní webdesigner a vývojář z Ostravy specializující se na moderní weby, grafický design a tvorbu videí. Přetvářím vize v digitální realitu pomocí React.js, Next.js a moderních technologií. Každý projekt začíná bezplatnou konzultací.",
  keywords: [
    "webdesigner Ostrava",
    "vývojář React.js",
    "grafický design",
    "tvorba videí",
    "Le Artist",
    "webové stránky",
    "React.js vývojář",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Shoptet",
    ".NET Core",
    "moderní webdesign",
    "responzivní design",
    "UX/UI design",
    "freelancer Ostrava",
    "digitální design",
    "frontend vývojář",
    "webový vývojář",
    "kreativní řešení",
    "profesionální weby",
    "bezplatná konzultace",
    "Shiba Inu",
    "Akita Inu",
    "Moravskoslezský kraj"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourwebsite.com/o-mne",
    languages: {
      cs: "https://yourwebsite.com/cs/o-mne",
      en: "https://yourwebsite.com/en/about",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "O mně - Le Artist | Kreativní webdesigner z Ostravy",
    description:
      "Poznajte mě blíže! Jsem vášnivý webdesigner a vývojář z Ostravy, který přetvářím digitální vize v realitu. Specializuji se na React.js, moderní design a tvorbu videí. Inspirují mě moji tři psi a každý projekt řeším s osobním přístupem.",
    url: "https://yourwebsite.com/o-mne",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/imgs/logo4.svg",
        width: 1200,
        height: 630,
        alt: "Le Artist - Osobní profil webdesignera z Ostravy",
      },
    ],
    locale: "cs_CZ",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "O mně - Le Artist | Webdesigner z Ostravy",
    description:
      "Poznajte kreativního webdesignera z Ostravy! Specializuji se na React.js, moderní webdesign a tvorbu videí. Každý projekt řeším s osobním přístupem a vášní pro detail.",
    images: ["https://yourwebsite.com/imgs/logo4.svg"],
  },
  authors: [
    { name: "Le Artist", url: "https://yourwebsite.com" }
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f97316", // Orange color matching the design
  other: {
    abstract:
      "Osobní profil kreativního webdesignera a vývojáře Le Artist z Ostravy. Specializace na React.js, Next.js, grafický design a tvorbu videí s osobním přístupem ke každému projektu.",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    HandheldFriendly: "True",
    "geo.region": "CZ-80",
    "geo.placename": "Ostrava",
    "geo.position": "49.8175;18.2464",
    ICBM: "49.8175, 18.2464",
  },
};

export default function About() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      
      <SkillSection />
      <WhyTrustMe />
      
      {/* Footer Component */}
      <Footer />
    </>
  );
}