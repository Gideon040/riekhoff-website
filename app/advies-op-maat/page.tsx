import React from 'react';
import Testimonials from '../components/Testimonials';
import { 
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  Users,
  Clock,
  TrendingUp,
  Target,
  Shield,
  Sparkles,
  MessageSquare,
  HandshakeIcon,
  PieChart
} from 'lucide-react';

export default function AdviesOpMaat() {
  const adviesvormen = [
    {
      titel: 'Quick Scan',
      omschrijving: 'Snelle analyse van een specifiek vraagstuk met direct advies',
      timing: 'Snel',
      features: ['Korte doorlooptijd', 'Analyse specifiek vraagstuk', 'Direct toepasbaar advies', 'Beknopt rapport']
    },
    {
      titel: 'Adviesrapport',
      omschrijving: 'Uitgebreid onderzoek met schriftelijk advies en aanbevelingen',
      timing: 'Uitgebreid',
      features: ['Diepgaand onderzoek', 'Schriftelijk adviesrapport', 'Presentatie resultaten', 'Implementatie advies'],
      populair: true
    },
    {
      titel: 'Continue begeleiding',
      omschrijving: 'Continue advisering en begeleiding bij implementatie',
      timing: 'Doorlopend',
      features: ['Flexibele inzet', 'Implementatie support', 'Periodiek overleg', 'Directe bereikbaarheid']
    },
    {
      titel: 'Second opinion',
      omschrijving: 'Onafhankelijke beoordeling van bestaand advies of situatie',
      timing: 'Op aanvraag',
      features: ['Objectieve analyse', 'Onafhankelijk advies', 'Vergelijking alternatieven', 'Helder second opinion']
    },
    {
      titel: 'Crisissituatie',
      omschrijving: 'Direct ingrijpen bij urgente situaties',
      timing: 'Direct',
      features: ['Spoedaanpak', 'Crisisteam beschikbaar', 'Direct actieplan', 'Intensieve begeleiding'],
      urgent: true
    },
    {
      titel: 'Strategietraject',
      omschrijving: 'Compleet traject voor toekomstplanning',
      timing: 'Intensief',
      features: ['Compleet traject', 'Strategiesessies', 'Volledig businessplan', 'Implementatieplan'],
      compleet: true
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
      answer: 'De kosten voor advies op maat zijn afhankelijk van diverse factoren zoals de complexiteit van het vraagstuk, de benodigde doorlooptijd, en de gewenste diepgang van het onderzoek. Omdat iedere situatie uniek is, maken wij altijd eerst een vrijblijvende offerte op maat. In een eerste gesprek bespreken we uw uitdaging en geven we aan welke aanpak passend is. Pas daarna ontvangt u een duidelijk voorstel met investering, zodat u precies weet waar u aan toe bent.'
    },
    {
      question: 'Voor welke vraagstukken kan ik terecht bij Riekhoff?',
      answer: 'U kunt bij Riekhoff terecht voor alle bedrijfseconomische en fiscale vraagstukken. Denk aan groeistrategie, reorganisatie, bedrijfsovername, risicomanagement, vermogensplanning, investeringsbeslissingen, kostprijsberekeningen of conflictbemiddeling. Het team in Oldenzaal heeft ervaring met diverse branches in Twente en kan snel schakelen bij complexe situaties.'
    },
    {
      question: 'Hoe snel kan Riekhoff advies leveren?',
      answer: 'De snelheid hangt af van de complexiteit en urgentie. Voor urgente situaties kunnen we vaak snel schakelen. Een uitgebreid adviesrapport vraagt uiteraard meer tijd. Bij crisissituaties is het team direct beschikbaar. In een eerste gesprek bespreken we de doorlooptijd die past bij uw situatie.'
    },
    {
      question: 'Heeft Riekhoff ervaring met mijn branche?',
      answer: 'Riekhoff heeft sinds 2020 ervaring opgebouwd met diverse branches in Twente: horeca, retail, productie, bouw, zorg, transport en zakelijke dienstverlening. We kennen de specifieke uitdagingen per sector in Oldenzaal. Is uw branche niet genoemd? Neem contact op, waarschijnlijk hebben we ook daar ervaring mee of kunnen we ons snel inlezen.'
    },
    {
      question: 'Kan ik ook alleen een second opinion vragen?',
      answer: 'Ja, Riekhoff geeft regelmatig second opinions voor ondernemers in Oldenzaal die zekerheid willen over een advies of beslissing. We beoordelen onafhankelijk uw situatie, bestaande adviezen of voorgenomen plannen. Dit geeft u de zekerheid dat u de juiste keuze maakt. Neem contact op voor een offerte op maat.'
    },
    {
      question: 'Helpt Riekhoff ook bij de uitvoering van het advies?',
      answer: 'Absoluut. Advies is pas waardevol als het ook uitgevoerd wordt. Riekhoff begeleidt ondernemers in Twente bij de implementatie van adviezen. We helpen met projectmanagement, onderhandelingen, gesprekken met banken, het aansturen van andere adviseurs en het monitoren van resultaten. Deze begeleiding kunnen we op verschillende manieren inrichten, afhankelijk van uw behoefte.'
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
      answer: 'Zeker! Advies op maat is niet alleen voor grote bedrijven. Ook ZZP\'ers en kleine ondernemers in Oldenzaal hebben soms behoefte aan specialistisch advies. We passen onze aanpak aan op uw situatie. Een quick scan of kort adviestraject kan al zeer waardevol zijn voor kleinere ondernemingen in Twente. Neem contact op om de mogelijkheden te bespreken.'
    }
  ];

  // Schema.org Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bedrijfsadvies op maat",
    "name": "Advies op Maat Oldenzaal",
    "description": "Riekhoff biedt maatwerk bedrijfsadvies voor ondernemers in Oldenzaal en Twente. Van strategisch advies tot bedrijfsovername begeleiding. Persoonlijk advies op maat.",
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
    ]
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
  
        {/* SUBTLE HERO */}
        <section className="relative w-full overflow-hidden h-80">
          <div className="absolute inset-0 bg-dark" />
          <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mr-20">
            <img
              src="kantoor_duo.jpg"
              alt="Advies op maat Oldenzaal"
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
                  <a href="/#diensten" className="hover:text-accent-yellow transition-colors">Diensten</a>
                  <span>/</span>
                  <span className="text-white">Advies op maat</span>
                </div>
                
                <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
                  MAATWERK BEDRIJFSADVIES
                </p>
                
                <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
                  Advies op maat voor ondernemers in Oldenzaal
                </h1>
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
                      src="riekhoff-man-portret.jpg"
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

        {/* ADVIESGEBIEDEN */}
        <section className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
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

              <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <a href="#aanvraag" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="riekhoff-vrouw-laptop.jpg"
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
                        src="riekhoff-team-computer.jpg"
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

                <div className="lg:col-span-6">
                  <a href="#aanvraag" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="riekhoff-man-blauw-overhemd-1.jpg"
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
                        src="kantoor_open_3.jpg"
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

        {/* USP'S BANNER */}
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
                  <h3 className="text-xl font-bold text-white mb-2">Snel schakelen</h3>
                  <p className="text-gray-400 text-sm">
                    Snelle reactie bij urgente situaties
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

        {/* ADVIESVORMEN */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {adviesvormen.map((vorm, index) => (
                  <div key={index} className={`group relative bg-gradient-to-br ${vorm.populair || vorm.urgent || vorm.compleet ? 'from-dark to-dark-secondary' : 'from-gray-50 to-white'} rounded-2xl p-8 border-2 ${vorm.populair || vorm.urgent || vorm.compleet ? 'border-transparent hover:border-accent-yellow' : 'border-gray-200 hover:border-accent-yellow'} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                    {(vorm.populair || vorm.urgent || vorm.compleet) && (
                      <div className="absolute top-4 right-4">
                        <div className={`${vorm.urgent ? 'bg-red-500' : vorm.compleet ? 'bg-green-500' : 'bg-accent-yellow'} text-${vorm.urgent || vorm.compleet ? 'white' : 'dark'} px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                          {vorm.urgent ? 'Urgent' : vorm.compleet ? 'Compleet' : 'Populair'}
                        </div>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 className={`${vorm.populair || vorm.urgent || vorm.compleet ? 'text-white' : 'text-dark'} font-bold text-xl mb-2`}>{vorm.titel}</h3>
                      <p className={`${vorm.populair || vorm.urgent || vorm.compleet ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{vorm.omschrijving}</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className={vorm.populair || vorm.urgent || vorm.compleet ? 'text-accent-yellow' : 'text-dark'}>
                        <span className="text-3xl font-bold">{vorm.timing}</span>
                      </div>
                      <p className={`${vorm.populair || vorm.urgent || vorm.compleet ? 'text-gray-400' : 'text-gray-500'} text-xs mt-1`}>aanpak</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {vorm.features.map((item, i) => (
                        <li key={i} className={`flex items-center gap-2 text-sm ${vorm.populair || vorm.urgent || vorm.compleet ? 'text-gray-300' : 'text-gray-700'}`}>
                          <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <a href={vorm.urgent ? "tel:+31541200007" : "#aanvraag"} className={`block w-full text-center ${vorm.populair || vorm.urgent || vorm.compleet ? 'bg-accent-yellow text-dark hover:bg-yellow-400' : 'border-2 border-dark text-dark hover:bg-dark hover:text-white'} py-3 rounded-lg font-semibold transition-all`}>
                      {vorm.urgent ? 'Bel direct' : vorm.titel === 'Adviesrapport' ? 'Start traject' : vorm.titel === 'Continue begeleiding' || vorm.titel === 'Strategietraject' ? 'Meer info' : 'Vraag aan'}
                    </a>
                  </div>
                ))}
              </div>

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

        {/* TESTIMONIALS */}
        <Testimonials 
          title="Wat klanten van Riekhoff zeggen"
          filter="algemeen"
          bgColor="gray"
        />

        {/* AANVRAAG SECTIE */}
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
                  <a href="/contact" className="text-accent-yellow font-semibold hover:text-dark transition-colors">
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
              src="skyline_detail.jpg"
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
            </div>
          </div>
        </section>

      </div>
    </>
  );
}