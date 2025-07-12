// app/components/StructuredData.tsx

// 1. ZÁKLADNÍ ORGANIZACE SCHEMA
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
    
    // Kontaktní informace
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
      "telephone": "+420-XXX-XXX-XXX",
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
    
    // Služby
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Služby Le Artist",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Webdesign a vývoj",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tvorba webových stránek",
                "description": "Moderní responzivní weby"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog", 
          "name": "Grafický design",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Logo design a branding",
                "description": "Vytvoření firemní identity"
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

// 2. PERSON SCHEMA (pro osobní branding)
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Le Artist",
    "givenName": "Jméno",
    "familyName": "Příjmení", 
    "jobTitle": "Graphic Designer & Web Developer",
    "description": "Profesionální grafický designér a web developer specializující se na kreativní digitální řešení",
    "url": "https://le-artist.cz",
    "image": "https://le-artist.cz/imgs/profile.jpg",
    "email": "info@le-artist.cz",
    "telephone": "+420-XXX-XXX-XXX",
    
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
      "Web Design",
      "Graphic Design",
      "Video Editing", 
      "Shoptet Development",
      "E-learning",
      "UI/UX Design",
      "Branding"
    ],
    
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Graphic Designer",
      "description": "Vytváří vizuální identity a digitální obsah pro firmy"
    },
    
    "alumniOf": "Název školy",
    "award": ["Nejlepší portfolio 2023", "Client Choice Award"],
    
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

// 3. SERVICE SCHEMA (pro jednotlivé služby)
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
      "url": "https://le-artist.cz"
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

// 4. BREADCRUMBS SCHEMA  
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

// 5. FAQ SCHEMA
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

// 6. REVIEW SCHEMA
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

// 7. CREATIVE WORK SCHEMA (pro portfolio)
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