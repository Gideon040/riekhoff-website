import React from 'react';
import { 
  Calculator,
  CheckCircle2,
  ArrowRight,
  FileText,
  BarChart3,
  TrendingUp,
  Mail,
  Phone,
  Users,
  Shield,
  Clock,
  Euro
} from 'lucide-react';
import { Metadata } from 'next';

// Metadata voor SEO
export const metadata: Metadata = {
  title: 'Accountancy Oldenzaal | Professionele Jaarrekeningen & Administratie | Riekhoff',
  description: 'Accountancy diensten in Oldenzaal voor MKB ondernemers. Jaarrekeningen, administratie en financiële rapportages door NBA gecertificeerde accountants. ✓ Persoonlijk ✓ Snel',
  keywords: 'accountant oldenzaal, accountancy oldenzaal, jaarrekening oldenzaal, administratie oldenzaal, accountantskantoor twente',
  openGraph: {
    title: 'Accountancy Oldenzaal | Riekhoff Accountants',
    description: 'Professionele accountancy diensten voor MKB in Oldenzaal en Twente',
    url: 'https://www.riekhoff.nl/diensten/accountancy',
    siteName: 'Riekhoff Accountants en Adviseurs',
    locale: 'nl_NL',
    type: 'website',
  }
};

export default function AccountancyPage() {
  const features = [
    {
      icon: FileText,
      title: 'Samenstelopdrachten',
      description: 'Professionele samenstelling van jaarrekeningen conform wettelijke eisen en richtlijnen voor alle rechtsvormen in Oldenzaal en omgeving.'
    },
    {
      icon: BarChart3,
      title: 'Jaarrekeningen MKB',
      description: 'Complete jaarrekeningen voor eenmanszaken, VOF\'s, BV\'s en andere ondernemingsvormen. Riekhoff bedient ondernemers in heel Twente.'
    },
    {
      icon: TrendingUp,
      title: 'Tussentijdse rapportages',
      description: 'Periodieke financiële overzichten (maandelijks of per kwartaal) om actueel inzicht te houden in je bedrijfsresultaten.'
    },
    {
      icon: Calculator,
      title: 'Financiële analyse',
      description: 'Diepgaande analyse van je cijfers met advies voor verbetering, groei en fiscale optimalisatie door Riekhoff accountants.'
    },
  ];

  const voordelen = [
    'Altijd actueel inzicht in je financiële positie',
    'Tijdsbesparing - focus op je core business',
    'Zekerheid dat alles correct is verwerkt',
    'Persoonlijke aandacht en vaste contactpersoon',
    'Proactief advies voor fiscale optimalisatie',
    'Moderne software (Twinfield, AFAS, Exact)',
    'NBA gecertificeerde accountants',
    'Snelle service - binnen 24 uur reactie'
  ];

  const tarieven = [
    { dienst: 'Belastingaangifte eenmanszaak', prijs: 'vanaf €350,-' },
    { dienst: 'Belastingaangifte BV', prijs: 'vanaf €750,-' },
    { dienst: 'Jaarrekening samenstellen', prijs: 'vanaf €500,-' },
    { dienst: 'Maandelijkse administratie', prijs: 'vanaf €150,- p/m' },
  ];

  const testimonials = [
    {
      name: 'Jan S.',
      company: 'Eenmanszaak Oldenzaal',
      text: 'Riekhoff heeft mijn belastingaangifte perfect geregeld. Snelle service en persoonlijke aandacht!',
      rating: 5
    },
    {
      name: 'Maria K.',
      company: 'MKB Bedrijf Twente',
      text: 'Eindelijk een accountant die meedenkt. De administratie is altijd op orde en ik krijg proactief advies.',
      rating: 5
    },
    {
      name: 'Peter H.',
      company: 'BV Oldenzaal',
      text: 'Kleinschalig kantoor met de expertise van een groot bureau. Riekhoff is een aanrader!',
      rating: 5
    },
  ];

  const faqs = [
    {
      question: 'Wat is het verschil tussen een samenstelopdracht en een controle-opdracht?',
      answer: 'Bij een samenstelopdracht stelt Riekhoff de jaarrekening samen op basis van de door jou aangeleverde gegevens. Een controle-opdracht gaat verder en houdt in dat een accountant de jaarrekening controleert en een accountantsverklaring afgeeft. Voor de meeste MKB-bedrijven in Oldenzaal en Twente is een samenstelopdracht voldoende.'
    },
    {
      question: 'Hoe vaak moet ik mijn administratie aanleveren aan Riekhoff?',
      answer: 'Dit hangt af van je situatie en wensen. Wij adviseren maandelijks of per kwartaal. Hoe vaker Riekhoff de administratie verwerkt, hoe actueler jouw inzicht in de cijfers. Voor ondernemers in Oldenzaal bieden we flexibele opties.'
    },
    {
      question: 'Welke boekhoud software gebruikt Riekhoff in Oldenzaal?',
      answer: 'Riekhoff accountants werkt met diverse moderne boekhoudpakketten zoals Twinfield, AFAS en Exact Online. We kijken samen welk pakket het beste bij jouw bedrijf past en zorgen voor een soepele implementatie.'
    },
    {
      question: 'Wat krijg ik voor rapportages van mijn accountant?',
      answer: 'Je ontvangt periodiek een balans, resultatenrekening en eventueel liquiditeitsoverzicht. Riekhoff bespreekt de cijfers persoonlijk en geeft advies waar nodig voor fiscale optimalisatie.'
    },
    {
      question: 'Hoe lang duurt het opstellen van een jaarrekening bij Riekhoff?',
      answer: 'Als de administratie goed is bijgehouden en alle stukken compleet zijn, kan Riekhoff de jaarrekening binnen 2-4 weken opleveren. Dit is afhankelijk van de complexiteit van je onderneming in Oldenzaal.'
    },
  ];

  // Schema.org data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Accountancy",
    "name": "Accountancy diensten Oldenzaal",
    "description": "Professionele accountancy diensten voor MKB ondernemers in Oldenzaal en Twente. Jaarrekeningen, administratie en financiële rapportages door Riekhoff Accountants.",
    "provider": {
      "@type": "AccountingService",
      "name": "Riekhoff Accountants en Adviseurs",
      "url": "https://www.riekhoff.nl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bentheimergraven 11",
        "addressLocality": "Oldenzaal",
        "postalCode": "7577 DA",
        "addressCountry": "NL"
      },
      "telephone": "+31541200007",
      "priceRange": "€€"
    },
    "areaServed": [
      { "@type": "City", "name": "Oldenzaal" },
      { "@type": "City", "name": "Losser" },
      { "@type": "City", "name": "Denekamp" },
      { "@type": "City", "name": "Enschede" },
      { "@type": "AdministrativeArea", "name": "Twente" },
      { "@type": "AdministrativeArea", "name": "Overijssel" }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "350",
      "highPrice": "1500",
      "offers": tarieven.map(t => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": t.dienst
        },
        "description": t.prijs
      }))
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accountancy diensten Riekhoff",
      "itemListElement": features.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature.title,
          "description": feature.description
        }
      }))
    }
  };

  const faqSchema = {
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
        "name": "Diensten",
        "item": "https://www.riekhoff.nl/#diensten"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Accountancy",
        "item": "https://www.riekhoff.nl/diensten/accountancy"
      }
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

