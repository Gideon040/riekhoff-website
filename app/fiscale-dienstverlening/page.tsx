import React from 'react';
import { 
  FileText,
  CheckCircle2,
  ArrowRight,
  Scale,
  TrendingUp,
  Shield,
  Mail,
  Phone,
  Clock,
  Award,
  BookOpen,
  Calculator,
  AlertCircle,
  Users,
  Building2,
  Euro
} from 'lucide-react';
import { Metadata } from 'next';

// Metadata voor SEO
export const metadata: Metadata = {
  title: 'Belastingadviseur Oldenzaal | Fiscaal Advies & Belastingaangifte | Riekhoff RB',
  description: 'Fiscaal advies en belastingaangifte in Oldenzaal door Register Belastingadviseur. ✓ IB/VPB/OB aangiftes ✓ Fiscale planning ✓ Bezwaar & beroep ✓ BTW-advies. Tel: 0541 200 007',
  keywords: 'belastingadviseur oldenzaal, fiscaal advies oldenzaal, belastingaangifte oldenzaal, register belastingadviseur twente, btw advies oldenzaal, fiscale planning',
  openGraph: {
    title: 'Belastingadviseur Oldenzaal | Fiscaal Advies Riekhoff',
    description: 'Register Belastingadviseur in Oldenzaal. Fiscaal advies, belastingaangiftes en fiscale planning voor MKB',
    url: 'https://www.riekhoff.nl/diensten/fiscale-dienstverlening',
    siteName: 'Riekhoff Accountants en Adviseurs',
    locale: 'nl_NL',
    type: 'website',
  }
};

