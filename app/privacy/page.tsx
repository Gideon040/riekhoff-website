import React from 'react';
import { Shield, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      title: 'Contactgegevens',
      content: `B.H.B. (Bas) Riekhoff AA is binnen ons kantoor het toeziend oog en het eerste aanspreekpunt voor wat betreft de verwerking van persoonsgegevens.

Riekhoff accountants en adviseurs B.V.
Retentieweg 20
7572 PH Oldenzaal
Email: Bas@Riekhoff.nl
Telefoon: 06-30397466`
    },
    {
      title: 'Persoonsgegevens die wij verwerken',
      content: `Riekhoff accountants en adviseurs B.V. verwerkt persoonsgegevens van cliënten wanneer zij gebruik maken van onze diensten en/of cliënten deze gegevens zelf aan ons verstrekken. We verwerken persoonsgegevens ten aanzien van de volgende categorieën:

**1. Cliënten**
De verwerking geschiedt voor identificatie, het opstellen van een risicoprofiel in het kader van de Wwft, het onderhouden van contacten met cliënten, het uitvoeren van werkzaamheden zoals overeengekomen met cliënten, en de uitvoering of toepassing van een andere wet.

We verwerken gegevens zoals naam, adres, geboortedatum, telefoonnummer, bankrekeningnummer, BSN en kopie identificatiebewijs.

**2. Sollicitanten**
Voor de beoordeling van geschiktheid voor een functie verwerken we gegevens zoals naam, contactgegevens, opleidingen, functiegegevens en motivatie.

**3. Salarisadministratie**
Voor het berekenen en vastleggen van salarissen en vergoedingen, belasting en premies verwerken we relevante persoonsgegevens van werknemers.`
    },
    {
      title: 'Bijzondere en gevoelige persoonsgegevens',
      content: `Riekhoff accountants en adviseurs B.V. verwerkt de volgende bijzondere en/of gevoelige persoonsgegevens:

- Ras (indien een kopie van een identificatiedocument wordt opgeslagen in een dossier wanneer wij hiervoor de wettelijke verplichting hebben)
- Burgerservicenummer (BSN)

Deze persoonsgegevens worden uitsluitend gebruikt voor de met de cliënt overeengekomen doelen/dienstverlening. Indien doelen dan wel dienstverlening wijzigen, wordt dit opnieuw met de betrokkene afgestemd.`
    },
    {
      title: 'Wwft (Wet ter voorkoming van witwassen en financieren van terrorisme)',
      content: `Riekhoff accountants en adviseurs B.V. is op grond van de Wwft verplicht om in sommige gevallen uw voorna(a)m(en) en achternaam, geboortedatum, adres, woonplaats, aard, nummer en datum plaats van uitgifte van het document waarmee u zich heeft geïdentificeerd (en in sommige gevallen een kopie van het document) te verzamelen en te verwerken.

Riekhoff accountants en adviseurs B.V. is verplicht om ongebruikelijke transacties te melden bij de Financial Intelligence Unit Nederland (FIU-Nederland) en is in dat geval ook verplicht deze verzamelde informatie te verstrekken.`
    },
    {
      title: 'Grondslag en doel van verwerking',
      content: `Riekhoff accountants en adviseurs B.V. verwerkt persoonsgegevens voor de volgende doelen:

- **Uw toestemming**: zoals bij het verzenden van onze nieuwsbrief
- **Uitvoeren van de overeenkomst**: zodat wij u kunnen bellen of een e-mail kunnen sturen indien dit nodig is om onze dienstverlening uit te kunnen voeren
- **Wettelijke verplichting**: omdat wij op grond van wet- en regelgeving mede vanuit onze beroepsorganisatie (NBA) verplicht zijn om bij de uitvoering van onze werkzaamheden zorg te dragen voor voldoende dossiervorming`
    },
    {
      title: 'Bewaartermijnen',
      content: `Riekhoff accountants en adviseurs B.V. bewaart persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor gegevens worden verzameld dan wel de wettelijke bewaartermijnen die wij dienen te volgen.

- **Cookies**: 30 dagen bewaartermijn
- **Potentiële cliënten**: 30 dagen indien geen cliënt wordt, anders zolang nodig voor dienstverlening
- **Dossiers**: 7 jaar (wettelijke bewaartermijn)
- **Wwft-gegevens**: minimaal 5 jaar na aflopen zakelijke relatie`
    },
    {
      title: 'Delen met derden',
      content: `Riekhoff accountants en adviseurs B.V. verkoopt geen persoonsgegevens van cliënten aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van de overeenkomst of om te voldoen aan een wettelijke verplichting.

In bijzondere gevallen kan het voorkomen dat wij persoonsgegevens verstrekken aan externe deskundigen zoals een notaris, advocaat of pensioenspecialist. In dat geval zullen wij deze gegevens niet zonder toestemming van de cliënt verstrekken.

Deze gegevens worden niet gebruikt voor commerciële doeleinden.`
    },
    {
      title: 'Cookies op onze website',
      content: `Riekhoff accountants en adviseurs B.V. gebruikt functionele, analytische en tracking cookies mede door middel van Google Analytics. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser.

We gebruiken cookies met een puur technische functionaliteit om ervoor te zorgen dat de website naar behoren werkt. Daarnaast plaatsen we cookies die het surfgedrag van bezoekers bijhouden zodat we op maat gemaakte content kunnen aanbieden.

Bij het eerste bezoek aan onze website informeren wij bezoekers over deze cookies en vragen wij gebruikers om toestemming voor het plaatsen ervan. U kunt cookies uitschakelen via uw browserinstellingen.`
    },
    {
      title: 'Uw rechten: inzien, aanpassen of verwijderen',
      content: `U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens. U heeft ook het recht op gegevensoverdraagbaarheid.

U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging of intrekking van toestemming sturen naar **jan@riekhoff.nl**.

Om er zeker van te zijn dat het verzoek door u is gedaan, vragen wij om een kopie van uw identiteitsbewijs mee te sturen. Maak in deze kopie de pasfoto, MRZ, het documentnummer en het BSN zwart ter bescherming van uw privacy.

We reageren zo snel mogelijk, maar uiterlijk binnen één maand, op uw verzoek.`
    },
    {
      title: 'Klacht indienen',
      content: `U heeft de mogelijkheid om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via: https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons`
    },
    {
      title: 'Beveiliging van persoonsgegevens',
      content: `Riekhoff accountants en adviseurs B.V. neemt de bescherming van persoonsgegevens serieus en neemt passende technische en organisatorische beveiligingsmaatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.

Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op met B.H.B. Riekhoff AA via de bovenstaande contactgegevens.`
    }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Statement Riekhoff Accountants",
    "description": "Privacy statement van Riekhoff accountants en adviseurs B.V. met informatie over de verwerking van persoonsgegevens.",
    "url": "https://www.riekhoff.nl/privacy",
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
      {"@type": "ListItem", "position": 2, "name": "Privacy", "item": "https://www.riekhoff.nl/privacy"}
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
                  <span className="text-white">Privacy</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-accent-yellow" />
                  <p className="text-accent-yellow uppercase text-xs font-semibold tracking-wider">
                    PRIVACY STATEMENT
                  </p>
                </div>
                
                <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-4">
                  Privacy en gegevensverwerking
                </h1>
                
                <p className="text-gray-300 text-sm">
                  Riekhoff accountants en adviseurs B.V. is verantwoordelijk voor de verwerking van 
                  persoonsgegevens zoals weergegeven in dit privacy statement.
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
                <p className="text-gray-700 leading-relaxed">
                  Riekhoff neemt uw privacy serieus en behandelt uw persoonsgegevens zorgvuldig en 
                  vertrouwelijk. In dit privacy statement leest u welke gegevens wij verzamelen, waarom 
                  we deze nodig hebben en hoe lang we ze bewaren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Contactgegevens</h2>
              
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-3">Privacy officer</p>
                    <p className="text-gray-600 mb-4">B.H.B. (Bas) Riekhoff AA</p>
                    
                    <p className="font-semibold mb-3">Organisatie</p>
                    <p className="text-gray-600">Riekhoff accountants en adviseurs B.V.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-600">Retentieweg 20</p>
                        <p className="text-gray-600">7572 PH Oldenzaal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                      <a href="mailto:Bas@Riekhoff.nl" className="text-gray-600 hover:text-accent-yellow transition-colors">
                        Bas@Riekhoff.nl
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                      <a href="tel:0630397466" className="text-gray-600 hover:text-accent-yellow transition-colors">
                        06-30397466
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRIVACY SECTIONS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {sections.map((section, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
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

        {/* FOOTER CTA */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-3">Vragen over uw privacy?</h3>
              <p className="text-gray-600 mb-6">
                Neem contact op met onze privacy officer voor vragen over de verwerking van uw gegevens.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:Bas@Riekhoff.nl" className="inline-flex items-center justify-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                  <Mail className="w-4 h-4" />
                  Mail: Bas@Riekhoff.nl
                </a>
                <a href="tel:0630397466" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm">
                  <Phone className="w-4 h-4" />
                  Bel: 06-30397466
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}