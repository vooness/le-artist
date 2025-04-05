import Navbar from "../components/Navbar";
import OnlineCourses from "../components/OnlineCourses";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lektorské kurzy a vzdělávání - Le Artist",
  description:
    "Nabízím vzdělávací kurzy financované z Evropského sociálního fondu se zaměřením na webdesign, grafiku a střih videa. Kurzy jsou určené pro zaměstnané, OSVČ i nezaměstnané (20 % nákladů hradí účastník). Získejte moderní dovednosti v oblasti tvorby webů, grafiky a video editace.",
  keywords: [
    "lektor",
    "lektorství",
    "lektorské kurzy",
    "vzdělávací kurzy",
    "kurzy webdesignu",
    "kurzy grafiky",
    "kurzy střihu videa",
    "Evropský sociální fond",
    "ESF",
    "kurzy zdarma",
    "kurzy pro zaměstnané",
    "kurzy pro OSVČ",
    "kurzy pro nezaměstnané",
    "profesní vzdělávání",
    "moderní dovednosti",
    "webdesign",
    "grafika",
    "video editing",
    "motion design",
    "Adobe Photoshop",
    "AI tools",
    "branding",
    "animace",
    "kreativní videa",
    "marketing",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourwebsite.com/lektor",
    languages: {
      cs: "https://yourwebsite.com/cs/lektor",
      en: "https://yourwebsite.com/en/lecturer",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Lektorské kurzy a vzdělávání - Le Artist",
    description:
      "Nabízím vzdělávací kurzy financované ESF se zaměřením na webdesign, grafiku a video editaci. Využijte příležitost získat moderní dovednosti, ať už jste zaměstnaní, OSVČ či nezaměstnaní.",
    url: "https://yourwebsite.com/lektor",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-lektor.jpg",
        width: 1200,
        height: 630,
        alt: "Lektorské kurzy - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lektorské kurzy a vzdělávání - Le Artist",
    description:
      "Nabízím vzdělávací kurzy financované z Evropského sociálního fondu pro všechny, kdo chtějí rozvíjet své dovednosti v oblasti webdesignu, grafiky a střihu videa.",
    images: ["https://yourwebsite.com/og-image-lektor.jpg"],
  },
  authors: [
    { name: "Le Artist", url: "https://yourwebsite.com" }
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  other: {
    abstract:
      "Vzdělávací kurzy a lektorství pro webdesign, grafiku a střih videa, financované z ESF. Kurzy jsou určené pro všechny zájemce z řad zaměstnaných, OSVČ i nezaměstnaných.",
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

      {/* Online Courses Component */}
      <OnlineCourses />

      {/* Footer Component */}
      <Footer />
    </>
  );
}
