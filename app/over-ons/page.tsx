import React from 'react';
import { 
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Users,
  Building2,
  Target,
  Shield,
  Award,
  Heart,
  Sparkles,
  User,
  MapPin,
  Calendar
} from 'lucide-react';

export default function OverOns() {
  // Teamleden data
  const teamleden = [
    {
      naam: 'Bas Riekhoff',
      functie: 'Eigenaar / Accountant & Register Belastingadviseur',
      telefoon: '+31 6 303 974 66',
      email: 'bas@riekhoff.nl',
      foto: 'https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/xchopw/basriekhoff.png?enable-io=true&width=400',
      beschrijving: 'Als oprichter en eigenaar van Riekhoff Accountants zet Bas zich dagelijks in voor persoonlijke dienstverlening aan ondernemers in Twente.',
      eigenaar: true
    },
    {
      naam: 'Onno Scheuten',
      functie: 'Eigenaar / Adviseur',
      telefoon: '+31 6 133 836 11',
      email: 'onno@riekhoff.nl',
      foto: 'https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/fnzqfr/onnoscheuten.png?enable-io=true&crop=1%3A1%2Coffset-x66%2Coffset-y5&width=400',
      beschrijving: 'Onno combineert jarenlange ervaring met een frisse blik op financieel advies voor MKB-ondernemers.',
      eigenaar: true
    },
    {
      naam: 'Bryan Singh',
      functie: 'Eigenaar / Accountant',
      telefoon: '+31 6 353 16 752',
      email: 'bryan@riekhoff.nl',
      foto: 'https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/image-high.png?enable-io=true&crop=1%3A1&width=400',
      beschrijving: 'Bryan brengt moderne inzichten en digitale expertise naar ons team van accountants.',
      eigenaar: true
    },
    {
      naam: 'Ingrid Morshuis',
      functie: 'Medewerker aangiftepraktijk',
      telefoon: '+31 541 200 007',
      email: 'ingrid@riekhoff.nl',
      foto: 'https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/902n4h/ingridmorshuis.png?enable-io=true&crop=1%3A1%2Coffset-y64&width=400',
      beschrijving: 'Ingrid zorgt voor accurate en tijdige verwerking van alle belastingaangiften.'
    },
    {
      naam: 'Pieter Reitsma',
      functie: 'Junior belastingadviseur',
      telefoon: '+31 541 200 007',
      email: 'pieter@riekhoff.nl',
      foto: null,
      beschrijving: 'Pieter ondersteunt ondernemers met fiscaal advies en belastingoptimalisatie.'
    },
    {
      naam: 'Wout Sanderink',
      functie: 'Assistent accountant',
      telefoon: '+31 6 224 993 49',
      email: 'wout@riekhoff.nl',
      foto: 'https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/0qc8tq/woutsanderink.png?enable-io=true&crop=1%3A1%2Coffset-y64&width=400',
      beschrijving: 'Wout ondersteunt het team met nauwkeurige administratieve werkzaamheden.'
    },
    {
      naam: 'Jorien Middelbos',
      functie: 'Senior assistent accountant',
      telefoon: '+31 541 200 007',
      email: 'jorien@riekhoff.nl',
      foto: 'https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/es71nr/jorienmiddelbos.png?enable-io=true&width=400',
      beschrijving: 'Jorien brengt senioriteit en ervaring in de dagelijkse accountancy praktijk.'
    },
    {
      naam: 'Deborah Hek',
      functie: 'Assistent accountant',
      telefoon: '+31 541 200 007',
      email: 'deborah@riekhoff.nl',
      foto: null,
      beschrijving: 'Deborah draagt bij aan de accurate verwerking van financiële administraties.'
    },
    {
      naam: 'Renée Riekhoff',
      functie: 'Assistent accountant',
      telefoon: '+31 541 200 007',
      email: 'renee@riekhoff.nl',
      foto: 'https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/apljfv/reneetreepriekhoff.png?enable-io=true&width=400',
      beschrijving: 'Renée combineert familie-ervaring met professionele accountancy dienstverlening.'
    },
    {
      naam: 'Kim Nieland',
      functie: 'Assistent accountant',
      telefoon: '+31 541 200 007',
      email: 'kim@riekhoff.nl',
      foto: null,
      beschrijving: 'Kim ondersteunt het team met betrouwbare administratieve dienstverlening.'
    },
    {
      naam: 'Mohammad Abazid',
      functie: 'Assistent accountant',
      telefoon: '+31 541 200 007',
      email: 'mohammad@riekhoff.nl',
      foto: null,
      beschrijving: 'Mohammad brengt internationale ervaring naar ons diverse team.'
    },
    {
      naam: 'Dirk Westerhof',
      functie: 'Assistent accountant',
      telefoon: '+31 541 200 007',
      email: 'dirk@riekhoff.nl',
      foto: null,
      beschrijving: 'Dirk zorgt voor nauwkeurige ondersteuning bij alle accountancy werkzaamheden.'
    }
  ];

  const kernwaarden = [
    {
      titel: 'Klant',
      beschrijving: 'De klant staat centraal. We investeren in de relatie en denken proactief mee.',
      icon: Heart
    },
    {
      titel: 'Kennis',
      beschrijving: 'Jarenlange ervaring gecombineerd met continue bijscholing voor het beste advies.',
      icon: Award
    },
    {
      titel: 'Kwaliteit',
      beschrijving: 'Gecertificeerd door NBA en Register Belastingadviseurs. Kwaliteit gegarandeerd.',
      icon: Shield
    }
  ];

  const mijlpalen = [
    { jaar: '2020', titel: 'Oprichting', beschrijving: 'Start van Riekhoff Accountants in Oldenzaal' },
    { jaar: '2021', titel: 'Groei', beschrijving: 'Uitbreiding team en dienstverlening' },
    { jaar: '2023', titel: 'Certificering', beschrijving: 'NBA en RB certificeringen behaald' },
    { jaar: '2024', titel: 'Vernieuwing', beschrijving: 'Digitalisering en moderne aanpak' }
  ];

  // Schema.org Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Riekhoff Accountants en Adviseurs",
    "description": "Modern accountantskantoor in Oldenzaal voor MKB-ondernemers in Twente",
    "url": "https://www.riekhoff.nl",
    "telephone": "+31541200007",
    "email": "info@riekhoff.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bentheimergraven 11",
      "addressLocality": "Oldenzaal",
      "postalCode": "7577 DA",
      "addressCountry": "NL"
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Bas Riekhoff",
        "jobTitle": "Eigenaar / Accountant & Register Belastingadviseur"
      }
    ],
    "foundingDate": "2020",
    "numberOfEmployees": 12,
    "slogan": "Klant, kennis, kwaliteit",
    "areaServed": ["Oldenzaal", "Twente", "Overijssel"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.riekhoff.nl"},
      {"@type": "ListItem", "position": 2, "name": "Over ons", "item": "https://www.riekhoff.nl/over-ons"}
    ]
  };

  return (
    <>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-white text-dark">
  
  {/* SUBTLE HERO */}
  <section className="relative w-full overflow-hidden h-80">
    <div className="absolute inset-0 bg-dark" />
    <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mr-20">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=800&fit=crop"
        alt="Riekhoff Accountants kantoor Oldenzaal"
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
            <span className="text-white">Over ons</span>
          </div>
          
          <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
            HET TEAM ACHTER UW SUCCES
          </p>
          
          <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
            Modern accountantskantoor in Oldenzaal
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
                    Klein genoeg voor <span className="text-accent-yellow">persoonlijke aandacht</span>,
                    <span className="block mt-2">groot genoeg voor professioneel advies</span>
                  </h2>
                </div>
                <div className="lg:col-span-1 lg:mt-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Sinds 2020 helpen we ondernemers in Twente met moderne accountancy, 
                    fiscaal advies en persoonlijke begeleiding.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Riekhoff Accountants en Adviseurs is een modern kantoor gevestigd in Oldenzaal. 
                    Door de kleinschaligheid van ons bedrijf hebben we de volle aandacht voor al onze 
                    klanten, zijn we in staat om snel te reageren op vragen en denken we altijd met je 
                    mee van a tot z.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Op ons kantoor heerst een open sfeer waarbij professionaliteit en collegialiteit 
                    hand in hand gaan. Wij stellen ons positief-kritisch op en tonen onze deskundigheid 
                    in ieder advies. Bij ons staan de klant, kennis en kwaliteit voorop.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      '12 professionals',
                      'Opgericht in 2020',
                      'NBA gecertificeerd',
                      'Register Belastingadviseurs',
                      'MKB specialist',
                      'Digitaal voorop',
                      'Persoonlijke aanpak',
                      'Snelle respons'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-accent-yellow" />
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <Building2 className="w-12 h-12 text-accent-yellow mb-4" />
                    <h3 className="text-xl font-bold mb-4">Ons kantoor</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-semibold">Bezoekadres</p>
                          <p className="text-gray-600">Bentheimergraven 11<br/>7577 DA Oldenzaal</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-semibold">Openingstijden</p>
                          <p className="text-gray-600">Ma-Vr: 08:30 - 17:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* TEAM SECTION - Grid met foto's */}
        <section id="team" className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6 inline-block">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
                    Ons team
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  De mensen van <span className="text-accent-yellow">Riekhoff</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Een team van 12 professionals staat klaar om ondernemers in Oldenzaal 
                  en Twente te helpen met accountancy, fiscaal advies en meer.
                </p>
              </div>

              {/* Eigenaren eerst - grotere kaarten */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {teamleden.filter(lid => lid.eigenaar).map((lid, i) => (
                  <div key={i} className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-accent-yellow transition-all hover:shadow-xl">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden">
                      {lid.foto ? (
                        <img 
                          src={lid.foto}
                          alt={lid.naam}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <User className="w-20 h-20 text-gray-400" />
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-accent-yellow text-dark px-3 py-1 rounded-full text-xs font-bold uppercase">
                        Eigenaar
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{lid.naam}</h3>
                      <p className="text-accent-yellow text-sm font-medium mb-3">{lid.functie}</p>
                      <p className="text-gray-600 text-sm mb-4">{lid.beschrijving}</p>
                      <div className="space-y-2">
                        <a href={`tel:${lid.telefoon.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent-yellow transition-colors">
                          <Phone className="w-4 h-4" />
                          <span>{lid.telefoon}</span>
                        </a>
                        <a href={`mailto:${lid.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent-yellow transition-colors">
                          <Mail className="w-4 h-4" />
                          <span>{lid.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rest van het team - kleinere kaarten */}
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamleden.filter(lid => !lid.eigenaar).map((lid, i) => (
                  <div key={i} className="group bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-accent-yellow transition-all hover:shadow-lg">
                    <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                      {lid.foto ? (
                        <img 
                          src={lid.foto}
                          alt={lid.naam}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <User className="w-16 h-16 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{lid.naam}</h3>
                      <p className="text-gray-600 text-sm mb-3">{lid.functie}</p>
                      <div className="space-y-1">
                        <a href={`mailto:${lid.email}`} className="flex items-center gap-2 text-xs text-gray-600 hover:text-accent-yellow transition-colors">
                          <Mail className="w-3 h-3" />
                          <span className="truncate">{lid.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KERNWAARDEN - Visual cards */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6 inline-block">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
                    Onze waarden
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Waar wij voor <span className="text-accent-yellow">staan</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Bij Riekhoff staan drie kernwaarden centraal in alles wat we doen
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {kernwaarden.map((waarde, i) => {
                  const Icon = waarde.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-100 hover:border-accent-yellow">
                      <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-accent-yellow" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{waarde.titel}</h3>
                      <p className="text-gray-600 leading-relaxed">{waarde.beschrijving}</p>
                    </div>
                  );
                })}
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
                Kennismaken met <span className="text-accent-yellow">Riekhoff</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kom langs voor een kop koffie op ons kantoor in Oldenzaal. 
                We maken graag tijd voor een vrijblijvend gesprek.
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
                  <span>Riekhoff Accountants & Adviseurs | Bentheimergraven 11, 7577 DA Oldenzaal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}