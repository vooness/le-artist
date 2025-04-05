import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import Portfolio2 from "../components/Portfolio2";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moje portfolio - Le Artist",
  description:
    "Prohlédněte si mé portfolio, kde osobně prezentuji své projekty z oblasti webdesignu, grafiky, video editace a úprav Shoptetu. Každý projekt odráží můj kreativní a profesionální přístup k tvorbě moderních webů a vizuálních řešení.",
  keywords: [
    "portfolio",
    "moje portfolio",
    "projekty",
    "webdesign",
    "grafika",
    "video editace",
    "úpravy Shoptetu",
    "osobní projekty",
    "kreativní práce",
    "moderní weby",
    "vizuální design",
    "branding"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourwebsite.com/portfolio",
    languages: {
      cs: "https://yourwebsite.com/cs/portfolio",
      en: "https://yourwebsite.com/en/portfolio",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Moje portfolio - Le Artist",
    description:
      "Prohlédněte si mé portfolio, kde osobně prezentuji projekty z oblasti webdesignu, grafiky, video editace a úprav Shoptetu. Každý projekt je důkazem mé kreativity a profesionálního přístupu.",
    url: "https://yourwebsite.com/portfolio",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Moje portfolio - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moje portfolio - Le Artist",
    description:
      "Prohlédněte si mé portfolio, kde osobně prezentuji projekty z webdesignu, grafiky, video editace a úprav Shoptetu. Kreativní a profesionální přístup ke každému projektu.",
    images: ["https://yourwebsite.com/og-image-portfolio.jpg"],
  },
  authors: [
    { name: "Le Artist", url: "https://yourwebsite.com" }
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  other: {
    abstract:
      "Osobně prezentuji své projekty z oblasti webdesignu, grafiky, video editace a úprav Shoptetu. Moje portfolio je ukázkou mé kreativity a profesionálního přístupu.",
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

      {/* Projects Section */}
      <ProjectsSection />

      {/* Portfolio2 Section */}
      <Portfolio2 />

      {/* Footer Component */}
      <Footer />
    </>
  );
}
