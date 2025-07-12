import Navbar from "../../components/Navbar";
import OnlineCoursesPage from "../../components/onlinekurz1";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Kurzy - Le Artist",
  description:
    "Specializované kurzy s důrazem na praktické dovednosti. Nabízím EU-sponzorované MSVP kurzy i školení na míru pro firmy, které chtějí rozšířit dovednosti svých zaměstnanců v oblastech grafického designu, video editingu, webdesignu s AI a Shoptet e-shopů.",
  keywords: [
    "online kurzy",
    "MSVP kurzy",
    "EU sponzorované kurzy",
    "firemní školení",
    "grafický design",
    "video editing",
    "webdesign s AI",
    "Shoptet e-shop",
    "vzdělávání zaměstnanců",
    "digitální dovednosti",
    "profesionální kurzy",
    "rekvalifikace",
    "certifikované kurzy",
    "kurzy pro firmy",
    "online vzdělávání",
    "MSVP"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://yourwebsite.com/online-kurzy",
    languages: {
      cs: "https://yourwebsite.com/cs/online-kurzy",
      en: "https://yourwebsite.com/en/online-courses",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Online Kurzy - Le Artist",
    description:
      "Specializované kurzy s důrazem na praktické dovednosti. EU-sponzorované MSVP kurzy i školení na míru pro firmy v oblasti grafického designu, video editingu, webdesignu s AI a Shoptet e-shopů.",
    url: "https://yourwebsite.com/online-kurzy",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image-online-kurzy.jpg",
        width: 1200,
        height: 630,
        alt: "Online Kurzy - Le Artist",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Kurzy - Le Artist",
    description:
      "Specializované kurzy s důrazem na praktické dovednosti. Nabízím EU-sponzorované MSVP kurzy i školení na míru pro firmy v oblastech digitálních dovedností.",
    images: ["https://yourwebsite.com/og-image-online-kurzy.jpg"],
  },
  authors: [{ name: "Le Artist", url: "https://yourwebsite.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  other: {
    abstract:
      "Online kurzy pro jednotlivce a firmy. Grafický design, video editing, webdesign s AI a Shoptet e-shop, vždy s důrazem na praktické dovednosti.",
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
      <OnlineCoursesPage />
      <Footer />
    </>
  );
}