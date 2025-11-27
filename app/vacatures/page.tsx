import React from 'react';
import { 
  Briefcase,
  MapPin,
  Clock,
  Euro,
  ArrowRight,
  Users,
  TrendingUp,
  Coffee,
  Heart,
  Award,
  Zap,
  Target
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vacatures Oldenzaal | Werken bij Riekhoff Accountants | Carrière',
  description: 'Vacatures bij Riekhoff Accountants in Oldenzaal. ✓ Fiscaal aangiftemedewerker ✓ Accountant AA ✓ Modern team ✓ Groeiende organisatie in Twente',
  openGraph: {
    title: 'Vacatures | Riekhoff Accountants Oldenzaal',
    description: 'Kom werken bij een modern accountantskantoor in Oldenzaal',
    url: 'https://www.riekhoff.nl/vacatures',
    siteName: 'Riekhoff Accountants en Adviseurs',
    locale: 'nl_NL',
    type: 'website',
  }
};

// Deze data komt later uit Supabase
const vacatures = [
  {
    id: 1,
    slug: 'fiscaal-aangiftemedewerker',
    title: 'Fiscaal aangiftemedewerker',
    department: 'Fiscale dienstverlening',
    location: 'Oldenzaal',
    hours: '24 - 40 uur',
    type: 'Parttime / Fulltime',
    salary: 'Naar ervaring',
    featured: true,
    excerpt: 'Ben jij een ervaren fiscalist die ondernemers wil helpen met hun belastingaangiftes? Versterk ons groeiende team in Oldenzaal!',
    postedDate: '2024-01-15',
    contactPerson: 'Bas Riekhoff',
    contactEmail: 'bas@riekhoff.nl',
    contactPhone: '06 303 974 66'
  },
  {
    id: 2,
    slug: 'accountant-aa',
    title: 'Accountant AA',
    department: 'Accountancy',
    location: 'Oldenzaal',
    hours: '32 - 40 uur',
    type: 'Parttime / Fulltime',
    salary: 'Marktconform',
    featured: true,
    excerpt: 'Wil jij onze samenstelpraktijk naar het volgende niveau tillen? Kom ons team versterken en bouw mee aan de groei van Riekhoff in Twente!',
    postedDate: '2024-01-10',
    contactPerson: 'Bas Riekhoff & Onno Scheuten',
    contactEmail: 'bas@riekhoff.nl',
    contactPhone: '06 303 974 66'
  }
];

