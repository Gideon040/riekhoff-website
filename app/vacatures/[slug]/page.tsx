import React from 'react';
import { 
  MapPin,
  Clock,
  Euro,
  Briefcase,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
  Coffee
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Deze data komt later uit Supabase
const vacatures = {
  'fiscaal-aangiftemedewerker': {
    title: 'Fiscaal aangiftemedewerker',
    department: 'Fiscale dienstverlening',
    location: 'Oldenzaal',
    hours: '24 - 40 uur',
    type: 'Parttime / Fulltime',
    salary: 'Naar ervaring',
    postedDate: '2024-01-15',
    
    // Gewone tekst (CMS vriendelijk)
    description: `Ben jij een ervaren fiscalist die ondernemers wil helpen met hun belastingaangiftes? Versterk ons groeiende team in Oldenzaal!

Riekhoff accountants en adviseurs is een jong en dynamisch kantoor in Oldenzaal. Sinds 2020 zijn we gegroeid naar 12 professionals en onze klantenkring breidt zich steeds verder uit. We werken voornamelijk voor het MKB in Twente en bieden complete fiscale dienstverlening.`,
    
    // Gewone tekst - Wat ga je doen
    responsibilities: `Als fiscaal aangiftemedewerker verzorg je belastingaangiftes (IB, VPB en OB) voor ondernemers in Oldenzaal en omgeving. Je adviseert klanten over fiscale optimalisatie, houdt wetswijzigingen bij en stelt bezwaarschriften op indien nodig.

Je werkt nauw samen met onze accountants bij jaarrekeningen en tussentijdse rapportages. Door de kleinschaligheid van ons kantoor heb je direct contact met klanten en denk je actief mee over hun fiscale situatie.`,
    
    // 5 belangrijkste eisen (bullets)
    requirements: [
      'Afgeronde fiscale opleiding (SPD, PAB, kandidaat RB of vergelijkbaar)',
      'Minimaal 2 jaar werkervaring in de fiscale praktijk',
      'Goede kennis van belastingwetgeving (IB/VPB/OB)',
      'Proactieve houding en klantgericht',
      'Woonachtig in Twente of bereid te verhuizen'
    ],
    
    // 5 belangrijkste benefits (bullets)
    offers: [
      'Marktconform salaris afhankelijk van ervaring',
      'Hybride werken mogelijk (kantoor/thuis)',
      'Opleidingsbudget voor PE-punten',
      'Informele werksfeer in jong team (12 collega\'s)',
      'Kantoor in Oldenzaal met gratis parkeren'
    ],
    
    // Gewone tekst - Procedure
    process: `Solliciteer via email met je CV en motivatie. We nemen binnen 3 werkdagen contact op voor een eerste kennismakingsgesprek op kantoor in Oldenzaal (30-45 min). Bij wederzijdse interesse volgt een tweede gesprek met het team, waarna we tot een contract aanbieding komen. Startdatum in overleg.`,
    
    contactPerson: 'Bas Riekhoff',
    contactEmail: 'bas@riekhoff.nl',
    contactPhone: '06 303 974 66'
  },
  
  'accountant-aa': {
    title: 'Accountant AA',
    department: 'Accountancy',
    location: 'Oldenzaal',
    hours: '32 - 40 uur',
    type: 'Parttime / Fulltime',
    salary: 'Marktconform',
    postedDate: '2024-01-10',
    
    description: `Wil jij onze samenstelpraktijk naar het volgende niveau tillen? Kom ons team versterken en bouw mee aan de groei van Riekhoff in Twente!

Riekhoff accountants en adviseurs is een jong en groeiend bedrijf. Sinds de opening van ons kantoor in Oldenzaal op 1 januari 2020 weten onze klanten ons steeds beter te vinden. Ons team is gegroeid naar 12 enthousiaste collega's. Wij werken voornamelijk voor het MKB en maken daarbij zoveel mogelijk gebruik van moderne automatiseringsmogelijkheden.`,
    
    responsibilities: `Als Accountant AA stel je jaarrekeningen samen voor diverse rechtsvormen (eenmanszaak, VOF, BV) en verzorg je tussentijdse management rapportages. Je coördineert en begeleidt junior medewerkers en adviseert klanten over financiële optimalisaties.

Daarnaast draag je bij aan de groei van de organisatie door interne processen te verbeteren en nieuwe klanten te werven. Je hebt veel autonomie en kunt echt impact maken in een groeiend kantoor.`,
    
    requirements: [
      'Afgeronde AA-opleiding (of bijna afgerond)',
      'Minimaal 3-5 jaar ervaring in accountantspraktijk',
      'Ervaring met MKB jaarrekeningen',
      'Leidinggevende capaciteiten en coachend vermogen',
      'Ondernemende instelling en hands-on mentaliteit'
    ],
    
    offers: [
      'Uitstekend salaris passend bij ervaring',
      'Kans om mede-eigenaar te worden op termijn',
      'Veel verantwoordelijkheid en autonomie',
      'Opleidingsbudget voor RA-opleiding',
      'Moderne werkplek + flexibele werktijden'
    ],
    
    process: `Solliciteer via email met je CV en motivatiebrief. We plannen eerst een telefonisch kennismakingsgesprek (15 min), gevolgd door een gesprek op kantoor met Bas en Onno. Bij interesse kun je een dag meelopen om het team te leren kennen. Na een tweede gesprek over arbeidsvoorwaarden komen we tot een contract aanbieding. Startdatum is flexibel in overleg.`,
    
    contactPerson: 'Bas Riekhoff & Onno Scheuten',
    contactEmail: 'bas@riekhoff.nl',
    contactPhone: '06 303 974 66'
  }
};

// Deze functie genereert de static paths (voor build time)
export async function generateStaticParams() {
  return Object.keys(vacatures).map((slug) => ({
    slug: slug,
  }));
}

// Deze functie genereert metadata per vacature
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vacature = vacatures[slug as keyof typeof vacatures];
  
  if (!vacature) {
    return {
      title: 'Vacature niet gevonden | Riekhoff Accountants',
    };
  }

  return {
    title: `${vacature.title} | Vacature Riekhoff Oldenzaal`,
    description: `${vacature.title} gezocht (${vacature.hours}). Kom werken bij Riekhoff Accountants in Oldenzaal. ${vacature.description.substring(0, 100)}...`,
    openGraph: {
      title: `${vacature.title} | Riekhoff Accountants`,
      description: vacature.description.substring(0, 150),
      url: `https://www.riekhoff.nl/vacatures/${slug}`,
      siteName: 'Riekhoff Accountants en Adviseurs',
      locale: 'nl_NL',
      type: 'website',
    }
  };
}

