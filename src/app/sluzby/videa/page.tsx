import Navbar from "../../components/Navbar";
import VideoServicesPage from "../../components/videa";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tvorba krátkých reklam a videí | Le Artist",
  description:
    "Specializuji se na tvorbu krátkých reklamních videí, video editaci a video marketing. Vytvářím engaging obsah pro sociální sítě, YouTube, reklamy a prezentace s profesionálním přístupem a kreativním zpracováním.",
  keywords: [
    "tvorba videí",
    "krátká videa",
    "reklamní videa",
    "video editace",
    "video editing",
    "tvorba reklam",
    "video marketing",
    "reklamní spoty",
    "sociální média videa",
    "YouTube videa",
    "instagram reels",
    "tiktok videa",
    "facebook videa",
    "video obsah",
    "motion graphics",
    "animovaná videa",
    "prezentační videa",
    "produktová videa",
    "video produkce",
    "střih videí",
    "video post-produkce",
    "video specialist",
    "video creator",
    "digital video",
    "online video",
    "video content creator"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://yourwebsite.com/sluzby/tvorba-videi",
    languages: {
      cs: "https://yourwebsite.com/cs/sluzby/tvorba-videi",
      en: "https://yourwebsite.com/en/services/video-creation",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Tvorba krátkých reklam a videí | Le Artist",
    description:
      "Profesionální tvorba krátkých reklamních videí a video editace. Specializuji se na engaging video obsah pro sociální sítě, YouTube, reklamy a prezentace. Kreativní řešení pro váš video marketing.",
    url: "https://yourwebsite.com/sluzby/tvorba-videi",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-video.jpg",
        width: 1200,
        height: 630,
        alt: "Tvorba videí a reklam - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tvorba krátkých reklam a videí | Le Artist",
    description:
      "Profesionální tvorba krátkých reklamních videí, video editace a video marketing. Engaging obsah pro sociální sítě a online kampaně.",
    images: ["https://yourwebsite.com/og-image-video.jpg"],
  },
  authors: [{ name: "Le Artist", url: "https://yourwebsite.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff6b35",
  other: {
    abstract:
      "Profesionální služby v oblasti tvorby krátkých reklamních videí, video editace a video marketingu pro sociální sítě a online kampaně.",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    HandheldFriendly: "True",
    "video-specialist": "true",
    "content-creator": "true",
    "video-marketing-expert": "true",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <VideoServicesPage />
      <Footer />
    </>
  );
}