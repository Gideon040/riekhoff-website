import React from 'react';
import { FileCheck, ChevronRight, CheckCircle2, Search, FileText, Shield } from 'lucide-react';

export default function AccountantVerklaart() {
  const verklaringen = [
    {
      icon: FileText,
      type: 'Samenstellingsverklaring',
      tagline: 'Ondersteuning bij opstellen',
      color: 'blue',
      description: 'De accountant helpt het bestuur bij het maken van de jaarrekening.',
      kenmerken: [
        'Accountant stelt jaarrekening samen',
        'Uitgaan van informatie bestuur',
        'Geen onderzoek naar juistheid',
        'Geen oordeel of conclusie'
      ]
    },
    {
      icon: Shield,
      type: 'Controleverklaring',
      tagline: 'Redelijke mate van zekerheid',
      color: 'yellow',
      description: 'De accountant controleert de jaarrekening en geeft een onafhankelijk oordeel.',
      kenmerken: [
        'Uitgebreide controle werkzaamheden',
        'Onafhankelijk oordeel',
        'Redelijke mate van zekerheid',
        'Geen materiële afwijkingen'
      ]
    },
    {
      icon: Search,
      type: 'Beoordelingsverklaring',
      tagline: 'Beperkte mate van zekerheid',
      color: 'green',
      description: 'De accountant beoordeelt de jaarrekening met een beperkte mate van zekerheid.',
      kenmerken: [
        'Beperkte werkzaamheden',
        'Onafhankelijke conclusie',
        'Beperkte mate van zekerheid',
        'Jaarrekening lijkt plausibel'
      ]
    }
  ];

  const sections = [
    {
      title: 'Samenstellingsverklaring - Uitgebreide uitleg',
      content: `Wanneer een accountant het bestuur van de organisatie (of: de ondernemer) helpt bij het maken van de jaarrekening, geeft hij hierbij een samenstellingsverklaring af.

**Wat staat er in de samenstellingsverklaring?**
- De inhoud van de opdracht
- De verantwoordelijkheden van het bestuur
- De verantwoordelijkheden van de accountant

**Werkwijze van de accountant:**
Omdat de accountant het bestuur helpt met het maken van de jaarrekening, gaat hij uit van de informatie die hij ontvangt van het bestuur. De accountant onderzoekt in principe niet of deze informatie correct is.

Soms helpt hij het bestuur bij het maken van schattingen of bij de keuze van passende grondslagen voor financiële verslaggeving. Hij zal hierover altijd overleggen met het bestuur en ervoor zorgen dat het bestuur de gemaakte keuzes begrijpt. Dit om ervoor te zorgen dat het bestuur zijn verantwoordelijkheid voor de jaarrekening kan nemen.

**Globale controle:**
Wanneer de jaarrekening is opgesteld zal de accountant globaal nagaan of het beeld van de jaarrekening aansluit met zijn kennis van de organisatie. Als de accountant denkt dat de informatie van het bestuur niet compleet of onnauwkeurig is, dan zal hij het bestuur om aanvullende informatie vragen. Zo nodig zal hij zelf aanpassingen voorstellen.

**Geen oordeel of conclusie:**
Omdat de accountant het bestuur helpt bij het maken van de jaarrekening geeft hij geen oordeel of conclusie over de jaarrekening. Als de gebruikers van de jaarrekening een oordeel of conclusie willen, moet een accountant een controle- of beoordelingsopdracht uitvoeren.

**Wanneer stopt de opdracht?**
Als de accountant de opdracht niet kan afmaken omdat het bestuur geen informatie geeft of weigert om bepaalde aanpassingen te laten maken in de jaarrekening, dan geeft hij de opdracht terug. In dat geval informeert hij ook eventuele toezichthouders, zoals een raad van commissarissen.`
    },
    {
      title: 'Controleverklaring - Uitgebreide uitleg',
      content: `Bij een controleopdracht controleert de accountant of de jaarrekening die het bestuur heeft opgesteld een goede weergave is van de financiële situatie van de onderneming. In de controleverklaring geeft de accountant zijn onafhankelijke mening hierover in de vorm van een oordeel.

**Voor wie is de controleverklaring?**
De accountant doet dit voor gebruikers van de jaarrekening zoals aandeelhouders, leveranciers en banken, die op basis hiervan beslissingen nemen.

**Wat is een getrouw beeld?**
Een jaarrekening moet een getrouw beeld geven van het vermogen en het resultaat van de organisatie. Maar dit betekent niet dat de jaarrekening tot op de laatste euro nauwkeurig hoeft te zijn. De jaarrekening moet wel zo nauwkeurig zijn dat de gemiddelde gebruiker zijn beslissingen hierop kan nemen. In andere woorden er mogen geen materiële afwijkingen in de jaarrekening zitten.

**Redelijke mate van zekerheid:**
Het doel van de controleopdracht is dat de accountant met een hoge mate van zekerheid zegt dat de jaarrekening geen materiële afwijkingen bevat. De accountant geeft geen absolute zekerheid dat de jaarrekening goed is omdat hij bewust misleid kan worden door een organisatie, de gemaakte schattingen in de jaarrekening vaak subjectief zijn en omdat het economisch niet verantwoord is om alle individuele transacties te onderzoeken. Vandaar dat de accountant spreekt over een redelijke mate van zekerheid.

**Werkzaamheden van de accountant:**
De accountant voert uitgebreide werkzaamheden uit om zijn oordeel te onderbouwen. Zo zal hij bijvoorbeeld:
- Nadenken over wat fout kan gaan en op basis hiervan zijn controle inrichten
- Inkoop- en verkooptransacties onderzoeken
- Een voorraadtelling bijwonen
- Een rekeningsaldo laten bevestigen door een afnemer
- Cijferanalyses maken
- Inlichtingen vragen aan mensen in en buiten de gecontroleerde organisatie

**Soorten verklaringen:**
Het overgrote deel van de afgegeven controleverklaringen is goedkeurend. Dit komt doordat eventuele materiële afwijkingen die uit de controle blijken al voor het afgeven van de verklaring door de organisatie in overleg met de accountant worden gecorrigeerd.

Het kan ook voorkomen dat er wel materiële afwijkingen in de jaarrekening zitten. Afhankelijk van de ernst van de afwijkingen geeft de accountant een afkeurende verklaring of een verklaring met beperking. Soms heeft de accountant onvoldoende informatie om zijn oordeel over de jaarrekening te onderbouwen. Afhankelijk van de ernst daarvan geeft hij een oordeelonthouding of een verklaring met beperking.

**Onafhankelijkheid:**
Omdat de accountant een mening geeft in zijn verklaring en gebruikers hierop af moeten kunnen gaan is het belangrijk dat hij onafhankelijk is. Hij moet zich daarom houden aan onafhankelijkheidsregels.`
    },
    {
      title: 'Beoordelingsverklaring - Uitgebreide uitleg',
      content: `Ook bij een beoordelingsopdracht gaat de onafhankelijke accountant na of de jaarrekening een goede weergave is van de financiële situatie van de organisatie. De accountant voert alleen in principe minder werkzaamheden uit.

**Werkzaamheden bij beoordeling:**
Deze zullen vooral bestaan uit:
- Nadenken over wat fout kan gaan en op basis hiervan zijn beoordeling inrichten
- Inlichtingen vragen aan mensen in de organisatie
- Cijferanalyses maken

**Beperkte mate van zekerheid:**
Omdat minder werkzaamheden worden uitgevoerd door de accountant, zal hij ook minder zekerheid kunnen geven over de jaarrekening. Zijn conclusie geeft een beperkte mate van zekerheid. De keuze hiervoor is afhankelijk van de behoefte aan zekerheid bij de gebruikers in verhouding tot de kosten.

**Wat doet de accountant bij twijfel?**
Als de accountant denkt dat de jaarrekening een afwijking van materieel belang bevat, dan doet hij nader onderzoek.

**Hoe luidt de conclusie?**
In de beoordelingsverklaring stelt de accountant dat 'niet is gebleken dat de jaarrekening geen getrouw beeld geeft van het vermogen en het resultaat van de onderneming'. Daarmee zegt hij eigenlijk dat de jaarrekening plausibel lijkt.

**Uitzonderingen:**
Net als bij de controleverklaring kan het ook hier voorkomen dat de accountant van mening is dat de jaarrekening fout is of dat hij onvoldoende zekerheid kan verkrijgen over de jaarrekening. Hij brengt dit dan tot uitdrukking in zijn conclusie.`
    }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "De Accountant Verklaart - Riekhoff",
    "description": "Uitleg over de verschillende soorten accountantsverklaringen: samenstellingsverklaring, controleverklaring en beoordelingsverklaring.",
    "url": "https://www.riekhoff.nl/accountant-verklaart",
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
      {"@type": "ListItem", "position": 2, "name": "De Accountant Verklaart", "item": "https://www.riekhoff.nl/accountant-verklaart"}
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
                  <span className="text-white">De Accountant Verklaart</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-8 h-8 text-accent-yellow" />
                  <p className="text-accent-yellow uppercase text-xs font-semibold tracking-wider">
                    ACCOUNTANTSVERKLARINGEN
                  </p>
                </div>
                
                <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-4">
                  De accountant verklaart!
                </h1>
                
                <p className="text-gray-300 text-sm">
                  Uitleg over de verschillende soorten accountantsverklaringen en wat ze betekenen 
                  voor uw jaarrekening.
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
                  Een accountant kan bij historische financiële informatie verschillende soorten opdrachten 
                  uitvoeren, afhankelijk van de vraagstelling van de opdrachtgever en de informatiebehoefte 
                  van de gebruiker.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hij rapporteert over de opdracht in een accountantsverklaring. In de praktijk komt een 
                  verklaring bij de jaarrekening het meeste voor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DRIE VERKLARINGEN */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Drie soorten verklaringen</h2>
                <p className="text-gray-600">
                  Afhankelijk van uw situatie en behoefte kiest u de passende accountantsverklaring
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {verklaringen.map((verklaring, i) => (
                  <div key={i} className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-accent-yellow transition-all">
                    <div className="w-14 h-14 bg-accent-yellow/10 rounded-xl flex items-center justify-center mb-6">
                      <verklaring.icon className="w-7 h-7 text-accent-yellow" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full mb-3">
                        {verklaring.tagline}
                      </span>
                      <h3 className="font-bold text-xl mb-2">{verklaring.type}</h3>
                      <p className="text-gray-600 text-sm mb-4">{verklaring.description}</p>
                    </div>

                    <div className="space-y-2">
                      {verklaring.kenmerken.map((kenmerk, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{kenmerk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block bg-white rounded-xl p-6 border-2 border-accent-yellow/20">
                  <p className="text-gray-700 mb-4">
                    Niet zeker welke verklaring u nodig heeft? Riekhoff adviseert u graag.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                    Neem contact op
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VERGELIJKINGSTABEL */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Vergelijking in één oogopslag</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border-2 border-gray-200 p-4 text-left font-bold">Aspect</th>
                      <th className="border-2 border-gray-200 p-4 text-left font-bold">Samenstelling</th>
                      <th className="border-2 border-gray-200 p-4 text-left font-bold">Controle</th>
                      <th className="border-2 border-gray-200 p-4 text-left font-bold">Beoordeling</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-gray-200 p-4 font-semibold bg-gray-50">Werkzaamheden</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Helpen bij opstellen</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Uitgebreid onderzoek</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Beperkt onderzoek</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-gray-200 p-4 font-semibold bg-gray-50">Zekerheid</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Geen zekerheid</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Redelijke zekerheid</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Beperkte zekerheid</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-gray-200 p-4 font-semibold bg-gray-50">Conclusie</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Geen oordeel</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Goedkeurend oordeel</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Plausibiliteit</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-gray-200 p-4 font-semibold bg-gray-50">Onafhankelijkheid</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Niet vereist</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Strikt vereist</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">Strikt vereist</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-gray-200 p-4 font-semibold bg-gray-50">Kosten</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">€</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">€€€</td>
                      <td className="border-2 border-gray-200 p-4 text-sm">€€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* UITGEBREIDE UITLEG */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Uitgebreide uitleg per verklaring</h2>
              
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

        {/* NBA DISCLAIMER */}
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Bron:</strong> Deze informatie is gebaseerd op de NBA-brochure "De accountant verklaart!" 
                  van de Koninklijke Nederlandse Beroepsorganisatie van Accountants (NBA). De NBA stelt kwaliteitsnormen 
                  en regels op waar alle accountants in Nederland zich aan moeten houden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Vragen over accountantsverklaringen?</h3>
              <p className="text-gray-600 mb-6">
                Riekhoff adviseert u graag welke verklaring het beste past bij uw situatie.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent-yellow text-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all">
                Neem contact op
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}