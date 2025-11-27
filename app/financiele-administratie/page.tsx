import React from 'react';
import Testimonials from '../components/Testimonials';
import { 
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronRight,
  FileText,
  Calculator,
  BarChart3,
  FolderOpen,
  Clock,
  Building2,
  Target,
  TrendingUp,
  Users,
  Receipt
} from 'lucide-react';

export default function FinancieleAdministratie() {
  const diensten = [
    {
      icon: FileText,
      title: 'Dagelijkse boekhouding',
      description: 'Riekhoff verwerkt alle financiële transacties van uw bedrijf in Oldenzaal. Van inkoopfacturen tot verkoopfacturen, van bankafschriften tot kasboek. Alles wordt correct en tijdig verwerkt volgens de laatste boekhoudkundige richtlijnen.',
      features: ['Verwerking in- en verkoopfacturen', 'Bankboek en kasboek bijhouden', 'Debiteuren- en crediteurenbeheer', 'Correcte BTW verwerking']
    },
    {
      icon: Calculator,
      title: 'Periodieke rapportages',
      description: 'Het team van Riekhoff levert maandelijkse of kwartaalrapportages met actuele cijfers voor ondernemers in Twente. Zo heeft u altijd inzicht in uw financiële positie, omzet, kosten en resultaat.',
      features: ['Maand- of kwartaalrapportages', 'Winst- en verliesrekening', 'Balans en liquiditeit', 'KPI-dashboards op maat']
    },
    {
      icon: BarChart3,
      title: 'Jaarrekening voorbereiding',
      description: 'Riekhoff bereidt uw jaarrekening voor, zodat de controle door een accountant soepel verloopt. We zorgen dat alle transacties correct zijn geboekt en alle benodigde documentatie aanwezig is.',
      features: ['Voorbereiding jaarrekening', 'Controle op volledigheid', 'Afstemming grootboek', 'Documentatie voor accountant']
    },
    {
      icon: FolderOpen,
      title: 'Digitale archivering',
      description: 'Het accountantskantoor in Oldenzaal digitaliseert en archiveert al uw financiële documenten. Voldoet aan wettelijke bewaartermijnen en is altijd direct beschikbaar voor de Belastingdienst.',
      features: ['Digitale opslag documenten', 'Wettelijke bewaartermijnen', 'Altijd en overal toegankelijk', 'Beveiligde cloud opslag']
    }
  ];

  const proces = [
    {
      nummer: '01',
      titel: 'Onboarding',
      beschrijving: 'Tijdens een kennismakingsgesprek in Oldenzaal inventariseert Riekhoff uw huidige administratie, software en werkwijze. We bepalen samen welke diensten u nodig heeft en hoe we de samenwerking het beste kunnen inrichten.'
    },
    {
      nummer: '02',
      titel: 'Inrichting systemen',
      beschrijving: 'Het team richt de boekhoudingsoftware in, koppelt deze aan uw bank en kassasysteem, en zorgt voor een heldere structuur. Voor ondernemers in Twente werken we met moderne cloudsoftware die altijd toegankelijk is.'
    },
    {
      nummer: '03',
      titel: 'Maandelijkse verwerking',
      beschrijving: 'Elke maand levert u de financiële stukken aan (of we halen deze automatisch op). Riekhoff verwerkt alle transacties, controleert op juistheid en doet de BTW-aangifte. U ontvangt actuele rapportages.'
    },
    {
      nummer: '04',
      titel: 'Periodieke afstemming',
      beschrijving: 'Het kantoor stemt regelmatig met u af over de cijfers, signaleert afwijkingen en adviseert over financiële vraagstukken. Voor bedrijven in Oldenzaal zijn we laagdrempelig bereikbaar voor vragen.'
    },
    {
      nummer: '05',
      titel: 'Jaarafsluiting',
      beschrijving: 'Aan het einde van het jaar bereidt Riekhoff de jaarrekening voor en levert alle benodigde informatie aan voor de belastingaangifte. Zo verloopt de jaarafsluiting voor ondernemers in Overijssel soepel en zonder stress.'
    }
  ];

  const voordelen = [
    'Ervaren boekhouders',
    'Moderne cloudsoftware',
    'Wekelijkse verwerking',
    'Altijd actuele cijfers',
    'Proactieve signalering',
    'Persoonlijk contact',
    'Vaste lage tarieven',
    'Flexibele dienstverlening'
  ];

  const faqs = [
    {
      question: 'Wat kost financiële administratie bij Riekhoff?',
      answer: 'De kosten voor financiële administratie zijn afhankelijk van het aantal transacties, de complexiteit van uw bedrijfsvoering, de gewenste rapportages en de frequentie van verwerking. Omdat iedere onderneming uniek is, stellen wij graag een persoonlijke offerte voor u op. In een vrijblijvend gesprek bespreken we uw situatie en geven we een indicatie van de maandelijkse investering. Neem contact op voor een offerte op maat.'
    },
    {
      question: 'Wat is het verschil tussen financiële administratie en accountancy?',
      answer: 'Financiële administratie is het dagelijks verwerken van alle financiële transacties: facturen, bankafschriften, kasboek. Dit geeft inzicht in uw financiële positie. Accountancy omvat de controle en goedkeuring van de jaarrekening. Bij Riekhoff in Oldenzaal verzorgen we beide diensten, zodat u bij één kantoor in Twente terecht kunt voor zowel de dagelijkse administratie als de jaarlijkse accountantscontrole.'
    },
    {
      question: 'Hoe vaak wordt mijn administratie verwerkt?',
      answer: 'Riekhoff verwerkt de financiële administratie standaard maandelijks voor ondernemers in Oldenzaal. Voor bedrijven die vaker actuele cijfers nodig hebben, bieden we ook wekelijkse verwerking aan. De BTW-aangiftes doen we kwartaal of maandelijks, afhankelijk van uw verplichting bij de Belastingdienst. We stemmen de frequentie af op uw wensen en behoefte.'
    },
    {
      question: 'Welke software gebruikt Riekhoff voor de financiële administratie?',
      answer: 'Riekhoff werkt met moderne cloudgebaseerde boekhoudingsoftware zoals Exact Online, Twinfield en AFAS. Deze pakketten zijn altijd up-to-date, voldoen aan wettelijke eisen en zijn gekoppeld aan banken voor automatische import van transacties. Voor ondernemers in Twente betekent dit dat u altijd en overal inzicht heeft in uw cijfers via een beveiligde online omgeving.'
    },
    {
      question: 'Moet ik zelf nog iets doen aan mijn administratie?',
      answer: 'U blijft verantwoordelijk voor het aanleveren van facturen en bonnetjes. Riekhoff neemt de verwerking, controle en rapportage volledig uit handen. Voor bedrijven in Oldenzaal bieden we verschillende oplossingen: u kunt stukken digitaal aanleveren, we kunnen facturen automatisch ophalen uit uw systemen, of u kunt bonnetjes fotograferen met een app. We stemmen de werkwijze af op wat voor u het gemakkelijkst is.'
    },
    {
      question: 'Kan Riekhoff ook mijn oude administratie overnemen?',
      answer: 'Ja, Riekhoff neemt regelmatig administraties over van andere kantoren of van ondernemers die het zelf deden. Het team in Oldenzaal controleert de administratie van voorgaande jaren, herstelt eventuele fouten en zorgt dat alles correct wordt overgezet naar onze systemen. Voor bedrijven in Twente plannen we een soepele overgang met minimale verstoring van uw bedrijfsvoering.'
    },
    {
      question: 'Wat gebeurt er bij een controle door de Belastingdienst?',
      answer: 'Riekhoff begeleidt ondernemers in Oldenzaal bij controles door de Belastingdienst. We verzorgen het contact met de inspecteur, leveren alle benodigde documentatie aan en zorgen dat de administratie voldoet aan wettelijke eisen. Door onze grondige en correcte werkwijze verlopen controles meestal zonder problemen. Het team heeft ervaring met verschillende soorten controles in Twente.'
    },
    {
      question: 'Hoe krijg ik inzicht in mijn financiële cijfers?',
      answer: 'Riekhoff levert maandelijkse of kwartaalrapportages met een overzicht van omzet, kosten, winst en liquiditeit. Voor ondernemers in Oldenzaal die dagelijks inzicht willen, bieden we realtime dashboards via de cloudsoftware. Zo ziet u altijd de actuele stand van debiteuren, crediteuren en bankrekeningen. We bespreken periodiek de cijfers en signaleren opvallende zaken.'
    },
    {
      question: 'Kan Riekhoff ook helpen met het indienen van subsidies?',
      answer: 'Ja, Riekhoff ondersteunt ondernemers bij het verzamelen van financiële gegevens voor subsidieaanvragen. Voor specifieke subsidies zoals WBSO, innovatievouchers of Europese subsidies werken we samen met gespecialiseerde bureaus. Het team zorgt dat alle financiële onderbouwing correct is en tijdig wordt aangeleverd voor bedrijven in Twente.'
    },
    {
      question: 'Wat gebeurt er als ik een vraag heb over mijn administratie?',
      answer: 'Bij Riekhoff in Oldenzaal heeft u een vaste contactpersoon voor uw financiële administratie. Deze persoon kent uw bedrijf en kan snel schakelen bij vragen. Voor dringende zaken zijn we per telefoon bereikbaar, voor minder urgente vragen kunt u mailen. We reageren binnen één werkdag op vragen van ondernemers in Twente. Periodiek plannen we een overleg om de cijfers te bespreken.'
    }
  ];

  // Schema.org Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Financiële administratie en boekhouding",
    "name": "Financiële administratie Oldenzaal",
    "description": "Riekhoff verzorgt de complete financiële administratie voor MKB-bedrijven in Oldenzaal en Twente. Dagelijkse boekhouding, verwerking facturen, BTW-aangiftes en periodieke rapportages.",
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
      {"@type": "ListItem", "position": 3, "name": "Financiële administratie", "item": "https://www.riekhoff.nl/diensten/financiele-administratie"}
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
              src="/riekhoff-werk-computer.jpg"
              alt="Financiële administratie Oldenzaal"
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
                  <span className="text-white">Financiële administratie</span>
                </div>
                
                <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
                  BOEKHOUDING & ADMINISTRATIE
                </p>
                
                <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
                  Financiële administratie voor MKB in Oldenzaal
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
                    Altijd <span className="text-accent-yellow">actueel inzicht</span>
                    <span className="block mt-2">in uw cijfers</span>
                  </h2>
                </div>
                <div className="lg:col-span-1 lg:mt-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Riekhoff verzorgt de complete financiële administratie voor MKB-bedrijven in Oldenzaal en Twente. Van dagelijkse boekhouding tot periodieke rapportages.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Een goed gevoerde financiële administratie is de basis van elk succesvol bedrijf. Het geeft inzicht 
                    in omzet, kosten, winst en liquiditeit. Riekhoff neemt de dagelijkse boekhouding volledig uit handen 
                    voor ondernemers in Oldenzaal, zodat u zich kunt focussen op waar u goed in bent.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Het team van Riekhoff verwerkt alle financiële transacties correct en tijdig. Van inkoopfacturen 
                    tot bankafschriften, van debiteuren tot crediteuren. U ontvangt maandelijks of per kwartaal actuele 
                    rapportages, zodat u altijd weet waar uw bedrijf in Twente financieel staat.
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
                    <p className="text-sm font-semibold text-gray-700 mb-3">Wilt u uw financiële administratie uitbesteden?</p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                      Neem contact op
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="relative">
                    <img 
                      src="/riekhoff-man-portret.jpg"
                      alt="Financiële administratie Oldenzaal Riekhoff"
                      className="rounded-2xl shadow-xl w-full h-auto"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-accent-yellow rounded-xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <Receipt className="w-8 h-8 text-dark" />
                        <div>
                          <div className="text-xl font-bold text-dark">2000+</div>
                          <div className="text-xs text-dark/70">Transacties/maand</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIENSTEN */}
        <section className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-yellow/8 via-transparent to-accent-yellow/8" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-yellow/12 blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6 inline-block">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
                    Onze Services
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Complete financiële administratie in <span className="text-accent-yellow">Oldenzaal</span>
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Riekhoff verzorgt alle aspecten van uw financiële administratie. Van dagelijkse boekhouding 
                  tot jaarrekening voorbereiding.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-6">
                {/* Dagelijkse boekhouding - Large */}
                <div className="lg:col-span-7">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-team-foto.jpg"
                        alt="Dagelijkse boekhouding"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <FileText className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow group-hover:bg-accent-yellow group-hover:text-dark transition-all duration-500">
                        Kernservice
                      </div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl mb-3">Dagelijkse boekhouding</h3>
                      <p className="text-gray-300 mb-4 max-w-lg">
                        Complete verwerking van alle financiële transacties. Van facturen tot bankafschriften, 
                        alles correct geboekt.
                      </p>
                      <ul className="space-y-2 mb-4">
                        {['In- en verkoopfacturen', 'Bank- en kasboek', 'Debiteuren/crediteuren'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                            <CheckCircle2 className="w-4 h-4 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Vraag offerte aan
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Periodieke rapportages */}
                <div className="lg:col-span-5">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-man-blauw-overhemd-1.jpg"
                        alt="Periodieke rapportages"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Calculator className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Inzicht
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Periodieke rapportages</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Maandelijkse of kwartaalrapportages met actuele cijfers voor ondernemers in Twente.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Winst & verliesrekening', 'Balans en liquiditeit', 'KPI-dashboards'].map((item, i) => (
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

                {/* Jaarrekening voorbereiding */}
                <div className="lg:col-span-6">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/kantoor_open_3.jpg"
                        alt="Jaarrekening voorbereiding"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <BarChart3 className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Jaarwerk
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Jaarrekening voorbereiding</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Voorbereiding jaarrekening voor soepele controle door accountant.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Controle volledigheid', 'Afstemming grootboek', 'Documentatie gereed'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Inbegrepen
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Digitale archivering */}
                <div className="lg:col-span-6">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-werk-schermen.jpg"
                        alt="Digitale archivering"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <FolderOpen className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Digitaal
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Digitale archivering</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        All uw documenten digitaal opgeslagen en altijd beschikbaar.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Wettelijke bewaartermijnen', 'Beveiligde cloud', 'Altijd toegankelijk'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Inbegrepen
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-xl p-6 border-2 border-accent-yellow/20">
                  <div className="flex-1 text-left">
                    <p className="font-bold mb-1">Financiële administratie uitbesteden?</p>
                    <p className="text-sm text-gray-600">Riekhoff neemt de boekhouding volledig uit handen</p>
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
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">100% Correct</h3>
                <p className="text-gray-400 text-sm">
                  Foutloze verwerking volgens laatste richtlijnen
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Altijd actueel</h3>
                <p className="text-gray-400 text-sm">
                  Maandelijkse verwerking en rapportages
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Persoonlijk</h3>
                <p className="text-gray-400 text-sm">
                  Vaste contactpersoon die uw bedrijf kent
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lokaal in Twente</h3>
                <p className="text-gray-400 text-sm">
                  Kantoor in Oldenzaal, korte lijnen
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
                  Zo werkt <span className="text-accent-yellow">financiële administratie</span> bij Riekhoff
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Van onboarding tot maandelijkse verwerking: Riekhoff zorgt voor een soepel proces 
                  en altijd actuele cijfers.
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
                  Start vandaag nog met professionele financiële administratie
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                  Vraag offerte aan
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials 
          title="Wat klanten van Riekhoff zeggen"
          bgColor="gray"
        />

        {/* QUOTE SECTION */}
        <section className="py-24 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/kantoor_team.jpg"
              alt="Riekhoff team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <blockquote className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                  "Een goed gevoerde administratie is de basis. Wij zorgen dat ondernemers altijd weten waar ze staan."
                </blockquote>
                <cite className="block">
                  <p className="text-accent-yellow text-xl font-semibold mb-1">Sanne Riekhoff</p>
                  <p className="text-gray-400">Financieel administrateur</p>
                </cite>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Modern en digitaal</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Riekhoff werkt met moderne cloudsoftware. Voor ondernemers in Oldenzaal betekent dit 
                    dat u altijd en overal inzicht heeft in uw cijfers.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Ervaren team</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ons team heeft jarenlange ervaring met financiële administratie voor MKB in Twente. 
                    We kennen de uitdagingen en weten hoe we efficiënt kunnen werken.
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
                  Veelgestelde vragen over <span className="text-accent-yellow">financiële administratie</span>
                </h2>
                <p className="text-gray-600">
                  Vragen over boekhouding en administratie? Hier vind je antwoorden op de meest gestelde vragen.
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