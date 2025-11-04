import React from 'react';
import { 
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  HelpCircle,
  Calculator,
  FileText,
  Users,
  Building2,
  Shield,
  Clock,
  Euro,
  TrendingUp,
  Briefcase,
  Search,
  MessageSquare
} from 'lucide-react';

export default function FAQ() {
  // FAQ categorieën met vragen
  const faqCategorieen = [
    {
      titel: 'Algemeen',
      icon: HelpCircle,
      beschrijving: 'Veelgestelde vragen over Riekhoff en onze dienstverlening',
      kleur: 'from-dark to-dark-secondary',
      vragen: [
        {
          vraag: 'Waar is Riekhoff Accountants gevestigd?',
          antwoord: 'Riekhoff Accountants is gevestigd aan de Bentheimergraven 11, 7577 DA in Oldenzaal. Ons moderne kantoor ligt centraal in Twente en is goed bereikbaar vanuit Losser, Denekamp, Enschede, Hengelo en Almelo. We hebben ruime parkeergelegenheid en zijn ook per openbaar vervoer goed te bereiken.'
        },
        {
          vraag: 'Wat zijn de openingstijden van Riekhoff?',
          antwoord: 'Ons kantoor in Oldenzaal is geopend van maandag tot en met vrijdag van 8:30 tot 17:30 uur. Voor urgente zaken zijn we ook buiten kantooruren bereikbaar. Afspraken kunnen flexibel worden ingepland, ook in de avonduren indien gewenst. In het weekend zijn we telefonisch bereikbaar voor noodgevallen.'
        },
        {
          vraag: 'Voor welke branches werkt Riekhoff?',
          antwoord: 'Riekhoff werkt voor alle branches in het MKB. We hebben specifieke expertise in horeca, detailhandel, bouw, zorg, zakelijke dienstverlening, transport, productie en techniek. Door onze brede ervaring in Twente kennen we de specifieke uitdagingen per sector en kunnen we gerichte adviezen geven.'
        },
        {
          vraag: 'Hoe groot is het team van Riekhoff?',
          antwoord: 'Ons team bestaat uit 12 professionals, waaronder 3 eigenaren. We hebben accountants, belastingadviseurs en assistenten die samenwerken om ondernemers in Oldenzaal en Twente optimaal te bedienen. Door onze omvang kunnen we persoonlijke aandacht combineren met professionele dienstverlening.'
        }
      ]
    },
    {
      titel: 'Accountancy',
      icon: Calculator,
      beschrijving: 'Vragen over jaarrekeningen, administratie en boekhouding',
      kleur: 'from-gray-50 to-white',
      vragen: [
        {
          vraag: 'Wat kost het samenstellen van een jaarrekening?',
          antwoord: 'Het samenstellen van een jaarrekening kost bij Riekhoff vanaf €1.250,- voor een eenmanszaak en vanaf €1.750,- voor een BV. De exacte prijs hangt af van de complexiteit van uw administratie en de omvang van uw bedrijf. Voor ondernemers in Oldenzaal maken we graag een offerte op maat.'
        },
        {
          vraag: 'Wanneer moet mijn jaarrekening klaar zijn?',
          antwoord: 'Voor een BV moet de jaarrekening binnen 5 maanden na afloop van het boekjaar worden opgesteld en binnen 8 maanden worden gedeponeerd bij de KvK. Voor eenmanszaken geldt dat de aangifte inkomstenbelasting voor 1 mei moet zijn ingediend. Riekhoff bewaakt deze deadlines voor u.'
        },
        {
          vraag: 'Kan Riekhoff mijn complete boekhouding verzorgen?',
          antwoord: 'Ja, Riekhoff verzorgt complete boekhoudingen voor MKB-bedrijven in Twente. Van het verwerken van facturen tot het opstellen van tussentijdse rapportages. We werken met moderne software zoals Exact Online en Twinfield. U kunt zelf boeken of alles aan ons uitbesteden.'
        },
        {
          vraag: 'Hoe vaak krijg ik inzicht in mijn cijfers?',
          antwoord: 'Dat bepaalt u zelf. Standaard leveren we kwartaalrapportages, maar maandelijkse of zelfs real-time inzage is ook mogelijk. Via online dashboards heeft u altijd toegang tot uw actuele cijfers. Voor ondernemers in Oldenzaal komen we graag langs om de cijfers persoonlijk te bespreken.'
        }
      ]
    },
    {
      titel: 'Belastingadvies',
      icon: FileText,
      beschrijving: 'Fiscale vragen en belastingaangiftes',
      kleur: 'from-gray-50 to-white',
      vragen: [
        {
          vraag: 'Welke belastingaangiftes verzorgt Riekhoff?',
          antwoord: 'Riekhoff verzorgt alle belastingaangiftes voor ondernemers: inkomstenbelasting, vennootschapsbelasting, omzetbelasting (BTW), loonheffingen en dividendbelasting. Ook voor particulieren in Oldenzaal doen we de aangifte inkomstenbelasting. We zorgen voor tijdige indiening en maximale aftrekposten.'
        },
        {
          vraag: 'Kan ik belasting besparen door een BV op te richten?',
          antwoord: 'Een BV wordt meestal fiscaal voordeliger vanaf €50.000 à €70.000 winst per jaar. Riekhoff maakt een persoonlijke berekening voor uw situatie. We kijken naar belastingdruk, pensioenopbouw, aansprakelijkheid en toekomstplannen. Voor ondernemers in Twente maken we een complete vergelijking.'
        },
        {
          vraag: 'Hoe werkt de BTW-aangifte via Riekhoff?',
          antwoord: 'U levert uw administratie aan (digitaal of fysiek) en Riekhoff verzorgt de complete BTW-aangifte. We controleren alle boekingen, berekenen de BTW en dienen de aangifte digitaal in. U ontvangt een kopie en we informeren u over het te betalen of terug te ontvangen bedrag. Voor bedrijven in Oldenzaal kunnen we ook de administratie ophalen.'
        },
        {
          vraag: 'Helpt Riekhoff ook met belastingcontroles?',
          antwoord: 'Ja, Riekhoff begeleidt ondernemers bij belastingcontroles. We bereiden de controle voor, zijn aanwezig bij het bezoek en handelen de correspondentie af. Met onze kennis van de Belastingdienst procedures zorgen we voor een soepel verloop. We hebben veel ervaring met controles bij MKB-bedrijven in Twente.'
        }
      ]
    },
    {
      titel: 'Salarisadministratie',
      icon: Users,
      beschrijving: 'Loonverwerking en personeelszaken',
      kleur: 'from-gray-50 to-white',
      vragen: [
        {
          vraag: 'Wat kost salarisadministratie bij Riekhoff?',
          antwoord: 'Salarisadministratie kost vanaf €25,- per loonstrook. Voor bedrijven tot 5 medewerkers hebben we een starttarief van €125,- per maand all-in. Bij meer medewerkers maken we een offerte op maat. Er zijn geen opstartkosten en het eerste gesprek is vrijblijvend.'
        },
        {
          vraag: 'Hoe snel kan Riekhoff mijn loonadministratie overnemen?',
          antwoord: 'Riekhoff kan uw salarisadministratie binnen 5 werkdagen overnemen. We halen alle gegevens op bij uw huidige verwerker, richten de administratie in en zorgen dat de eerstvolgende salarisrun perfect verloopt. Voor bedrijven in Oldenzaal kunnen we indien nodig binnen 24 uur starten.'
        },
        {
          vraag: 'Verzorgt Riekhoff ook de pensioenaangifte?',
          antwoord: 'Ja, Riekhoff verzorgt de complete pensioenadministratie. We doen aan- en afmeldingen bij het pensioenfonds, verzorgen maandelijkse opgaven en berekenen pensioenpremies. We werken met alle grote pensioenfondsen en verzekeraars in Nederland.'
        },
        {
          vraag: 'Hoe werkt de maandelijkse salarisverwerking?',
          antwoord: 'U levert voor de 20e van de maand de mutaties aan (verlof, overwerk, etc.). Binnen 2 werkdagen verwerken we de salarissen en ontvangt u concept loonstroken. Na uw akkoord maken we het betaalbestand en versturen we de definitieve loonstroken digitaal naar uw medewerkers.'
        }
      ]
    },
    {
      titel: 'Starters',
      icon: TrendingUp,
      beschrijving: 'Specifieke vragen voor startende ondernemers',
      kleur: 'from-gray-50 to-white',
      vragen: [
        {
          vraag: 'Wat kost startersbegeleiding bij Riekhoff?',
          antwoord: 'Startersbegeleiding kost vanaf €125,- per maand. Dit is inclusief BTW-aangiftes, jaarrekening en kwartaal check-ups. We hebben ook een uitgebreid pakket vanaf €195,- per maand met extra diensten. Het eerste gesprek op ons kantoor in Oldenzaal is altijd gratis en vrijblijvend.'
        },
        {
          vraag: 'Wanneer moet ik als starter een accountant inschakelen?',
          antwoord: 'Het beste moment is VOOR u start. Riekhoff adviseert over de juiste rechtsvorm, helpt met het ondernemingsplan en richt de administratie in. Dit voorkomt kostbare fouten. Idealiter 2-3 maanden voor de start, maar we kunnen ook direct helpen als u al bent begonnen.'
        },
        {
          vraag: 'Eenmanszaak of direct een BV oprichten?',
          antwoord: 'Dit hangt af van uw situatie. Een eenmanszaak is snel en goedkoop te starten, ideaal bij weinig risico en lagere winsten. Een BV biedt bescherming van privévermogen en is fiscaal voordeliger vanaf €50.000 winst. Riekhoff maakt een persoonlijke berekening voor starters in Twente.'
        },
        {
          vraag: 'Helpt Riekhoff met subsidies voor starters?',
          antwoord: 'Ja, Riekhoff kent de subsidiemogelijkheden voor starters in Oldenzaal en Twente. We adviseren over startersleningen, innovatievouchers, duurzaamheidssubsidies en regionale regelingen. Ook helpen we met de aanvraag en kennen we de voorwaarden voor startersaftrek.'
        }
      ]
    },
    {
      titel: 'Advies & Begeleiding',
      icon: Briefcase,
      beschrijving: 'Vragen over bedrijfsadvies en ondersteuning',
      kleur: 'from-gray-50 to-white',
      vragen: [
        {
          vraag: 'Wat voor soort advies geeft Riekhoff?',
          antwoord: 'Riekhoff geeft breed bedrijfsadvies: strategisch advies voor groei, financieringsadvies, bedrijfsovernames, reorganisaties, vermogensplanning en risicomanagement. We kijken altijd naar de totale situatie van de ondernemer, zowel zakelijk als privé. Voor MKB in Oldenzaal zijn we een complete sparringpartner.'
        },
        {
          vraag: 'Kan Riekhoff helpen met een bedrijfsovername?',
          antwoord: 'Ja, Riekhoff begeleidt complete overnamtrajecten. Van bedrijfswaardering tot due diligence, van onderhandeling tot financiering. We hebben ervaring met overnames in Twente en kennen de lokale markt. Ook voor verkoop van uw bedrijf bent u bij ons aan het juiste adres.'
        },
        {
          vraag: 'Biedt Riekhoff ook interim diensten?',
          antwoord: 'Ja, bij tijdelijke uitval of piekdrukte kunnen we interim diensten leveren. Denk aan tijdelijke CFO, controller of administrateur. Ook voor specifieke projecten zoals ERP-implementatie of reorganisatie kunnen we tijdelijk ondersteunen. Voor bedrijven in Oldenzaal kunnen we snel schakelen.'
        },
        {
          vraag: 'Hoe werkt een second opinion bij Riekhoff?',
          antwoord: 'Voor een second opinion analyseren we uw huidige situatie objectief. We beoordelen fiscale structuur, administratieve processen of specifieke vraagstukken. U ontvangt een onafhankelijk advies met concrete aanbevelingen. Een second opinion kost vanaf €750,- en duurt 1-2 weken.'
        }
      ]
    }
  ];

  // Alle vragen voor zoekfunctie
  const alleVragen = faqCategorieen.flatMap(cat => 
    cat.vragen.map(v => ({ ...v, categorie: cat.titel }))
  );

  // Contact opties
  const contactOpties = [
    {
      icon: Phone,
      titel: 'Bel ons',
      beschrijving: 'Direct contact met een adviseur',
      actie: '0541 200 007',
      link: 'tel:+31541200007'
    },
    {
      icon: Mail,
      titel: 'Mail ons',
      beschrijving: 'Stel uw vraag per e-mail',
      actie: 'info@riekhoff.nl',
      link: 'mailto:info@riekhoff.nl'
    },
    {
      icon: MessageSquare,
      titel: 'Plan gesprek',
      beschrijving: 'Vrijblijvend kennismaken',
      actie: 'Plan afspraak',
      link: '#contact'
    }
  ];

  // Schema.org FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": alleVragen.map(vraag => ({
      "@type": "Question",
      "name": vraag.vraag,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": vraag.antwoord
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.riekhoff.nl"},
      {"@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.riekhoff.nl/faq"}
    ]
  };

  return (
    <>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

    <div className="bg-white text-dark">
  
  {/* SUBTLE HERO */}
  <section className="relative w-full overflow-hidden h-80">
    <div className="absolute inset-0 bg-dark" />
    <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mr-20">
      <img
        src="/kantoor_solo.jpg"
        alt="FAQ Riekhoff Accountants"
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
            <span className="text-white">FAQ</span>
          </div>
          
          <p className="text-accent-yellow uppercase mb-3 text-xs font-semibold tracking-wider">
            VEELGESTELDE VRAGEN
          </p>
          
          <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug">
            Alles wat u wilt weten over Riekhoff
          </h1>
        </div>
      </div>
    </div>
  </section>



        {/* FAQ CATEGORIEEN - Visual cards */}
        <section id="vragen" className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
          {/* Subtle gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-yellow/8 via-transparent to-accent-yellow/8" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-yellow/12 blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-6 inline-block">
                  <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
                    FAQ Categorieën
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Vragen per <span className="text-accent-yellow">onderwerp</span>
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Klik op een categorie om de meest gestelde vragen te bekijken
                </p>
              </div>

              {/* Categorie cards - Visual grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {faqCategorieen.map((cat, i) => {
                  const Icon = cat.icon;
                  const isDark = cat.kleur.includes('dark');
                  
                  return (
                    <div key={i} className={`group relative bg-gradient-to-br ${cat.kleur} rounded-2xl p-8 border-2 ${isDark ? 'border-transparent' : 'border-gray-100'} hover:border-accent-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}>
                      <div className={`w-14 h-14 ${isDark ? 'bg-white/10' : 'bg-accent-yellow/10'} rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-yellow group-hover:scale-110 transition-all duration-500`}>
                        <Icon className={`w-7 h-7 ${isDark ? 'text-accent-yellow' : 'text-accent-yellow'} group-hover:text-dark transition-colors duration-500`} />
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-dark'}`}>{cat.titel}</h3>
                      <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cat.beschrijving}</p>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-accent-yellow' : 'text-accent-yellow'} font-bold text-sm uppercase tracking-wider`}>
                        {cat.vragen.length} vragen
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Alle FAQ's per categorie */}
              <div className="space-y-12">
                {faqCategorieen.map((cat, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="text-2xl font-bold mb-6">{cat.titel}</h3>
                    <div className="space-y-4">
                      {cat.vragen.map((faq, i) => (
                        <details key={i} className="group bg-white rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                          <summary className="flex items-center justify-between p-6 cursor-pointer">
                            <h4 className="font-bold pr-8 text-left">{faq.vraag}</h4>
                            <ChevronRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
                          </summary>
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.antwoord}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT OPTIES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Geen antwoord <span className="text-accent-yellow">gevonden</span>?
                </h2>
                <p className="text-gray-600">
                  Neem direct contact op met een van onze adviseurs in Oldenzaal
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {contactOpties.map((optie, i) => {
                  const Icon = optie.icon;
                  return (
                    <a key={i} href={optie.link} className="group bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-100 hover:border-accent-yellow">
                      <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-yellow group-hover:scale-110 transition-all">
                        <Icon className="w-8 h-8 text-accent-yellow group-hover:text-dark transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{optie.titel}</h3>
                      <p className="text-gray-600 text-sm mb-4">{optie.beschrijving}</p>
                      <span className="text-accent-yellow font-bold">{optie.actie}</span>
                    </a>
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
              src="/kantoor_open_1.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Heeft u een specifieke <span className="text-accent-yellow">vraag</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Neem contact op met Riekhoff Accountants voor persoonlijk advies. 
                We staan klaar om ondernemers in Oldenzaal en Twente te helpen.
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