import React from 'react';
import { FileText, ChevronRight, Download, Mail, Phone } from 'lucide-react';

export default function AlgemeneVoorwaarden() {
  const artikelen = [
    {
      nummer: '1',
      titel: 'Definities',
      content: `De onderstaande met hoofdletter geschreven definities hebben in het kader van deze algemene voorwaarden de volgende betekenis:

**a. Beroepsregelgeving:** de beroeps- en gedragsregels waaraan alle accountants vanwege de inschrijving in het accountantsregister van de NBA zijn onderworpen;

**b. Bescheiden:** alle door Opdrachtgever aan Opdrachtnemer ter beschikking gestelde informatie of gegevens; alle in het kader van de uitvoering van de Opdracht / Overeenkomst door Opdrachtnemer vervaardigde of verzamelde gegevens; en alle overige informatie van enige relevantie voor de uitvoering of voltooiing van de Opdracht. Voornoemde informatie kan al dan niet zijn opgeslagen op (on)stoffelijke gegevensdragers en al dan niet zijn ondergebracht bij derden;

**c. Medewerker:** een natuurlijke persoon werkzaam bij of verbonden aan de Opdrachtnemer, al dan niet op grond van een arbeidsovereenkomst;

**d. Opdracht / Overeenkomst:** de overeenkomst van opdracht, waarbij Opdrachtnemer zich jegens Opdrachtgever verbindt om bepaalde Werkzaamheden te verrichten;

**e. Opdrachtgever:** de natuurlijke persoon of de rechtspersoon die aan Opdrachtnemer de Opdracht heeft gegeven tot het verrichten van Werkzaamheden;

**f. Opdrachtnemer:** het kantoor dat de Opdracht heeft aanvaard. Alle Opdrachten worden uitsluitend aanvaard en uitgevoerd door het kantoor, niet door of vanwege een individuele Medewerker, ook als Opdrachtgever de Opdracht uitdrukkelijk of stilzwijgend heeft verleend met het oog op uitvoering hiervan door een bepaalde Medewerker of bepaalde Medewerkers. De artikelen 7:404, 7:407 lid 2 en 7:409 BW worden uitdrukkelijk van toepassing uitgesloten;

**g. Werkzaamheden:** alle door Opdrachtnemer ten behoeve van Opdrachtgever uit te voeren werkzaamheden en verrichtingen waartoe Opdracht is gegeven en die door Opdrachtnemer zijn aanvaard, alsmede alle daaruit voor Opdrachtnemer voortvloeiende werkzaamheden en verrichtingen.`
    },
    {
      nummer: '2',
      titel: 'Toepasselijkheid',
      content: `**1.** Deze algemene voorwaarden zijn van toepassing op: alle aanbiedingen, offertes, Opdrachten, rechtsbetrekkingen en Overeenkomsten, hoe ook genaamd, waarbij Opdrachtnemer zich verbindt / zal verbinden om Werkzaamheden te verrichten voor Opdrachtgever, alsmede op alle daaruit voor Opdrachtnemer voortvloeiende Werkzaamheden.

**2.** Afwijkingen van en aanvullingen op de Opdracht en/of deze algemene voorwaarden zijn slechts geldig als ze uitdrukkelijk en schriftelijk zijn overeengekomen in, bijvoorbeeld, een (schriftelijke) Overeenkomst of (een nadere) opdrachtbevestiging.

**3.** Indien enige voorwaarde in deze algemene voorwaarden afwijkt van een voorwaarde in de opdrachtbevestiging dan geldt de in de opdrachtbevestiging opgenomen voorwaarde voor wat betreft de tegenstrijdigheid.

**4.** Deze algemene voorwaarden gelden ook voor eventuele aanvullende of vervolgopdrachten.

**5.** De toepasselijkheid van de algemene voorwaarden van Opdrachtgever wordt door Opdrachtnemer hierbij uitdrukkelijk van de hand gewezen.

**6.** Op deze algemene voorwaarden kunnen zich ook die natuurlijke en rechtspersonen beroepen die direct of indirect op welke wijze dan ook, al dan niet op grond van een arbeidsovereenkomst, bij de dienstverlening aan Opdrachtgever door of vanwege Opdrachtnemer zijn betrokken.`
    },
    {
      nummer: '3',
      titel: 'Gegevens opdrachtgever',
      content: `**1.** Opdrachtgever is gehouden om alle Bescheiden die Opdrachtnemer naar zijn oordeel nodig heeft voor het correct uitvoeren van de verleende Opdracht in de gewenste vorm, op de gewenste wijze en tijdig ter beschikking van Opdrachtnemer te stellen. Opdrachtnemer bepaalt wat moet worden verstaan onder tijdig, de gewenste vorm en de gewenste wijze.

**2.** Opdrachtgever staat in voor de juistheid, de volledigheid en de betrouwbaarheid van de door hem verstrekte Bescheiden, ook als deze van derden afkomstig zijn, voor zover uit de aard van de Opdracht niet anders voortvloeit.

**3.** Opdrachtgever vrijwaart Opdrachtnemer voor schade die het gevolg is van onjuiste of onvolledige Bescheiden.

**4.** Voor rekening en risico van Opdrachtgever zijn de door Opdrachtnemer gemaakte extra kosten en extra uren, alsmede de overige schade voor Opdrachtnemer, vanwege het niet, niet tijdig of niet behoorlijk verschaffen door de Opdrachtgever van voor de uitvoering van de Werkzaamheden noodzakelijke Bescheiden.

**5.** In geval van elektronische verzending van informatie - waaronder begrepen (maar niet beperkt tot) belastingaangiften, jaarrekeningen, rapportages – van (en in opdracht van) Opdrachtgever door Opdrachtnemer aan derden, wordt Opdrachtgever aangemerkt als de partij die de betreffende informatie ondertekent en verzendt.

**6.** Opdrachtnemer heeft het recht om de uitvoering van de Opdracht op te schorten tot het moment dat Opdrachtgever aan de in het eerste lid genoemde verplichtingen heeft voldaan.

**7.** Op eerste schriftelijk verzoek van Opdrachtgever zal Opdrachtnemer de originele, door Opdrachtgever verstrekte, Bescheiden aan Opdrachtgever retourneren.`
    },
    {
      nummer: '4',
      titel: 'Uitvoering opdracht',
      content: `**1.** Opdrachtnemer voert de Opdracht uit naar beste kunnen en met in achtneming van de toepasselijke wet- en (Beroeps)regelgeving.

**2.** Opdrachtnemer bepaalt de wijze waarop de Opdracht wordt uitgevoerd en door welke Medewerker(s).

**3.** Opdrachtnemer heeft het recht om Werkzaamheden te laten verrichten door een door de Opdrachtnemer aan te wijzen derde.`
    },
    {
      nummer: '5',
      titel: 'Beroepsregelgeving',
      content: `**1.** Opdrachtgever verleent volledige medewerking aan de verplichtingen die voor Opdrachtnemer voortvloeien uit de toepasselijke (Beroeps)regelgeving.

**2.** Opdrachtnemer treft passende maatregelen om de van Opdrachtgever afkomstige persoonsgegevens en andere vertrouwelijke informatie te beschermen. Opdrachtnemer zal Medewerkers en in te schakelen derden inlichten over het vertrouwelijke karakter van de informatie. Verwerking van persoonsgegevens door Opdrachtnemer vindt plaats conform de toepasselijke (inter)nationale wet- en (Beroeps)regelgeving op het gebied van de bescherming van persoonsgegevens.

**3.** Opdrachtgever is ermee bekend dat Opdrachtnemer in sommige gevallen op basis van (inter)nationale wet- of (Beroeps)regelgeving verplicht wordt tot openbaarmaking van vertrouwelijke informatie van Opdrachtgever. Voor zover nodig, geeft Opdrachtgever hierbij haar toestemming en medewerking aan dergelijke openbaarmaking, waaronder (maar niet uitsluitend) in de gevallen dat Opdrachtnemer:

a. in wet- en (Beroeps)regelgeving omschreven en tijdens de uitvoering van zijn Werkzaamheden bekend geworden, verrichte of voorgenomen ongebruikelijke transacties dient te melden aan de daarvoor van overheidswege ingestelde autoriteiten;
b. in bepaalde situaties een fraudemelding moet doen;
c. verplicht is om een onderzoek te doen naar de (identiteit van) Opdrachtgever dan wel diens cliënt.

**4.** Opdrachtnemer sluit iedere aansprakelijkheid uit voor schade die ontstaat bij Opdrachtgever ten gevolge van het voldoen door Opdrachtnemer aan de voor hem geldende wet- en (Beroeps)regelgeving.

**5.** Partijen zullen hun verplichtingen op grond van dit artikel opleggen aan door hen in te schakelen derden.`
    },
    {
      nummer: '6',
      titel: 'Intellectuele eigendom',
      content: `**1.** Het uitvoeren van de Opdracht door Opdrachtnemer houdt niet tevens in de overdracht van intellectuele eigendomsrechten die bij Opdrachtnemer rusten. Alle intellectuele eigendomsrechten die ontstaan tijdens, of voortvloeien uit, de uitvoering van de Opdracht behoren toe aan Opdrachtnemer.

**2.** Het is Opdrachtgever uitdrukkelijk verboden om de producten waarop de intellectuele eigendomsrechten van Opdrachtnemer rusten, dan wel producten waarop intellectuele eigendomsrechten rusten met betrekking tot het gebruik waarvan Opdrachtnemer gebruiksrechten heeft verworven, te verveelvoudigen, te openbaren of te exploiteren. Hierbij gaat het bijvoorbeeld (maar niet uitsluitend) om: computerprogramma's, systeemontwerpen, werkwijzen, adviezen, (model)contracten, rapportages, templates, macro's en andere geestesproducten.

**3.** Het is Opdrachtgever niet toegestaan om de in het tweede lid genoemde producten zonder voorafgaande schriftelijke toestemming van Opdrachtnemer aan derden ter hand te stellen. Dit geldt niet in het geval Opdrachtgever een deskundig oordeel wil verkrijgen over de uitvoering van de Werkzaamheden door Opdrachtnemer. Opdrachtgever zal in dat geval zijn verplichtingen op grond van dit artikel opleggen aan de door hem ingeschakelde derden.`
    },
    {
      nummer: '7',
      titel: 'Overmacht',
      content: `**1.** Als partijen de verplichtingen uit de Overeenkomst niet, niet tijdig of niet behoorlijk kunnen nakomen ten gevolge van overmacht in de zin van art. 6:75 BW dan worden die verplichtingen opgeschort tot op het moment dat partijen alsnog in staat zijn deze op de overeengekomen wijze na te komen.

**2.** Als de situatie als bedoeld in het eerste lid zich voordoet hebben partijen het recht om de Overeenkomst geheel of gedeeltelijk en met onmiddellijke ingang schriftelijk op te zeggen, overigens zonder dat recht op enige schadevergoeding bestaat.

**3.** Indien Opdrachtnemer bij het intreden van de overmachtssituatie al gedeeltelijk aan de overeengekomen verplichtingen heeft voldaan, is Opdrachtnemer gerechtigd de verrichte Werkzaamheden afzonderlijk en tussentijds te facturen en dient de Opdrachtgever deze factuur te voldoen als betrof het een afzonderlijke transactie.`
    },
    {
      nummer: '8',
      titel: 'Honorarium en kosten',
      content: `**1.** De door Opdrachtnemer uitgevoerde Werkzaamheden worden op basis van bestede tijd en gemaakte kosten aan Opdrachtgever in rekening gebracht, tenzij partijen uitdrukkelijk anders overeenkomen zoals bijvoorbeeld de betaling van een vaste prijs. Betaling van het honorarium is niet afhankelijk van het resultaat van de Werkzaamheden tenzij schriftelijk anders is overeengekomen. Reistijd en verblijfskosten ten behoeve van de Werkzaamheden worden apart in rekening gebracht.

**2.** Naast het honorarium worden de door Opdrachtnemer gemaakte onkosten en de declaraties van door Opdrachtnemer ingeschakelde derden aan Opdrachtgever in rekening gebracht.

**3.** Opdrachtnemer heeft het recht om de betaling van een voorschot te vragen aan Opdrachtgever. Het niet (tijdig) betalen van het voorschot kan een reden zijn voor Opdrachtnemer om de Werkzaamheden (tijdelijk) op te schorten.

**4.** Als na de totstandkoming van de Overeenkomst, maar voordat de Opdracht geheel is uitgevoerd, honoraria of prijzen wijzigen, heeft Opdrachtnemer het recht om het overeengekomen tarief aan te passen, tenzij uitdrukkelijk anders is overeengekomen.

**5.** Indien dit wettelijk verplicht is dan wordt de omzetbelasting apart in rekening gebracht over alle door Opdrachtgever aan Opdrachtnemer verschuldigde bedragen.`
    },
    {
      nummer: '9',
      titel: 'Betaling',
      content: `**1.** Betaling door Opdrachtgever van de aan Opdrachtnemer verschuldigde bedragen dient, zonder dat Opdrachtgever recht heeft op enige aftrek, korting, opschorting of verrekening, te geschieden binnen 30 dagen na de factuurdatum, tenzij anders overeengekomen. De dag van betaling is de dag van bijschrijving van het verschuldigde op de rekening van Opdrachtnemer.

**2.** Als Opdrachtgever niet binnen de in het eerste lid genoemde termijn heeft betaald, is Opdrachtgever van rechtswege in verzuim en is Opdrachtnemer gerechtigd om vanaf dat moment de wettelijke (handels)rente in rekening te brengen.

**3.** Als Opdrachtgever niet binnen de in het eerste lid genoemde termijn heeft betaald, is Opdrachtgever gehouden tot vergoeding van alle daadwerkelijk door Opdrachtnemer gemaakte gerechtelijke en buitengerechtelijke (incasso)kosten. De vergoeding van de gemaakte kosten beperkt zich niet tot de eventueel door de rechter vastgestelde kostenveroordeling.

**4.** In geval van een gezamenlijk gegeven Opdracht zijn Opdrachtgevers hoofdelijk aansprakelijk voor de betaling van het factuurbedrag, de verschuldigde rente(n) en kosten.

**5.** Als de financiële positie of het betalingsgedrag van Opdrachtgever naar het oordeel van Opdrachtnemer daartoe aanleiding geeft, of als Opdrachtgever nalaat een voorschot dan wel een declaratie binnen de daarvoor gestelde betalingstermijn te voldoen dan is Opdrachtnemer gerechtigd om van Opdrachtgever te verlangen, dat deze onverwijld (aanvullende) zekerheid stelt in een door Opdrachtnemer te bepalen vorm. Als Opdrachtgever nalaat om de verlangde zekerheid te stellen dan is Opdrachtnemer gerechtigd, onverminderd zijn overige rechten, de verdere uitvoering van de Overeenkomst onmiddellijk op te schorten en is al hetgeen Opdrachtgever aan Opdrachtnemer uit welke hoofde ook verschuldigd is, direct opeisbaar.`
    },
    {
      nummer: '10',
      titel: 'Termijnen',
      content: `**1.** Als tussen Opdrachtgever en Opdrachtnemer een termijn/datum is afgesproken waarbinnen de Opdracht dient te worden uitgevoerd en Opdrachtgever verzuimt om: (a) een vooruitbetaling te voldoen - indien overeengekomen - of (b) de noodzakelijke Bescheiden tijdig, volledig, in de gewenste vorm en op de gewenste wijze ter beschikking te stellen, dan treden Opdrachtgever en Opdrachtnemer in overleg over een nieuwe termijn/datum waarbinnen de Opdracht dient te worden uitgevoerd.

**2.** Termijnen waarbinnen de Werkzaamheden dienen te zijn afgerond, zijn alleen te beschouwen als een fatale termijn als dit uitdrukkelijk en met zoveel woorden tussen Opdrachtgever en Opdrachtnemer (schriftelijk) overeengekomen is.`
    },
    {
      nummer: '11',
      titel: 'Aansprakelijkheid en vrijwaringen',
      content: `**1.** Opdrachtnemer is niet aansprakelijk voor schade van Opdrachtgever die ontstaat doordat Opdrachtgever aan Opdrachtnemer geen, onjuiste of onvolledige Bescheiden heeft verstrekt, of doordat deze niet tijdig zijn aangeleverd. Hieronder wordt mede begrepen de situatie dat de Opdrachtnemer niet in staat is de jaarstukken binnen de wettelijke termijn te deponeren bij de Kamer van Koophandel als gevolg van een handelen of nalaten (aan de zijde) van de Opdrachtgever.

**2.** Opdrachtnemer is niet aansprakelijk voor indirecte schade, daaronder begrepen: gederfde winst, gemiste besparingen, schade door bedrijfsstagnatie en andere gevolgschade of indirecte schade die het gevolg is van het niet, niet tijdig of niet deugdelijk presteren door Opdrachtnemer.

**3.** De aansprakelijkheid van Opdrachtnemer is beperkt tot de vergoeding van de directe schade die het rechtstreekse gevolg is van een (samenhangende serie van) toerekenbare tekortkoming(en) in de uitvoering van de Opdracht. Deze aansprakelijkheid voor directe schade is beperkt tot het bedrag dat volgens de aansprakelijkheidsverzekeraar van Opdrachtnemer voor het betreffende geval wordt uitgekeerd, vermeerderd met het eventueel door Opdrachtnemer uit hoofde van de verzekering te dragen eigen risico. Onder directe schade wordt – onder meer – verstaan: de gemaakte redelijke kosten ter vaststelling van de oorzaak en omvang van de schade; de gemaakte redelijke kosten om de prestatie van Opdrachtnemer aan de Overeenkomst te laten beantwoorden en de gemaakte redelijke kosten ter voorkoming of beperking van de schade.

**4.** Als, om welke reden dan ook, de aansprakelijkheidsverzekeraar niet tot uitkering - zoals bedoeld in lid 3 van dit artikel - overgaat, is de aansprakelijkheid van Opdrachtnemer beperkt tot het bedrag van het voor de uitvoering van de Opdracht in rekening gebrachte honorarium. Als de Opdracht een duurovereenkomst betreft met een looptijd van meer dan één (1) jaar, dan wordt het hiervoor bedoelde bedrag gesteld op eenmaal het bedrag van het honorarium dat in de twaalf maanden voorafgaand aan het ontstaan van de schade in rekening is gebracht aan Opdrachtgever. In geen geval zal de totale vergoeding van de schade op grond van dit artikellid meer bedragen dan € 500.000 per toerekenbare tekortkoming, tenzij partijen - gezien de omvang van de Opdracht of de risico's die met de Opdracht gepaard gaan - reden zien om bij het aangaan van de Overeenkomst af te wijken van dit maximum.

**5.** Een samenhangende serie van toerekenbare tekortkomingen geldt als één (1) toerekenbare tekortkoming.

**6.** De in dit artikel opgenomen beperkingen van aansprakelijkheid gelden niet indien en voor zover sprake is van opzet of bewuste roekeloosheid van Opdrachtnemer of haar leidinggevend management.

**7.** Opdrachtgever is gehouden om schade beperkende maatregelen te nemen. Opdrachtnemer heeft het recht om de schade ongedaan te maken of te beperken door herstel of verbetering van de uitgevoerde Werkzaamheden.

**8.** Opdrachtgever vrijwaart Opdrachtnemer voor vorderingen van derden wegens schade die veroorzaakt is doordat Opdrachtgever aan Opdrachtnemer geen, onjuiste of onvolledige Bescheiden heeft verstrekt.

**9.** Opdrachtgever vrijwaart Opdrachtnemer voor aanspraken van derden (Medewerkers van Opdrachtnemer en door Opdrachtnemer ingeschakelde derden daaronder begrepen) die in verband met de uitvoering van de Opdracht schade lijden, welke schade het gevolg is van het handelen of nalaten van Opdrachtgever of van onveilige situaties in diens bedrijf of organisatie.

**10.** Het bepaalde in de leden 1 t/m 9 van dit artikel heeft zowel betrekking op de contractuele als de buitencontractuele aansprakelijkheid van Opdrachtnemer jegens Opdrachtgever.`
    },
    {
      nummer: '12',
      titel: 'Opzegging',
      content: `**1.** Opdrachtgever en Opdrachtnemer kunnen te allen tijde (tussentijds) de Overeenkomst onmiddellijk opzeggen zonder inachtneming van een opzegtermijn door middel van een schriftelijke kennisgeving aan de andere partij. Als de Overeenkomst eindigt voordat de Opdracht is voltooid, is Opdrachtgever het honorarium verschuldigd overeenkomstig de door Opdrachtnemer opgegeven uren voor Werkzaamheden die ten behoeve van Opdrachtgever zijn verricht.

**2.** Als Opdrachtgever overgaat tot (tussentijdse) opzegging dan heeft Opdrachtnemer recht op vergoeding van het aan zijn zijde ontstane en aannemelijk te maken bezettingsverlies, op vergoeding van additionele kosten die Opdrachtnemer reeds heeft gemaakt, en op vergoeding van kosten die voortvloeien uit eventuele annulering van ingeschakelde derden (zoals - onder meer - de eventuele kosten met betrekking tot onderaanneming).

**3.** Als Opdrachtnemer overgaat tot (tussentijdse) opzegging dan heeft Opdrachtgever recht op medewerking van Opdrachtnemer bij de overdracht van Werkzaamheden aan derden, tenzij er sprake is van opzet of bewuste roekeloosheid aan de zijde van Opdrachtgever waardoor Opdrachtnemer zich genoodzaakt ziet om tot opzegging over te gaan. Voorwaarde voor het recht op medewerking als in dit lid bepaald, is dat Opdrachtgever alle onderliggende openstaande voorschotten dan wel alle declaraties heeft voldaan.`
    },
    {
      nummer: '13',
      titel: 'Opschortingsrecht',
      content: `**1.** Opdrachtnemer is bevoegd om na een zorgvuldige belangenafweging de nakoming van al zijn verplichtingen op te schorten, waaronder begrepen de afgifte van Bescheiden of andere zaken aan Opdrachtgever of derden, tot op het moment dat alle opeisbare vorderingen op Opdrachtgever volledig zijn voldaan.

**2.** Het eerste lid is niet van toepassing op Bescheiden van Opdrachtgever die (nog) geen bewerking door Opdrachtnemer hebben ondergaan.`
    },
    {
      nummer: '14',
      titel: 'Vervaltermijn',
      content: `Voor zover in deze algemene voorwaarden niet anders is bepaald, vervallen vorderingsrechten en andere bevoegdheden van Opdrachtgever uit welke hoofde ook jegens Opdrachtnemer in verband met het verrichten van Werkzaamheden door Opdrachtnemer, in ieder geval na één jaar na het moment waarop Opdrachtgever bekend werd of redelijkerwijs bekend kon zijn met het bestaan van deze rechten en bevoegdheden. Deze termijn betreft niet de mogelijkheid om een klacht in te dienen bij de daartoe aangewezen instantie(s) voor de klachtbehandeling en/of de Raad voor Geschillen.`
    },
    {
      nummer: '15',
      titel: 'Elektronische communicatie en elektronisch deponeren van jaarstukken',
      content: `**1.** Tijdens de uitvoering van de Opdracht kunnen Opdrachtgever en Opdrachtnemer door middel van elektronische middelen met elkaar communiceren en/of gebruik maken van elektronische opslag (zoals cloud-toepassingen). Behoudens voor zover schriftelijk anders is overeengekomen, mogen partijen ervan uitgaan dat verzending van correct geadresseerde faxberichten, e-mails (met inbegrip van e-mails die via internet worden verstuurd) en voicemailberichten ongeacht of deze vertrouwelijke informatie of stukken bevatten die op de Opdracht betrekking hebben, over en weer worden aanvaard. Hetzelfde geldt voor andere door de andere partij gebruikte of aanvaarde communicatiemiddelen.

**2.** Opdrachtgever en Opdrachtnemer zijn jegens elkaar niet aansprakelijk voor schade die eventueel voortvloeit bij één of ieder van hen ten gevolge van het gebruik van elektronische middelen van communicatie, netwerken, applicaties, elektronische opslag, of overige systemen waaronder – maar niet beperkt tot – schade ten gevolge van niet-aflevering of vertraging bij de aflevering van elektronische communicatie, omissies, vervorming, onderschepping of manipulatie van elektronische communicatie door derden of door programmatuur/apparatuur gebruikt voor verzending, ontvangst of verwerking van elektronische communicatie, overbrenging van virussen en het niet of niet goed functioneren van het telecommunicatienetwerk of andere voor elektronische communicatie benodigde middelen, behoudens voor zover de schade het gevolg is van opzet of grove schuld. Het voorgaande geldt eveneens voor het gebruik dat Opdrachtnemer daarvan maakt in haar contacten met derden.

**3.** In aanvulling op het vorige lid aanvaardt Opdrachtnemer geen aansprakelijkheid voor enige schade ontstaan door of in verband met het elektronisch verzenden van (elektronische) jaarstukken en het digitaal deponeren daarvan bij de Kamer van Koophandel.

**4.** Zowel Opdrachtgever als Opdrachtnemer zullen al hetgeen redelijkerwijs van ieder van hen verwacht mag worden doen of nalaten ter voorkoming van het optreden van voornoemde risico's.

**5.** De data-uittreksels uit de computersystemen van verzender leveren dwingend bewijs op van (de inhoud van) de door verzender verzonden elektronische communicatie tot het moment dat tegenbewijs is geleverd door de ontvanger.

**6.** Het bepaalde in artikel 11 is van dienovereenkomstige toepassing.`
    },
    {
      nummer: '16',
      titel: 'Overige bepalingen',
      content: `**1.** Als Opdrachtnemer op locatie van Opdrachtgever Werkzaamheden verricht, garandeert Opdrachtgever een geschikte werkplek, die voldoet aan de wettelijk gestelde ARBO-normen en aan andere toepasselijke regelgeving met betrekking tot arbeidsomstandigheden. Opdrachtgever dient er voor zorg te dragen dat Opdrachtnemer in dat geval wordt voorzien van kantoorruimte en overige faciliteiten die naar het oordeel van Opdrachtnemer noodzakelijk of nuttig zijn om de Overeenkomst uit te voeren en die voldoen aan alle daaraan te stellen (wettelijke) vereisten. Met betrekking tot beschikbaar gestelde (computer)faciliteiten is Opdrachtgever verplicht voor continuïteit zorg te dragen onder meer door middel van afdoende back-up, veiligheid en viruscontrole procedures. Opdrachtnemer zal viruscontrole procedures toepassen wanneer Opdrachtnemer van de faciliteiten van Opdrachtgever gebruik maakt.

**2.** Opdrachtgever zal geen bij de uitvoering van de Werkzaamheden betrokken Medewerkers aannemen of benaderen om bij Opdrachtgever, al dan niet tijdelijk, direct of indirect in dienst te treden, dan wel direct of indirect ten behoeve van Opdrachtgever, al dan niet in loondienst, werkzaamheden te verrichten gedurende de looptijd van de Overeenkomst of enige verlenging daarvan en gedurende de 12 maanden daarna.

**3.** Deze algemene voorwaarden zijn zowel in de Nederlandse als Engelse taal opgesteld. Ingeval van verschil of tegenstrijdigheid tussen de Engelse en de Nederlandse tekst, is de Nederlandse tekst bindend.

**4.** Bepalingen in de Opdracht die uitdrukkelijk of naar hun aard ook na afloop of beëindiging van de Opdracht van kracht dienen te blijven, blijven na afloop of beëindiging van kracht, waaronder mede begrepen de artikelen 6, 8, 9, 11, 16 lid 2 en 17.`
    },
    {
      nummer: '17',
      titel: 'Toepasselijk recht en forumkeuze',
      content: `**1.** De Overeenkomst wordt beheerst door Nederlands recht.

**2.** Alle geschillen zullen worden beslest door de bevoegde rechter in het arrondissement waarin Opdrachtnemer gevestigd is.

**3.** Het bepaalde in lid 1 en 2 van dit artikel laat onverlet de mogelijkheid van Opdrachtgever om een geschil voor te leggen bij de Raad voor Geschillen en/of een klacht in te dienen bij de Opdrachtnemer zelf, de Accountantskamer (tuchtrecht) of de Klachtencommissie (klachtrecht).`
    },
    {
      nummer: '18',
      titel: 'Reparatieclausule nietigheden',
      content: `**1.** Als enige bepaling uit deze algemene voorwaarden of uit de onderliggende Opdracht/Overeenkomst geheel of ten dele nietig en/of niet geldig en/of niet afdwingbaar mocht zijn, dit tengevolge van enig wettelijk voorschrift, rechterlijke uitspraak dan wel anderszins, dan zal dit geen enkel gevolg hebben voor de geldigheid van alle andere bepalingen van deze algemene voorwaarden of de onderliggende Opdracht/Overeenkomst.

**2.** Als op enige bepaling in de Opdracht of op een gedeelte van de Opdracht rechtens geen beroep kan worden gedaan, blijft het overige gedeelte van de Opdracht onverminderd van kracht, met dien verstande dat de bepaling op het gedeelte waarop geen beroep kan worden gedaan, geacht moet worden zodanig te zijn aangepast dat een beroep daarop wel mogelijk is, waarbij de intentie van partijen met betrekking tot de oorspronkelijke bepaling c.q. het oorspronkelijke gedeelte zoveel mogelijk in stand blijft.`
    }
  ];

  const belangrijkeArticles = [
    { nummer: '2', titel: 'Toepasselijkheid', highlight: 'Deze voorwaarden gelden voor alle opdrachten' },
    { nummer: '9', titel: 'Betaling', highlight: '30 dagen betalingstermijn' },
    { nummer: '11', titel: 'Aansprakelijkheid', highlight: 'Beperkte aansprakelijkheid' },
    { nummer: '17', titel: 'Toepasselijk recht', highlight: 'Nederlands recht' }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Algemene Voorwaarden Riekhoff Accountants",
    "description": "Algemene voorwaarden van Riekhoff accountants en adviseurs B.V. conform NBA 2017.",
    "url": "https://www.riekhoff.nl/algemene-voorwaarden",
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
      {"@type": "ListItem", "position": 2, "name": "Algemene Voorwaarden", "item": "https://www.riekhoff.nl/algemene-voorwaarden"}
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
                  <span className="text-white">Algemene Voorwaarden</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-accent-yellow" />
                  <p className="text-accent-yellow uppercase text-xs font-semibold tracking-wider">
                    ALGEMENE VOORWAARDEN
                  </p>
                </div>
                
                <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-4">
                  Algemene Voorwaarden NBA 2017
                </h1>
                
                <p className="text-gray-300 text-sm">
                  Riekhoff accountants en adviseurs B.V. hanteert de Algemene Voorwaarden NBA 2017, 
                  gedeponeerd bij de Griffie van de Arrondissementsrechtbank te Amsterdam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-accent-yellow/10 border-l-4 border-accent-yellow rounded-r-lg p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Deze algemene voorwaarden zijn van toepassing op alle dienstverlening door Riekhoff 
                  accountants en adviseurs B.V. De voorwaarden zijn gebaseerd op het NBA-model en 
                  beschermen zowel opdrachtgever als opdrachtnemer.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {belangrijkeArticles.map((artikel, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-accent-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-dark font-bold text-sm">{artikel.nummer}</span>
                      </div>
                      <h3 className="font-bold text-sm">{artikel.titel}</h3>
                    </div>
                    <p className="text-xs text-gray-600">{artikel.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ALLE ARTIKELEN */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Alle artikelen</h2>
              
              <div className="space-y-4">
                {artikelen.map((artikel, i) => (
                  <details key={i} className="group bg-white rounded-xl border-2 border-gray-100 hover:border-accent-yellow transition-all">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <div className="flex items-center gap-4 pr-8">
                        <div className="w-10 h-10 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-accent-yellow font-bold">{artikel.nummer}</span>
                        </div>
                        <h3 className="font-bold text-left">Artikel {artikel.nummer}: {artikel.titel}</h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-accent-yellow transform group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 pl-20">
                      <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                        {artikel.content}
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
                <h3 className="font-bold mb-3">Algemene Voorwaarden NBA 2017</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Deze algemene voorwaarden zijn gedeponeerd bij de Griffie van de Arrondissementsrechtbank 
                  te Amsterdam op 19 juni 2017 onder nummer 39/2017. De voorwaarden zijn opgesteld door de 
                  Koninklijke Nederlandse Beroepsorganisatie van Accountants (NBA) en worden door vrijwel 
                  alle accountantskantoren in Nederland gehanteerd.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Riekhoff accountants en adviseurs B.V. maakt gebruik van deze standaard voorwaarden om 
                  transparantie en duidelijkheid te bieden aan alle opdrachtgevers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Vragen over de algemene voorwaarden?</h3>
              <p className="text-gray-600 mb-6">
                Neem contact op met ons kantoor voor toelichting of vragen over de voorwaarden.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:info@riekhoff.nl" className="inline-flex items-center justify-center gap-2 bg-accent-yellow text-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all text-sm">
                  <Mail className="w-4 h-4" />
                  info@riekhoff.nl
                </a>
                <a href="tel:+31541200007" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm">
                  <Phone className="w-4 h-4" />
                  0541 200 007
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}