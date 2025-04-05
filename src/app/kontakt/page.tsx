import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontaktujte mě - Le Artist",
  description:
    "Máte dotazy ohledně mých služeb v oblasti webdesignu, grafiky, video editace, reklam, lektorství a úprav Shoptetu? Kontaktujte mě a já Vám rád pomohu s profesionálním řešením, přizpůsobeným Vašim potřebám.",
  keywords: [
    "kontakt",
    "kontaktujte mě",
    "webdesign",
    "grafika",
    "video editing",
    "video editace",
    "reklamy",
    "lektorství",
    "úpravy Shoptetu",
    "osobní služby",
    "remote služby",
    "profesionální služby"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourwebsite.com/kontakt",
    languages: {
      cs: "https://yourwebsite.com/cs/kontakt",
      en: "https://yourwebsite.com/en/contact",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Kontaktujte mě - Le Artist",
    description:
      "Máte dotazy ohledně mých služeb? Kontaktujte mě pro profesionální webdesign, grafiku, video editaci, reklamy, lektorství a úpravy Shoptetu. Jsem zde, abych Vám pomohl.",
    url: "https://yourwebsite.com/kontakt",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-kontakt.jpg",
        width: 1200,
        height: 630,
        alt: "Kontaktujte mě - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontaktujte mě - Le Artist",
    description:
      "Kontaktujte mě pro profesionální řešení v oblasti webdesignu, grafiky, video editace, reklam, lektorství a úprav Shoptetu.",
    images: ["https://yourwebsite.com/og-image-kontakt.jpg"],
  },
  authors: [
    { name: "Le Artist", url: "https://yourwebsite.com" }
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  other: {
    abstract:
      "Kontaktujte mě osobně pro profesionální služby v oblasti webdesignu, grafiky, video editace, reklam, lektorství a úprav Shoptetu.",
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

      {/* Contact Form Component */}
      <ContactForm />

      {/* Footer Component */}
      <Footer />
    </>
  );
}
