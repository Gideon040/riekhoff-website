import React from 'react';
import { 
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  FileText,
  PiggyBank,
  BarChart3,
  Calculator,
  Clock,
  Euro,
  Building2,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';

export default function FinancieleDienstverlening() {
  // Data voor de pagina
  const diensten = [
    {
      icon: FileText,
      title: 'Businessplan opstellen',
      description: 'Riekhoff stelt professionele businessplannen op voor ondernemers in Oldenzaal die financiering zoeken of hun bedrijf willen uitbreiden. We kennen de eisen van banken in Twente en weten wat investeerders willen zien.',
      features: ['Marktanalyse en concurrentieonderzoek', 'Financiële prognoses (3-5 jaar)', 'SWOT-analyse en risicoanalyse', 'Presentatie voor banken en investeerders']
    },
    {
      icon: PiggyBank,
      title: 'Financieringsadvies',
      description: 'Het team van Riekhoff adviseert MKB-bedrijven in Twente over de beste financieringsmogelijkheden voor investeringen, werkkapitaal en groei. Van banklening tot crowdfunding, we kennen alle opties.',
      features: ['Analyse van financieringsbehoefte', 'Selectie van geschikte financiers', 'Vergelijking leningvoorwaarden', 'Ondersteuning bij aanvraagproces']
    },
    {
      icon: BarChart3,
      title: 'Liquiditeitsprognoses',
      description: 'Riekhoff maakt liquiditeitsprognoses voor bedrijven in Oldenzaal om cashflow problemen te voorkomen en financiële gezondheid te waarborgen. Met scenario analyses voor verschillende situaties.',
      features: ['Cashflow analyse en prognoses', 'Working capital management', 'Scenario analyses', 'Kwartaal- en jaarprognoses']
    },
    {
      icon: Calculator,
      title: 'Kredietaanvraag begeleiding',
      description: 'Het accountantskantoor in Oldenzaal begeleidt ondernemers bij het aanvragen van krediet bij banken en andere financiers in de regio Twente. Van voorbereiding tot goedkeuring.',
      features: ['Voorbereiding aanvraagdocumenten', 'Beoordeling financieringscapaciteit', 'Contact met banken en financiers', 'Onderhandeling over voorwaarden']
    }
  ];

  const proces = [
    {
      nummer: '01',
      titel: 'Intakegesprek',
      beschrijving: 'Tijdens een vrijblijvend gesprek op het kantoor in Oldenzaal bespreekt Riekhoff uw financieringsbehoefte, groeiplannen en zakelijke doelstellingen voor uw onderneming in Twente.'
    },
    {
      nummer: '02',
      titel: 'Analyse',
      beschrijving: 'Het team analyseert uw huidige financiële situatie, marktpositie en toekomstige investeringsplannen. Dit gebeurt met moderne financiële software en kennis van de Twentse markt.'
    },
    {
      nummer: '03',
      titel: 'Advies op maat',
      beschrijving: 'Riekhoff presenteert een concreet financieringsadvies met verschillende scenario\'s, passend bij uw situatie en de mogelijkheden bij banken in Oldenzaal en omgeving.'
    },
    {
      nummer: '04',
      titel: 'Uitvoering',
      beschrijving: 'Het kantoor stelt het businessplan of de aanvraag op, onderhoudt contact met financiers in Twente en begeleidt het hele proces tot aan de goedkeuring.'
    },
    {
      nummer: '05',
      titel: 'Nazorg',
      beschrijving: 'Ook na goedkeuring blijft Riekhoff beschikbaar voor vragen over financiering, rapportages aan de bank en periodieke evaluaties voor ondernemers in Overijssel.'
    }
  ];

  const tarieven = [
    { dienst: 'Businessplan basis', prijs: 'vanaf €750,-' },
    { dienst: 'Businessplan uitgebreid', prijs: '€1.500 - €3.000' },
    { dienst: 'Financieringsadvies', prijs: 'vanaf €500,-' },
    { dienst: 'Liquiditeitsprognose', prijs: 'vanaf €350,-' },
    { dienst: 'Kredietbegeleiding', prijs: 'op aanvraag' },
    { dienst: 'Financiële scan', prijs: 'vanaf €250,-' }
  ];

  const voordelen = [
    'MKB-specialist sinds 2020',
    'Kennis van Twentse markt',
    'Directe lijnen met banken',
    'Hoog slagingspercentage (95%)',
    'Snelle doorlooptijd',
    'Persoonlijke begeleiding',
    'Transparante tarieven',
    'Nazorg na goedkeuring'
  ];

  const faqs = [
    {
      question: 'Wat kost een businessplan bij Riekhoff in Oldenzaal?',
      answer: 'Een businessplan kost bij Riekhoff vanaf €750,- voor een basisversie. Voor uitgebreidere plannen met marktonderzoek en gedetailleerde financiële prognoses liggen de kosten tussen €1.500,- en €3.000,-. Het tarief is afhankelijk van de complexiteit, omvang van de onderneming en het doel van het plan. Neem contact op met het kantoor in Oldenzaal voor een vrijblijvende offerte op maat.'
    },
    {
      question: 'Hoe lang duurt het opstellen van een businessplan?',
      answer: 'Het opstellen van een businessplan bij Riekhoff duurt gemiddeld 2 tot 4 weken, afhankelijk van de complexiteit en beschikbaarheid van gegevens. Een basis businessplan voor een eenmanszaak in Oldenzaal is vaak binnen 2 weken klaar. Voor grotere MKB-bedrijven met uitgebreide financiële prognoses en marktonderzoek rekent Riekhoff op 3 tot 4 weken. Bij spoedaanvragen kan het team in Twente vaak versneld werken.'
    },
    {
      question: 'Voor welke bedrijven is financiële dienstverlening geschikt?',
      answer: 'Riekhoff biedt financiële dienstverlening voor MKB-bedrijven in Oldenzaal en omgeving. Dit zijn ZZP\'ers die willen groeien, eenmanszaken die een BV willen oprichten, bestaande BV\'s die willen investeren of uitbreiden, en bedrijven met 1 tot 50 medewerkers in Twente. Het kantoor werkt voor verschillende branches: detailhandel, horeca, bouw, zakelijke dienstverlening en productie in Overijssel.'
    },
    {
      question: 'Werkt Riekhoff samen met banken in de regio?',
      answer: 'Ja, Riekhoff heeft jarenlange ervaring met banken en financiers in Twente en Overijssel. Het team kent de eisen en procedures van regionale banken, maar ook landelijke banken en alternatieve financiers. Riekhoff is onafhankelijk en adviseert welke financier het beste past bij uw situatie in Oldenzaal. Het kantoor onderhoudt contact met meerdere financiers om de beste voorwaarden te verkrijgen.'
    },
    {
      question: 'Wanneer heb ik financiële dienstverlening nodig?',
      answer: 'Ondernemers in Oldenzaal en Twente hebben financiële dienstverlening nodig bij: (1) Het starten van een nieuwe onderneming en het aanvragen van startfinanciering, (2) Uitbreiding of investeringen waarbij externe financiering nodig is, (3) Overname van een bedrijf, (4) Cashflow problemen of financiële herstructurering, (5) Groeiplannen waarbij een businessplan vereist is. Riekhoff adviseert ook preventief om toekomstige financieringsbehoefte in kaart te brengen.'
    },
    {
      question: 'Kan Riekhoff ook helpen bij subsidieaanvragen?',
      answer: 'Riekhoff adviseert ondernemers in Oldenzaal over beschikbare subsidies en kan ondersteunen bij de aanvraag. Voor specifieke subsidies zoals innovatievouchers, duurzaamheidsinvesteringen of Europese subsidies werkt het kantoor samen met gespecialiseerde partners. Het team bekijkt altijd of subsidies een onderdeel kunnen vormen van de totale financieringsmix voor uw bedrijf in Twente.'
    },
    {
      question: 'Wat zijn de voordelen van een liquiditeitsprognose?',
      answer: 'Een liquiditeitsprognose van Riekhoff geeft ondernemers in Oldenzaal inzicht in toekomstige kasstromen. Dit voorkomt cashflow problemen, helpt bij het plannen van investeringen en is vaak verplicht voor banken in Twente. Het team maakt prognoses voor 12 maanden vooruit met scenario analyses. Dit geeft ondernemers grip op hun financiën en mogelijkheid om tijdig bij te sturen.'
    },
    {
      question: 'Hoe hoog is het slagingspercentage van Riekhoff bij financieringsaanvragen?',
      answer: 'Riekhoff heeft een slagingspercentage van 95% bij financieringsaanvragen voor ondernemers in Oldenzaal en Twente. Dit hoge percentage komt door grondige voorbereiding, professionele businessplannen en persoonlijke contacten met banken in de regio. Het team kent de eisen van financiers en weet hoe een aanvraag het beste gepresenteerd kan worden.'
    },
    {
      question: 'Wat is het verschil tussen financieringsadvies en een businessplan?',
      answer: 'Financieringsadvies van Riekhoff is een analyse van uw financieringsbehoefte en de beste opties voor uw situatie in Oldenzaal. Een businessplan is een uitgebreid document met bedrijfsbeschrijving, marktanalyse, strategie en financiële prognoses, specifiek voor banken en investeerders. Vaak is financieringsadvies de eerste stap, gevolgd door het opstellen van een businessplan voor de gekozen financier.'
    },
    {
      question: 'Begeleidt Riekhoff ook bij herfinanciering?',
      answer: 'Ja, Riekhoff begeleidt ondernemers in Twente ook bij herfinanciering van bestaande leningen. Het team analyseert uw huidige financiering, onderzoekt betere voorwaarden bij andere banken en begeleidt het overstapproces. Dit kan leiden tot lagere rentes, betere voorwaarden of meer financiële ruimte voor uw bedrijf in Oldenzaal.'
    }
  ];

  // Schema.org Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Financiële dienstverlening",
    "name": "Financiële dienstverlening Oldenzaal",
    "description": "Riekhoff biedt financiële dienstverlening voor MKB-bedrijven in Oldenzaal en Twente. Businessplannen, financieringsadvies, liquiditeitsprognoses en begeleiding bij kredietaanvragen.",
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
      "lowPrice": "250",
      "highPrice": "3000"
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
      {"@type": "ListItem", "position": 3, "name": "Financiële dienstverlening", "item": "https://www.riekhoff.nl/diensten/financiele-dienstverlening"}
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
        src="/riekhoff-samenwerken.jpg"
        alt="Financiële dienstverlening Oldenzaal"
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
            <span className="text-white">Financiële dienstverlening</span>
          </div>
          
          <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
            BUSINESSPLANNEN & FINANCIERING
          </p>
          
          <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
            Financiële dienstverlening voor MKB in Oldenzaal
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
                    Van <span className="text-accent-yellow">idee</span> naar
                    <span className="block mt-2">succesvolle financiering</span>
                  </h2>
                </div>
                <div className="lg:col-span-1 lg:mt-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Riekhoff Accountants in Oldenzaal helpt MKB-ondernemers in Twente met professionele businessplannen, financieringsadvies en kredietbegeleiding. Met 95% slagingspercentage bij financieringsaanvragen.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Het verkrijgen van financiering voor uw onderneming in Oldenzaal vraagt om een professionele aanpak. 
                    Banken en investeerders stellen steeds hogere eisen aan businessplannen en financieringsaanvragen. 
                    Riekhoff kent deze eisen en weet wat financiers in Twente willen zien.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Met jarenlange ervaring in de Twentse markt heeft het team van Riekhoff een hoog slagingspercentage 
                    bij financieringsaanvragen. We kennen de lokale banken persoonlijk en weten hoe we uw onderneming 
                    het beste kunnen presenteren voor een succesvolle financiering.
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
                    <p className="text-sm font-semibold text-gray-700 mb-3">Direct starten met uw financieringsaanvraag?</p>
                    <a href="#contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                      Neem contact op
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="relative">
                    <img 
                      src="/riekhoff-portret-man-3.jpg"
                      alt="Businessplan Oldenzaal Riekhoff"
                      className="rounded-2xl shadow-xl w-full h-auto"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-accent-yellow rounded-xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-8 h-8 text-dark" />
                        <div>
                          <div className="text-xl font-bold text-dark">€2.5M</div>
                          <div className="text-xs text-dark/70">Gefinancierd in 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIENSTEN - Modern visual design like DienstenGrid */}
        <section className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
          {/* Subtle gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-yellow/8 via-transparent to-accent-yellow/8" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-yellow/12 blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6 inline-block">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
                    Onze Expertise
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Financiële diensten in <span className="text-accent-yellow">Oldenzaal</span>
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Riekhoff biedt complete financiële dienstverlening voor MKB-ondernemers in Oldenzaal en Twente. 
                  Van businessplannen tot liquiditeitsprognoses.
                </p>
              </div>

              {/* Asymmetric grid with visual cards */}
              <div className="grid lg:grid-cols-12 gap-6">
                {/* Row 1 - Large card left, medium right */}
                <div className="lg:col-span-7">
                  <a href="#contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-laptop-lachend.jpg"
                        alt="Businessplan opstellen"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <FileText className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow group-hover:bg-accent-yellow group-hover:text-dark transition-all duration-500">
                        Meest gevraagd
                      </div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl mb-3">Businessplan opstellen</h3>
                      <p className="text-gray-300 mb-4 max-w-lg">
                        Professionele businessplannen voor ondernemers in Oldenzaal die financiering zoeken. 
                        We kennen de eisen van banken in Twente.
                      </p>
                      <ul className="space-y-2 mb-4">
                        {['Marktanalyse Twente', 'Financiële prognoses 3-5 jaar', 'Presentatie voor banken'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                            <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Vanaf €750,-
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:col-span-5">
                  <a href="#contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-gesprek-senior.jpg"
                        alt="Financieringsadvies"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <PiggyBank className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Advies
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Financieringsadvies</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Het team adviseert over de beste financieringsmogelijkheden voor MKB in Twente.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Analyse financieringsbehoefte', 'Selectie financiers', 'Vergelijking voorwaarden'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Vanaf €500,-
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Row 2 - Medium cards */}
                <div className="lg:col-span-6">
                  <a href="#contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-gesprek-water.jpg"
                        alt="Liquiditeitsprognoses"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <BarChart3 className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Planning
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Liquiditeitsprognoses</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Cashflow analyses voor bedrijven in Oldenzaal om financiële problemen te voorkomen.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Cashflow analyse', 'Scenario analyses', 'Kwartaalprognoses'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Vanaf €350,-
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:col-span-6">
                  <a href="#contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-werk-schermen.jpg"
                        alt="Kredietaanvraag begeleiding"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Calculator className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Begeleiding
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Kredietaanvraag</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Begeleiding bij kredietaanvragen bij banken in Twente. Van voorbereiding tot goedkeuring.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Voorbereiding documenten', 'Contact met banken', 'Onderhandeling voorwaarden'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Op aanvraag
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-xl p-6 border-2 border-accent-yellow/20">
                  <div className="flex-1 text-left">
                    <p className="font-bold mb-1">Financiering nodig voor uw bedrijf?</p>
                    <p className="text-sm text-gray-600">Riekhoff helpt ondernemers in Oldenzaal met businessplannen en kredietaanvragen</p>
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

        {/* USP'S BANNER - Now directly after diensten */}
        <section className="py-16 bg-dark-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">95% Succes</h3>
                <p className="text-gray-400 text-sm">
                  Hoog slagingspercentage bij financieringsaanvragen
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2-4 Weken</h3>
                <p className="text-gray-400 text-sm">
                  Snelle doorlooptijd voor businessplannen
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Persoonlijk</h3>
                <p className="text-gray-400 text-sm">
                  Vaste contactpersoon tijdens hele traject
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lokaal in Twente</h3>
                <p className="text-gray-400 text-sm">
                  Kantoor in Oldenzaal, kennis van de regio
                </p>
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
                  Het traject naar <span className="text-accent-yellow">financiering</span> bij Riekhoff
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Een bewezen proces dat resultaat oplevert. Van eerste gesprek tot uitbetaling, 
                  Riekhoff begeleidt ondernemers in Oldenzaal stap voor stap.
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

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Start vandaag nog uw financieringstraject bij Riekhoff in Oldenzaal
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                  Plan gratis kennismaking
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TARIEVEN - Visual card design without images */}
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
                    Transparante prijzen
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Wat kost financiële dienstverlening bij <span className="text-accent-yellow">Riekhoff</span>?
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Transparante tarieven voor financiële dienstverlening. Altijd een vrijblijvende offerte 
                  op maat voor ondernemers in Oldenzaal en Twente.
                </p>
              </div>

              {/* Visual pricing cards grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Businessplan basis - Featured */}
                <div className="group relative bg-gradient-to-br from-dark to-dark-secondary rounded-2xl p-8 border-2 border-transparent hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute top-4 right-4">
                    <div className="bg-accent-yellow text-dark px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Populair
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">Businessplan basis</h3>
                    <p className="text-gray-400 text-sm">Voor starters en kleine ondernemingen</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-accent-yellow">
                      <span className="text-4xl font-bold">€750</span>
                      <span className="text-lg">,-</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">vanaf prijs</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['Bedrijfsbeschrijving', 'Marktanalyse', 'Financiële prognose 3 jaar'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className="block w-full text-center bg-accent-yellow text-dark py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                    Vraag aan
                  </a>
                </div>

                {/* Businessplan uitgebreid */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-dark font-bold text-xl mb-2">Businessplan uitgebreid</h3>
                    <p className="text-gray-600 text-sm">Met marktonderzoek en prognoses</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-dark">
                      <span className="text-3xl font-bold">€1.500 - €3.000</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">afhankelijk van omvang</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['Uitgebreid marktonderzoek', '5 jaar prognoses', 'SWOT & risicoanalyse'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className="block w-full text-center border-2 border-dark text-dark py-3 rounded-lg font-semibold hover:bg-dark hover:text-white transition-all">
                    Meer info
                  </a>
                </div>

                {/* Financieringsadvies */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-dark font-bold text-xl mb-2">Financieringsadvies</h3>
                    <p className="text-gray-600 text-sm">Begeleiding bij kredietaanvraag</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-dark">
                      <span className="text-4xl font-bold">€500</span>
                      <span className="text-lg">,-</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">vanaf prijs</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['Analyse financieringsbehoefte', 'Selectie financiers', 'Begeleiding aanvraag'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className="block w-full text-center border-2 border-dark text-dark py-3 rounded-lg font-semibold hover:bg-dark hover:text-white transition-all">
                    Meer info
                  </a>
                </div>

                {/* Liquiditeitsprognose */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-dark font-bold text-xl mb-2">Liquiditeitsprognose</h3>
                    <p className="text-gray-600 text-sm">12 maanden cashflow prognose</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-dark">
                      <span className="text-4xl font-bold">€350</span>
                      <span className="text-lg">,-</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">vanaf prijs</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['Cashflow analyse', 'Scenario planning', 'Maandelijkse update'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className="block w-full text-center border-2 border-dark text-dark py-3 rounded-lg font-semibold hover:bg-dark hover:text-white transition-all">
                    Meer info
                  </a>
                </div>

                {/* Kredietbegeleiding */}
                <div className="group relative bg-gradient-to-br from-dark to-dark-secondary rounded-2xl p-8 border-2 border-transparent hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">Kredietbegeleiding</h3>
                    <p className="text-gray-400 text-sm">Complete begeleiding tot goedkeuring</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-accent-yellow">
                      <span className="text-3xl font-bold">Op aanvraag</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">maatwerk tarief</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['Voorbereiding documenten', 'Contact met banken', 'Onderhandelingen'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className="block w-full text-center bg-accent-yellow text-dark py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                    Contact
                  </a>
                </div>

                {/* Financiële scan */}
                <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Nieuw
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-dark font-bold text-xl mb-2">Financiële scan</h3>
                    <p className="text-gray-600 text-sm">Quick scan van uw financiële situatie</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-dark">
                      <span className="text-4xl font-bold">€250</span>
                      <span className="text-lg">,-</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">vanaf prijs</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {['Financiële gezondheid check', 'Verbeterpunten', 'Adviesgesprek'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className="block w-full text-center border-2 border-dark text-dark py-3 rounded-lg font-semibold hover:bg-dark hover:text-white transition-all">
                    Meer info
                  </a>
                </div>
              </div>

              {/* Maatwerk CTA */}
              <div className="bg-gradient-to-r from-accent-yellow/20 via-accent-yellow/10 to-accent-yellow/20 rounded-2xl p-8 border-2 border-accent-yellow/30">
                <div className="flex items-center justify-center gap-2 text-accent-yellow mb-4">
                  <Euro className="w-6 h-6" />
                  <p className="font-bold text-lg">Maatwerk tarieven</p>
                </div>
                <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
                  Elke financieringsvraag is uniek. Riekhoff maakt een offerte op maat voor jouw situatie in Oldenzaal. 
                  Het eerste kennismakingsgesprek is altijd vrijblijvend.
                </p>
                <div className="text-center">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-secondary transition-all">
                    Vraag offerte aan
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="py-24 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/riekhoff-team-foto.jpg"
              alt="Oldenzaal skyline"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <blockquote className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                  "Wij kennen de banken in Twente persoonlijk. Dat maakt het verschil bij financieringsaanvragen."
                </blockquote>
                <cite className="block">
                  <p className="text-accent-yellow text-xl font-semibold mb-1">Onno Scheuten</p>
                  <p className="text-gray-400">Adviseur & Mede-eigenaar</p>
                </cite>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">95% slagingspercentage</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Door grondige voorbereiding en professionele presentatie heeft Riekhoff een hoog 
                    slagingspercentage bij financieringsaanvragen voor ondernemers in heel Overijssel.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Lokale expertise sinds 2020</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Als accountantskantoor in Oldenzaal kennen we de lokale economie, de regionale banken 
                    en de Twentse ondernemersmentaliteit. Die kennis zetten we in voor uw succes.
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
                  Veelgestelde vragen over <span className="text-accent-yellow">financiële dienstverlening</span>
                </h2>
                <p className="text-gray-600">
                  Vragen over businessplannen, financieringsadvies en liquiditeitsprognoses? 
                  Hier vind je antwoorden op de meest gestelde vragen.
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
                <h3 className="text-xl font-bold mb-3">Heeft u een andere vraag?</h3>
                <p className="text-gray-600 mb-6">
                  Neem contact op met Riekhoff voor persoonlijk advies over financiering voor uw bedrijf in Oldenzaal
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



      </div>
    </>
  );
}