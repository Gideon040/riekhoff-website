import React from 'react';
import DienstenGrid from './components/DienstenGrid';  // ← DEZE LIJN
import RiekhoffHeader from './components/RiekhoffHeader';
import { 
  ArrowRight, 
  Heart,
  Laptop,
  ShieldCheck,
  Mail,
  Phone,
  Quote,
  Star,
  MapPin,
  Clock,
  Zap,
  Building2
} from 'lucide-react';

export default function Homepage() {
  const testimonials = [
    { name: 'Jan S.', company: 'Eenmanszaak Oldenzaal', text: 'Riekhoff heeft mijn belastingaangifte perfect geregeld en ik kreeg zelfs geld terug!', rating: 5 },
    { name: 'Maria J.', company: 'Starter Twente', text: 'Als starter kreeg ik alle begeleiding die ik nodig had. Van KvK inschrijving tot eerste jaarrekening!', rating: 5 },
    { name: 'Peter H.', company: 'MKB Bedrijf', text: 'Kleinschalig kantoor met persoonlijke aandacht. Je hebt altijd direct contact met je adviseur.', rating: 5 },
  ];

  const faqs = [
    { q: 'Wat kost een accountant in Oldenzaal?', a: 'Onze tarieven zijn transparant en afhankelijk van de dienst. Neem contact op voor een vrijblijvende offerte op maat.' },
    { q: 'Voor welke bedrijven werkt Riekhoff?', a: 'Wij zijn gespecialiseerd in het midden- en kleinbedrijf (MKB) in Oldenzaal en de rest van Twente. Van ZZP\'ers tot bedrijven met 50 medewerkers.' },
    { q: 'Hoe snel reageren jullie op vragen?', a: 'Door de kleinschaligheid van ons bedrijf behandelen wij jouw verzoeken snel en adequaat. Wij streven naar een responstijd van 24 uur.' },
    { q: 'Is Riekhoff gecertificeerd?', a: 'Ja, wij zijn aangesloten bij de NBA (Nederlandse Beroepsorganisatie van Accountants) en het Register Belastingadviseurs (RB).' },
    { q: 'Werken jullie met digitale tools?', a: 'Ja, wij werken met moderne software zoals Twinfield, AFAS en Exact Online voor optimale dienstverlening.' },
  ];

  const partners = [
    { name: 'NBA', alt: 'Nederlandse Beroepsorganisatie van Accountants', logo: 'https://via.placeholder.com/180x80/0F0F0F/F9C932?text=NBA' },
    { name: 'Register Belastingadviseurs', alt: 'Register Belastingadviseurs', logo: 'https://via.placeholder.com/180x80/0F0F0F/F9C932?text=RB' },
    { name: 'Twinfield', alt: 'Twinfield Partner', logo: 'https://via.placeholder.com/180x80/0F0F0F/F9C932?text=Twinfield' },
    { name: 'AFAS', alt: 'AFAS Software', logo: 'https://via.placeholder.com/180x80/0F0F0F/F9C932?text=AFAS' },
    { name: 'Exact Online', alt: 'Exact Online', logo: 'https://via.placeholder.com/180x80/0F0F0F/F9C932?text=Exact' },
  ];

  // Schema.org Structured Data
  const structuredData = {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "name": "Riekhoff Accountants en Adviseurs",
      "image": "https://www.riekhoff.nl/logo.jpg",
      "description": "Modern accountantskantoor in Oldenzaal gespecialiseerd in MKB. Diensten: accountancy, fiscale dienstverlening, salarisadministratie en startersbegeleiding.",
      "url": "https://www.riekhoff.nl",
      "telephone": "+31541200007",
      "email": "info@riekhoff.nl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bentheimergraven 11",
        "addressLocality": "Oldenzaal",
        "addressRegion": "Overijssel",
        "postalCode": "7577 DA",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.313406",
        "longitude": "6.929770"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "17:30"
        }
      ],
      "priceRange": "€€",
      "areaServed": [
        {
          "@type": "City",
          "name": "Oldenzaal"
        },
        {
          "@type": "City",
          "name": "Losser"
        },
        {
          "@type": "City",
          "name": "Denekamp"
        },
        {
          "@type": "City",
          "name": "Enschede"
        },
        {
          "@type": "City",
          "name": "Hengelo"
        },
        {
          "@type": "City",
          "name": "Almelo"
        },
        {
          "@type": "Region",
          "name": "Twente"
        }
      ],
      "slogan": "Klant, kennis, kwaliteit",
      "foundingDate": "2020-01-01",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 12
      }
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Riekhoff Accountants en Adviseurs",
      "url": "https://www.riekhoff.nl",
      "logo": "https://www.riekhoff.nl/logo.jpg",
      "sameAs": [
        "https://www.linkedin.com/company/riekhoffaccountants",
        "https://www.facebook.com/riekhoff"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31541200007",
        "contactType": "customer service",
        "availableLanguage": ["nl"],
        "areaServed": "NL"
      }
    },
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.riekhoff.nl"
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data - LocalBusiness */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusiness) }}
      />
      
      {/* Structured Data - Organization */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }}
      />
      
      {/* Structured Data - FAQ */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faqPage) }}
      />
      
      {/* Structured Data - Breadcrumb */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />

      <div className="bg-white text-dark">
        {/* HERO */}
        <section className="relative flex items-center bg-dark overflow-hidden" style={{minHeight: '85vh'}}>
          <div className="absolute inset-0">
            <img 
              src="https://www.plechelmus-parochie.nl/wp-content/uploads/2024/07/1000_pagina_plechelmus_basiliek_2_2024.jpg"
              alt="Riekhoff Accountants Oldenzaal"
              className="w-full h-full object-cover opacity-60 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-dark/90 via-dark/80 to-dark/70 md:from-dark/70 md:via-dark/60 md:to-dark/50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 sm:py-32">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Riekhoff<br />
                <span className="text-accent-yellow">Accountants</span><br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-normal">
                  Jouw accountancy in Oldenzaal en omstreken
                </span>
              </h1>
              
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                Bij <strong className="text-white">Riekhoff accountants en adviseurs</strong> weten we als geen ander dat ondernemen een uitdaging is. Wij willen jou graag helpen! Want wanneer het gaat om jouw financiën is het belangrijk om met betrouwbare accountants en adviseurs te werken.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <a href="#contact" className="bg-accent-yellow text-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base font-semibold hover:bg-yellow-400 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 group">
                  <Mail className="w-5 h-5" />
                  Neem contact op
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+31541200007" className="border-2 border-white/30 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span className="hidden sm:inline">Of bel direct:</span>
                  <span className="sm:hidden">Bel:</span> 0541 200 007
                </a>
              </div>

              <div className="hidden md:grid md:grid-cols-4 gap-6">
                {[
                  { value: '2020', label: 'Opgericht' },
                  { value: '100+', label: 'Klanten' },
                  { value: '12', label: 'Professionals' },
                  { value: '24u', label: 'Responstijd' },
                ].map((stat, i) => (
                  <div key={i} className="bg-dark-secondary/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-accent-yellow/30 transition-all">
                    <div className="text-3xl font-bold text-accent-yellow mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS BANNER */}
        <section className="bg-white border-y border-gray-200 py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Aangesloten bij & Partner van
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                {partners.map((partner, i) => (
                  <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img 
                      src={partner.logo} 
                      alt={partner.alt}
                      className="h-12 md:h-16 w-auto object-contain"
                      title={partner.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-left">
              <p className="text-2xl lg:text-3xl font-bold text-black leading-tight mb-6">
                Professionele accountancy, fiscaal advies en financiële dienstverlening voor <span className="text-accent-yellow">MKB ondernemers</span>
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-gray-600 text-base font-semibold hover:text-accent-yellow transition-colors group">
                Neem contact op en zie wat wij voor jou kunnen betekenen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* DIENSTEN */}
        <DienstenGrid />

        {/* STATS BANNER */}
        <section className="py-16 bg-dark-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '100+', label: 'Tevreden klanten', desc: 'MKB bedrijven in Twente' },
                { value: '12', label: 'Professionals', desc: 'Deskundige adviseurs' },
                { value: '24u', label: 'Responstijd', desc: 'Snel schakelen' },
                { value: '2020', label: 'Opgericht', desc: 'Modern & toekomstgericht' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl lg:text-5xl font-bold text-accent-yellow mb-2">{stat.value}</div>
                  <div className="text-base text-white font-bold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM RIEKHOFF */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg mb-6">
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Waarom Riekhoff</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                    Waarom kiezen voor <span className="text-accent-yellow">Riekhoff?</span>
                  </h2>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    Wanneer je voor ons kiest, kies je voor hoogwaardige dienstverlening op het gebied van accountancy en fiscaal advies. Doordat wij de werkzaamheden met de grootste zorg uitvoeren, ben jij verzekerd van het beste resultaat.
                  </p>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    Onze accountants en adviseurs leveren vakwerk voor zowel particulieren als bedrijven. Voor ons is geen opdracht te groot of te klein. Ons vakmanschap in combinatie met moderne tools, zorgen voor het beste resultaat.
                  </p>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Riekhoff kantoor" className="rounded-lg shadow-xl" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {[
                  { icon: Zap, number: '01', title: 'Snel', desc: 'Reactie binnen 24 uur op jouw vragen' },
                  { icon: Heart, number: '02', title: 'Persoonlijk', desc: 'Vaste contactpersoon die jouw situatie kent' },
                  { icon: ShieldCheck, number: '03', title: 'Deskundig', desc: 'NBA en RB gecertificeerde adviseurs' },
                  { icon: Building2, number: '04', title: 'MKB Specialist', desc: 'Gespecialiseerd in ondernemers' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-accent-yellow/10 rounded-full mb-4">
                        <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-accent-yellow" />
                      </div>
                      <div className="text-5xl lg:text-6xl font-bold text-gray-200 mb-2">{item.number}</div>
                      <h3 className="text-lg lg:text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* OVER ONS */}
        <section className="relative py-20 md:py-24 bg-dark overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6">
                  <span className="text-accent-yellow text-xs font-semibold uppercase tracking-wider">Over Riekhoff</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Modern kantoor <span className="text-accent-yellow">sinds 2020</span>
                </h2>
                
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Riekhoff accountants en adviseurs is een modern kantoor gevestigd in Oldenzaal. Door de kleinschaligheid van ons bedrijf hebben we de volle aandacht voor al onze klanten, zijn we in staat om snel te reageren op vragen en denken we altijd met je mee van a tot z.
                </p>
                
                <p className="text-base text-gray-300 leading-relaxed mb-8">
                  Op ons kantoor heerst een open sfeer waarbij professionaliteit en collegialiteit hand in hand gaan. Wij stellen ons positief-kritisch op en tonen onze deskundigheid in ieder advies.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-base font-semibold text-white mb-1">Bentheimergraven 11, 7577 DA Oldenzaal</div>
                      <div className="text-sm text-gray-400">Gemakkelijk bereikbaar met eigen parkeerplaatsen</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-base font-semibold text-white mb-1">Ma-Vr: 08:30 - 17:30 uur</div>
                      <div className="text-sm text-gray-400">Afspraken ook buiten kantooruren mogelijk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-secondary/80 backdrop-blur-sm p-6 lg:p-8 rounded-lg border border-accent-yellow/30">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Onze kernwaarden</h3>
                <div className="space-y-6">
                  {[
                    { icon: Heart, title: 'Klant', desc: 'De klant staat centraal. We leveren een essentiële bijdrage aan jouw onderneming door de juiste informatie en persoonlijke aandacht.' },
                    { icon: Laptop, title: 'Kennis', desc: 'Jarenlange ervaring en up-to-date advies. Dagelijks op de hoogte van nieuwe wetgeving en jurisprudentie.' },
                    { icon: ShieldCheck, title: 'Kwaliteit', desc: 'NBA en RB gecertificeerd. Het interpreteren van gegevens is net zo belangrijk als het optellen van bedragen.' }
                  ].map((val, i) => {
                    const Icon = val.icon;
                    return (
                      <div key={i}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-accent-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-dark" />
                          </div>
                          <h4 className="text-lg lg:text-xl font-bold text-white">{val.title}</h4>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed pl-13">{val.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg mb-6">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Reviews</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  Wat klanten <span className="text-accent-yellow">vertellen</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-gray-50 p-6 lg:p-8 rounded-lg border border-gray-200 hover:border-accent-yellow transition-all">
                    <Quote className="w-10 h-10 text-accent-yellow mb-4" />
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                      ))}
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
                    <div className="pt-6 border-t border-gray-200">
                      <div className="text-base font-bold">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">Veelgestelde vragen</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  Vragen over accountants in <span className="text-accent-yellow">Oldenzaal</span>?
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-white rounded-lg border border-gray-200 hover:border-accent-yellow transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-base lg:text-lg font-bold pr-8">{faq.q}</h3>
                      <ArrowRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-base text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg mb-6">
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Ons team</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                    Een team van <span className="text-accent-yellow">12 professionals</span>
                  </h2>
                  
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                    Bij Riekhoff werk je met een hecht team van enthousiaste collega's die allemaal expertise hebben in accountancy, fiscaliteit en advies. Door onze kleinschaligheid ken je altijd je vaste contactpersoon.
                  </p>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    Wij geloven in persoonlijk contact en korte lijnen. Geen wisselende adviseurs, maar één team dat jouw situatie kent en met je meedenkt.
                  </p>
                  
                  <a href="#contact" className="inline-flex items-center gap-2 text-dark text-base font-semibold hover:text-accent-yellow transition-colors">
                    Maak kennis met ons
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Riekhoff team" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="contact" className="py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">Contact</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Benieuwd wat wij voor je kunnen <span className="text-accent-yellow">betekenen?</span>
                </h2>
                
                <p className="text-base lg:text-lg text-gray-600">
                  Kom gerust langs voor een kop koffie en een vrijblijvend gesprek in Oldenzaal.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6">Stuur ons een bericht</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Naam *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                        placeholder="Jouw naam"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">E-mail *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                        placeholder="jouw@email.nl"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Telefoonnummer</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                        placeholder="06 12345678"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Bericht *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent resize-none"
                        placeholder="Waar kunnen we je mee helpen?"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-accent-yellow text-dark px-8 py-4 rounded-lg text-base font-semibold hover:bg-yellow-400 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Verstuur bericht
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent-yellow" />
                      <a href="tel:+31541200007" className="text-base text-gray-600 hover:text-accent-yellow transition-colors">
                        +31 (0) 541 200 007
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent-yellow" />
                      <a href="mailto:info@riekhoff.nl" className="text-base text-gray-600 hover:text-accent-yellow transition-colors">
                        info@riekhoff.nl
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent-yellow mt-1" />
                      <div className="text-base text-gray-600">
                        Bentheimergraven 11<br />
                        7577 DA Oldenzaal
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 h-full min-h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7958421573844!2d6.927699776914548!3d52.31340564682374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b812e8b8b8b8b9%3A0x0!2sBentheimergraven%2011%2C%207577%20DA%20Oldenzaal!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '600px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Riekhoff Accountants Oldenzaal Locatie"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}