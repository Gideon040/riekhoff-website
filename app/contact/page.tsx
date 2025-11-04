import React from 'react';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Calendar,
  User,
  MessageSquare,
  Building2,
  Navigation,
  Car,
  Train,
  Send,
  CheckCircle2
} from 'lucide-react';
import type { Metadata } from 'next';

// Metadata voor SEO
export const metadata: Metadata = {
  title: 'Contact Oldenzaal | Accountants Riekhoff | Bentheimergraven 11',
  description: 'Neem contact op met Riekhoff Accountants in Oldenzaal. ✓ Vrijblijvend gesprek ✓ Tel: 0541 200 007 ✓ Bentheimergraven 11 ✓ Ma-Vr 08:30-17:30. Plan afspraak!',
  openGraph: {
    title: 'Contact | Riekhoff Accountants Oldenzaal',
    description: 'Plan een vrijblijvend gesprek met Riekhoff Accountants in Oldenzaal',
    url: 'https://www.riekhoff.nl/contact',
    siteName: 'Riekhoff Accountants en Adviseurs',
    locale: 'nl_NL',
    type: 'website',
  }
};

export default function ContactPage() {
  const contactMethoden = [
    {
      icon: Phone,
      title: 'Bel ons',
      primary: '0541 200 007',
      secondary: 'Ma-Vr 08:30 - 17:30',
      link: 'tel:+31541200007',
      cta: 'Bel kantoor'
    },
    {
      icon: Mail,
      title: 'Mail ons',
      primary: 'info@riekhoff.nl',
      secondary: 'Reactie binnen 24 uur',
      link: 'mailto:info@riekhoff.nl',
      cta: 'Stuur email'
    },
    {
      icon: MapPin,
      title: 'Bezoek ons',
      primary: 'Bentheimergraven 11',
      secondary: '7577 DA Oldenzaal',
      link: 'https://maps.google.com/?q=Bentheimergraven+11+Oldenzaal',
      cta: 'Route plannen'
    }
  ];

  const teamContacten = [
    {
      naam: 'Bas Riekhoff',
      functie: 'Eigenaar / Register Belastingadviseur',
      telefoon: '06 303 974 66',
      email: 'bas@riekhoff.nl',
      specialisatie: 'Fiscale vraagstukken'
    },
    {
      naam: 'Onno Scheuten',
      functie: 'Eigenaar / Adviseur',
      telefoon: '06 133 836 11',
      email: 'onno@riekhoff.nl',
      specialisatie: 'Algemeen advies'
    },
    {
      naam: 'Bryan',
      functie: 'Eigenaar / Accountant',
      telefoon: '06 353 16 752',
      email: 'bryan@riekhoff.nl',
      specialisatie: 'Accountancy'
    }
  ];

  const openingstijden = [
    { dag: 'Maandag', tijd: '08:30 - 17:30' },
    { dag: 'Dinsdag', tijd: '08:30 - 17:30' },
    { dag: 'Woensdag', tijd: '08:30 - 17:30' },
    { dag: 'Donderdag', tijd: '08:30 - 17:30' },
    { dag: 'Vrijdag', tijd: '08:30 - 17:30' },
    { dag: 'Zaterdag', tijd: 'Gesloten' },
    { dag: 'Zondag', tijd: 'Gesloten' }
  ];

  const faqs = [
    {
      question: 'Waar is Riekhoff gevestigd?',
      answer: 'Riekhoff Accountants en Adviseurs is gevestigd aan de Bentheimergraven 11 in Oldenzaal, vlakbij het centrum. Ons kantoor is goed bereikbaar met de auto en er is gratis parkeergelegenheid voor de deur.'
    },
    {
      question: 'Kan ik zonder afspraak langskomen?',
      answer: 'We werken bij voorkeur op afspraak om te garanderen dat we voldoende tijd voor je hebben. Bel of mail vooraf, dan plannen we graag een moment in dat voor jou past. In spoedeisende gevallen proberen we altijd direct tijd vrij te maken.'
    },
    {
      question: 'Is het eerste gesprek gratis?',
      answer: 'Ja, het eerste kennismakingsgesprek bij Riekhoff in Oldenzaal is altijd vrijblijvend en kosteloos. We bespreken graag wat we voor je kunnen betekenen en geven je een offerte op maat.'
    },
    {
      question: 'Hoe snel kan ik terecht bij Riekhoff?',
      answer: 'We streven naar een reactie binnen 24 uur op al je vragen. Voor een persoonlijk gesprek proberen we binnen 1-2 werkdagen een afspraak in te plannen op ons kantoor in Oldenzaal.'
    }
  ];

  // Schema.org data
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "AccountingService",
      "name": "Riekhoff Accountants en Adviseurs",
      "telephone": "+31541200007",
      "email": "info@riekhoff.nl",
      "url": "https://www.riekhoff.nl",
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
      ]
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
        "name": "Contact",
        "item": "https://www.riekhoff.nl/contact"
      }
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-white text-dark">
  
  {/* SUBTLE HERO */}
  <section className="relative w-full overflow-hidden h-80">
    {/* Background */}
    <div className="absolute inset-0 bg-dark" />

    {/* Background Image */}
    <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mr-20">
      <img
        src="kantoor_open_1.jpg"
        alt="Contact Riekhoff Oldenzaal"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/30 lg:from-dark lg:via-dark/90 lg:to-transparent" />

    {/* Content */}
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16">
        <div className="max-w-[500px]">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="/" className="hover:text-accent-yellow transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>

          {/* Label */}
          <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
            NEEM CONTACT OP
          </p>

          {/* Heading */}
          <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
            Kom langs voor een kop koffie in Oldenzaal
          </h1>

        </div>
      </div>
    </div>

    {/* Mobile: Extra dark overlay */}
    <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-black/30 via-transparent to-black/30" />
  </section>

        {/* CONTACT METHODEN */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {contactMethoden.map((methode, i) => {
                  const Icon = methode.icon;
                  return (
                    <a
                      key={i}
                      href={methode.link}
                      className="group bg-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-accent-yellow transition-all hover:shadow-lg"
                    >
                      <div className="w-14 h-14 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-yellow/20 transition-all">
                        <Icon className="w-7 h-7 text-accent-yellow" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{methode.title}</h3>
                      <p className="text-gray-600 font-semibold mb-1">{methode.primary}</p>
                      <p className="text-sm text-gray-500 mb-4">{methode.secondary}</p>
                      <div className="flex items-center gap-2 text-accent-yellow font-semibold text-sm group-hover:gap-3 transition-all">
                        {methode.cta}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* FORMULIER */}
                <div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
                    <h2 className="text-2xl font-bold mb-2">Plan een afspraak</h2>
                    <p className="text-gray-600 mb-8">
                      Vul onderstaand formulier in en we nemen binnen 24 uur contact met je op
                    </p>

                    {/* FORMSPREE FORM */}
                    <form 
                      action="https://formspree.io/f/YOUR_FORM_ID" 
                      method="POST"
                      className="space-y-6"
                    >
                      {/* Naam */}
                      <div>
                        <label htmlFor="naam" className="block text-sm font-semibold text-gray-700 mb-2">
                          Naam *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="naam"
                            name="naam"
                            required
                            placeholder="Jouw naam"
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mailadres *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="jouw@email.nl"
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Telefoon */}
                      <div>
                        <label htmlFor="telefoon" className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefoonnummer
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="telefoon"
                            name="telefoon"
                            placeholder="06 12 34 56 78"
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Bedrijfsnaam */}
                      <div>
                        <label htmlFor="bedrijf" className="block text-sm font-semibold text-gray-700 mb-2">
                          Bedrijfsnaam
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="bedrijf"
                            name="bedrijf"
                            placeholder="Naam bedrijf"
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Onderwerp */}
                      <div>
                        <label htmlFor="onderwerp" className="block text-sm font-semibold text-gray-700 mb-2">
                          Waar kunnen we je mee helpen? *
                        </label>
                        <select
                          id="onderwerp"
                          name="onderwerp"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-all"
                        >
                          <option value="">Selecteer een onderwerp</option>
                          <option value="algemeen">Algemene vraag</option>
                          <option value="accountancy">Accountancy</option>
                          <option value="fiscaal">Fiscale dienstverlening</option>
                          <option value="salaris">Salarisadministratie</option>
                          <option value="starter">Startersbegeleiding</option>
                          <option value="offerte">Offerte aanvraag</option>
                          <option value="afspraak">Afspraak maken</option>
                        </select>
                      </div>

                      {/* Bericht */}
                      <div>
                        <label htmlFor="bericht" className="block text-sm font-semibold text-gray-700 mb-2">
                          Jouw bericht *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <textarea
                            id="bericht"
                            name="bericht"
                            required
                            rows={5}
                            placeholder="Vertel ons meer over je vraag..."
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 outline-none transition-all resize-none"
                          />
                        </div>
                      </div>

                      {/* Privacy */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          required
                          className="mt-1 w-5 h-5 text-accent-yellow border-2 border-gray-300 rounded focus:ring-accent-yellow"
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-600">
                          Ik ga akkoord met het <a href="/privacy" className="text-accent-yellow hover:underline">privacybeleid</a> en geef toestemming om mijn gegevens te gebruiken om contact met mij op te nemen *
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Verstuur bericht
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        We respecteren je privacy en nemen binnen 24 uur contact met je op
                      </p>
                    </form>
                  </div>

                  {/* TRUST SIGNALEN ONDER FORMULIER */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1">24 uur respons</p>
                        <p className="text-xs text-gray-600">We reageren binnen 1 werkdag</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1">Vrijblijvend</p>
                        <p className="text-xs text-gray-600">Eerste gesprek altijd gratis</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTACT INFO & KAART */}
                <div className="space-y-6">
                  
                  {/* Kantoor info */}
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
                    <h3 className="text-xl font-bold mb-6">Kantoor Oldenzaal</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-accent-yellow" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Adres</p>
                          <p className="text-gray-600">Bentheimergraven 11</p>
                          <p className="text-gray-600">7577 DA Oldenzaal</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-accent-yellow" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Telefoon</p>
                          <a href="tel:+31541200007" className="text-gray-600 hover:text-accent-yellow transition-colors">
                            0541 200 007
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-accent-yellow" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">E-mail</p>
                          <a href="mailto:info@riekhoff.nl" className="text-gray-600 hover:text-accent-yellow transition-colors">
                            info@riekhoff.nl
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-accent-yellow" />
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Openingstijden</p>
                          <div className="space-y-1 text-sm">
                            {openingstijden.map((dag, i) => (
                              <div key={i} className="flex justify-between gap-8">
                                <span className="text-gray-600">{dag.dag}</span>
                                <span className={dag.tijd === 'Gesloten' ? 'text-gray-400' : 'text-gray-600 font-medium'}>
                                  {dag.tijd}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps */}
                  <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.123456789!2d6.929770!3d52.313406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b81f5b5b5b5b5b%3A0x1234567890abcdef!2sBentheimergraven%2011%2C%207577%20DA%20Oldenzaal!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Locatie Riekhoff Accountants Oldenzaal"
                    />
                    <div className="p-4 bg-gray-50">
                      <a
                        href="https://maps.google.com/?q=Bentheimergraven+11+Oldenzaal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-accent-yellow font-semibold hover:gap-3 transition-all"
                      >
                        <Navigation className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIRECT CONTACT TEAM */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Direct contact met een <span className="text-accent-yellow">specialist</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Bel of mail direct met één van onze partners voor specifieke vragen
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {teamContacten.map((persoon, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <h3 className="font-bold text-lg mb-1">{persoon.naam}</h3>
                    <p className="text-sm text-gray-600 mb-1">{persoon.functie}</p>
                    <p className="text-xs text-accent-yellow font-semibold mb-4">{persoon.specialisatie}</p>
                    
                    <div className="space-y-2">
                      <a 
                        href={`tel:+31${persoon.telefoon.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-sm hover:text-accent-yellow transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {persoon.telefoon}
                      </a>
                      <a 
                        href={`mailto:${persoon.email}`}
                        className="flex items-center gap-2 text-sm hover:text-accent-yellow transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {persoon.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROUTEBESCHRIJVING */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Route naar <span className="text-accent-yellow">Riekhoff</span> in Oldenzaal
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Met de auto */}
                <div className="bg-white rounded-xl p-8 border-2 border-gray-100">
                  <div className="w-14 h-14 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-6">
                    <Car className="w-7 h-7 text-accent-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Met de auto</h3>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Vanaf A1 (richting vanuit Hengelo):</strong><br />
                      Neem afslag 31 Oldenzaal. Volg N342 richting Oldenzaal centrum. 
                      Na de rotonde rechtsaf de Europaweg op. Bij de stoplichten linksaf 
                      de Ganzenmarkt op. Bentheimergraven is de eerste straat rechts.
                    </p>
                    <p>
                      <strong>Vanaf Duitsland (Gronau):</strong><br />
                      Volg de Ochtruper Strasse richting Oldenzaal. Deze gaat over in de 
                      Bentheimerstraat. Rij rechtdoor tot je bij Bentheimergraven aankomt.
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-semibold mb-2">Parkeren</p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
                          <span>Gratis parkeren voor de deur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
                          <span>Alternatief: Parkeerterrein Ganzenmarkt (2 min lopen)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Openbaar vervoer */}
                <div className="bg-white rounded-xl p-8 border-2 border-gray-100">
                  <div className="w-14 h-14 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-6">
                    <Train className="w-7 h-7 text-accent-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Openbaar vervoer</h3>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Vanaf station Oldenzaal:</strong><br />
                      Loop vanuit het station richting centrum (ca. 15 minuten). 
                      Volg de Stationsstraat, ga linksaf de Ganzenmarkt op. 
                      Bentheimergraven is de eerste straat rechts.
                    </p>
                    <p>
                      <strong>Met de bus:</strong><br />
                      Verschillende buslijnen stoppen bij halte "Ganzenmarkt" in het centrum. 
                      Vandaar is het 2 minuten lopen naar Bentheimergraven 11.
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-semibold mb-2">Reisplanner</p>
                      <a 
                        href="https://9292.nl/reisadvies/station-oldenzaal/oldenzaal_bentheimergraven-11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-yellow font-semibold hover:gap-3 transition-all text-sm"
                      >
                        Plan je reis met 9292
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Veelgestelde vragen over <span className="text-accent-yellow">contact</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="font-bold pr-8">{faq.question}</h3>
                      <ArrowRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
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