export default function FiscaleDienstverleningPage() {
  const diensten = [
    {
      icon: FileText,
      title: 'Belastingaangifte IB/VPB/OB',
      description: 'Riekhoff verzorgt alle belastingaangiftes voor ondernemers in Oldenzaal: Inkomstenbelasting (IB) voor eenmanszaken en VOF\'s, Vennootschapsbelasting (VPB) voor BV\'s, en Omzetbelasting (OB/BTW) voor alle ondernemingsvormen in Twente.',
      features: ['IB voor ZZP\'ers en eenmanszaken', 'VPB voor BV\'s', 'Kwartaal OB-aangiftes', 'Aangifte loonheffingen']
    },
    {
      icon: TrendingUp,
      title: 'Fiscale planning & optimalisatie',
      description: 'De belastingadviseurs van Riekhoff in Oldenzaal helpen ondernemers hun belastingdruk legaal te verlagen. Wij analyseren uw situatie en adviseren over optimale rechtsvormen, pensioenopbouw en vermogensstructuur voor ondernemers in Twente.',
      features: ['Belastingdruk minimaliseren', 'Rechtsvormen optimalisatie', 'Pensioen en lijfrente advies', 'Vermogensplanning']
    },
    {
      icon: Scale,
      title: 'Bezwaar en beroep',
      description: 'Oneens met een aanslag van de Belastingdienst? Riekhoff, Register Belastingadviseur in Oldenzaal, begeleidt ondernemers bij bezwaar en beroep procedures. Wij voeren overleg met de Belastingdienst en verdedigen uw belangen.',
      features: ['Bezwaarschriften opstellen', 'Beroep bij rechtbank', 'Overleg Belastingdienst', 'Dossierbeoordeling']
    },
    {
      icon: Calculator,
      title: 'BTW-advies en aangiftes',
      description: 'BTW regelgeving is complex. Riekhoff adviseert ondernemers in Oldenzaal over BTW-verleggingsregelingen, internationale leveringen, en zorgt voor correcte en tijdige OB-aangiftes bij de Belastingdienst.',
      features: ['Maandelijkse/kwartaal OB-aangiftes', 'BTW-verlegging advies', 'ICL (Intracommunautaire Leveringen)', 'BTW teruggave buitenland']
    },
  ];

  const voordelen = [
    'Register Belastingadviseur (RB) gecertificeerd',
    'Dagelijks up-to-date met nieuwe wetgeving',
    'Proactieve fiscale optimalisatie',
    'Persoonlijk contact met vaste adviseur',
    'Reactie binnen 24 uur op vragen',
    'Jarenlange ervaring in Twente',
    'Netwerk van juridische partners',
    'Transparante tarieven'
  ];

  const proces = [
    {
      nummer: '01',
      titel: 'Intake gesprek',
      beschrijving: 'Riekhoff bespreekt jouw fiscale situatie tijdens een vrijblijvend gesprek in Oldenzaal. We inventariseren je wensen en kijken naar optimalisatiemogelijkheden.'
    },
    {
      nummer: '02',
      titel: 'Gegevens verzamelen',
      beschrijving: 'Je levert de benodigde stukken aan: administratie, contracten, overeenkomsten. Riekhoff checkt of alles compleet is voor de belastingaangifte.'
    },
    {
      nummer: '03',
      titel: 'Aangifte opstellen',
      beschrijving: 'De belastingadviseur van Riekhoff stelt de aangifte op, controleert alle posten en zoekt naar fiscale aftrekmogelijkheden voor ondernemers in Twente.'
    },
    {
      nummer: '04',
      titel: 'Controle en accordering',
      beschrijving: 'Je ontvangt de concept-aangifte ter goedkeuring. Riekhoff bespreekt opvallende punten en geeft fiscaal advies voor toekomstige optimalisatie.'
    },
    {
      nummer: '05',
      titel: 'Indienen en nazorg',
      beschrijving: 'Na jouw akkoord dient Riekhoff de aangifte digitaal in bij de Belastingdienst. We monitoren de aanslag en beantwoorden eventuele vragen vanuit de fiscus.'
    }
  ];

  const tarieven = [
    { dienst: 'Belastingaangifte eenmanszaak (IB)', prijs: 'vanaf €350,-' },
    { dienst: 'Belastingaangifte BV (VPB)', prijs: 'vanaf €750,-' },
    { dienst: 'OB-aangifte per kwartaal', prijs: 'vanaf €75,-' },
    { dienst: 'Fiscaal adviesgesprek', prijs: '€125,- per uur' },
    { dienst: 'Bezwaarschrift Belastingdienst', prijs: 'vanaf €500,-' },
    { dienst: 'Fiscale jaarplanning', prijs: 'vanaf €400,-' },
  ];

  const testimonials = [
    {
      name: 'Jan de Vries',
      company: 'Eenmanszaak Oldenzaal',
      text: 'Bas van Riekhoff heeft mijn belastingaangifte perfect geregeld. Ik kreeg zelfs €1.200 terug door slimme aftrekposten die ik zelf over het hoofd had gezien!',
      rating: 5
    },
    {
      name: 'Sandra Bos',
      company: 'BV Twente',
      text: 'Na overstap naar Riekhoff eindelijk duidelijkheid over mijn fiscale positie. Ze denken proactief mee en besparen me veel belasting. Aanrader voor ondernemers in Oldenzaal!',
      rating: 5
    },
    {
      name: 'Peter Jansen',
      company: 'VOF Losser',
      text: 'Riekhoff hielp me bij een bezwaar tegen de Belastingdienst. Professioneel, persoonlijk en resultaat: €8.000 aanslag verlaagd. Top!',
      rating: 5
    },
  ];

  const faqs = [
    {
      question: 'Wat is het verschil tussen een accountant en een belastingadviseur?',
      answer: 'Een accountant houdt zich bezig met de financiële administratie en jaarrekeningen. Een belastingadviseur is gespecialiseerd in fiscaal recht en belastingaangiftes. Bij Riekhoff in Oldenzaal hebben we beide expertises in huis. Bas Riekhoff is zowel accountant als Register Belastingadviseur (RB), waardoor je bij één kantoor in Twente terecht kunt voor alle financiële en fiscale vraagstukken.'
    },
    {
      question: 'Wat kost een belastingadviseur in Oldenzaal?',
      answer: 'De kosten voor fiscaal advies bij Riekhoff zijn afhankelijk van de dienst. Een belastingaangifte voor een eenmanszaak kost vanaf €350,-, voor een BV vanaf €750,-. Het uurtarief voor fiscaal advies is €125,-. Neem contact op met Riekhoff voor een vrijblijvende offerte op maat voor uw situatie in Oldenzaal.'
    },
    {
      question: 'Wanneer moet ik mijn belastingaangifte indienen?',
      answer: 'De deadline voor particulieren en ondernemers is 1 mei van het jaar volgend op het belastingjaar. Als je belastingaangifte door Riekhoff wordt verzorgd, krijg je automatisch uitstel tot 1 september. Voor VPB-aangiftes (BV\'s) geldt een deadline van 6 maanden na afloop van het boekjaar. Riekhoff in Oldenzaal zorgt dat alle aangiftes tijdig worden ingediend.'
    },
    {
      question: 'Kan Riekhoff ook helpen bij een fiscale controle door de Belastingdienst?',
      answer: 'Ja, Riekhoff begeleidt ondernemers in Oldenzaal en Twente bij controles door de Belastingdienst. We verzorgen het contact met de fiscus, leveren benodigde documentatie aan en verdedigen uw belangen tijdens de controle. Als Register Belastingadviseur heeft Riekhoff de expertise om uw dossier optimaal te presenteren.'
    },
    {
      question: 'Wat is fiscale planning en waarom is dat belangrijk?',
      answer: 'Fiscale planning betekent vooruitkijken en tijdig maatregelen nemen om je belastingdruk te verlagen. Riekhoff in Oldenzaal adviseert over zaken als: timing van investeringen (MIA/Vamil), optimale rechtsvormen (eenmanszaak vs BV), pensioenopbouw, en vermogensstructuur. Door jaarlijks fiscale planning te doen kunnen ondernemers in Twente duizenden euro\'s besparen.'
    },
    {
      question: 'Hoe werkt de samenwerking met Riekhoff als belastingadviseur?',
      answer: 'Na een kennismakingsgesprek in Oldenzaal wordt Bas Riekhoff jouw vaste fiscaal adviseur. Je levert jaarlijks (of vaker) je gegevens aan, Riekhoff stelt de aangifte op en bespreekt deze met je. Daarnaast kun je het hele jaar door terecht met fiscale vragen. Riekhoff denkt proactief mee en waarschuwt je voor nieuwe wetgeving die invloed heeft op je onderneming in Twente.'
    },
    {
      question: 'Kan Riekhoff ook BTW-aangiftes verzorgen?',
      answer: 'Ja, Riekhoff verzorgt kwartaal of maandelijkse OB-aangiftes (BTW) voor ondernemers in Oldenzaal en omgeving. We controleren de BTW-aangifte, zorgen voor tijdige indiening bij de Belastingdienst en adviseren over verleggingsregelingen en internationale leveringen. Voor complexe BTW-vraagstukken kun je rekenen op de expertise van Riekhoff in Twente.'
    },
    {
      question: 'Wat gebeurt er als ik het niet eens ben met de Belastingdienst?',
      answer: 'Als je het niet eens bent met een aanslag of beslissing van de Belastingdienst, kan Riekhoff bezwaar maken. We beoordelen je dossier, stellen een gemotiveerd bezwaarschrift op en voeren overleg met de Belastingdienst. Indien nodig gaan we in beroep bij de rechtbank. Riekhoff heeft jarenlange ervaring met bezwaar- en beroepsprocedures voor ondernemers in Oldenzaal.'
    },
    {
      question: 'Is Riekhoff erkend als belastingadviseur?',
      answer: 'Ja, Bas Riekhoff is ingeschreven in het Register Belastingadviseurs (RB). Dit betekent dat hij voldoet aan strikte opleidings- en ervaringseisen, zich jaarlijks bijschoolt en onder tuchtrecht valt. Als RB-gecertificeerd kantoor in Oldenzaal garandeert Riekhoff vakbekwame en betrouwbare fiscale dienstverlening voor ondernemers in Twente.'
    },
    {
      question: 'Voor welke ondernemers is Riekhoff geschikt als belastingadviseur?',
      answer: 'Riekhoff is gespecialiseerd in het MKB in Oldenzaal en Twente. We werken voor ZZP\'ers, eenmanszaken, VOF\'s, maatschappen en BV\'s. Of je nu starter bent of een gevestigd bedrijf hebt met 50 medewerkers, Riekhoff biedt fiscaal advies op maat. We bedienen alle branches: van bouw tot detailhandel, van ICT tot zorg.'
    }
  ];

  // Schema.org data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fiscale dienstverlening en belastingadvies",
    "name": "Belastingadviseur Oldenzaal - Fiscale dienstverlening Riekhoff",
    "description": "Register Belastingadviseur Riekhoff biedt fiscale dienstverlening in Oldenzaal en Twente. Belastingaangiftes (IB/VPB/OB), fiscale planning, bezwaar & beroep en BTW-advies voor MKB ondernemers.",
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
      "email": "bas@riekhoff.nl",
      "priceRange": "€€"
    },
    "areaServed": [
      { "@type": "City", "name": "Oldenzaal" },
      { "@type": "City", "name": "Losser" },
      { "@type": "City", "name": "Denekamp" },
      { "@type": "City", "name": "Enschede" },
      { "@type": "City", "name": "Hengelo" },
      { "@type": "AdministrativeArea", "name": "Twente" },
      { "@type": "AdministrativeArea", "name": "Overijssel" }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "MKB ondernemers, ZZP'ers, eenmanszaken, BV's"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "75",
      "highPrice": "750",
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
      "name": "Fiscale diensten Riekhoff Oldenzaal",
      "itemListElement": diensten.map(dienst => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": dienst.title,
          "description": dienst.description
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
        "name": "Fiscale Dienstverlening",
        "item": "https://www.riekhoff.nl/diensten/fiscale-dienstverlening"
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bas Riekhoff",
    "jobTitle": "Register Belastingadviseur & Accountant",
    "email": "bas@riekhoff.nl",
    "telephone": "+31630397466",
    "worksFor": {
      "@type": "Organization",
      "name": "Riekhoff Accountants en Adviseurs",
      "url": "https://www.riekhoff.nl"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Register Belastingadviseurs (RB)"
    }
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
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="bg-white text-dark">
        
        {/* COMPACT HERO */}
        <section className="relative w-full overflow-hidden h-96">
          {/* Background */}
          <div className="absolute inset-0 bg-dark" />

          {/* Background Image */}
          <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mr-20">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=800&fit=crop"
              alt="Belastingadviseur Riekhoff Oldenzaal"
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
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <a href="/" className="hover:text-accent-yellow transition-colors">Home</a>
                  <span>/</span>
                  <a href="/#diensten" className="hover:text-accent-yellow transition-colors">Diensten</a>
                  <span>/</span>
                  <span className="text-white">Fiscale dienstverlening</span>
                </div>

                {/* Label */}
                <p className="text-accent-yellow uppercase mb-4 text-sm font-semibold tracking-wider">
                  BELASTINGADVIES
                </p>

                {/* Main Heading */}
                <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Register Belastingadviseur in Oldenzaal
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="#contact" 
                    className="bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Gratis fiscaal gesprek
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="tel:+31630397466" 
                    className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    06 303 974 66
                  </a>
                </div>

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
                    Fiscaal advies door <span className="text-accent-yellow">Register Belastingadviseur</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    De belastingwetgeving wordt jaarlijks complexer. Voor ondernemers in Oldenzaal en Twente is het lastig 
                    om van alle wijzigingen op de hoogte te blijven. Riekhoff helpt je met fiscaal advies op maat, 
                    zodat je geen kansen misloopt en geen boetes riskeert.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Bas Riekhoff is ingeschreven in het Register Belastingadviseurs (RB) en begint elke werkdag met het 
                    bestuderen van nieuwe jurisprudentie en wetsvoorstellen. Hierdoor kunnen we ondernemers in Oldenzaal 
                    altijd voorzien van actueel fiscaal advies en proactieve planning.
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

                  {/* CTA IN INTRO */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Fiscaal advies nodig?</p>
                    <a 
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm"
                    >
                      Neem contact op
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80"
                    alt="Belastingadviseur Oldenzaal Riekhoff"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-accent-yellow rounded-2xl p-6 shadow-xl max-w-xs">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-accent-yellow" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-dark">RB</div>
                        <div className="text-sm text-dark/70">Gecertificeerd sinds 2015</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIENSTEN */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Fiscale diensten in <span className="text-accent-yellow">Oldenzaal</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Riekhoff biedt complete fiscale dienstverlening voor ondernemers in Oldenzaal en Twente. 
                  Van belastingaangiftes tot bezwaar en beroep bij de Belastingdienst.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {diensten.map((dienst, i) => {
                  const Icon = dienst.icon;
                  return (
                    <div key={i} className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                      <div className="w-14 h-14 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-accent-yellow" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{dienst.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{dienst.description}</p>
                      
                      <ul className="space-y-2">
                        {dienst.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-accent-yellow flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* CTA NA DIENSTEN */}
              <div className="mt-12 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-xl p-6 border-2 border-accent-yellow/20">
                  <div className="flex-1 text-left">
                    <p className="font-bold mb-1">Fiscale vraag?</p>
                    <p className="text-sm text-gray-600">Neem contact op met Bas Riekhoff, Register Belastingadviseur</p>
                  </div>
                  <a 
                    href="tel:+31630397466"
                    className="bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all inline-flex items-center gap-2 text-sm whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    Bel direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Zo werkt <span className="text-accent-yellow">fiscale dienstverlening</span> bij Riekhoff
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Van intake tot nazorg: Riekhoff begeleidt ondernemers in Oldenzaal stap voor stap 
                  bij hun belastingaangifte en fiscale planning.
                </p>
              </div>

              <div className="space-y-6">
                {proces.map((stap, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-accent-yellow rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-dark">{stap.nummer}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{stap.titel}</h3>
                        <p className="text-gray-600 leading-relaxed">{stap.beschrijving}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA NA PROCES */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Start vandaag nog met fiscaal advies van Riekhoff in Oldenzaal
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                >
                  Plan gratis kennismaking
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TARIEVEN */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Wat kost een <span className="text-accent-yellow">belastingadviseur</span> in Oldenzaal?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Transparante tarieven voor fiscale dienstverlening. Riekhoff werkt met vaste prijzen 
                  voor belastingaangiftes en een uurtarief voor maatwerk advies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tarieven.map((tarief, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-bold">{tarief.dienst}</h3>
                      <div className="text-accent-yellow font-bold text-2xl">
                        {tarief.prijs}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center bg-white rounded-xl p-8 border-2 border-accent-yellow/20">
                <div className="flex items-center justify-center gap-2 text-accent-yellow mb-4">
                  <Euro className="w-6 h-6" />
                  <p className="font-bold text-lg">Maatwerk tarieven</p>
                </div>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Elke fiscale situatie is uniek. Riekhoff maakt een offerte op maat voor jouw situatie in Oldenzaal. 
                  Het eerste kennismakingsgesprek is altijd vrijblijvend.
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

        {/* TESTIMONIALS */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Klanten over <span className="text-accent-yellow">Riekhoff</span> als belastingadviseur
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-8 border-2 border-gray-100">
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
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">RB Gecertificeerd</h3>
                <p className="text-gray-400 text-sm">
                  Riekhoff is ingeschreven in het Register Belastingadviseurs
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Altijd Up-to-date</h3>
                <p className="text-gray-400 text-sm">
                  Dagelijks nieuwe jurisprudentie en wetgeving bijhouden
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24 uur Respons</h3>
                <p className="text-gray-400 text-sm">
                  Snelle beantwoording van al je fiscale vragen
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lokaal in Twente</h3>
                <p className="text-gray-400 text-sm">
                  Persoonlijk kantoor in Oldenzaal voor ondernemers in de regio
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - UITGEBREID VOOR LLM! */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Veelgestelde vragen over <span className="text-accent-yellow">belastingadvies</span>
                </h2>
                <p className="text-gray-600">
                  Vragen over fiscale dienstverlening van Riekhoff in Oldenzaal? Hier vind je antwoorden 
                  op de meest gestelde vragen over belastingaangiftes en fiscaal advies.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="font-bold pr-8 text-left">{faq.question}</h3>
                      <ArrowRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>

              {/* CTA NA FAQ */}
              <div className="mt-12 text-center bg-gray-50 rounded-xl p-8 border-2 border-accent-yellow/20">
                <h3 className="text-xl font-bold mb-3">Vraag niet beantwoord?</h3>
                <p className="text-gray-600 mb-6">
                  Neem contact op met Bas Riekhoff voor een persoonlijk antwoord op jouw fiscale vraag
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="tel:+31630397466"
                    className="inline-flex items-center justify-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Bel Bas: 06 303 974 66
                  </a>
                  <a 
                    href="mailto:bas@riekhoff.nl"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Mail Bas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GROTE CTA SECTIE */}
        <section id="contact" className="py-20 lg:py-24 bg-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Belastingadviseur nodig in <span className="text-accent-yellow">Oldenzaal</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Neem contact met Riekhoff op voor fiscaal advies op maat. Register Belastingadviseur Bas Riekhoff 
                helpt ondernemers in Oldenzaal en Twente met belastingaangiftes, fiscale planning en bezwaar & beroep.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="tel:+31630397466"
                  className="bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Bel Bas: 06 303 974 66
                </a>
                <a 
                  href="tel:+31541200007"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Kantoor: 0541 200 007
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-yellow mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">Direct contact</div>
                    <a href="tel:+31630397466" className="text-gray-400 hover:text-accent-yellow transition-colors text-sm">
                      Bas: 06 303 974 66
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-yellow mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">E-mail</div>
                    <a href="mailto:bas@riekhoff.nl" className="text-gray-400 hover:text-accent-yellow transition-colors text-sm">
                      bas@riekhoff.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-yellow mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">Bereikbaar</div>
                    <div className="text-gray-400 text-sm">
                      Ma-Vr: 08:30 - 17:30
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra info */}
              <div className="mt-12 pt-12 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Riekhoff Accountants & Adviseurs | Bentheimergraven 11, Oldenzaal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}