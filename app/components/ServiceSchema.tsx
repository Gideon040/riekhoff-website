// components/schema/ServiceSchema.tsx
import Script from 'next/script';

interface ServiceSchemaProps {
  name: string;
  serviceType: string;
  description: string;
  providerName: string;
  providerUrl: string;
  areaServed: string | string[];
  audience?: string;
  price?: number;
  priceCurrency?: string;
  priceDescription?: string;
  features?: string[];
}

export function ServiceSchema({
  name,
  serviceType,
  description,
  providerName,
  providerUrl,
  areaServed,
  audience,
  price,
  priceCurrency = "EUR",
  priceDescription,
  features = []
}: ServiceSchemaProps) {
  const areas = Array.isArray(areaServed) ? areaServed : [areaServed];
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": name,
    "description": description,
    "provider": {
      "@type": "AccountingService",
      "name": providerName,
      "url": providerUrl
    },
    "areaServed": areas.map(area => ({
      "@type": "City",
      "name": area
    })),
    ...(audience && {
      "audience": {
        "@type": "Audience",
        "audienceType": audience
      }
    }),
    ...(price && {
      "offers": {
        "@type": "Offer",
        "priceCurrency": priceCurrency,
        "price": price.toString(),
        ...(priceDescription && { "description": priceDescription })
      }
    }),
    ...(features.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceType} diensten`,
        "itemListElement": features.map(feature => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature
          }
        }))
      }
    })
  };

  return (
    <Script
      id={`service-schema-${serviceType.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}