import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title:
      "Le Artist - Profesionální webové služby, grafika, video editing, reklamy, lektorství a úpravy Shoptetu v České republice (včetně Ostravy)",
    description:
      "Le Artist nabízí komplexní služby v oblasti webdesignu, grafického designu, video editace, tvorby reklamních kampaní, odborného lektorství a úprav Shoptetu pro e-shopy. Moderní a kreativní přístup k tvorbě webů, firemní identity a marketingových materiálů pro firmy po celé České republice, včetně Ostravy a remote spolupráce.",
    keywords: [
      "webové služby",
      "webdesign Česká republika",
      "webdesign Ostrava",
      "grafický design",
      "grafika",
      "grafika Ostrava",
      "branding",
      "branding Ostrava",
      "video editing",
      "video editace",
      "video produkce",
      "video Ostrava",
      "reklamní videa",
      "reklamní kampaně",
      "reklama Ostrava",
      "lektorství",
      "kurzy designu",
      "kurzy webdesignu",
      "workshopy",
      "UX/UI design",
      "UX design",
      "UI design",
      "SEO optimalizace",
      "moderní web",
      "firemní identita",
      "logo design",
      "digitální marketing",
      "web development",
      "tvorba webových stránek",
      "digitální reklama",
      "marketingová strategie",
      "tvorba vizuální identity",
      "inovativní design",
      "design školení",
      "reklamní strategie",
      "firemní branding",
      "remote práce",
      "práce na dálku",
      "design online",
      "úprava Shoptetu",
      "Shoptet úpravy",
      "Shoptet modifikace"
    ],
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title:
        "Le Artist - Profesionální webové služby, grafika, video editing, reklamy, lektorství a úpravy Shoptetu v ČR a Ostravě",
      description:
        "Komplexní řešení v oblasti webdesignu, grafiky, video editace, tvorby reklamních kampaní, lektorství a úprav Shoptetu pro e-shopy. Nabízím také odborné lektorství a workshopy pro firmy a jednotlivce po celé České republice, včetně Ostravy a remote spolupráce.",
      url: "https://yourwebsite.com",
      siteName: "Le Artist",
      images: [
        {
          url: "https://yourwebsite.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Le Artist - Profesionální webové služby, design a úpravy Shoptetu v Ostravě a ČR",
        },
      ],
      locale: "cs_CZ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Le Artist - Profesionální webové služby, grafika, video editing, reklamy, lektorství a úpravy Shoptetu",
      description:
        "Moderní a komplexní řešení v oblasti webdesignu, grafiky, video editace, tvorby reklam a úprav Shoptetu pro e-shopy. Nabízím také odborné lektorství a kurzy pro firmy po celé České republice, včetně Ostravy, s možností remote spolupráce.",
      images: ["https://yourwebsite.com/og-image.jpg"],
    },
  };
}