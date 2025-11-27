import React from 'react';
import { AlertCircle, Mail, Phone, MapPin, ChevronRight, Shield, FileText } from 'lucide-react';

export default function Klachtenregeling() {
  const sections = [
    {
      title: '1. Klachten naar aanleiding van de uitvoering van werkzaamheden',
      content: `Indien ontevredenheid bestaat over de uitvoering van onze werkzaamheden of over de medewerkers van ons kantoor, kan dit aanleiding zijn tot het indienen van een klacht.

Een klacht moet schriftelijk worden ingediend met vermelding van naam en adres van de klager.

Klagers moeten zich in eerste instantie wenden tot de verantwoordelijke accountant. Het is de verantwoordelijkheid van de accountant om andere leidinggevenden schriftelijk te informeren zodra hem een klacht heeft bereikt en hem te voorzien van alle relevante documentatie. Klagers kunnen zich desgewenst ook rechtstreeks schriftelijk tot de leidinggevenden wenden.`
    },
    {
      title: '2. Meldingen naar aanleiding van vermeende onregelmatigheden of incidenten',
      content: `Personen die een vermeende onregelmatigheid binnen of (mede) buiten ons kantoor aan de orde willen stellen, kunnen dit melden bij de leidinggevenden van ons kantoor en de beroepsorganisatie NBA.

Het gaat hierbij om onregelmatigheden die van invloed kunnen zijn op de kwaliteit van de uitvoering van onze werkzaamheden, dan wel om vermoedens dat er sprake is van een (dreigende) betrokkenheid van ons kantoor en/of haar medewerkers bij een strafbaar feit en/of wetsovertreding die het vertrouwen in ons kantoor of in de financiële markten kan schaden.

Een melding moet schriftelijk worden ingediend met vermelding van naam en adres van de melder.`
    },
    {
      title: '3. Onderzoek kantoorleiding',
      content: `De kantoorleiding geeft naar aanleiding van een klacht of melding binnen 10 werkdagen schriftelijk bericht aan klager c.q. melder dat de klacht c.q. melding in behandeling is genomen. In het geval van een klacht of melding, die betrekking heeft op een bepaalde medewerker informeert de kantoorleiding tevens deze medewerker.

De kantoorleiding onderzoekt de klacht c.q. melding en is in dat kader bevoegd om kennis te nemen van alle opdrachtdocumentatie die hij relevant acht. De anonimiteit van de betrokken persoon wordt op diens verzoek gewaarborgd, mits dit niet in strijd is met wettelijke verplichtingen en mits de gerechtvaardigde belangen van het kantoor hierdoor niet in gevaar komen.

De kantoorleiding is bevoegd om:
- Juridisch advies in te winnen als hij dat nodig acht
- Alle betrokkenen te horen
- Het bureau vaktechniek van de NBA te raadplegen (verplicht)

De kantoorleiding documenteert het onderzoek zodanig dat het dossier de conclusies kan dragen. Hij formuleert zijn conclusie en stelt de betrokken personen in de gelegenheid hun visie daarop te geven. Vervolgens rapporteert de kantoorleiding aan de betrokkenen.

Het rapport van de kantoorleiding heeft het karakter van een advies. In dit advies geeft de kantoorleiding aan of naar zijn oordeel de klacht c.q. melding gegrond is, of er gebeurtenissen hebben plaatsgevonden waarbij sprake is van betrokkenheid van ons kantoor en/of haar medewerkers bij strafbare feiten en/of wetsovertredingen, en of er aanleiding is voor de kantoorleiding om maatregelen te nemen.

De kantoorleiding rondt zijn onderzoek binnen een redelijke termijn af.`
    },
    {
      title: '4. Rol van de kantoorleiding',
      content: `Het is de taak van de leiding van het kantoor om:

- Een besluit te nemen over de klacht c.q. melding
- Het besluit en de motivering daarvan aan de betrokken personen en aan de betrokken cliënt mee te delen en eventueel te bespreken
- Passende sancties te treffen
- Waar van toepassing de ingevolge wet- en regelgeving verplichte meldingen te doen (het bureau vaktechniek van de NBA wordt hier steeds in geconsulteerd)
- Zo nodig maatregelen te nemen tot aanpassing van instructies, opleidingen of voorschriften

De kantoorleiding rondt de behandeling van de klacht c.q. melding binnen een redelijke termijn af. Mededelingen van de kantoorleiding zoals bedoeld in deze bepaling vinden steeds schriftelijk plaats.`
    },
    {
      title: '5. Geheimhouding',
      content: `Alle medewerkers die op enigerlei wijze betrokken zijn bij de behandeling van een klacht of melding in de zin van deze regeling, zijn verplicht tot geheimhouding overeenkomstig de binnen ons kantoor geldende regels, met inbegrip van deze regeling.

Alle mededelingen die in het kader van de uitvoering van deze regeling worden gedaan, bevatten niet meer informatie dan voor het onderzoek respectievelijk de uitvoering van deze regeling noodzakelijk is.

Het voorgaande laat onverlet dat het noodzakelijk kan zijn de feiten die aanleiding hebben gegeven tot de klacht of melding, mee te delen aan bevoegde autoriteiten op grond van een wettelijke verplichting tot melding.

Het meldingdossier wordt bewaard gedurende tenminste zeven jaar onder verantwoordelijkheid van de kantoorleiding. Dossiers worden vernietigd na afloop van de bewaartermijn.`
    },
    {
      title: '6. Rechtsbescherming',
      content: `De kantoorleiding waarborgt dat de medewerker die met inachtneming van deze regeling een klacht heeft ingediend of een melding heeft gedaan, wordt beschermd tegen de eventuele nadelige effecten hiervan voor zijn/haar positie binnen kantoor, ongeacht de uitkomst van de behandeling van de betreffende klacht of de melding.`
    },
    {
      title: '7. Wet bescherming persoonsgegevens',
      content: `De Wet bescherming persoonsgegevens is van toepassing op de verwerking van persoonsgegevens in het kader van deze regeling. De kantoorleiding moet zorgdragen voor de correcte naleving van de Wet bescherming persoonsgegevens in het kader van deze regeling.`
    },
    {
      title: '8. Bekendmaking van deze regeling',
      content: `Aan deze regeling wordt bekendheid gegeven door opneming in het kantoorhandboek en door publicatie op de website van kantoor.`
    }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Klachtenregeling Riekhoff Accountants",
    "description": "Klachten en meldingsregeling van Riekhoff accountants en adviseurs B.V.",
    "url": "https://www.riekhoff.nl/klachtenregeling",
    "publisher": {
      "@type": "Organization",
      "name": "Riekhoff Accountants en Adviseurs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bentheimergraven 11",
        "addressLocality": "Oldenzaal",
        "postalCode": "7577 DA",
        "addressCountry": "NL"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.riekhoff.nl"},
      {"@type": "ListItem", "position": 2, "name": "Klachtenregeling", "item": "https://www.riekhoff.nl/klachtenregeling"}
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-white text-dark">
        {/* HERO */}
        <section className="relative w-full overflow-hidden h-80">
          <div className="absolute inset-0 bg-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/90" />
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16">
              <div className="max-w-[600px]">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                  <a href="/" className="hover:text-accent-yellow transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-white">Klachtenregeling</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-accent-yellow" />
                  <p className="text-accent-yellow uppercase text-xs font-semibold tracking-wider">
                    KLACHTEN & MELDINGEN
                  </p>
                </div>
                
                <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-4">
                  Klachten en meldingsregeling
                </h1>
                
                <p className="text-gray-300 text-sm">
                  Riekhoff accountants en adviseurs B.V. hecht waarde aan kwalitatief goede dienstverlening. 
                  Mocht u toch niet tevreden zijn, dan kunt u een klacht indienen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-accent-yellow/10 border-l-4 border-accent-yellow rounded-r-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wij streven ernaar om uw verwachtingen te overtreffen. Mocht er toch iets niet naar 
                  wens verlopen, dan willen we dit graag van u horen. Uw feedback helpt ons om onze 
                  dienstverlening te verbeteren.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Deze klachten- en meldingsregeling beschrijft hoe u een klacht of melding kunt indienen 
                  en hoe wij deze behandelen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Klacht indienen?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Schriftelijk indienen */}
                <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all">
                  <div className="w-12 h-12 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-accent-yellow" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Schriftelijk indienen</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Dien uw klacht schriftelijk in met vermelding van uw naam en adres. U ontvangt binnen 
                    10 werkdagen bericht dat uw klacht in behandeling is genomen.
                  </p>
                  <a href="mailto:info@riekhoff.nl" className="inline-flex items-center gap-2 text-accent-yellow font-semibold text-sm hover:gap-3 transition-all">
                    <Mail className="w-4 h-4" />
                    info@riekhoff.nl
                  </a>
                </div>

                {/* Eerst contact opnemen */}
                <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all">
                  <div className="w-12 h-12 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-accent-yellow" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Eerst contact opnemen</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Wilt u liever eerst persoonlijk contact? Bel of mail uw verantwoordelijke accountant 
                    of de kantoorleiding. Vaak kunnen we het direct oplossen.
                  </p>
                  <a href="tel:+31541200007" className="inline-flex items-center gap-2 text-accent-yellow font-semibold text-sm hover:gap-3 transition-all">
                    <Phone className="w-4 h-4" />
                    0541 200 007
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Hoe verloopt de behandeling?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center text-dark font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Ontvangstbevestiging</h3>
                    <p className="text-gray-600 text-sm">
                      Binnen 10 werkdagen ontvangt u schriftelijk bericht dat uw klacht in behandeling is genomen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center text-dark font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Onderzoek</h3>
                    <p className="text-gray-600 text-sm">
                      De kantoorleiding onderzoekt de klacht grondig en hoort alle betrokkenen. Indien nodig 
                      wordt juridisch advies ingewonnen en het bureau vaktechniek van de NBA geraadpleegd.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center text-dark font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Conclusie en reactie</h3>
                    <p className="text-gray-600 text-sm">
                      U krijgt de gelegenheid om uw visie te geven op de conclusie. Daarna ontvangt u een 
                      schriftelijk rapport met de bevindingen en eventuele maatregelen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center text-dark font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Afhandeling</h3>
                    <p className="text-gray-600 text-sm">
                      De kantoorleiding neemt een besluit en deelt dit met alle betrokkenen. Waar nodig worden 
                      maatregelen getroffen en verplichte meldingen gedaan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED SECTIONS */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Volledige klachtenregeling</h2>
              
              <div className="space-y-4">
                {sections.map((section, i) => (
                  <details key={i} className="group bg-white rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="font-bold pr-8 text-left">{section.title}</h3>
                      <ChevronRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6">
                      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BESCHERMING */}
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-accent-yellow/10 border-l-4 border-accent-yellow rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-accent-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Uw rechten zijn beschermd</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Medewerkers die een klacht indienen of melding doen worden beschermd tegen nadelige 
                      effecten voor hun positie binnen het kantoor. Alle behandelingen verlopen strikt 
                      vertrouwelijk volgens de Wet bescherming persoonsgegevens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold mb-6">Contact opnemen</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="font-semibold mb-3">Kantoorleiding</p>
                    <p className="text-gray-600 mb-4">Riekhoff accountants en adviseurs B.V.</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-600">Retentieweg 20</p>
                          <p className="text-gray-600">7572 PH Oldenzaal</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                        <a href="mailto:info@riekhoff.nl" className="text-gray-600 hover:text-accent-yellow transition-colors">
                          info@riekhoff.nl
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                        <a href="tel:+31541200007" className="text-gray-600 hover:text-accent-yellow transition-colors">
                          0541 200 007
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-3">Beroepsorganisatie</p>
                    <p className="text-gray-600 mb-4">
                      Voor meldingen kunt u ook terecht bij de Nederlandse Beroepsorganisatie van Accountants (NBA).
                    </p>
                    <a 
                      href="https://www.nba.nl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-yellow font-semibold text-sm hover:gap-3 transition-all"
                    >
                      www.nba.nl
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:info@riekhoff.nl" className="inline-flex items-center justify-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                    <Mail className="w-4 h-4" />
                    Klacht indienen via email
                  </a>
                  <a href="tel:+31541200007" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm">
                    <Phone className="w-4 h-4" />
                    Bel voor vragen
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