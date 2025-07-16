// app/components/StructuredData.tsx

// 1. ZÁKLADNÍ ORGANIZACE SCHEMA (aktualizované s telefonním číslem)
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Le Artist",
    "alternateName": "Le Artist - Grafické studio",
    "url": "https://le-artist.cz",
    "logo": "https://le-artist.cz/imgs/logo.png",
    "image": "https://le-artist.cz/imgs/banner5.svg",
    "description": "Profesionální grafické studio v Ostravě specializující se na webdesign, grafiku, video editing, Shoptet e-shopy a online kurzy.",
    "slogan": "Kreativní řešení pro váš digitální úspěch",
    
    // Kontaktní informace s vaším telefonním číslem
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ostrava",
      "addressRegion": "Moravskoslezský kraj",
      "addressCountry": "CZ",
      "postalCode": "700 00"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.8346",
      "longitude": "18.2820"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+420-605-707-036",
      "email": "info@le-artist.cz",
      "availableLanguage": ["Czech", "English"],
      "areaServed": "CZ"
    },
    
    // Sociální sítě
    "sameAs": [
      "https://facebook.com/leartist",
      "https://instagram.com/leartist", 
      "https://linkedin.com/company/leartist",
      "https://youtube.com/@leartist"
    ],
    
    // Zakladatel/majitel
    "founder": {
      "@type": "Person",
      "name": "Le Artist",
      "jobTitle": "Graphic Designer & Web Developer",
      "description": "Profesionální grafický designér a web developer s více než 10 lety zkušeností"
    },
    
    // Služby - rozšířené podle SEO výzkumu
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Služby Le Artist",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Webové řešení",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Responzivní webové stránky na míru",
                "description": "Moderní webové řešení pro malé firmy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI webové stránky",
                "description": "Webové stránky s umělou inteligencí"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog", 
          "name": "Grafické řešení",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brandmanuál a logo design",
                "description": "Kompletní vizuální identita"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog", 
          "name": "Shoptet služby",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shoptet customizace",
                "description": "Shoptet specialista pro API integrace"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog", 
          "name": "Video služby",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Firemní video na klíč",
                "description": "Video postprodukce a tvorba"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog", 
          "name": "Online vzdělávání",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Online kurzy s AI",
                "description": "Firemní školení a MSVP kurzy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Interaktivní kvízy",
                "description": "H5P cvičení pro školy a firmy"
              }
            }
          ]
        }
      ]
    },
    
    "areaServed": ["Czech Republic", "Slovakia"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "49.8346",
        "longitude": "18.2820"
      },
      "geoRadius": "100000"
    },
    
    // Hodnocení
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    "priceRange": "€€",
    "currenciesAccepted": "CZK, EUR",
    "paymentAccepted": "Bankovní převod, PayPal",
    "openingHours": "Mo-Fr 09:00-18:00"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 2. PERSON SCHEMA (aktualizované s telefonním číslem)
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Le Artist",
    "jobTitle": "Graphic Designer & Web Developer",
    "description": "Profesionální grafický designér a web developer specializující se na kreativní digitální řešení",
    "url": "https://le-artist.cz",
    "image": "https://le-artist.cz/imgs/profile.jpg",
    "email": "info@le-artist.cz",
    "telephone": "+420-605-707-036",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ostrava",
      "addressRegion": "Moravskoslezský kraj",
      "addressCountry": "CZ"
    },
    
    "worksFor": {
      "@type": "Organization",
      "name": "Le Artist"
    },
    
    "knowsAbout": [
      "Webové řešení",
      "Grafické řešení",
      "Video postprodukce", 
      "Shoptet customizace",
      "Online kurzy s AI",
      "Interaktivní kvízy",
      "Brandmanuál"
    ],
    
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Graphic Designer & Web Developer",
      "description": "Vytváří webové řešení, vizuální identity a digitální obsah pro firmy"
    },
    
    "sameAs": [
      "https://linkedin.com/in/leartist",
      "https://behance.net/leartist",
      "https://dribbble.com/leartist"
    ]
  }

  return (
    <script
      type="application/ld+json"  
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// 3. KONKRÉTNÍ SLUŽBY SCHEMAS

// Webové řešení
export function WebDesignServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Webové řešení a responzivní webové stránky na míru",
    "description": "Profesionální webové řešení pro malé firmy s administrací a SEO optimalizací",
    "serviceType": "Web Development",
    "url": "https://le-artist.cz/sluzby/tvorba-webu",
    
    "provider": {
      "@type": "Organization",
      "name": "Le Artist",
      "url": "https://le-artist.cz",
      "telephone": "+420-605-707-036"
    },
    
    "areaServed": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    
    "offers": {
      "@type": "Offer",
      "name": "Webové stránky na míru",
      "description": "Responzivní weby s administrací od 15 000 Kč",
      "price": "15000",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock"
    },
    
    "category": "Web Development",
    "keywords": ["webové řešení", "responzivní webové stránky", "levné webové stránky", "AI webové stránky"],
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Small Business"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Grafické řešení
export function GraphicDesignServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Grafické řešení a brandmanuály",
    "description": "Profesionální grafické služby, brandmanuály a logo design pro firmy",
    "serviceType": "Graphic Design",
    "url": "https://le-artist.cz/sluzby/graficky-design",
    
    "provider": {
      "@type": "Organization",
      "name": "Le Artist",
      "url": "https://le-artist.cz",
      "telephone": "+420-605-707-036"
    },
    
    "offers": {
      "@type": "Offer",
      "name": "Brandmanuál a logo design",
      "description": "Kompletní vizuální identita od 8 000 Kč",
      "price": "8000",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock"
    },
    
    "category": "Creative Services",
    "keywords": ["grafické řešení", "brandmanuál", "logo manuál", "designové služby"],
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Business"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Shoptet služby
export function ShoptetServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shoptet specialista a customizace",
    "description": "Shoptet API integrace, customizace a úpravy šablon od profesionálního specialisty",
    "serviceType": "E-commerce Development",
    "url": "https://le-artist.cz/sluzby/shoptet-eshop",
    
    "provider": {
      "@type": "Organization",
      "name": "Le Artist",
      "url": "https://le-artist.cz",
      "telephone": "+420-605-707-036"
    },
    
    "offers": {
      "@type": "Offer",
      "name": "Shoptet customizace",
      "description": "Shoptet API integrace a úpravy od 12 000 Kč",
      "price": "12000",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock"
    },
    
    "category": "E-commerce",
    "keywords": ["shoptet specialista", "shoptet customizace", "shoptet api integrace", "shoptet migrace"],
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "E-commerce Business"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Video služby
export function VideoServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Firemní video na klíč a video postprodukce",
    "description": "Profesionální video tvorba, postprodukce, color grading a vertical video pro firmy",
    "serviceType": "Video Production",
    "url": "https://le-artist.cz/sluzby/video-tvorba",
    
    "provider": {
      "@type": "Organization",
      "name": "Le Artist",
      "url": "https://le-artist.cz",
      "telephone": "+420-605-707-036"
    },
    
    "offers": {
      "@type": "Offer",
      "name": "Firemní video na klíč",
      "description": "Video postprodukce a tvorba od 10 000 Kč",
      "price": "10000",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock"
    },
    
    "category": "Video Production",
    "keywords": ["firemní video na klíč", "video postprodukce", "video color grading", "vertical video tvorba"],
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Corporate"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Online kurzy
export function OnlineCoursesServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Online kurzy s AI a firemní školení",
    "description": "Profesionální online kurzy s AI, firemní školení zaměstnanců a MSVP sponzorované kurzy",
    "serviceType": "Education",
    "url": "https://le-artist.cz/online-kurzy",
    
    "provider": {
      "@type": "Organization",
      "name": "Le Artist",
      "url": "https://le-artist.cz",
      "telephone": "+420-605-707-036"
    },
    
    "offers": {
      "@type": "Offer",
      "name": "Online kurzy s AI",
      "description": "Firemní školení a AI kurzy od 5 000 Kč",
      "price": "5000",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock"
    },
    
    "category": "Education",
    "keywords": ["AI kurzy", "firemní školení zaměstnanců", "online kurzy s AI", "MSVP kurzy"],
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Corporate Training"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Interaktivní kvízy
export function InteractiveQuizServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interaktivní kvízy a H5P cvičení",
    "description": "Profesionální tvorba interaktivních kvízů, H5P cvičení a vzdělávacích platforem",
    "serviceType": "Educational Technology",
    "url": "https://le-artist.cz/sluzby/interaktivni-kviz",
    
    "provider": {
      "@type": "Organization",
      "name": "Le Artist",
      "url": "https://le-artist.cz",
      "telephone": "+420-605-707-036"
    },
    
    "offers": {
      "@type": "Offer",
      "name": "Interaktivní kvízy",
      "description": "H5P cvičení a firemní kvízy od 3 000 Kč",
      "price": "3000",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock"
    },
    
    "category": "Educational Technology",
    "keywords": ["interaktivní kvízy", "H5P cvičení", "firemní kvízy", "kvíz builder"],
    "audience": {
      "@type": "Audience",
      "audienceType": "Educational Institutions"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ s vašimi službami
export function MainFAQSchema() {
  const faqs = [
    {
      question: "Kolik stojí webové stránky?",
      answer: "Webové stránky začínají od 15 000 Kč pro základní responzivní web. Finální cena závisí na funkcionalitě a designu. Kontaktujte mě na +420-605-707-036 pro cenovou nabídku."
    },
    {
      question: "Kolik stojí logo design?",
      answer: "Logo design včetně brandmanuálu stojí od 8 000 Kč. Cena zahrnuje několik návrhů, revize a finální soubory ve všech formátech."
    },
    {
      question: "Kolik stojí Shoptet customizace?",
      answer: "Shoptet customizace a API integrace začíná od 12 000 Kč. Jako Shoptet specialista nabízím úpravy šablon, migrace a optimalizace."
    },
    {
      question: "Kolik stojí firemní video?",
      answer: "Firemní video na klíč včetně postprodukce stojí od 10 000 Kč. Nabízím video tvorbu, color grading a vertical video pro sociální sítě."
    },
    {
      question: "Nabízíte online kurzy?",
      answer: "Ano, nabízím online kurzy s AI zaměřením od 5 000 Kč. Specializuji se na firemní školení, MSVP kurzy a interaktivní kvízy."
    }
  ]

  return <FAQSchema faqs={faqs} />
}

// Vaše původní komponenty (jen aktualizované)
export function ServiceSchema({ 
  serviceName, 
  description, 
  serviceType, 
  url,
  price 
}: {
  serviceName: string
  description: string  
  serviceType: string
  url: string
  price?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "serviceType": serviceType,
    "url": url,
    
    "provider": {
      "@type": "Organization",
      "name": "Le Artist",
      "url": "https://le-artist.cz",
      "telephone": "+420-605-707-036"
    },
    
    "areaServed": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} - Katalog služeb`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName
          },
          "price": price || "Na vyžádání",
          "priceCurrency": "CZK",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    
    "category": "Creative Services",
    "brand": "Le Artist",
    "audience": {
      "@type": "Audience",
      "audienceType": "Business"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ breadcrumbs }: { 
  breadcrumbs: Array<{ name: string; url: string }> 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { 
  faqs: Array<{ question: string; answer: string }> 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ReviewSchema({ reviews }: { 
  reviews: Array<{
    author: string
    rating: number
    reviewBody: string
    datePublished: string
  }> 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Le Artist",
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function CreativeWorkSchema({ 
  project 
}: { 
  project: {
    title: string
    description: string
    image: string
    dateCreated: string
    category: string
    client?: string
  }
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "dateCreated": project.dateCreated,
    "genre": project.category,
    
    "creator": {
      "@type": "Organization", 
      "name": "Le Artist",
      "url": "https://le-artist.cz"
    },
    
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Le Artist"
    },
    
    "client": project.client ? {
      "@type": "Organization",
      "name": project.client
    } : undefined,
    
    "keywords": [project.category, "design", "graphics", "creative"],
    "inLanguage": "cs"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}