export default function VacaturesPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Klein team',
      description: '12 collega\'s - iedereen kent elkaar'
    },
    {
      icon: TrendingUp,
      title: 'Groei',
      description: 'Snel groeiend kantoor sinds 2020'
    },
    {
      icon: Coffee,
      title: 'Informele sfeer',
      description: 'Open cultuur met korte lijnen'
    },
    {
      icon: Award,
      title: 'Ontwikkeling',
      description: 'Opleidingsbudget en PE-punten'
    },
    {
      icon: Zap,
      title: 'Modern',
      description: 'Nieuwste software en tools'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Echt verschil maken voor klanten'
    }
  ];

  const values = [
    {
      title: 'Klant',
      description: 'Bij Riekhoff staat de klant centraal. Door de kleinschaligheid behandelen we verzoeken snel en adequaat.'
    },
    {
      title: 'Kennis',
      description: 'Door jarenlange ervaring ben je bij ons altijd verzekerd van deskundig advies en persoonlijke aandacht.'
    },
    {
      title: 'Kwaliteit',
      description: 'Wij staan voor uitstekende dienstverlening met toegevoegde waarde voor ondernemers in Twente.'
    }
  ];

  const faq = [
    {
      question: 'Wat voor bedrijf is Riekhoff Accountants?',
      answer: 'Riekhoff is een modern accountantskantoor in Oldenzaal, opgericht in 2020. We zijn gespecialiseerd in het MKB in Twente en werken met een team van 12 professionals. Ondanks onze groei blijven we kleinschalig met persoonlijke aandacht.'
    },
    {
      question: 'Welke doorgroeimogelijkheden zijn er?',
      answer: 'Als groeiend kantoor zijn er volop ontwikkelmogelijkheden. We investeren in opleidingen (PE-punten) en stimuleren interne doorgroei. Van junior naar senior, van medewerker naar partner - alles is mogelijk bij Riekhoff in Oldenzaal.'
    },
    {
      question: 'Hoe ziet de werkcultuur eruit bij Riekhoff?',
      answer: 'Ons kantoor heeft een open sfeer waarbij professionaliteit en collegialiteit hand in hand gaan. We zijn positief-kritisch, tonen deskundigheid en werken samen als team. Informele omgang, korte lijnen en ruimte voor eigen inbreng.'
    },

  ];

  // Schema.org markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Riekhoff Accountants en Adviseurs",
    "url": "https://www.riekhoff.nl",
    "logo": "https://www.riekhoff.nl/logo.jpg",
    "description": "Modern accountantskantoor in Oldenzaal",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bentheimergraven 11",
      "addressLocality": "Oldenzaal",
      "postalCode": "7577 DA",
      "addressCountry": "NL"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.riekhoff.nl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Vacatures",
        "item": "https://www.riekhoff.nl/vacatures"
      }
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-white text-dark">
  
  {/* SUBTLE HERO */}
  <section className="relative w-full overflow-hidden h-80">
    <div className="absolute inset-0 bg-dark" />
    
    <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mr-20">
      <img
        src="team-working-vacatures.jpg"
        alt="Team Riekhoff Oldenzaal"
        className="w-full h-full object-cover object-center"
      />
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/30 lg:from-dark lg:via-dark/90 lg:to-transparent" />

    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16">
        <div className="max-w-[500px]">
          
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="/" className="hover:text-accent-yellow transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Vacatures</span>
          </div>

          <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
            WERKEN BIJ RIEKHOFF
          </p>

          <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
            Kom ons team versterken in Oldenzaal
          </h1>

        </div>
      </div>
    </div>

    <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-black/30 via-transparent to-black/30" />
  </section>

    

        {/* ACTUELE VACATURES */}
        <section id="vacatures" className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Actuele <span className="text-accent-yellow">vacatures</span>
                </h2>
                <p className="text-gray-600">
                  {vacatures.length} openstaande vacatures bij Riekhoff in Oldenzaal
                </p>
              </div>

              <div className="space-y-6">
                {vacatures.map((vacature) => (
                  <Link
                    key={vacature.id}
                    href={`/vacatures/${vacature.slug}`}
                    className="block bg-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-accent-yellow transition-all hover:shadow-lg group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {vacature.featured && (
                            <span className="bg-accent-yellow text-dark px-3 py-1 rounded-full text-xs font-semibold">
                              Uitgelicht
                            </span>
                          )}
                          <span className="text-sm text-gray-500">{vacature.department}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-yellow transition-colors">
                          {vacature.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {vacature.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {vacature.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {vacature.hours}
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {vacature.type}
                          </div>
                          <div className="flex items-center gap-2">
                            <Euro className="w-4 h-4" />
                            {vacature.salary}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-accent-yellow font-semibold group-hover:gap-3 transition-all">
                        Lees meer
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Geen passende vacature */}
              <div className="mt-12 bg-gray-50 rounded-xl p-8 border-2 border-gray-100 text-center">
                <h3 className="text-xl font-bold mb-3">Geen passende vacature gevonden?</h3>
                <p className="text-gray-600 mb-6">
                  We zijn altijd op zoek naar talent! Stuur een open sollicitatie en wie weet komt er een match.
                </p>
                <a 
                  href="mailto:bas@riekhoff.nl"
                  className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                >
                  Open sollicitatie
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ONZE WAARDEN */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Onze <span className="text-accent-yellow">kernwaarden</span>
                </h2>
                <p className="text-gray-600">
                  Bij Riekhoff staan klant, kennis en kwaliteit centraal
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, i) => (
                  <div key={i} className="bg-white rounded-xl p-8 border-2 border-gray-100 text-center">
                    <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-8 h-8 text-accent-yellow" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Veelgestelde vragen over <span className="text-accent-yellow">werken bij Riekhoff</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faq.map((item, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="font-bold pr-8">{item.question}</h3>
                      <ArrowRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

  

      </div>
    </>
  );
}