export default async function VacatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vacature = vacatures[slug as keyof typeof vacatures];

  if (!vacature) {
    notFound();
  }

  // Schema.org JobPosting markup
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": vacature.title,
    "description": vacature.description,
    "datePosted": vacature.postedDate,
    "employmentType": vacature.type,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Riekhoff Accountants en Adviseurs",
      "sameAs": "https://www.riekhoff.nl",
      "logo": "https://www.riekhoff.nl/logo.jpg"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bentheimergraven 11",
        "addressLocality": "Oldenzaal",
        "addressRegion": "Overijssel",
        "postalCode": "7577 DA",
        "addressCountry": "NL"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "value": 0,
        "unitText": "YEAR"
      }
    }
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
        "name": "Vacatures",
        "item": "https://www.riekhoff.nl/vacatures"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": vacature.title,
        "item": `https://www.riekhoff.nl/vacatures/${slug}`
      }
    ]
  };

  const benefits = [
    { icon: Users, text: 'Klein team van 12 collega\'s' },
    { icon: TrendingUp, text: 'Groeiend kantoor sinds 2020' },
    { icon: Coffee, text: 'Informele werksfeer' },
    { icon: Award, text: 'Opleidingsbudget & PE-punten' }
  ];

  return (
    <>
      {/* Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-white text-dark">
        
        {/* HERO */}
        <section className="relative w-full bg-dark py-16 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-accent-yellow transition-colors">Home</Link>
                <span>/</span>
                <Link href="/vacatures" className="hover:text-accent-yellow transition-colors">Vacatures</Link>
                <span>/</span>
                <span className="text-white">{vacature.title}</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent-yellow text-dark px-4 py-1.5 rounded-full text-sm font-semibold">
                  Vacature
                </span>
                <span className="text-gray-400 text-sm">{vacature.department}</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {vacature.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent-yellow" />
                  {vacature.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent-yellow" />
                  {vacature.hours}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent-yellow" />
                  {vacature.type}
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="w-5 h-5 text-accent-yellow" />
                  {vacature.salary}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#solliciteren"
                  className="inline-flex items-center justify-center gap-2 bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                >
                  Direct solliciteren
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${vacature.contactEmail}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Mail ons
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Intro */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Over de functie</h2>
                  <div className="prose prose-lg max-w-none">
                    {vacature.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Responsibilities - Nu gewone tekst */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Wat ga je doen?</h2>
                  <div className="prose prose-lg max-w-none">
                    {vacature.responsibilities.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Requirements - Blijft 5 bullets */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Wat breng je mee?</h2>
                  <ul className="space-y-3">
                    {vacature.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What We Offer - Blijft 5 bullets */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Wat bieden wij?</h2>
                  <ul className="space-y-3">
                    {vacature.offers.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process - Nu gewone tekst */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Sollicitatieprocedure</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {vacature.process}
                    </p>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-6 space-y-6">
                  
                  {/* Apply Card */}
                  <div id="solliciteren" className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Solliciteer direct</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Mail je CV en motivatie naar {vacature.contactPerson}
                    </p>
                    <div className="space-y-3">
                      <a 
                        href={`mailto:${vacature.contactEmail}?subject=Sollicitatie ${vacature.title}`}
                        className="flex items-center justify-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all w-full"
                      >
                        <Mail className="w-5 h-5" />
                        Email
                      </a>
                      <a 
                        href={`tel:${vacature.contactPhone.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-2 border-2 border-gray-300 text-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all w-full"
                      >
                        <Phone className="w-5 h-5" />
                        Bellen
                      </a>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
                    <h3 className="font-bold mb-4">Contact</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Contactpersoon</p>
                        <p className="font-semibold">{vacature.contactPerson}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Email</p>
                        <a href={`mailto:${vacature.contactEmail}`} className="text-accent-yellow hover:underline">
                          {vacature.contactEmail}
                        </a>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Telefoon</p>
                        <a href={`tel:${vacature.contactPhone.replace(/\s/g, '')}`} className="text-accent-yellow hover:underline">
                          {vacature.contactPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
                    <h3 className="font-bold mb-4">Werken bij Riekhoff</h3>
                    <div className="space-y-3">
                      {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-accent-yellow" />
                            </div>
                            <span className="text-sm text-gray-600">{benefit.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Share - Removed onClick voor Server Component */}
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100 text-center">
                    <p className="text-sm text-gray-600 mb-3">Ken jij iemand voor deze functie?</p>
                    <p className="text-xs text-gray-500">
                      Kopieer de URL om te delen
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Other Vacatures */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Andere vacatures</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(vacatures)
                  .filter(([vacSlug]) => vacSlug !== slug)
                  .map(([vacSlug, vac]) => (
                    <Link
                      key={vacSlug}
                      href={`/vacatures/${vacSlug}`}
                      className="block bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-accent-yellow transition-all group"
                    >
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent-yellow transition-colors">
                        {vac.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>{vac.location}</span>
                        <span>•</span>
                        <span>{vac.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent-yellow font-semibold text-sm">
                        Bekijk vacature
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}