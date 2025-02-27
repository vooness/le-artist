import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Le Artist - Webové Služby, Grafika & Branding, Video Editing v Ostravě",
  description:
    "Profesionální tvorba moderních webových stránek, e-shopů, firemní identity a reklamních videí. Zajistím responzivní design, SEO optimalizaci a kreativní grafiku pro firmy v Ostravě a okolí.",
  keywords: [
    "Webové služby",
    "Webové stránky Ostrava",
    "Grafika",
    "Branding",
    "Video Editing",
    "Reklamní videa",
    "E-shop",
    "Ostrava",
    "Web design",
    "UX/UI",
    "SEO",
    "Firemní identita",
    "Logo",
    "Grafika a branding",
    "Krátké reklamy",
    "Moderní web",
    "Tvorba webu",
    "Video střih",
  ],
  openGraph: {
    title:
      "Le Artist - Profesionální webové služby, grafika & video editing v Ostravě",
    description:
      "Profesionální tvorba webů, firemní grafiky a reklamních videí. Nabízím komplexní řešení od designu až po vývoj pro firmy v Ostravě a okolí.",
    url: "https://yourwebsite.com",
    siteName: "Le Artist",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Artist - Profesionální služby",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Le Artist - Profesionální webové služby, grafika & video editing",
    description:
      "Moderní tvorba webů, grafiky a reklamních videí pro firmy v Ostravě.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