<div className="bg-white text-dark">
  
  {/* SUBTLE HERO */}
  <section className="relative w-full overflow-hidden h-80">
    {/* Background - Dark color */}
    <div className="absolute inset-0 bg-dark" />

    {/* Background Image */}
    <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mr-20">
      <img
        src="/riekhoff-werk-schermen.jpg"
        alt="Accountancy Riekhoff Oldenzaal"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/30 lg:from-dark lg:via-dark/90 lg:to-transparent" />

    {/* Content Container */}
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16">
        <div className="max-w-[500px]">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="/" className="hover:text-accent-yellow transition-colors">Home</a>
            <span>/</span>
            <a href="/#diensten" className="hover:text-accent-yellow transition-colors">Diensten</a>
            <span>/</span>
            <span className="text-white">Accountancy</span>
          </div>

          {/* Label */}
          <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
            JAARREKENINGEN
          </p>

          {/* Main Heading */}
          <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
            Accountancy voor MKB ondernemers in Oldenzaal
          </h1>

        </div>
      </div>
    </div>

    {/* Mobile: Extra dark overlay */}
    <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-black/30 via-transparent to-black/30" />
  </section>

        {/* INTRO */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Waarom een <span className="text-accent-yellow">goede administratie</span> belangrijk is
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Een goed opgezette administratie geeft je inzicht in de financiële gezondheid van je onderneming in Oldenzaal. 
                    Het helpt je bij het nemen van de juiste beslissingen en voorkomt verrassingen bij de Belastingdienst.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Bij Riekhoff accountants in Oldenzaal ontzorgen we je volledig. Wij zorgen dat je administratie altijd op orde is, 
                    zodat jij je kunt concentreren op waar je goed in bent: ondernemen in Twente.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {voordelen.map((voordeel, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                        </div>
                        <span className="text-sm text-gray-700">{voordeel}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src="/riekhoff-klantgesprek.jpg"
                    alt="Accountancy diensten Oldenzaal Riekhoff"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-accent-yellow rounded-2xl p-6 shadow-xl max-w-xs">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-accent-yellow" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-dark">100+</div>
                        <div className="text-sm text-dark/70">Klanten in Twente</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Accountancy diensten in <span className="text-accent-yellow">Oldenzaal</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Riekhoff biedt accountancy diensten voor het MKB in Oldenzaal en omgeving. 
                  We bieden een volledig pakket, van basis administratie tot uitgebreide financiële analyses.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                      <div className="w-14 h-14 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-accent-yellow" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* TARIEVEN - NIEUW! */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Wat kost accountancy bij <span className="text-accent-yellow">Riekhoff</span>?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Transparante tarieven voor ondernemers in Oldenzaal en Twente. 
                  Neem contact op voor een vrijblijvende offerte op maat.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {tarieven.map((tarief, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{tarief.dienst}</h3>
                      </div>
                      <div className="text-accent-yellow font-bold text-lg whitespace-nowrap">
                        {tarief.prijs}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-gray-500 mb-4">
                  Prijzen zijn indicatief en afhankelijk van de complexiteit van je administratie
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-dark font-semibold hover:text-accent-yellow transition-colors"
                >
                  Vraag offerte aan
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - NIEUW! */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Wat klanten van <span className="text-accent-yellow">Riekhoff</span> zeggen
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="bg-white rounded-xl p-8 border-2 border-gray-100">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <svg key={j} className="w-5 h-5 fill-accent-yellow text-accent-yellow" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">&quot;{testimonial.text}&quot;</p>
                    <div className="pt-6 border-t border-gray-200">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* USP'S BANNER */}
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">NBA Gecertificeerd</h3>
                <p className="text-gray-400 text-sm">
                  Riekhoff is aangesloten bij de Nederlandse Beroepsorganisatie van Accountants
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Snelle Service</h3>
                <p className="text-gray-400 text-sm">
                  Reactie binnen 24 uur op al je vragen
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lokaal in Oldenzaal</h3>
                <p className="text-gray-400 text-sm">
                  Vaste contactpersoon die jouw bedrijf in Twente kent
                </p>
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
                  Veelgestelde vragen over <span className="text-accent-yellow">accountancy</span>
                </h2>
                <p className="text-gray-600">
                  Vragen over accountancy diensten van Riekhoff in Oldenzaal? Bekijk de meest gestelde vragen.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="font-bold pr-8">{faq.question}</h3>
                      <ArrowRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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