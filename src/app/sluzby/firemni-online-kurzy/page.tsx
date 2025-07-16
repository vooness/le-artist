import Navbar from "../../components/Navbar";
import OnlineCoursesPage from "../../components/onlinekurz1";
import Footer from "../../components/Footer";
import { OnlineCoursesServiceSchema, BreadcrumbSchema } from "../../components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online kurzy s AI a firemní školení | Le Artist Ostrava",
  description:
    "Profesionální online kurzy s AI zaměřením - webdesign s AI, grafický design, video editing, Shoptet programování a Photoshop kurzy. MSVP sponzorované kurzy a firemní školení zaměstnanců v Ostravě a ČR.",
  keywords: [
    // Emerging trendy AI - velmi nízká konkurence
    "AI kurzy",
    "online kurzy s AI",
    "webdesign s AI kurzy",
    "grafický design s AI",
    "AI pro designéry",
    
    // B2B firemní segment - nízká konkurence z výzkumu
    "firemní školení zaměstnanců",
    "online školení zaměstnanců",
    "firemní vzdělávací platforma",
    "vzdělávací portál pro firmy",
    "mikrolearning pro zaměstnance",
    
    // Technické specializace
    "Shoptet programování kurz",
    "Shoptet API kurz",
    "Shoptet development",
    "e-shop programování",
    
    // Tradiční kurzy s lokálním zaměřením
    "Photoshop kurz Ostrava",
    "video editing kurz",
    "grafický design kurz",
    "webdesign kurz",
    
    // MSVP a úřad práce segment
    "MSVP kurzy",
    "úřad práce kurzy",
    "rekvalifikační kurzy",
    "EU sponzorované kurzy",
    "dotované kurzy",
    
    // Vzdělávací terminologie - nízká konkurence
    "distanční vzdělávání",
    "e-learning pro firmy",
    "LMS systém",
    "online certifikace",
    "digitální dovednosti",
    
    // Long-tail fráze
    "kurzy pro nezaměstnané",
    "profesionální kurzy online",
    "vzdělávací kurzy na míru",
    "compliance školení online",
    
    // Lokální SEO
    "kurzy ostrava",
    "online vzdělávání ostrava",
    "školení moravskoslezský kraj",
    "česká republika"
  ],
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: "https://le-artist.cz/firemni-online-kurzy"
  },
  openGraph: {
    title: "Online kurzy s AI a firemní školení | Le Artist Ostrava",
    description:
      "Profesionální online kurzy s AI zaměřením - webdesign s AI, grafický design, video editing a Shoptet programování. MSVP sponzorované kurzy a firemní školení v Ostravě a ČR.",
    url: "https://le-artist.cz/firemni-online-kurzy",
    siteName: "Le Artist",
    images: [
      {
        url: "https://le-artist.cz/og-image-online-kurzy.jpg",
        width: 1200,
        height: 630,
        alt: "Online kurzy s AI a firemní školení - Le Artist Ostrava"
      }
    ],
    locale: "cs_CZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Online kurzy s AI a firemní školení | Le Artist Ostrava",
    description:
      "Profesionální online kurzy s AI - webdesign s AI, grafický design, video editing a Shoptet programování. MSVP kurzy a firemní školení zaměstnanců.",
    images: ["https://le-artist.cz/og-image-online-kurzy.jpg"]
  },
  authors: [{ name: "Le Artist", url: "https://le-artist.cz" }]
};

export default function Home() {
  // Breadcrumb navigace pro structured data
  const breadcrumbs = [
    { name: "Domov", url: "https://le-artist.cz" },
    { name: "Online kurzy", url: "https://le-artist.cz/firemni-online-kurzy" }
  ];

  return (
    <>
      {/* Structured Data pro online kurzy službu */}
      <OnlineCoursesServiceSchema />
      
      {/* Breadcrumb structured data */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      <Navbar />
      <OnlineCoursesPage />
      <Footer />
    </>
  );
}