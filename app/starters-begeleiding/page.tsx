import React from 'react';
import Testimonials from '../components/Testimonials';
import { 
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  FileText,
  Building2,
  Calculator,
  Users,
  Clock,
  Target,
  Shield,
  Sparkles
} from 'lucide-react';

export default function Startersbegeleiding() {
  const diensten = [
    {
      icon: Building2,
      title: 'Rechtsvorm advies',
      description: 'Riekhoff adviseert startende ondernemers in Oldenzaal over de beste rechtsvorm voor hun situatie. Eenmanszaak, VOF of direct een BV? We maken een vergelijking op maat voor ondernemers in Twente.',
      features: ['Fiscale vergelijking rechtsvormen', 'Aansprakelijkheidsanalyse', 'Groeiscenarios doorrekenen', 'Persoonlijk adviesgesprek']
    },
    {
      icon: FileText,
      title: 'Ondernemingsplan',
      description: 'Het accountantskantoor in Oldenzaal helpt starters met een professioneel ondernemingsplan voor banken, investeerders of de Kamer van Koophandel. Inclusief financiële prognoses voor de eerste drie jaar.',
      features: ['Marktonderzoek Twente', 'Financiële prognoses 3 jaar', 'Investeringsbegroting', 'Break-even analyse']
    },
    {
      icon: Calculator,
      title: 'Administratie opzetten',
      description: 'Riekhoff zet een professionele administratie op voor startende ondernemers in Oldenzaal. Met moderne boekhoudsoftware zoals Exact Online of Twinfield, klaar voor groei.',
      features: ['Software selectie en inrichting', 'Grootboekschema op maat', 'Facturatie inrichten', 'Training boekhouden']
    },
    {
      icon: Shield,
      title: 'Eerste jaar begeleiding',
      description: 'Complete begeleiding tijdens het cruciale eerste jaar van uw onderneming in Twente. Van BTW-aangifte tot eerste jaarrekening, Riekhoff staat naast u als persoonlijke adviseur.',
      features: ['Kwartaal check-ups', 'BTW aangiften', 'Tussentijdse cijfers', 'Proactief advies']
    }
  ];

  const proces = [
    {
      nummer: '01',
      titel: 'Gratis startgesprek',
      beschrijving: 'Tijdens een vrijblijvend gesprek op ons kantoor in Oldenzaal bespreken we uw ondernemingsidee, ambities en vragen. U krijgt direct praktisch advies voor uw start in Twente.'
    },
    {
      nummer: '02',
      titel: 'Plan van aanpak',
      beschrijving: 'Riekhoff maakt een stappenplan voor uw onderneming: van KvK-inschrijving tot eerste klant. Inclusief tijdlijn, to-do lijst en overzicht voor starters in Oldenzaal.'
    },
    {
      nummer: '03',
      titel: 'Inschrijving & oprichting',
      beschrijving: 'Het team begeleidt u bij de Kamer van Koophandel inschrijving, BTW-nummer aanvraag en eventueel de oprichting van een BV bij de notaris in Oldenzaal.'
    },
    {
      nummer: '04',
      titel: 'Administratie inrichten',
      beschrijving: 'We richten uw boekhouding professioneel in met moderne software. U krijgt training en templates voor facturen, offertes en administratie, specifiek voor uw branche in Twente.'
    },
    {
      nummer: '05',
      titel: 'Continue begeleiding',
      beschrijving: 'Ook na de start blijft Riekhoff uw vaste aanspreekpunt. Met kwartaalgesprekken, fiscale updates en proactief advies voor groeiende ondernemers in Overijssel.'
    }
  ];

  const voordelen = [
    'Specialist voor starters',
    'Vaste maandprijs',
    'Persoonlijke begeleiding',
    'Kennis van subsidies',
    'Netwerk in Twente',
    'Gratis eerste gesprek',
    'Online en offline support',
    'Groei-garantie'
  ];

  const faqs = [
    {
      question: 'Wat kost startersbegeleiding bij Riekhoff?',
      answer: 'De kosten voor startersbegeleiding zijn afhankelijk van de diensten die u nodig heeft, zoals rechtsvorm advies, ondernemingsplan, administratie setup en de intensiteit van begeleiding. Omdat iedere starter uniek is, stellen wij graag een persoonlijke offerte voor u op. In een vrijblijvend gesprek bespreken we uw plannen en geven we een indicatie van de maandelijkse of eenmalige investering. Neem contact op voor een offerte op maat.'
    },
    {
      question: 'Wanneer is het beste moment om een accountant in te schakelen als starter?',
      answer: 'Het beste moment is VOOR u start. Riekhoff adviseert starters in Oldenzaal al in de oriëntatiefase over rechtsvorm, belastingen en administratie. Dit voorkomt kostbare fouten. Idealiter 2-3 maanden voor de daadwerkelijke start, zodat alles goed voorbereid is. Het eerste gesprek bij ons kantoor in Oldenzaal is altijd gratis en vrijblijvend.'
    },
    {
      question: 'Moet ik als starter een BV oprichten of kan ik beter als eenmanszaak beginnen?',
      answer: 'Dit hangt af van uw situatie. Een eenmanszaak is snel en goedkoop op te richten, ideaal voor starters in Oldenzaal met weinig risico. Een BV biedt bescherming van privévermogen en kan fiscaal voordeliger zijn bij hogere winsten. Riekhoff maakt een persoonlijke berekening welke rechtsvorm het beste past bij uw plannen in Twente.'
    },
    {
      question: 'Welke administratieve verplichtingen heb ik als startende ondernemer?',
      answer: 'Als starter in Oldenzaal heeft u verschillende verplichtingen: BTW-aangifte (meestal per kwartaal), bewaren van facturen en bonnen, bijhouden van kilometers, inkomstenbelasting aangifte, en vanaf bepaalde omzet een jaarrekening. Riekhoff zorgt dat u aan alle verplichtingen voldoet en voorkomt boetes van de Belastingdienst.'
    },
    {
      question: 'Kan Riekhoff helpen met subsidies voor starters?',
      answer: 'Ja, Riekhoff kent de subsidiemogelijkheden voor starters in Oldenzaal en Twente. Denk aan startersleningen, innovatievouchers, duurzaamheidssubsidies of regionale ondernemersregelingen. We adviseren welke subsidies voor u relevant zijn en kunnen helpen met de aanvraag. Ook kennen we de voorwaarden voor startersaftrek en andere fiscale voordelen.'
    },
    {
      question: 'Hoe lang duurt het traject van idee tot gestarte onderneming?',
      answer: 'Met begeleiding van Riekhoff kunt u binnen 4-6 weken starten. Een eenmanszaak is binnen een week geregeld. Een BV oprichten duurt 2-3 weken. Het maken van een ondernemingsplan vraagt 2-4 weken. Het team in Oldenzaal kan het proces versnellen als u snel wilt starten in Twente.'
    },
    {
      question: 'Wat is het verschil tussen de starterspakketten van Riekhoff?',
      answer: 'Riekhoff biedt verschillende starterspakketten, van basis begeleiding tot complete ondersteuning met maandrapportages en salarisadministratie. Welk pakket bij u past hangt af van uw situatie en behoeften. In een persoonlijk gesprek bespreken we wat u nodig heeft en stellen we een passend pakket samen voor starters in Oldenzaal.'
    },
    {
      question: 'Moet ik verstand hebben van boekhouden om te starten?',
      answer: 'Nee, dat is niet nodig. Riekhoff leert u de basis van ondernemersadministratie. We richten moderne boekhoudsoftware voor u in en geven training. U leert facturen maken, BTW bijhouden en kosten administreren. Het team in Oldenzaal controleert uw boekhouding elk kwartaal, zodat alles klopt.'
    },
    {
      question: 'Kan ik later overstappen van eenmanszaak naar BV?',
      answer: 'Ja, dit kan altijd. Riekhoff begeleidt veel ondernemers in Twente bij deze overstap. We adviseren het juiste moment (vaak bij hogere winsten), regelen de geruisloze inbreng en begeleiden het hele traject. De overstap kan fiscaal voordelig gebeuren zonder afrekenen over stille reserves.'
    },
    {
      question: 'Wat gebeurt er na het eerste jaar met de begeleiding?',
      answer: 'Na het eerste jaar evalueren we samen wat u nodig heeft. Veel starters in Oldenzaal groeien door naar ons reguliere MKB-pakket. U kunt ook kiezen voor losse diensten of project-begeleiding. Riekhoff groeit mee met uw onderneming, van starter tot gevestigd bedrijf in Twente. Er is geen verplichte contractduur.'
    }
  ];

  // Schema.org Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Startersbegeleiding",
    "name": "Startersbegeleiding Oldenzaal",
    "description": "Riekhoff begeleidt startende ondernemers in Oldenzaal en Twente. Van rechtsvorm advies tot administratie opzetten. Complete startersbegeleiding met persoonlijke aanpak.",
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
      {"@type": "ListItem", "position": 3, "name": "Startersbegeleiding", "item": "https://www.riekhoff.nl/diensten/startersbegeleiding"}
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
              src="/kantoor_open_2.jpg"
              alt="Startersbegeleiding Oldenzaal"
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
                  <span className="text-white">Startersbegeleiding</span>
                </div>
                
                <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
                  VOOR STARTENDE ONDERNEMERS
                </p>
                
                <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
                  Startersbegeleiding voor ondernemers in Oldenzaal
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
                    Van <span className="text-accent-yellow">droom</span> naar
                    <span className="block mt-2">succesvolle onderneming</span>
                  </h2>
                </div>
                <div className="lg:col-span-1 lg:mt-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Riekhoff Accountants in Oldenzaal helpt starters in Twente met persoonlijke begeleiding vanaf dag één. Van rechtsvorm advies tot complete administratie.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Starten als ondernemer in Oldenzaal is een spannende stap. Er komt veel op u af: 
                    KvK-inschrijving, rechtsvorm kiezen, administratie opzetten, BTW-nummer aanvragen, 
                    verzekeringen regelen en natuurlijk: klanten vinden.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Riekhoff neemt u deze zorgen uit handen. Met jarenlange ervaring in het begeleiden 
                    van starters in Twente weten we precies wat er komt kijken bij het opstarten van een 
                    succesvolle onderneming. We staan naast u, vanaf het eerste idee tot aan uw eerste winst.
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
                    <p className="text-sm font-semibold text-gray-700 mb-3">Klaar om te starten als ondernemer?</p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                      Plan gratis startgesprek
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="relative">
                    <img 
                      src="/kantoor_open_2.jpg"
                      alt="Starter Oldenzaal Riekhoff"
                      className="rounded-2xl shadow-xl w-full h-auto"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-accent-yellow rounded-xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-8 h-8 text-dark" />
                        <div>
                          <div className="text-xl font-bold text-dark">50+</div>
                          <div className="text-xs text-dark/70">Starters begeleid</div>
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
                    Complete startersbegeleiding
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Alles voor een <span className="text-accent-yellow">vliegende start</span>
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Riekhoff biedt complete begeleiding voor startende ondernemers in Oldenzaal en Twente. 
                  Van het eerste idee tot de eerste winst.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-6">
                {/* Rechtsvorm advies - Large */}
                <div className="lg:col-span-7">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-man-closeup.jpg"
                        alt="Rechtsvorm advies"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Building2 className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow group-hover:bg-accent-yellow group-hover:text-dark transition-all duration-500">
                        Eerste stap
                      </div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl mb-3">Rechtsvorm advies</h3>
                      <p className="text-gray-300 mb-4 max-w-lg">
                        Start als eenmanszaak of direct een BV? Riekhoff maakt een persoonlijke berekening 
                        voor ondernemers in Oldenzaal. Inclusief fiscale vergelijking.
                      </p>
                      <ul className="space-y-2 mb-4">
                        {['Fiscale vergelijking', 'Aansprakelijkheidsanalyse', 'Groeiscenarios'].map((item, i) => (
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

                {/* Ondernemingsplan */}
                <div className="lg:col-span-5">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] lg:h-[500px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-man-meeting.jpg"
                        alt="Ondernemingsplan"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <FileText className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Financiering
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Ondernemingsplan</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Professioneel plan voor banken en investeerders in Twente. Met realistische prognoses.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Marktonderzoek', '3 jaar prognose', 'Break-even analyse'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Op maat
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Administratie opzetten */}
                <div className="lg:col-span-6">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/riekhoff-vrouw-bureau.jpg"
                        alt="Administratie opzetten"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Calculator className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Basis op orde
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Administratie opzetten</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Professionele boekhouding vanaf dag 1. Met moderne software zoals Exact Online.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Software setup', 'Grootboekschema', 'Training boekhouden'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Eenmalig
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Eerste jaar begeleiding */}
                <div className="lg:col-span-6">
                  <a href="/contact" className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[400px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500">
                    <div className="absolute inset-0">
                      <img
                        src="/vergader_deur.jpg"
                        alt="Eerste jaar begeleiding"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'}} />
                    
                    <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500">
                      <Shield className="w-7 h-7 text-accent-yellow group-hover:text-dark transition-colors duration-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                        Zekerheid
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-3">Eerste jaar begeleiding</h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Complete ondersteuning tijdens het cruciale eerste jaar. Met vaste maandprijs.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {['Kwartaal check-ups', 'BTW aangiften', 'Proactief advies'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
                        Vaste prijs
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-xl p-6 border-2 border-accent-yellow/20">
                  <div className="flex-1 text-left">
                    <p className="font-bold mb-1">Gratis startgesprek voor ondernemers</p>
                    <p className="text-sm text-gray-600">Vrijblijvend advies over uw plannen bij Riekhoff in Oldenzaal</p>
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
                  <Sparkles className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Starters Specialist</h3>
                <p className="text-gray-400 text-sm">
                  Vaste lage prijs voor complete begeleiding
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Snelle Start</h3>
                <p className="text-gray-400 text-sm">
                  Snel gestart met uw onderneming
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Persoonlijk</h3>
                <p className="text-gray-400 text-sm">
                  Vaste adviseur die u kent
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">50+ starters</h3>
                <p className="text-gray-400 text-sm">
                  Ervaring met starters in Twente
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
                  Van idee tot <span className="text-accent-yellow">onderneming</span> in 5 stappen
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Een bewezen stappenplan voor starters in Oldenzaal. Riekhoff begeleidt u 
                  van het eerste idee tot aan uw eerste klant.
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
                  Start vandaag nog uw onderneming met begeleiding van Riekhoff
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                  Plan gratis startgesprek
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
              src="/skyline_detail.jpg"
              alt="Oldenzaal centrum"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <blockquote className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                  "Wij geloven in starters. Daarom maken we professionele begeleiding betaalbaar met persoonlijke aandacht."
                </blockquote>
                <cite className="block">
                  <p className="text-accent-yellow text-xl font-semibold mb-1">Bas Riekhoff</p>
                  <p className="text-gray-400">Eigenaar & Belastingadviseur</p>
                </cite>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Meer dan 50 starters begeleid</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We hebben inmiddels meer dan 50 starters in Oldenzaal en Twente geholpen 
                    met het opzetten van hun onderneming. Van ZZP tot BV.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Hoog succespercentage</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Het merendeel van onze starters is na 3 jaar nog actief en groeiend. 
                    Dat komt door goede begeleiding vanaf dag één.
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
                  Veelgestelde vragen van <span className="text-accent-yellow">starters</span>
                </h2>
                <p className="text-gray-600">
                  Alles wat startende ondernemers in Oldenzaal willen weten over 
                  administratie, belastingen en begeleiding.
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