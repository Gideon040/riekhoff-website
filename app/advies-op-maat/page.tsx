import React from 'react';
import { 
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  Users,
  Building2,
  Calculator,
  Clock,
  TrendingUp,
  Euro,
  Target,
  Shield,
  Sparkles,
  Briefcase,
  MessageSquare,
  FileCheck,
  HandshakeIcon,
  PieChart
} from 'lucide-react';

export default function AdviesOpMaat() {
  // Data voor de pagina
  const adviesgebieden = [
    {
      icon: TrendingUp,
      title: 'Strategisch bedrijfsadvies',
      description: 'Riekhoff adviseert ondernemers in Oldenzaal over groei, reorganisatie en strategische keuzes. Met kennis van de Twentse markt helpen we u de juiste beslissingen te nemen voor uw toekomst.',
      features: ['Groeistrategie ontwikkelen', 'Reorganisatie begeleiding', 'Marktanalyse Twente', 'Scenarioplanning'],
      populair: true
    },
    {
      icon: HandshakeIcon,
      title: 'Overname & verkoop',
      description: 'Bij het kopen of verkopen van een bedrijf in Twente begeleidt het team van Riekhoff het complete traject. Van waardering tot due diligence, we zorgen voor een succesvolle transactie.',
      features: ['Bedrijfswaardering', 'Due diligence onderzoek', 'Onderhandelingsbegeleiding', 'Financiering regelen']
    },
    {
      icon: Shield,
      title: 'Risicomanagement',
      description: 'Identificeer en beheers risico\'s in uw onderneming. Riekhoff analyseert financiële, fiscale en operationele risico\'s voor MKB-bedrijven in Oldenzaal en stelt beheersmaatregelen op.',
      features: ['Risicoanalyse', 'Interne controle opzetten', 'Verzekeringen optimaliseren', 'Continuïteitsplanning']
    },
    {
      icon: PieChart,
      title: 'Vermogensplanning',
      description: 'Persoonlijke vermogensplanning voor ondernemers in Oldenzaal. Van pensioenopbouw tot vermogensoverdracht, Riekhoff adviseert over de fiscaal meest gunstige oplossingen.',
      features: ['Pensioenadvies', 'Estate planning', 'Vermogensoverdracht', 'Fiscale optimalisatie']
    }
  ];

  const adviesvormen = [
    {
      titel: 'Quick Scan',
      omschrijving: 'Snelle analyse van een specifiek vraagstuk met direct advies',
      doorlooptijd: '1 week',
      prijs: 'vanaf €500,-'
    },
    {
      titel: 'Adviesrapport',
      omschrijving: 'Uitgebreid onderzoek met schriftelijk advies en aanbevelingen',
      doorlooptijd: '2-3 weken',
      prijs: 'vanaf €1.500,-'
    },
    {
      titel: 'Begeleiding',
      omschrijving: 'Continue advisering en begeleiding bij implementatie',
      doorlooptijd: 'Op maat',
      prijs: 'uurtarief €125,-'
    },
    {
      titel: 'Second opinion',
      omschrijving: 'Onafhankelijke beoordeling van bestaand advies of situatie',
      doorlooptijd: '1-2 weken',
      prijs: 'vanaf €750,-'
    }
  ];

  const specialisaties = [
    'Horeca & retail in Oldenzaal',
    'Productie & industrie Twente',
    'Bouw & vastgoed',
    'Zakelijke dienstverlening',
    'Zorg & welzijn',
    'Transport & logistiek',
    'IT & technologie',
    'Agrarische sector'
  ];

  const voordelen = [
    'Maatwerk voor elke situatie',
    'Kennis van lokale markt',
    'Multidisciplinair team',
    'Snelle schakeling',
    'Pragmatisch advies',
    'Implementatie support',
    'Netwerk in Twente',
    'Resultaatgericht'
  ];

  const faqs = [
    {
      question: 'Wat kost advies op maat bij Riekhoff?',
      answer: 'Advies op maat bij Riekhoff in Oldenzaal kost vanaf €500,- voor een quick scan. Een uitgebreid adviesrapport kost vanaf €1.500,- en continue begeleiding gebeurt op basis van een uurtarief van €125,-. We maken altijd eerst een vrijblijvende offerte op maat voor ondernemers in Twente, zodat u precies weet waar u aan toe bent.'
    },
    {
      question: 'Voor welke vraagstukken kan ik terecht bij Riekhoff?',
      answer: 'U kunt bij Riekhoff terecht voor alle bedrijfseconomische en fiscale vraagstukken. Denk aan groeistrategie, reorganisatie, bedrijfsovername, risicomanagement, vermogensplanning, investeringsbeslissingen, kostprijsberekeningen of conflictbemiddeling. Het team in Oldenzaal heeft ervaring met diverse branches in Twente en kan snel schakelen bij complexe situaties.'
    },
    {
      question: 'Hoe snel kan Riekhoff advies leveren?',
      answer: 'De snelheid hangt af van de complexiteit. Een quick scan voor ondernemers in Oldenzaal leveren we binnen een week. Voor urgente situaties kunnen we vaak binnen 24-48 uur een eerste advies geven. Een uitgebreid adviesrapport duurt 2-3 weken. Bij crisissituaties schakelt het team direct en zijn we dezelfde dag nog beschikbaar.'
    },
    {
      question: 'Heeft Riekhoff ervaring met mijn branche?',
      answer: 'Riekhoff heeft sinds 2020 ervaring opgebouwd met diverse branches in Twente: horeca, retail, productie, bouw, zorg, transport en zakelijke dienstverlening. We kennen de specifieke uitdagingen per sector in Oldenzaal. Is uw branche niet genoemd? Neem contact op, waarschijnlijk hebben we ook daar ervaring mee of kunnen we ons snel inlezen.'
    },
    {
      question: 'Kan ik ook alleen een second opinion vragen?',
      answer: 'Ja, Riekhoff geeft regelmatig second opinions voor ondernemers in Oldenzaal die zekerheid willen over een advies of beslissing. We beoordelen onafhankelijk uw situatie, bestaande adviezen of voorgenomen plannen. Een second opinion kost vanaf €750,- en wordt binnen 1-2 weken geleverd. Dit geeft u de zekerheid dat u de juiste keuze maakt.'
    },
    {
      question: 'Helpt Riekhoff ook bij de uitvoering van het advies?',
      answer: 'Absoluut. Advies is pas waardevol als het ook uitgevoerd wordt. Riekhoff begeleidt ondernemers in Twente bij de implementatie van adviezen. We helpen met projectmanagement, onderhandelingen, gesprekken met banken, het aansturen van andere adviseurs en het monitoren van resultaten. Deze begeleiding gebeurt op uurbasis of projectbasis.'
    },
    {
      question: 'Werkt Riekhoff samen met andere adviseurs?',
      answer: 'Ja, Riekhoff heeft een sterk netwerk in Oldenzaal en Twente. We werken samen met notarissen, advocaten, bankiers, makelaars en andere specialisten. Als uw vraagstuk expertise vereist die wij niet in huis hebben, schakelen we de juiste partners in. We coördineren het proces, zodat u één aanspreekpunt houdt.'
    },
    {
      question: 'Wat is het verschil tussen regulier advies en advies op maat?',
      answer: 'Regulier advies bij Riekhoff gaat over standaard fiscale en financiële vraagstukken die onderdeel zijn van onze vaste dienstverlening. Advies op maat is voor complexe, strategische of unieke situaties die diepgaand onderzoek en een specifieke aanpak vereisen. Denk aan bedrijfsovername, crisissituaties of strategische heroriëntatie voor ondernemers in Oldenzaal.'
    },
    {
      question: 'Kan ik vrijblijvend sparren over mijn plannen?',
      answer: 'Ja, het eerste gesprek is altijd vrijblijvend. Kom langs op ons kantoor in Oldenzaal voor een kop koffie en vertel over uw plannen of uitdagingen. We denken graag mee en geven eerlijk aan of en hoe we kunnen helpen. Pas als u besluit om verder te gaan, maken we een offerte voor het vervolgtraject.'
    },
    {
      question: 'Is advies op maat ook beschikbaar voor kleine ondernemers?',
      answer: 'Zeker! Advies op maat is niet alleen voor grote bedrijven. Ook ZZP\'ers en kleine ondernemers in Oldenzaal hebben soms behoefte aan specialistisch advies. We passen onze aanpak en tarieven aan op uw situatie. Een quick scan of kort adviestraject kan al zeer waardevol zijn voor kleinere ondernemingen in Twente.'
    }
  ];

  // Schema.org Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bedrijfsadvies op maat",
    "name": "Advies op Maat Oldenzaal",
    "description": "Riekhoff biedt maatwerk bedrijfsadvies voor ondernemers in Oldenzaal en Twente. Van strategisch advies tot bedrijfsovername begeleiding. Persoonlijk advies vanaf €500.",
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
      "email": "info@riekhoff.nl"
    },
    "areaServed": [
      {"@type": "City", "name": "Oldenzaal"},
      {"@type": "City", "name": "Losser"},
      {"@type": "City", "name": "Denekamp"},
      {"@type": "City", "name": "Enschede"},
      {"@type": "City", "name": "Hengelo"},
      {"@type": "City", "name": "Almelo"},
      {"@type": "AdministrativeArea", "name": "Twente"},
      {"@type": "AdministrativeArea", "name": "Overijssel"}
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "500",
      "highPrice": "5000"
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
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.riekhoff.nl"},
      {"@type": "ListItem", "position": 2, "name": "Diensten", "item": "https://www.riekhoff.nl/diensten"},
      {"@type": "ListItem", "position": 3, "name": "Advies op maat", "item": "https://www.riekhoff.nl/diensten/advies-op-maat"}
    ]
  };

  return (
    <>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-white text-dark">
        
        {/* COMPACT HERO */}
        <section className="relative w-full overflow-hidden h-96">
          <div className="absolute inset-0 bg-dark" />
          <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mr-20">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1600&h=800&fit=crop"
              alt="Advies op maat Oldenzaal"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/30 lg:from-dark lg:via-dark/90 lg:to-transparent" />
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16">
              <div className="max-w-[500px]">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <a href="/" className="hover:text-accent-yellow transition-colors">Home</a>
                  <span>/</span>
                  <a href="/#diensten" className="hover:text-accent-yellow transition-colors">Diensten</a>
                  <span>/</span>
                  <span className="text-white">Advies op maat</span>
                </div>
                
                <p className="text-accent-yellow uppercase mb-4 text-sm font-semibold tracking-wider">
                  MAATWERK BEDRIJFSADVIES
                </p>
                
                <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Advies op maat voor ondernemers in Oldenzaal
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#aanvraag" className="bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all inline-flex items-center justify-center gap-2 text-sm">
                    Vraag advies aan
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="tel:+31541200007" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    0541 200 007
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO WITH LARGE STATEMENT */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 mb-16">
                <div className="lg:col-span-2">
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Elke situatie vraagt om
                    <span className="block mt-2 text-accent-yellow">specifiek advies</span>
                  </h2>
                </div>
                <div className="lg:col-span-1 lg:mt-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Riekhoff Accountants biedt persoonlijk bedrijfsadvies voor complexe vraagstukken. 
                    Met kennis van de Twentse markt en een pragmatische aanpak.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Als ondernemer in Oldenzaal staat u regelmatig voor belangrijke beslissingen. 
                    Moet u investeren of consolideren? Reorganiseren of uitbreiden? Een bedrijf overnemen 
                    of juist verkopen? Bij deze strategische keuzes heeft u behoefte aan onafhankelijk, 
                    deskundig advies.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Riekhoff biedt advies op maat voor elke unieke situatie. We duiken diep in uw vraagstuk, 
                    analyseren de mogelijkheden en komen met praktische oplossingen. Geen standaard rapporten, 
                    maar persoonlijk advies dat past bij uw onderneming in Twente.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {voordelen.map((voordeel, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                        </div>
                        <span className="text-sm text-gray-700">{voordeel}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Direct sparren over uw vraagstuk?</p>
                    <a href="#aanvraag" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                      Plan adviesgesprek
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=400&h=500&q=80"
                      alt="Maatwerk advies Riekhoff Oldenzaal"
                      className="rounded-2xl shadow-xl w-full h-auto"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-accent-yellow rounded-xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-8 h-8 text-dark" />
                        <div>
                          <div className="text-xl font-bold text-dark">100+</div>
                          <div className="text-xs text-dark/70">Adviezen in 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADVIESGEBIEDEN - Modern visual design like Startersbegeleiding */}
        <section className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
          {/* Subtle gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-yellow/8 via-transparent to-accent-yellow/8" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-yellow/12 blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6 inline-block">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
                    Expertise gebieden
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Advies voor elke <span className="text-accent-yellow">uitdaging</span>
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Van strategisch advies tot crisissituaties. Riekhoff heeft de expertise 
                  voor complexe vraagstukken van MKB-ondernemers in Oldenzaal en Twente.
                </p>
              </div>

              {/* Asymmetric grid with visual cards - Same style as Startersbegeleiding */}
              <div className="grid lg:grid-cols-12 gap-6">
                {/* Row 1 - Large card left, medium right */}
                <div className="lg:col-span-7">
                  <a href="#aanvraag" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
                        alt="Strategisch bedrijfsadvies"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <TrendingUp className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow group-hover:bg-accent-yellow group-hover:text-dark transition-all duration-500">
                        Meest gevraagd
                      </div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl mb-3">Strategisch bedrijfsadvies</h3>
                      <p className="text-gray-300 mb-4 max-w-lg">
                        Groeien, reorganiseren of consolideren? Riekhoff adviseert ondernemers in Oldenzaal 
                        over strategische keuzes met impact op de toekomst.
                      </p>
                      <ul className="space-y-2 mb-4">
                        {['Groeistrategie', 'Reorganisatie', 'Marktanalyse Twente'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                            <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Vraag advies aan
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:col-span-5">
                  <a href="#aanvraag" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=500&fit=crop"
                        alt="Bedrijfsovername"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <HandshakeIcon className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Complex traject
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Overname & verkoop</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Begeleiding bij koop of verkoop van bedrijven in Twente. Van waardering tot deal.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Bedrijfswaardering', 'Due diligence', 'Deal structurering'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Meer info
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Row 2 - Medium cards */}
                <div className="lg:col-span-6">
                  <a href="#aanvraag" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                        alt="Risicomanagement"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Shield className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Preventief
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Risicomanagement</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Identificeer en beheers risico's voordat ze problemen worden. Voor MKB in Oldenzaal.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Risicoanalyse', 'Interne controle', 'Continuïteitsplan'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Vraag scan aan
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:col-span-6">
                  <a href="#aanvraag" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
                        alt="Vermogensplanning"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <PieChart className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Persoonlijk
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Vermogensplanning</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Persoonlijke vermogensplanning voor ondernemers. Pensioen, overdracht en fiscaal.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Pensioenadvies', 'Estate planning', 'Fiscale optimalisatie'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Plan gesprek
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-xl p-6 border-2 border-accent-yellow/20">
                  <div className="flex-1 text-left">
                    <p className="font-bold mb-1">Maatwerk advies nodig?</p>
                    <p className="text-sm text-gray-600">Eerste gesprek is altijd vrijblijvend bij Riekhoff in Oldenzaal</p>
                  </div>
                  <a href="tel:+31541200007" className="bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all inline-flex items-center gap-2 text-sm whitespace-nowrap">
                    <Phone className="w-4 h-4" />
                    Bel direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USP'S BANNER - Same style as Startersbegeleiding */}
        <section className="py-16 bg-dark-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">100+ adviezen</h3>
                  <p className="text-gray-400 text-sm">
                    Ervaring met complexe vraagstukken
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-accent-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">24 uur</h3>
                  <p className="text-gray-400 text-sm">
                    Reactie bij urgente situaties
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Multidisciplinair</h3>
                  <p className="text-gray-400 text-sm">
                    Team met diverse expertise
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Onafhankelijk</h3>
                  <p className="text-gray-400 text-sm">
                    Objectief advies voor Twente
                  </p>
                </div>
              </div>

              {/* Branches onderaan */}
              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-gray-400 text-sm text-center mb-4">Ervaring met diverse branches in Twente:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {specialisaties.map((branche, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs">
                      {branche}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADVIESVORMEN - Visual pricing cards instead of process */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6 inline-block">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
                    Adviesvormen
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  De juiste <span className="text-accent-yellow">aanpak</span> voor uw situatie
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Van quick scan tot uitgebreid onderzoek. Riekhoff biedt verschillende 
                  vormen van advies, afhankelijk van uw behoefte en urgentie.
                </p>
              </div>

              {/* Visual pricing cards grid - same style as Startersbegeleiding */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Quick Scan */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-dark font-bold text-xl mb-2">Quick Scan</h3>
                    <p className="text-gray-600 text-sm">Snelle analyse, direct advies</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-dark">
                      <span className="text-4xl font-bold">€500</span>
                      <span className="text-lg">,-</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">vanaf prijs</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['1 week doorlooptijd', 'Analyse specifiek vraagstuk', 'Direct toepasbaar advies', 'Beknopt rapport'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#aanvraag" className="block w-full text-center border-2 border-dark text-dark py-3 rounded-lg font-semibold hover:bg-dark hover:text-white transition-all">
                    Vraag aan
                  </a>
                </div>

                {/* Adviesrapport - Featured */}
                <div className="group relative bg-gradient-to-br from-dark to-dark-secondary rounded-2xl p-8 border-2 border-transparent hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute top-4 right-4">
                    <div className="bg-accent-yellow text-dark px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Populair
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">Adviesrapport</h3>
                    <p className="text-gray-400 text-sm">Uitgebreid onderzoek & advies</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-accent-yellow">
                      <span className="text-4xl font-bold">€1.500</span>
                      <span className="text-lg">,-</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">vanaf prijs</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['2-3 weken doorlooptijd', 'Diepgaand onderzoek', 'Schriftelijk adviesrapport', 'Presentatie resultaten'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#aanvraag" className="block w-full text-center bg-accent-yellow text-dark py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                    Start traject
                  </a>
                </div>

                {/* Continue begeleiding */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-dark font-bold text-xl mb-2">Continue begeleiding</h3>
                    <p className="text-gray-600 text-sm">Implementatie & support</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-dark">
                      <span className="text-4xl font-bold">€125</span>
                      <span className="text-lg">/uur</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">uurtarief</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['Flexibele inzet', 'Implementatie support', 'Periodiek overleg', 'Directe bereikbaarheid'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#aanvraag" className="block w-full text-center border-2 border-dark text-dark py-3 rounded-lg font-semibold hover:bg-dark hover:text-white transition-all">
                    Meer info
                  </a>
                </div>

                {/* Second opinion */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-dark font-bold text-xl mb-2">Second opinion</h3>
                    <p className="text-gray-600 text-sm">Onafhankelijke beoordeling</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-dark">
                      <span className="text-4xl font-bold">€750</span>
                      <span className="text-lg">,-</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">vanaf prijs</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['1-2 weken doorlooptijd', 'Objectieve analyse', 'Vergelijking alternatieven', 'Helder advies'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#aanvraag" className="block w-full text-center border-2 border-dark text-dark py-3 rounded-lg font-semibold hover:bg-dark hover:text-white transition-all">
                    Vraag aan
                  </a>
                </div>

                {/* Crisissituatie */}
                <div className="group relative bg-gradient-to-br from-dark to-dark-secondary rounded-2xl p-8 border-2 border-transparent hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Urgent
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">Crisissituatie</h3>
                    <p className="text-gray-400 text-sm">Direct ingrijpen nodig</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-accent-yellow">
                      <span className="text-3xl font-bold">Op aanvraag</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">maatwerk tarief</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['Binnen 24 uur', 'Crisisteam beschikbaar', 'Direct actieplan', 'Intensieve begeleiding'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="tel:+31541200007" className="block w-full text-center bg-accent-yellow text-dark py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                    Bel direct
                  </a>
                </div>

                {/* Strategietraject */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Compleet
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-dark font-bold text-xl mb-2">Strategietraject</h3>
                    <p className="text-gray-600 text-sm">Toekomstplan ontwikkelen</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-dark">
                      <span className="text-4xl font-bold">€5.000</span>
                      <span className="text-lg">,-</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">vanaf prijs</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['6-8 weken traject', 'Strategiesessies', 'Volledig businessplan', 'Implementatieplan'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#aanvraag" className="block w-full text-center border-2 border-dark text-dark py-3 rounded-lg font-semibold hover:bg-dark hover:text-white transition-all">
                    Meer info
                  </a>
                </div>
              </div>

              {/* Maatwerk CTA */}
              <div className="bg-gradient-to-r from-accent-yellow/20 via-accent-yellow/10 to-accent-yellow/20 rounded-2xl p-8 border-2 border-accent-yellow/30">
                <div className="flex items-center justify-center gap-2 text-accent-yellow mb-4">
                  <MessageSquare className="w-6 h-6" />
                  <p className="font-bold text-lg">Maatwerk voor elke situatie</p>
                </div>
                <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
                  Elk bedrijf is uniek. Daarom maken we altijd een offerte op maat. 
                  Het eerste gesprek is gratis en vrijblijvend.
                </p>
                <div className="text-center">
                  <a href="#aanvraag" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-secondary transition-all">
                    Bespreek uw situatie
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AANVRAAG SECTIE - Prominenter dan bij andere pagina's */}
        <section id="aanvraag" className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6 inline-block">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
                    Advies aanvragen
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Hoe vraagt u <span className="text-accent-yellow">advies op maat</span> aan?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  In 3 simpele stappen naar het juiste advies voor uw onderneming
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-dark">1</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Contact opnemen</h3>
                  <p className="text-gray-600">
                    Bel of mail ons voor een vrijblijvend gesprek over uw vraagstuk
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-dark">2</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Offerte op maat</h3>
                  <p className="text-gray-600">
                    We maken een voorstel met aanpak, doorlooptijd en investering
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-dark">3</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3">Direct aan de slag</h3>
                  <p className="text-gray-600">
                    Na akkoord starten we direct met het onderzoek en advies
                  </p>
                </div>
              </div>

              {/* Contact opties */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                  <Phone className="w-8 h-8 text-accent-yellow mb-4" />
                  <h3 className="font-bold mb-2">Bel direct</h3>
                  <p className="text-gray-600 text-sm mb-4">Voor urgente situaties direct contact</p>
                  <a href="tel:+31541200007" className="text-accent-yellow font-semibold hover:text-dark transition-colors">
                    0541 200 007
                  </a>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                  <Mail className="w-8 h-8 text-accent-yellow mb-4" />
                  <h3 className="font-bold mb-2">Mail uw vraag</h3>
                  <p className="text-gray-600 text-sm mb-4">We reageren binnen 24 uur</p>
                  <a href="mailto:info@riekhoff.nl" className="text-accent-yellow font-semibold hover:text-dark transition-colors">
                    info@riekhoff.nl
                  </a>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                  <MessageSquare className="w-8 h-8 text-accent-yellow mb-4" />
                  <h3 className="font-bold mb-2">Plan een gesprek</h3>
                  <p className="text-gray-600 text-sm mb-4">Vrijblijvend sparren op kantoor</p>
                  <a href="#contact" className="text-accent-yellow font-semibold hover:text-dark transition-colors">
                    Maak afspraak →
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center p-8 bg-accent-yellow/10 rounded-2xl border-2 border-accent-yellow/30">
                <Sparkles className="w-8 h-8 text-accent-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Eerste gesprek altijd gratis</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We luisteren naar uw situatie, denken mee en geven eerlijk aan of en hoe we kunnen helpen. 
                  Pas daarna besluit u of u verder wilt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="py-24 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&h=800&fit=crop"
              alt="Oldenzaal kantoren"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <blockquote className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                  "Elk bedrijf is uniek. Daarom leveren we geen standaard rapporten, maar persoonlijk advies dat écht werkt."
                </blockquote>
                <cite className="block">
                  <p className="text-accent-yellow text-xl font-semibold mb-1">Onno Scheuten</p>
                  <p className="text-gray-400">Senior Adviseur & Mede-eigenaar</p>
                </cite>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">100+ adviezen per jaar</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Van quick scans tot complexe reorganisaties. Riekhoff heeft ervaring met 
                    alle vormen van bedrijfsadvies voor MKB in Twente.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Altijd praktisch toepasbaar</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Geen theoretische modellen maar concrete actiepunten. Advies dat ondernemers 
                    in Oldenzaal direct kunnen toepassen in hun bedrijf.
                  </p>
                </div>
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
                  Veelgestelde vragen over <span className="text-accent-yellow">advies op maat</span>
                </h2>
                <p className="text-gray-600">
                  Alles wat ondernemers in Oldenzaal willen weten over maatwerk bedrijfsadvies
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="font-bold pr-8 text-left">{faq.question}</h3>
                      <ChevronRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-12 text-center bg-gray-50 rounded-xl p-8 border-2 border-accent-yellow/20">
                <h3 className="text-xl font-bold mb-3">Specifieke vraag over uw situatie?</h3>
                <p className="text-gray-600 mb-6">
                  Bespreek uw unieke situatie met Riekhoff. Het eerste gesprek is gratis.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+31541200007" className="inline-flex items-center justify-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                    <Phone className="w-4 h-4" />
                    Bel: 0541 200 007
                  </a>
                  <a href="mailto:info@riekhoff.nl" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm">
                    <Mail className="w-4 h-4" />
                    Mail ons
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Heeft u advies nodig voor uw bedrijf in <span className="text-accent-yellow">Oldenzaal</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Neem vandaag nog contact op met Riekhoff voor een vrijblijvend gesprek. 
                We denken graag mee over de beste oplossing voor uw situatie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="tel:+31541200007" className="bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Bel direct: 0541 200 007
                </a>
                <a href="mailto:info@riekhoff.nl" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Mail: info@riekhoff.nl
                </a>
              </div>

              <div className="pt-12 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>Riekhoff Accountants & Adviseurs | Bentheimergraven 11, 7577 DA Oldenzaal | Advies voor heel Twente</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}