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
      vragen: [
        {
          vraag: 'Wat kost Riekhoff accountants en adviseurs?',
          antwoord: 'Onze tarieven zijn transparant en afhankelijk van de specifieke dienstverlening. Wij werken indien mogelijk met vaste prijzen waardoor u niet voor verrassingen komt te staan. Onze lage overheadkosten en vergaande automatisering zorgt ervoor dat wij efficiënt kunnen werken. Neem contact op voor een vrijblijvende offerte op maat.'
        },
        {
          vraag: 'Waar is Riekhoff Accountants gevestigd?',
          antwoord: 'Riekhoff Accountants en Adviseurs is gevestigd aan de Bentheimergraven 11, 7577 DA in Oldenzaal. Ons moderne kantoor ligt centraal in Twente en is goed bereikbaar vanuit Losser, Denekamp, Enschede, Hengelo en Almelo. We hebben ruime parkeergelegenheid voor onze klanten.'
        },
        {
          vraag: 'Wat zijn de openingstijden van Riekhoff?',
          antwoord: 'Ons kantoor in Oldenzaal is geopend van maandag tot en met vrijdag van 08:30 tot 17:30 uur. Afspraken in de avonden en weekenden zijn ons niet vreemd. We streven naar een responstijd van 24 uur op al uw vragen.'
        },
        {
          vraag: 'Welke bedrijven worden door Riekhoff ontzorgt?',
          antwoord: 'Wij zijn gespecialiseerd in het midden- en kleinbedrijf (MKB). Onze klanten zitten door heel Nederland maar voornamelijk in de regio Twente. Wij bieden dienstverlening aan vrijwel alle sectoren, van ZZP\'ers tot aan ondernemingen met 100 medewerkers.'
        },
        {
          vraag: 'Hoe groot is het team van Riekhoff?',
          antwoord: 'Ons team bestaat uit 15 professionals die allemaal een eigen expertise hebben in de accountancy, fiscaliteit en advisering. Door onze visie - niet te groot, niet te klein – stap je binnen bij een betrokken groep medewerkers. We geloven in persoonlijk contact en korte lijnen.'
        },
        {
          vraag: 'Hoe snel reageren jullie op vragen?',
          antwoord: 'Door de inrichting van ons bedrijf behandelen wij verzoeken snel en adequaat. Afspraken in de avonden en weekenden zijn ons niet vreemd. Wij streven naar een responstijd van 24 uur. Bij ons hoeft u niet dagen of weken te wachten op respons!'
        },
        {
          vraag: 'Waarbij is Riekhoff aangesloten?',
          antwoord: 'Wij zijn aangesloten bij de NBA (Nederlandse Beroepsorganisatie van accountants), de RB (register Belastingadviseurs) en de Novak (serviceorganisatie accountantskantoren). Dit garandeert kwaliteit en onafhankelijkheid.'
        }
      ]
    },
    {
      titel: 'Accountancy',
      icon: Calculator,
      vragen: [
        {
          vraag: 'Wat houdt accountancy precies in?',
          antwoord: 'Voor een goede en efficiënte bedrijfsvoering zijn actuele cijfers van groot belang. Bij Riekhoff zorgen wij voor actueel inzicht in de cijfers en resultaten van jouw onderneming. Niet de focus op historische jaarcijfers, maar praten over het hier en nu. We verzorgen jaarrekeningen, samenstelopdrachten, tussentijdse rapportages, financiële analyses en pre-audit dienstverlening.'
        },
        {
          vraag: 'Wanneer moet mijn jaarrekening klaar zijn?',
          antwoord: 'Voor een BV moet de jaarrekening binnen 5 maanden na afloop van het boekjaar worden opgesteld en binnen 8 maanden worden gedeponeerd bij de KvK. Voor eenmanszaken geldt dat de aangifte inkomstenbelasting voor 1 mei moet zijn ingediend. Riekhoff bewaakt deze deadlines voor u en zorgt voor tijdige oplevering.'
        },
        {
          vraag: 'Kan Riekhoff mijn complete financiële administratie verzorgen?',
          antwoord: 'Ja, absoluut. Om tot betrouwbare en actuele cijfers te komen is een goede financiële administratie van groot belang. Bij Riekhoff kunnen wij hierin ondersteunen óf compleet ontzorgen. Wij maken gebruik van vergaande automatisering waardoor de administratieve last vaak sterk kan worden teruggedrongen. We kunnen ook professionals bij u op locatie detacheren.'
        },
        {
          vraag: 'Hoe vaak krijg ik inzicht in mijn cijfers?',
          antwoord: 'Dat bepaalt u zelf. Standaard leveren we kwartaalrapportages, maar maandelijkse of zelfs real-time inzage is ook mogelijk. Via online dashboards heeft u altijd toegang tot uw actuele cijfers. Voor ondernemers in de regio Twente komen we graag langs om de cijfers persoonlijk te bespreken.'
        },
        {
          vraag: 'Met welke software werken jullie?',
          antwoord: 'De visie van Riekhoff is dat wij niet werken met vaste softwarepakketten. Uw onderneming hoeft zich niet te schikken in \'onze\' software, maar wij passen ons aan naar uw software. Wij hebben uitgebreide kennis van digitalisering en automatisering. Indien nodig helpen wij u met het selecteren en implementeren van boekhoudsystemen.'
        }
      ]
    },
    {
      titel: 'Fiscale dienstverlening',
      icon: FileText,
      vragen: [
        {
          vraag: 'Welke fiscale diensten biedt Riekhoff aan?',
          antwoord: 'Riekhoff heeft ervaren belastingadviseurs in dienst en beschikt over een breed netwerk aan gespecialiseerde fiscalisten om u van de beste dienstverlening te voorzien. Wij zijn proactief in het signaleren en toepassen van belastingbesparende maatregelen. We verzorgen belastingaangiften, bezwaar en beroep procedures, fiscale planning en advisering, en BTW-advies.'
        },
        {
          vraag: 'Welke belastingaangiftes verzorgt Riekhoff?',
          antwoord: 'Riekhoff verzorgt alle belastingaangiftes voor ondernemers: inkomstenbelasting, vennootschapsbelasting, omzetbelasting (BTW), loonheffingen en dividendbelasting. Ook voor particulieren in de regio Twente doen we de aangifte inkomstenbelasting. We zorgen voor tijdige indiening en maximale aftrekposten.'
        },
        {
          vraag: 'Kan ik belasting besparen door een BV op te richten?',
          antwoord: 'Of een BV fiscaal voordeliger is hangt af van uw specifieke situatie. Riekhoff maakt een persoonlijke berekening waarbij we kijken naar belastingdruk, pensioenopbouw, aansprakelijkheid en toekomstplannen. Voor ondernemers in Twente maken we een complete vergelijking zodat u een weloverwogen keuze kunt maken.'
        },
        {
          vraag: 'Hoe werkt de BTW-aangifte via Riekhoff?',
          antwoord: 'U levert uw administratie aan (digitaal of fysiek) en Riekhoff verzorgt de complete BTW-aangifte. We controleren alle boekingen, berekenen de BTW en dienen de aangifte digitaal in bij de Belastingdienst. U ontvangt een kopie en we informeren u over het te betalen of terug te ontvangen bedrag.'
        },
        {
          vraag: 'Helpt Riekhoff ook met belastingcontroles?',
          antwoord: 'Ja, Riekhoff begeleidt ondernemers bij belastingcontroles van de Belastingdienst. We bereiden de controle voor, zijn aanwezig bij het bezoek en handelen de correspondentie af. Met onze kennis van de Belastingdienst procedures zorgen we voor een soepel verloop.'
        }
      ]
    },
    {
      titel: 'Financiële dienstverlening',
      icon: TrendingUp,
      vragen: [
        {
          vraag: 'Welke financiële diensten biedt Riekhoff?',
          antwoord: 'Wij helpen ondernemers met financieringsadvies, kredietaanvragen, herstructureringen en bedrijfswaarderingen. Riekhoff beschikt over de juiste kennis én ervaring en staat in deze processen pal naast u. We verzorgen ook begrotingen en liquiditeitsprognoses, en begeleiden overgang naar een BV. Ook voor due diligence onderzoeken kunt u bij ons terecht.'
        },
        {
          vraag: 'Kan Riekhoff helpen met het verkrijgen van een bedrijfslening?',
          antwoord: 'Ja, Riekhoff ondersteunt bij het aanvragen van financiering. We maken professionele businessplannen, stellen realistische prognoses op en begeleiden het contact met banken en financiers. Door onze ervaring weten we wat financiers willen zien en verhogen we uw kansen op een succesvolle aanvraag.'
        },
        {
          vraag: 'Wat houdt een bedrijfswaardering in?',
          antwoord: 'Bij een bedrijfswaardering bepalen we de economische waarde van uw onderneming. Dit is belangrijk bij verkoop, overname, successieplanning of geschillen. Riekhoff gebruikt erkende waarderingsmethoden en zorgt voor een objectieve en goed onderbouwde waardering die stand houdt bij banken en de Belastingdienst.'
        },
        {
          vraag: 'Wanneer is het verstandig om naar een BV over te stappen?',
          antwoord: 'Een overgang naar een BV kan verschillende redenen hebben: fiscale optimalisatie, beperking van aansprakelijkheid, professionalisering of voorbereiding op bedrijfsoverdracht. Riekhoff analyseert uw situatie en adviseert wanneer de overstap het meest voordelig is. We begeleiden het complete proces inclusief oprichting en overdracht.'
        }
      ]
    },
    {
      titel: 'Salarisadministratie',
      icon: Users,
      vragen: [
        {
          vraag: 'Wat houdt salarisadministratie bij Riekhoff in?',
          antwoord: 'Complete loonverwerking voor jouw personeel. Wij verzorgen de aangifte loonheffing, jaaropgaven en loonstroken, pensioenadministratie en meer. Onze loonadministratie is zeer flexibel en precies in te richten zoals u dat wilt. We bieden ook HR-advies en helpen met arbeidscontracten en overeenkomsten.'
        },
        {
          vraag: 'Wat zijn de kosten voor salarisadministratie?',
          antwoord: 'De kosten voor salarisadministratie zijn afhankelijk van het aantal medewerkers en de complexiteit van uw situatie. Voor een exacte prijsopgave maken we graag een offerte op maat. Er zijn geen opstartkosten en het eerste gesprek is vrijblijvend. Neem contact op voor een persoonlijk advies.'
        },
        {
          vraag: 'Hoe snel kan Riekhoff mijn loonadministratie overnemen?',
          antwoord: 'Riekhoff kan uw salarisadministratie snel overnemen. We halen alle gegevens op bij uw huidige verwerker, richten de administratie in en zorgen dat de eerstvolgende salarisrun perfect verloopt. Voor bedrijven in de regio Twente kunnen we indien nodig snel schakelen.'
        },
        {
          vraag: 'Verzorgt Riekhoff ook de pensioenaangifte?',
          antwoord: 'Ja, Riekhoff verzorgt de complete pensioenadministratie. We doen aan- en afmeldingen bij het pensioenfonds, verzorgen maandelijkse opgaven en berekenen pensioenpremies. We werken met alle grote pensioenfondsen en verzekeraars in Nederland.'
        },
        {
          vraag: 'Hoe werkt de maandelijkse salarisverwerking?',
          antwoord: 'U levert tijdig de mutaties aan (verlof, overwerk, ziekte, etc.). Wij verwerken de salarissen en u ontvangt concept loonstroken ter controle. Na uw akkoord maken we het betaalbestand en versturen we de definitieve loonstroken digitaal naar uw medewerkers. De loonheffingsaangifte wordt automatisch verzorgd.'
        }
      ]
    },
    {
      titel: 'Advies op maat',
      icon: Briefcase,
      vragen: [
        {
          vraag: 'Wat voor soort advies geeft Riekhoff?',
          antwoord: 'Elk bedrijf is uniek en kent zijn eigen processen en werkwijzen. Wij kijken graag naar jouw specifieke situatie en bieden op maat gemaakte oplossingen. We bieden een vrijblijvende kennismaking, persoonlijke analyse, en stellen een maatwerkpakket voor dienstverlening samen die bij ú past, met transparante tarieven en vaste prijsafspraken.'
        },
        {
          vraag: 'Kan Riekhoff helpen met een bedrijfsovername?',
          antwoord: 'Ja, Riekhoff begeleidt complete overnamtrajecten. Van bedrijfswaardering tot due diligence, van onderhandeling tot financiering. We hebben ervaring met overnames in Twente en kennen de lokale markt goed. Ook voor verkoop van uw bedrijf bent u bij ons aan het juiste adres.'
        },
        {
          vraag: 'Biedt Riekhoff ook interim diensten?',
          antwoord: 'Ja, bij tijdelijke uitval of piekdrukte kunnen we ondersteuning bieden. We kunnen professionals detacheren die bij u op locatie de administratie komen voeren. Ook voor specifieke projecten zoals systeem-implementatie of reorganisatie kunnen we tijdelijk ondersteunen.'
        },
        {
          vraag: 'Hoe werkt een second opinion bij Riekhoff?',
          antwoord: 'Voor een second opinion analyseren we uw huidige situatie objectief. We beoordelen fiscale structuur, administratieve processen of specifieke vraagstukken. U ontvangt een onafhankelijk advies met concrete aanbevelingen. Neem contact op voor meer informatie over de mogelijkheden.'
        },
        {
          vraag: 'Werkt Riekhoff ook samen met andere adviseurs?',
          antwoord: 'Ja, door ons uitgebreide netwerk van onafhankelijke professionals is geen vraagstuk ons te groot of te klein. We werken samen met gespecialiseerde fiscalisten, notarissen, advocaten en andere adviseurs om u de beste dienstverlening te kunnen bieden. Uw belang staat altijd voorop.'
        }
      ]
    }
  ];

  // Alle vragen voor schema
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
      link: '/contact'
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
                  Veelgestelde vragen over Riekhoff
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ VRAGEN - Direct naar vragen */}
        <section id="vragen" className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
          {/* Subtle gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-yellow/8 via-transparent to-accent-yellow/8" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-yellow/12 blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Alle FAQ's per categorie */}
              <div className="space-y-12">
                {faqCategorieen.map((cat, catIndex) => (
                  <div key={catIndex}>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-dark">{cat.titel}</h2>
                    <div className="space-y-4">
                      {cat.vragen.map((faq, i) => (
                        <details key={i} className="group bg-white rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                          <summary className="flex items-center justify-between p-6 cursor-pointer">
                            <h3 className="font-bold pr-8 text-left text-dark">{faq.vraag}</h3>
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

      </div>
    </>
  );
}