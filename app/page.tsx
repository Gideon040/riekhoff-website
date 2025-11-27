import React from 'react';
import DienstenGrid from './components/DienstenGrid';
import RiekhoffHeader from './components/RiekhoffHeader';
import Testimonials from './components/Testimonials';
import { 
  ArrowRight, 
  Heart,
  Laptop,
  ShieldCheck,
  Mail,
  Phone,
  Check,
  MapPin,
  Clock,
  Zap,
  Building2
} from 'lucide-react';

export default function Homepage() {
  const faqs = [
    { 
      q: 'Wat kost Riekhoff accountants en adviseurs?', 
      a: 'Onze tarieven zijn transparant en afhankelijk van de specifieke dienstverlening. Wij werken indien mogelijk met vaste prijzen waardoor u niet voor verrassingen komt te staan. Onze lage overheadkosten en vergaande automatisering zorgt ervoor dat wij efficiënt kunnen werken.' 
    },
    { 
      q: 'Welke bedrijven worden door Riekhoff ontzorgt?', 
      a: 'Wij zijn gespecialiseerd in het midden- en kleinbedrijf (MKB). Onze klanten zitten door heel Nederland maar voornamelijk in de regio Twente. Wij bieden dienstverlening aan vrijwel alle sectoren, van ZZP\'ers tot aan ondernemingen met 100 medewerkers.' 
    },
    { 
      q: 'Hoe snel reageren jullie op vragen?', 
      a: 'Door de inrichting van ons bedrijf behandelen wij verzoeken snel en adequaat. Afspraken in de avonden en weekenden zijn ons niet vreemd. Wij streven naar een responstijd van 24 uur. Bij ons hoeft u niet dagen of weken te wachten op respons!' 
    },
    { 
      q: 'Waarbij is Riekhoff aangesloten?', 
      a: 'Wij zijn aangesloten bij de NBA (Nederlandse Beroepsorganisatie van accountants), de RB (register Belastingadviseurs) en de Novak (serviceorganisatie accountantskantoren).' 
    },
    { 
      q: 'Met welke software werken jullie?', 
      a: 'De visie van Riekhoff is dat wij niet werken met vaste softwarepakketten. Uw onderneming hoeft zich niet te schikken in \'onze\' software, maar wij passen ons aan naar uw software. Wij hebben uitgebreide kennis van digitalisering en automatisering. Indien nodig helpen wij u met het selecteren en implementeren van boekhoudsystemen.' 
    },
  ];

  const partners = [
    { name: 'NBA', alt: 'Nederlandse Beroepsorganisatie van Accountants', logo: 'https://mnadviseurs.nl/application/files/4115/4703/8638/logo_nba.png' },
    { name: 'Register Belastingadviseurs', alt: 'Register Belastingadviseurs', logo: 'https://www.oafinance.nl/wp-content/uploads/2020/07/Register-Belastingadviseurs-Logo.webp' },
    { name: 'Twinfield', alt: 'Twinfield Partner', logo: 'https://ac.nl/uploads/api/Twinfield-logo.png' },
    { name: 'Snelstart', alt: 'Snelstart', logo: 'https://vdstapadministratie.nl/wp-content/uploads/2017/11/Logo-Snelstart.png' },
    { name: 'Exact Online', alt: 'Exact Online', logo: 'https://i0.wp.com/www.studyspace.nl/wp-content/uploads/2021/01/Logo-Exact-Online-e1578486135684.png?ssl=1' },
    { name: 'Nmbrs', alt: 'Nmbrs Partner', logo: 'placeholder-nmbrs.jpg' },
    { name: 'Odoo', alt: 'Odoo Partner', logo: 'placeholder-odoo.jpg' },
    { name: 'SilvaSoft', alt: 'SilvaSoft Partner', logo: 'placeholder-silvasoft.jpg' },
  ];

  // Schema.org Structured Data
  const structuredData = {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "name": "Riekhoff Accountants en Adviseurs",
      "image": "https://www.riekhoff.nl/logo.jpg",
      "description": "Modern accountantskantoor in de regio Twente. Diensten: accountancy, fiscale dienstverlening, salarisadministratie en financiële dienstverlening voor MKB ondernemers.",
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
      "slogan": "Jouw accountantskantoor in de regio Twente",
      "foundingDate": "2020-01-01",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 15
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
              src="https://www.touristserver.nl/img/96840/hanzedagen.JPG"
              alt="Riekhoff Accountants Oldenzaal"
              className="w-full h-full object-cover opacity-60 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-dark/90 via-dark/80 to-dark/70 md:from-dark/70 md:via-dark/60 md:to-dark/50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 sm:py-32">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                <span className="text-accent-yellow">Riekhoff</span> accountants<br />
                en adviseurs
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 font-medium mb-6 sm:mb-8">
                Jouw accountantskantoor in de regio Twente
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a href="/contact" className="bg-accent-yellow text-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base font-semibold hover:bg-yellow-400 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 group">
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

              {/* Compacte USPs met vinkjes */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  { text: 'Opgericht in 2020' },
                  { text: '500+ tevreden klanten' },
                  { text: '15 professionals' },
                  { text: '24u responstijd' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-yellow/20 border border-accent-yellow flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-yellow" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS BANNER - Auto-scrolling */}
        <section className="bg-white border-y border-gray-200 py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Aangesloten bij & Partner van
                </p>
              </div>
              
              {/* Auto-scrolling container */}
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll">
                  {/* Eerste set logos */}
                  {partners.map((partner, i) => (
                    <div key={`first-${i}`} className="flex-shrink-0 px-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                      <img 
                        src={partner.logo} 
                        alt={partner.alt}
                        className="h-12 md:h-16 w-auto object-contain"
                        title={partner.name}
                      />
                    </div>
                  ))}
                  {/* Duplicaat voor naadloze loop */}
                  {partners.map((partner, i) => (
                    <div key={`second-${i}`} className="flex-shrink-0 px-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
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
                { value: '500+', label: 'Tevreden klanten', desc: 'MKB bedrijven in Twente' },
                { value: '15', label: 'Professionals', desc: 'Deskundige adviseurs' },
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
                    Wanneer je voor ons kiest, kies je voor hoogwaardige en persoonlijke dienstverlening. Riekhoff heeft precies de goede omvang om voldoende kennis in huis te hebben maar waarbij u géén nummertje bent. Wij voeren onze werkzaamheden met de grootste zorg voor u uit, voelen ons verbonden met onze klanten en beloven een zeer goede bereikbaarheid.
                  </p>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    Onze klantenportefeuille is divers en bestaat uit ZZP'ers tot aan ondernemingen met 100 medewerkers. Door ons uitgebreide netwerk van onafhankelijke professionals is geen vraagstuk ons te groot of te klein. Onze sterke autonome groei van de afgelopen jaren getuigd van onze goede werkwijze.
                  </p>
                </div>
                <div>
                  <img src="waarom-kiezen-riekhoff.jpg" alt="Riekhoff kantoor" className="rounded-lg shadow-xl" />
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
            <img src="kantoor-werk-riekhoff.jpg" alt="Het accountantskantoor van Riekhoff" className="w-full h-full object-cover opacity-20" />
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
                  Riekhoff accountants en adviseurs is een jong en modern accountantskantoor gevestigd te Oldenzaal. Wij zijn klein genoeg om de volle aandacht te hebben voor onze klanten en mee te denken van a tot z. Echter hebben wij voldoende omvang om alle benodigde expertises in huis te hebben.
                </p>
                
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Wij werken niet met receptionisten en officemanagers, bij ons loop je binnen op de werkvloer. Hierdoor is iedereen bij Riekhoff betrokken en blijven de overheadkosten laag. Op ons kantoor heerst een open sfeer waarbij professionaliteit en collegialiteit hand in hand gaan.
                </p>

                <p className="text-base text-gray-300 leading-relaxed mb-8">
                  Wij zijn laagdrempelig en informeel ingesteld, kom langs voor een kop koffie en maak kennis!
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

        {/* TESTIMONIALS - Imported Component */}
        <Testimonials 
          title="Wat klanten vertellen"
          showLabel={true}
          label="Reviews"
          bgColor="white"
        />

        {/* FAQ */}
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">Veelgestelde vragen</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  Vragen
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
                    Een team van <span className="text-accent-yellow">15 professionals</span>
                  </h2>
                  
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                    Bij Riekhoff werk je met een hecht team van enthousiaste collega's die allemaal een eigen expertise hebben in de accountancy, fiscaliteit en advisering. Door onze visie - niet te groot, niet te klein – stap je binnen bij een betrokken groep medewerkers.
                  </p>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    Wij geloven in persoonlijk contact en korte lijnen. Geen wisselende adviseurs, maar één team dat jouw situatie kent en met je meedenkt.
                  </p>
                  
                  <a href="/contact" className="inline-flex items-center gap-2 text-dark text-base font-semibold hover:text-accent-yellow transition-colors">
                    Maak kennis met ons →
                  </a>
                </div>
                <div>
                  <img 
                    src="team-image1.jpg" 
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