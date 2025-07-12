import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MotionWrapper from "./components/MotionWrapper";
import { OrganizationSchema, PersonSchema } from "./components/StructuredData";

// Google Font
const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Le Artist - Grafické studio",
  description:
    "Le Artist nabízí komplexní služby v oblasti webdesignu, grafického designu, video editace, tvorby reklamních kampaní, odborného lektorství a úprav Shoptetu pro e-shopy. Moderní a kreativní přístup k tvorbě webů, firemní identity a marketingových materiálů pro firmy po celé České republice, včetně Ostravy a remote spolupráce.",
  keywords: [
    "le artist",
    "grafické studio",
    "webdesign ostrava",
    "grafický design",
    "video editace",
    "shoptet úpravy",
    "logo design",
    "lektorství",
    "online kurzy",
    "firemní identita",
    "branding",
    "tvorba webů",
    "e-shop design",
    "reklamní kampaně",
    "marketingové materiály",
    "ostrava grafik",
    "webdesigner ostrava",
    "česká republika"
  ],
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    title:
      "Le Artist - Profesionální webové služby, grafika, video editing, reklamy, lektorství a úpravy Shoptetu v ČR a Ostravě",
    description:
      "Komplexní řešení v oblasti webdesignu, grafiky, video editace, tvorby reklamních kampaní, lektorství a úprav Shoptetu pro e-shopy. Nabízím také odborné lektorství a workshopy pro firmy a jednotlivce po celé České republice, včetně Ostravy a remote spolupráce.",
    url: "https://le-artist.cz",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Artist - Profesionální webové služby, design a úpravy Shoptetu v Ostravě a ČR"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Le Artist - Profesionální webové služby, grafika, video editing, reklamy, lektorství a úpravy Shoptetu",
    description:
      "Moderní a komplexní řešení v oblasti webdesignu, grafiky, video editace, tvorby reklam a úprav Shoptetu pro e-shopy. Nabízím také odborné lektorství a kurzy pro firmy po celé České republice, včetně Ostravy, s možností remote spolupráce.",
    images: ["https://le-artist.cz/og-image.jpg"]
  }
};

// Root layout with Framer Motion config wrapper
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        {/* Structured Data Schema */}
        <OrganizationSchema />
        <PersonSchema />
      </head>
      <body className={cn(inter.className, "bg-gray-900")}>
        {/* MotionWrapper disables animations on mobile via Framer Motion */}
        <MotionWrapper>
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}