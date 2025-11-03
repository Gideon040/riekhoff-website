// components/schema/OrganizationSchema.tsx
import Script from 'next/script';

interface Partner {
  name: string;
  url?: string;
  logo?: string;
}

interface OrganizationSchemaProps {
  partners?: Partner[];
}

export function OrganizationSchema({ partners = [] }: OrganizationSchemaProps) {
  if (partners.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Partners en klanten",
    "itemListElement": partners.map((partner, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Organization",
        "name": partner.name,
        ...(partner.url && { "url": partner.url }),
        ...(partner.logo && { "logo": partner.logo })
      }
    }))
  };

  return (
    <Script
      id="partners-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}