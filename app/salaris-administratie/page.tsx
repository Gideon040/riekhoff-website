import React from 'react';
import Testimonials from '../components/Testimonials';
import { 
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronRight,
  Users,
  FileText,
  Calculator,
  Calendar,
  Clock,
  Building2,
  Shield,
  Zap
} from 'lucide-react';

export default function Salarisadministratie() {
  const voordelen = [
    'Altijd op tijd uitbetaald',
    'Correcte loonheffingen',
    'Digitale salarisstroken',
    'Pensioenadministratie',
    'Verzuimregistratie',
    'Jaaropgaven automatisch',
    'Persoonlijk aanspreekpunt',
    'Transparante tarieven'
  ];

  const proces = [
    {
      nummer: '01',
      titel: 'Kennismaking',
      beschrijving: 'Tijdens een vrijblijvend gesprek in Oldenzaal bespreken we uw personeelssituatie, CAO-afspraken en specifieke wensen voor de salarisadministratie van uw bedrijf in Twente.'
    },
    {
      nummer: '02',
      titel: 'Onboarding',
      beschrijving: 'Riekhoff verzamelt alle benodigde gegevens: arbeidscontracten, BSN-nummers, loonbelastingverklaringen en eventuele regelingen. We richten de administratie in volgens uw wensen.'
    },
    {
      nummer: '03',
      titel: 'Maandelijkse verwerking',
      beschrijving: 'U levert voor de afgesproken datum de mutaties aan. Het team van Riekhoff verwerkt de salarissen, maakt loonstroken en verzorgt de betalingsbestanden voor uw bedrijf in Oldenzaal.'
    },
    {
      nummer: '04',
      titel: 'Aangiftes & betalingen',
      beschrijving: 'Riekhoff doet tijdig aangifte loonheffingen bij de Belastingdienst en informeert u over de te betalen bedragen. We bewaken alle deadlines voor ondernemers in Twente.'
    },
    {
      nummer: '05',
      titel: 'Rapportage & advies',
      beschrijving: 'Maandelijks ontvangt u overzichten van loonkosten, sociale lasten en verzuim. Riekhoff adviseert proactief over optimalisatie en wetwijzigingen voor MKB in Overijssel.'
    }
  ];

  const faqs = [
    {
      question: 'Wat kost salarisadministratie bij Riekhoff?',
      answer: 'De kosten voor salarisadministratie zijn afhankelijk van het aantal medewerkers, de complexiteit van de CAO, en eventuele extra diensten zoals verzuimbegeleiding of HR-advies. Omdat iedere situatie uniek is, stellen wij graag een persoonlijke offerte voor u op. In een vrijblijvend gesprek bespreken we uw situatie en geven we een indicatie van de investering. Neem contact op voor een offerte op maat.'
    },
    {
      question: 'Hoe snel kan Riekhoff mijn salarisadministratie overnemen?',
      answer: 'Riekhoff kan uw salarisadministratie binnen enkele werkdagen overnemen. We zorgen voor een soepele overgang van uw huidige situatie. Het team haalt alle benodigde gegevens op, richt de administratie in en zorgt dat de eerstvolgende salarisrun perfect verloopt. Voor ondernemers in Oldenzaal kunnen we indien nodig nog sneller schakelen.'
    },
    {
      question: 'Voor welke bedrijven doet Riekhoff de salarisadministratie?',
      answer: 'Riekhoff verzorgt salarisadministratie voor MKB-bedrijven in Oldenzaal, Losser, Denekamp en heel Twente. Van eenmanszaken met de eerste werknemer tot bedrijven met 50 medewerkers. We werken voor alle branches: horeca, detailhandel, bouw, zorg, zakelijke dienstverlening en productiebedrijven in Overijssel.'
    },
    {
      question: 'Welke software gebruikt Riekhoff voor salarisadministratie?',
      answer: 'Riekhoff werkt met moderne, gecertificeerde salarissoftware die altijd up-to-date is met de laatste wet- en regelgeving. De software is gekoppeld aan de Belastingdienst voor automatische aangiftes. Uw medewerkers krijgen toegang tot een persoonlijk portaal waar ze loonstroken kunnen inzien en verlof kunnen aanvragen. Alles volledig digitaal en AVG-proof.'
    },
    {
      question: 'Wat is inbegrepen in de salarisadministratie van Riekhoff?',
      answer: 'De salarisadministratie van Riekhoff omvat: verwerking brutolonen, berekening loonheffingen en sociale premies, digitale loonstroken, aangifte loonheffingen, jaaropgaven voor medewerkers, pensioenaangifte, verzuimregistratie, loonkostenrapportages en het beantwoorden van vragen over arbeidsrecht en CAO. Voor ondernemers in Oldenzaal bieden we ook advies over loonkostensubsidies.'
    },
    {
      question: 'Hoe werkt de maandelijkse salarisverwerking bij Riekhoff?',
      answer: 'U levert voor een afgesproken datum de mutaties aan via e-mail of ons online portaal. Riekhoff verwerkt de salarissen binnen enkele werkdagen. U ontvangt de concept loonstroken ter controle. Na uw akkoord maken we het betaalbestand aan en sturen de definitieve loonstroken naar uw medewerkers. De aangifte loonheffingen doen we automatisch. Bedrijven in Twente waarderen onze snelle en foutloze verwerking.'
    },
    {
      question: 'Kan Riekhoff ook helpen met arbeidscontracten?',
      answer: 'Ja, Riekhoff adviseert ondernemers in Oldenzaal over arbeidscontracten en arbeidsvoorwaarden. We hebben modelcontracten beschikbaar en kunnen deze aanpassen aan uw situatie. Voor complexe arbeidsrechtelijke vraagstukken werken we samen met gespecialiseerde arbeidsrecht advocaten in Twente. We zorgen dat uw contracten voldoen aan de wet en eventuele CAO-bepalingen.'
    },
    {
      question: 'Hoe zit het met de AVG en privacy bij salarisadministratie?',
      answer: 'Riekhoff werkt volledig AVG-compliant. We hebben een verwerkersovereenkomst, beveiligde systemen en strikte procedures voor het omgaan met persoonsgegevens. Salarisgegevens worden minimaal 7 jaar bewaard conform wettelijke eisen. Alleen geautoriseerde medewerkers hebben toegang tot de data. Voor bedrijven in Oldenzaal en Twente garanderen we maximale privacy en veiligheid.'
    },
    {
      question: 'Verzorgt Riekhoff ook de pensioenaangifte?',
      answer: 'Ja, Riekhoff verzorgt de complete pensioenadministratie voor uw bedrijf. We doen de aan- en afmeldingen bij het pensioenfonds, verzorgen de maandelijkse opgaven en berekenen de pensioenpremies. We werken met alle grote pensioenfondsen en verzekeraars. Voor ondernemers in Twente regelen we ook de aansluiting bij een nieuw pensioenfonds als dat nodig is.'
    },
    {
      question: 'Wat doet Riekhoff bij ziekte van een medewerker?',
      answer: 'Bij ziekte van een medewerker begeleidt Riekhoff het complete traject. We doen de ziekmelding bij het UWV (indien nodig), berekenen het doorbetaalde loon, monitoren de verzuimtermijnen en informeren u over uw verplichtingen. Voor bedrijven in Oldenzaal werken we samen met arbodiensten in de regio. We zorgen dat u voldoet aan alle wettelijke verplichtingen rondom verzuim.'
    },
    {
      question: 'Kan ik als ZZPer ook gebruik maken van salarisadministratie?',
      answer: 'Ja, zodra u als ZZPer uw eerste medewerker aanneemt, verzorgt Riekhoff graag uw salarisadministratie. We helpen met de aanmelding als werkgever bij de Belastingdienst, het aanvragen van een loonheffingennummer en het opstellen van het eerste arbeidscontract. Voor startende werkgevers in Oldenzaal bieden we ondersteuning op maat.'
    },
    {
      question: 'Hoe werkt het met vakantiegeld en eindejaarsuitkering?',
      answer: 'Riekhoff berekent automatisch de opbouw van vakantiegeld (8%) en reserveert dit. In mei betalen we het vakantiegeld uit of op een ander gewenst moment. Eindejaarsuitkeringen verwerken we volgens uw wensen en eventuele CAO-afspraken. Voor bedrijven in Twente kunnen we flexibele uitbetalingsschema\'s instellen. Alles wordt correct verwerkt in de loonadministratie en aangiftes.'
    }
  ];

  // Schema.org Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Salarisadministratie en personeelsadministratie",
    "name": "Salarisadministratie Oldenzaal - Riekhoff",
    "description": "Riekhoff verzorgt complete salarisadministratie voor MKB in Oldenzaal en Twente. Loonverwerking, loonstroken, aangifte loonheffingen en personeelsadministratie.",
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
      {"@type": "ListItem", "position": 3, "name": "Salarisadministratie", "item": "https://www.riekhoff.nl/diensten/salarisadministratie"}
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
              src="kantoor_breed.jpg"
              alt="Salarisadministratie Oldenzaal"
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
                  <span className="text-white">Salarisadministratie</span>
                </div>
                
                <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
                  PERSONEELSZAKEN
                </p>
                
                <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
                  Salarisadministratie voor MKB in Oldenzaal
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
                    Foutloze <span className="text-accent-yellow">loonadministratie</span>
                    <span className="block mt-2">altijd op tijd</span>
                  </h2>
                </div>
                <div className="lg:col-span-1 lg:mt-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Riekhoff verzorgt de complete salarisadministratie voor MKB-bedrijven in Oldenzaal en Twente. Van loonstroken tot jaaropgaven, altijd correct en op tijd.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Een goede salarisadministratie is essentieel voor elk bedrijf met personeel. De regels rondom 
                    loonheffingen, sociale verzekeringen en arbeidsrecht veranderen voortdurend. Riekhoff zorgt dat 
                    uw loonadministratie altijd voldoet aan de laatste wet- en regelgeving.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Met jarenlange ervaring in de regio Twente kent het team van Riekhoff de specifieke uitdagingen 
                    van MKB-ondernemers in Oldenzaal. We zorgen voor correcte loonberekeningen, tijdige aangiftes 
                    en tevreden medewerkers die altijd op tijd hun salaris ontvangen.
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
                    <p className="text-sm font-semibold text-gray-700 mb-3">Wilt u de salarisadministratie uitbesteden?</p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                      Vraag offerte aan
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="relative">
                    <img 
                      src="oranje_shirt_1.jpg"
                      alt="Salarisadministratie Oldenzaal Riekhoff"
                      className="rounded-2xl shadow-xl w-full h-auto"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-accent-yellow rounded-xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 text-dark" />
                        <div>
                          <div className="text-xl font-bold text-dark">MKB</div>
                          <div className="text-xs text-dark/70">Specialist</div>
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
                  Complete personeels- en salarisadministratie in <span className="text-accent-yellow">Oldenzaal</span>
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Riekhoff verzorgt alle aspecten van uw loonadministratie. Van maandelijkse verwerking tot 
                  jaaropgaven, altijd volgens de laatste CAO en wetgeving.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-6">
                {/* Loonverwerking - Large */}
                <div className="lg:col-span-7">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="riekhoff-man-lachend.jpg"
                        alt="Loonverwerking Oldenzaal"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Calculator className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow group-hover:bg-accent-yellow group-hover:text-dark transition-all duration-500">
                        Kernservice
                      </div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl mb-3">Maandelijkse loonverwerking</h3>
                      <p className="text-gray-300 mb-4 max-w-lg">
                        Complete verwerking van brutolonen, berekening loonheffingen en sociale premies. 
                        Digitale loonstroken voor al uw medewerkers in Twente.
                      </p>
                      <ul className="space-y-2 mb-4">
                        {['Loonberekening volgens CAO', 'Digitale loonstroken', 'Betaalbestanden voor bank'].map((item, i) => (
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

                {/* Aangifte loonheffingen */}
                <div className="lg:col-span-5">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="riekhoff-werk-schermen.jpg"
                        alt="Aangifte loonheffingen"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <FileText className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Belastingdienst
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Aangifte loonheffingen</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Tijdige en correcte aangifte bij de Belastingdienst. Riekhoff zorgt voor alle aangiftes.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Maandelijkse aangifte', 'Correcties indien nodig', 'Bewaking deadlines'].map((item, i) => (
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

                {/* Jaaropgaven */}
                <div className="lg:col-span-6">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="kantoor_skyline.jpg"
                        alt="Jaaropgaven"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Calendar className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Jaarwerk
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Jaaropgaven & verzuim</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Automatische jaaropgaven voor medewerkers en complete verzuimregistratie voor bedrijven in Oldenzaal.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Jaaropgaven voor medewerkers', 'Verzuimregistratie', 'Ziektewet begeleiding'].map((item, i) => (
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

                {/* Pensioenadministratie */}
                <div className="lg:col-span-6">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="koffie_gesprek.jpg"
                        alt="Pensioenadministratie"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Shield className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Pensioen
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Pensioenadministratie</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Complete pensioenadministratie voor MKB in Twente. Aan- en afmeldingen, premieberekeningen.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Aan- en afmeldingen', 'Premieberekeningen', 'Contact pensioenfonds'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Optioneel
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-xl p-6 border-2 border-accent-yellow/20">
                  <div className="flex-1 text-left">
                    <p className="font-bold mb-1">Salarisadministratie uitbesteden?</p>
                    <p className="text-sm text-gray-600">Riekhoff ontzorgt MKB-bedrijven in Oldenzaal volledig</p>
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
                  <Zap className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Altijd op tijd</h3>
                <p className="text-gray-400 text-sm">
                  Salarissen altijd tijdig uitbetaald
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">100% Correct</h3>
                <p className="text-gray-400 text-sm">
                  Foutloze verwerking volgens laatste wetgeving
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Persoonlijk</h3>
                <p className="text-gray-400 text-sm">
                  Vaste contactpersoon voor al uw vragen
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
                  Zo werkt <span className="text-accent-yellow">salarisadministratie</span> bij Riekhoff
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Van onboarding tot maandelijkse verwerking: Riekhoff ontzorgt ondernemers in Oldenzaal 
                  volledig op het gebied van loonadministratie.
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
                  Start vandaag nog met professionele salarisadministratie
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
          filter="salaris"
          bgColor="gray"
        />

        {/* QUOTE SECTION */}
        <section className="py-24 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="kantoor_team.jpg"
              alt="Oldenzaal skyline"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <blockquote className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                  "Een goede salarisadministratie geeft rust. Ondernemers kunnen zich richten op hun core business."
                </blockquote>
                <cite className="block">
                  <p className="text-accent-yellow text-xl font-semibold mb-1">Wout Sanderink</p>
                  <p className="text-gray-400">Assistent accountant salarisadministratie</p>
                </cite>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Foutloze verwerking sinds 2020</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Riekhoff heeft sinds de oprichting in 2020 duizenden loonstroken verwerkt voor bedrijven 
                    in Oldenzaal en Twente. Altijd correct, altijd op tijd.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Kennis van lokale CAO's</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Het team kent de specifieke CAO's die gelden voor bedrijven in Twente. 
                    Van bouw tot horeca, van zorg tot techniek.
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
                  Veelgestelde vragen over <span className="text-accent-yellow">salarisadministratie</span>
                </h2>
                <p className="text-gray-600">
                  Alles wat u wilt weten over loonadministratie bij Riekhoff in Oldenzaal. 
                  Van tarieven tot werkwijze.
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