# Research: negativní aspekty karetních plateb z pohledu obchodníků

## Jak číst tento dokument

Tento materiál je připraven jako podklad pro web, který chce vysvětlit veřejnosti, proč část obchodníků neakceptuje platební karty nebo je akceptuje nerada a proč často preferuje hotovost nebo klasický bankovní převod.

Důležité metodické poznámky:

1. Tento dokument nehájí daňové úniky. Popisuje legitimní ekonomické, provozní, smluvní, technické a reputační důvody, proč je akceptace karet pro část obchodníků nevýhodná.
2. Ne každý obchodník, který odmítá karty, je poctivý. Stejně tak ale neexistuje důkaz, že by každý obchodník odmítající karty obcházel daně. Právě tuto zkratku je potřeba rozbít.
3. Tam, kde existuje přímý důkaz, je to v textu označeno jako fakt. Tam, kde jde o interpretaci širšího trendu nebo motivace institucí, je to označeno jako indicie nebo inference.
4. U tématu „přeprodeje dat“ je důležitá přesnost: ve většině případů nejde o prodej jmenného seznamu „Petr Novák koupil 2 rohlíky“, ale o monetizaci transakčních dat přes anonymizaci, agregaci, benchmarky, segmentaci, reklamní cílení, atribuci kampaní a konzultační/analytické produkty.

## Stručný závěr

Z pohledu obchodníka není karetní platba jen „pohodlnější způsob přijetí peněz“. Je to vstup do vícevrstvé infrastruktury s vlastními pravidly, poplatky, chargebackovým režimem, zpožděným vypořádáním, rizikem zadržení prostředků, technickou závislostí na třetích stranách a rozsáhlou datovou stopou.

Na úrovni regulace i marketingu navíc dlouhodobě existuje silný narativ, že vyšší podíl bezhotovostních plateb znamená větší transparentnost a menší prostor pro daňové úniky. Tento narativ má reálný základ v některých studiích a veřejných politikách, ale z něj neplyne, že každý konkrétní obchodník bez terminálu je daňový podvodník. Naopak existuje dost důkazů, že řada obchodníků uvádí jiné, zcela světské důvody: náklady, marže, nestabilní připojení, opožděné peníze, chargebacky, smluvní pasti, riziko blokace účtu nebo prostou provozní jednoduchost hotovosti a převodu.

## 1. Jak funguje karetní platba a kde obchodníkovi vznikají náklady

Karetní platba je vícečlánkový proces. Typicky se ho účastní:

- zákazník a jeho vydavatelská banka,
- karetní schéma nebo asociace (Visa, Mastercard),
- acquiringová banka nebo payment processor obchodníka,
- případně gateway, POS software, terminal provider, payment facilitator a další mezivrstva.

Zákazník vidí jen „pípnutí terminálu“. Obchodník ale vstupuje do systému, kde se z jedné platby skládá několik nákladových vrstev:

- interchange fee mezi acquirerem a issuerem,
- scheme fee karetní asociaci,
- marže acquirera nebo payment processoru,
- poplatky za terminál, gateway, settlement, refundy, chargebacky a administrativu,
- náklady na účetní párování a řešení sporů.

EU regulace sama výslovně říká, že interchange fee tvoří hlavní část poplatků účtovaných obchodníkům za karetní transakce a že před regulací vedly rozdílné sazby a pravidla schémat k vyšším nákladům pro obchodníky a k omezení konkurence. Regulace také musela nařídit takzvaný unblending, tedy rozpad merchant service charge na jednotlivé složky, což samo o sobě dokazuje, že předchozí stav byl pro obchodníka nepřehledný. Pokud musí zákon přikázat, aby acquirer rozepisoval interchange, scheme fee a merchant service charge zvlášť, je to nepřímý důkaz, že přirozený stav trhu byl pro obchodníka informačně nevýhodný.

Zdroje:

- Regulation (EU) 2015/751 on interchange fees: https://eur-lex.europa.eu/eli/reg/2015/751/oj/eng
- Evropská komise, Payment services / PSD2 + IFR shrnutí: https://finance.ec.europa.eu/consumer-finance-and-payments/payment-services/payment-services_bg

## 2. Poplatky nejsou jen „0,2 % nebo 0,3 %“ a jsou strukturálně složité

Ve veřejné debatě se často objevuje zkratka, že poplatek za kartu je „jen dvě nebo tři desetiny procenta“. To je zavádějící. V EU jsou na 0,2 % (debet) a 0,3 % (kredit) zastropovány jen interchange fee u spotřebitelských karet v regulovaném čtyřstranném schématu. To není totéž co konečný náklad obchodníka.

Pro obchodníka z toho plyne několik nepříjemných skutečností:

- strop se netýká všech karet a všech transakcí,
- konečný merchant service charge zahrnuje i scheme fee a marži zprostředkovatele,
- u některých transakcí může být cena výrazně vyšší než u běžné tuzemské spotřebitelské karty,
- u malých marží může i jednotka procenta znamenat zásah do zisku, ne do obratu.

Regulace sama výslovně ponechává mimo stropy například komerční/business karty a některé jiné neregulované modely. Evropská komise zároveň v soutěžních řízeních proti Mastercard a Visa řešila právě to, že přeshraniční a inter-regionální nastavení poplatků představovalo pro evropské obchodníky významnou zátěž. U spotřebitelských karet vydaných mimo EHP byly v závazcích Visa a Mastercard stanoveny stropy 0,2 % a 0,3 % pro card-present, ale 1,15 % a 1,50 % pro online transakce. To je silný důkaz, že „přeshraniční“ nebo „zahraniční“ karta může být pro obchodníka řádově dražší než domácí spotřebitelská karta v regulovaném režimu.

Mastercard na evropském interchange hubu výslovně uvádí, že regulace se vztahuje jen na EEA domestic a EEA cross-border consumer debit/credit transactions. Už samotná formulace potvrzuje, že zbytek ceníku existuje mimo tento jednoduchý veřejný narativ.

Zdroje:

- Regulation (EU) 2015/751: https://eur-lex.europa.eu/eli/reg/2015/751/oj/eng
- Evropská komise, přehled závazků k inter-regionálním MIF Visa: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A52019XC0904%2801%29
- Evropská komise, přehled závazků k inter-regionálním MIF Mastercard: https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=CELEX%3A52019XC0905%2801%29
- Mastercard Europe interchange hub: https://www.mastercard.com/europe/en/regulatory/european-interchange.html

## 3. Neprůhlednost poplatků není náhoda, ale strukturální vlastnost trhu

EU regulace zavedla povinnost rozepisovat merchant service charge podle typů a značek karet a povinnost pravidelně poskytovat informace o merchant service charge a interchange fee. To je důležitý detail: kdyby byl trh přehledný sám od sebe, taková povinnost by nebyla potřeba.

Neprůhlednost v praxi vzniká několika způsoby:

- blended pricing: různé karty a různé sazby jsou slité do jedné obchodnické sazby,
- variabilní poplatky podle kategorie karty, země vydání, channelu a rizikového profilu,
- další položky mimo základní procento: chargeback fee, refund fee, minimum monthly fee, gateway fee, PCI/non-compliance fee, early termination fee, statement fee,
- čisté vyplacení obchodníkovi probíhá často až po odpočtu více položek najednou.

Klasickým důkazem, že problém netkví jen v „pocitech obchodníků“, je i žaloba FTC proti First American Payment Systems. FTC firmě vytkla mimo jiné misleading sales pitches, hidden fees a surprise exit fees. Jinými slovy: americký regulátor výslovně postavil případ na tom, že payment processor malým firmám účtoval skryté nebo nečekané poplatky a zamykal je do nevýhodných vztahů. To je přesně ten typ zkušenosti, který živí nedůvěru obchodníků k akceptačním smlouvám.

Zdroje:

- Regulation (EU) 2015/751, články 9 a 12: https://eur-lex.europa.eu/eli/reg/2015/751/oj/eng
- FTC refund page k First American Payment Systems: https://www.ftc.gov/enforcement/refunds/first-american-payment-systems-settlement

## 4. Obchodník často nesmí náklady jednoduše přenést na zákazníka

Jeden z nejvíc frustrujících aspektů pro obchodníka je ten, že karetní náklad sice nese on, ale ne vždy ho smí transparentně přenést na plátce.

V EU PSD2 zakazuje surcharge u většiny spotřebitelských debetních a kreditních karet i u SEPA převodů a inkas. Evropská komise i portál Your Europe to komunikují jasně: obchodník nesmí zákazníkovi u většiny běžných karet přičíst příplatek. Výjimky se týkají hlavně business/commercial karet a některých třístranných schémat.

To znamená:

- u nejběžnějších karet obchodník typicky nese náklad uvnitř vlastní marže,
- při stejné ceníkové ceně dotují zákazníci platící levnějším způsobem zákazníky platící dražším způsobem,
- obchodník ztrácí část možnosti „steeringu“, tedy motivace zákazníka k levnějšímu platebnímu prostředku.

I tam, kde surcharge formálně možný je, bývá svázán dalšími pravidly. Mastercard v USA například uvádí stropy, disclosure povinnosti a další omezení. Prakticky to znamená další administrativu, riziko chyb a reputační konflikt se zákazníkem.

Zdroje:

- Your Europe, zákaz přirážek na karty v EU: https://europa.eu/youreurope/business/finance-funding/making-receiving-payments/electronic-cash-payments/index_en.htm
- Evropská komise, shrnutí PSD2: https://finance.ec.europa.eu/consumer-finance-and-payments/payment-services/payment-services_bg
- Výklad k článku 62(4) PSD2: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A52021XC1229%2804%29
- Mastercard surcharge rules: https://www.mastercard.com/us/en/business/support/merchant-surcharge-rules.html

## 5. Peníze nejsou na účtu hned a mohou se zpozdit i týdny

Pro zákazníka je karta „okamžitá“. Pro obchodníka velmi často není. Z pohledu cash-flow je to zásadní rozdíl proti hotovosti a často i proti běžnému bankovnímu převodu.

Stripe v dokumentaci uvádí, že prostředky z card payments jsou při automatických payout schedules standardně dostupné v režimu T+2. U prvního payoutu Stripe výslovně uvádí čekací dobu 7 až 14 dnů, v některých zemích i delší, a dodává, že delší čekání souvisí mimo jiné s risk mitigation. Stripe také popisuje payout availability delays u transakcí, které byly dodatečně vyhodnoceny jako pravděpodobně sporné nebo podvodné.

Adyen popisuje payouty na net basis. To znamená, že obchodník nedostává „hrubé tržby“, ale tržby mínus refundy, chargebacky a transakční náklady. Adyen také výslovně upozorňuje, že next payout může být negativní. To je pro malé podniky kritický detail: karetní akceptace není jen o pozdějším připsání peněz, ale v určitých situacích i o tom, že další payout nepřijde vůbec nebo bude záporný.

Z pohledu živnostníka nebo malé provozovny je to obrovský rozdíl oproti hotovosti. U hotovosti je vypořádání okamžité. U převodu bývá také zřejmé, kdy peníze přišly a kolik jich přišlo. U karetního payoutu peníze často přijdou se zpožděním, po odpočtu dalších položek a s vazbou na interní risk modely poskytovatele.

Zdroje:

- Stripe, automatic payout speeds / T+2: https://docs.stripe.com/treasury/moving-money/payouts
- Stripe, first payout delay 7–14 dní: https://support.stripe.com/questions/waiting-on-your-first-stripe-payout-what-you-need-to-know?locale=en-GB
- Stripe, payout availability delays: https://support.stripe.com/questions/payout-availability-delays?locale=en-GB
- Adyen, getting paid: https://docs.adyen.com/pt/account/getting-paid
- Adyen, next payout může být negativní: https://docs.adyen.com/account/balances/next-payout

## 6. Zadržování prostředků a rezervy jsou normální součást odvětví

Řadě zákazníků připadá neintuitivní, že obchodník zaplatí za akceptaci karet a přesto se mu část peněz ještě zadrží. Jenže zadržování peněz je v kartovém acquiringu běžná praxe.

Square výslovně popisuje rolling reserve jako běžnou průmyslovou praxi, kdy se část karetních plateb dočasně odloží, aby z ní bylo možné krýt chargebacky. Stripe má dokumentaci k reserves i k pausing payouts. Adyen umožňuje nastavit Reserve, tedy buffer, který se doplňuje i z budoucích payoutů; pokud rezerva nestačí, může pomocí auto-fundingu strhávat peníze z bankovního účtu, na který payouty chodí.

Pro obchodníka to znamená několik rizik:

- část obratu je dočasně nelikvidní,
- provider jednostranně řídí, kolik peněz obchodník fakticky uvidí,
- při zvýšení rizikového profilu nebo při nárůstu sporů může být likvidita rychle stažena,
- refundy mohou selhat kvůli nedostatku dostupných prostředků, i když obchodník „má tržby“.

To je velmi podstatný argument zejména pro malé firmy s napjatým cash-flow. U hotovosti ani u běžného příchozího bankovního převodu obchodník nepotřebuje žádat třetí stranu, aby mu „uvolnila“ jeho vlastní peníze.

Zdroje:

- Square, reserves FAQ: https://squareup.com/help/us/en/article/6832-reserves-faq
- Stripe, reserves na connected accounts: https://docs.stripe.com/connect/connected-account-reserves
- Stripe, pausing payouts: https://docs.stripe.com/connect/pausing-payments-or-payouts-on-connected-accounts
- Adyen, reserve: https://docs.adyen.com/account/balances/reserve/
- Adyen, co je reserve a jak se doplňuje: https://help.adyen.com/en_US/knowledge/finance/balances/what-is-the-reserve-and-how-do-i-set-it-up
- Adyen, auto-funding z bankovního účtu: https://help.adyen.com/en_US/knowledge/finance/balances/what-is-autofunding-and-how-do-i-set-it-up

## 7. Chargebacky přenášejí část rizika zákazníka a issuera na obchodníka

Chargeback je pro obchodníka jedna z nejvíc asymetrických částí karetního systému. Zákazník transakci rozporuje, issuer nebo síť spor zpracuje a obchodník musí dodatečně dokazovat, že transakce byla legitimní. I když spor nakonec vyhraje, nese administrativu, časovou ztrátu a často i další poplatky.

Visa na svém oficiálním webu výslovně popisuje chargebacky jako důsledek komplexního dispute procesu. Důvody mohou být fraud, nepoznaná transakce nebo nespokojenost se zbožím či službou. Tedy nejen krádež karty, ale i zákaznický spor nebo takzvaný friendly fraud.

Visa zároveň nabízí Order Insight jako nástroj, který má „deflect disputes early“ a snížit revenue loss. To je zajímavý nepřímý důkaz: sama karetní síť staví produkt na tom, že přátelské podvody, billing confusion a zbytečné chargebacky jsou pro obchodníky reálný a významný problém.

Negativní dopad na obchodníka:

- ztráta tržby po dodání zboží/služby,
- dodatečný chargeback fee,
- práce se sběrem důkazů,
- horší risk profil a vyšší pravděpodobnost rezerv nebo restrikcí,
- vyšší nejistota u online a službových transakcí.

Zdroje:

- Visa, chargebacks: https://corporate.visa.com/en/solutions/acceptance/chargebacks.html
- Visa, Order Insight: https://corporate.visa.com/en/products/order-insight.html
- Square reserves FAQ: https://squareup.com/help/us/en/article/6832-reserves-faq

## 8. Složitější účetnictví a složitější párování plateb

Karetní platba obvykle znamená složitější účetnictví než hotovost a často i než bankovní převod.

Praktické problémy:

- datum prodeje, datum autorizace, datum settlementu a datum payoutu se mohou lišit,
- na účet často nepřijde hrubá částka tržby, ale netto po odečtení poplatků, refundů a chargebacků,
- refundy, chargebacky a fee adjustments se mohou objevit až zpětně,
- u více měn vznikají další kurzové a vypořádací rozdíly,
- měsíční statementy a payout reporty je nutné párovat s fiskální a skladovou evidencí.

Regulace IFR předpokládá, že obchodník potřebuje minimálně měsíčně dostávat informace o merchant service charge a interchange fee. Adyen přímo popisuje next payout, reserve, negative payout a refund fail kvůli insufficient funds. To jsou přesně situace, které z účetního a kontrolního pohledu komplikují uzávěrky i běžné párování.

Oproti tomu hotovost je okamžitá a převod bývá v podnikové praxi často svázán s konkrétní fakturou, variabilním symbolem a pevným datumem připsání.

Zdroje:

- Regulation (EU) 2015/751, články 9 a 12: https://eur-lex.europa.eu/eli/reg/2015/751/oj/eng
- Adyen, next payout: https://docs.adyen.com/account/balances/next-payout
- Adyen, insufficient in-process funds: https://help.adyen.com/knowledge/payments/refunds/what-does-insufficient-inprocess-funds-mean/
- Stripe, payouts FAQ a reporting: https://support.stripe.com/embedded-connect/questions/payouts-faq

## 9. Hardware, software, konektivita a provozní závislost

Akceptace karet není jen „mít terminál“. Znamená to:

- pořízení nebo pronájem hardware,
- připojení k síti,
- někdy integraci do pokladního systému,
- školení obsluhy,
- řešení výpadků, reklamací, chargeback evidence a administrace.

Samotná existence českého projektu „Česko platí kartou“, který obchodníkům nabízí terminál až na rok zdarma a bez poplatků, je nepřímým důkazem, že pořizovací a provozní bariéra existuje. Kdyby terminál nebyl pro malé podniky relevantní náklad nebo bariéra adopce, stát a partneři by nemuseli spouštět dotačně-marketingový program na bezplatné vyzkoušení.

Česká televize v reportáži z roku 2023 uvádí konkrétní příklad provozovny, která karty zkoušela zavést dvakrát, ale kvůli kolísavému signálu od nich ustoupila. To je důležitý protiargument proti zjednodušení „stačí si pořídit terminál“. V některých provozech je technická spolehlivost reálný problém, ne výmluva.

Zdroje:

- MPO, projekt Česko platí kartou: https://mpo.gov.cz/cz/rozcestnik/pro-media/tiskove-zpravy/cesko-plati-kartou-pokracuje--obchodnici-mohou-stale-zadat-o-platebni-terminaly-zdarma--269029/
- ČT24, důvody obchodníků včetně signálu a potřeby hotovosti: https://ct24.ceskatelevize.cz/clanek/domaci/cesi-stale-vice-plati-kartou-nektera-mista-presto-odmitaji-pouzivat-terminaly-4795

## 10. Technické výpadky ukazují centralizační křehkost systému

Karetní infrastruktura působí robustně, ale když centrální vrstva selže, výpadek se projeví okamžitě v celé síti. Typickým příkladem je velký evropský výpadek Visa z 1. června 2018. Visa tehdy uvedla, že příčinou byl hardware failure a že nešlo o cyberattack. Pro obchodníky to ale bylo z hlediska provozu v zásadě jedno: část transakcí nešla zpracovat.

Význam pro obchodníka:

- nemůže inkasovat, přestože zákazník chce zaplatit,
- fronta a reputační škoda dopadá na obchodníka, ne na síť,
- v provozech bez hotovostní alternativy může výpadek znamenat okamžitou ztrátu tržeb,
- obchodník je závislý na infrastruktuře, kterou neřídí a nemůže ovlivnit.

To je důležitý argument proti představě, že karetní platba je „bezriziková moderní jistota“. Je pohodlná, ale centralizovaná. Hotovost naopak funguje i při síťovém selhání. Bankovní převod je zase jiná infrastruktura než karetní schéma.

Zdroje:

- Reuters/Euronews k výpadku Visa Europe 1. 6. 2018: https://www.euronews.com/2018/06/01/chaos-unfolds-as-visa-payment-crashes-across-europe
- Deutsche Welle shrnutí s citací Visa o hardware failure: https://www.dw.com/en/visa-near-normal-after-outage-in-europe/a-44047990

## 11. Přeshraniční karty, business karty a rizikové segmenty jsou dražší a tvrději řízené

Ve veřejné debatě se často předpokládá, že „karta jako karta“. Jenže obchodník v praxi často neví, jak drahá bude konkrétní karta, dokud mu neproteče přes systém.

Zásadní body:

- business/commercial karty nejsou v EU pod stejným fee capem jako běžné consumer cards,
- u karet vydaných mimo EHP byly historicky řešeny vyšší inter-regionální poplatky,
- card-not-present transakce jsou rizikovější a u přeshraničních karet i dražší,
- risk engine providerů může podle oboru a profilu obchodníka přitvrdit payout schedule, reserve nebo onboarding.

Evropská komise ve svých soutěžních rozhodnutích výslovně řešila, že inter-regionální MIF představovaly pro evropské obchodníky významnou zátěž. Mastercard i Visa následně nabídly závazky s capy 1,15 % a 1,50 % pro card-not-present transakce u spotřebitelských karet vydaných mimo EHP. Už samotná výše těchto čísel ukazuje, že „zahraniční karta“ může být pro obchodníka mnohem dražší než běžná domácí karta.

Zdroje:

- Evropská komise, Mastercard commitments: https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=CELEX%3A52019XC0905%2801%29
- Evropská komise, Visa commitments: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A52019XC0904%2801%29
- Your Europe, výjimky ze zákazu surcharge u business/commercial cards: https://europa.eu/youreurope/citizens/consumers/shopping/pricing-payments/indexamp_en.htm

## 12. Síťová pravidla a ceníky se mohou měnit jednostranně, obchodník je slabší strana

Obchodník si často nevybírá skutečně rovnocenně. Vstupuje do sítě, kde:

- pravidla karetních schémat neurčuje obchodník,
- pricing je vázaný na kombinaci schéma + acquirer + processor + merchant category,
- zprostředkovatel může měnit sazby, ceníky nebo obchodní podmínky,
- odchod od providera může být zpoplatněn nebo administrativně obtížný.

Mastercard na svém evropském interchange webu výslovně uvádí, že „reserves the right to change the rates below at any time“. To není skandál, ale je to důležité: obchodník je závislý na infrastruktuře, jejíž ceny a pravidla nemá pod kontrolou.

Evropská komise navíc v roce 2019 udělila Mastercard pokutu 570 milionů EUR za to, že cross-border acquiring rules bránily obchodníkům využít levnější podmínky jinde v EU. To je silný důkaz systémového problému: nejen cena, ale i samotná pravidla karetního schématu mohou aktivně omezovat schopnost obchodníka vyjednat si lepší podmínky.

Vedle toho FTC ve věci First American Payment Systems řešila hidden fees a surprise exit fees. I na úrovni processorů tedy existuje doložené riziko, že obchodník nese jednostranně nastavené a nepřehledné smluvní podmínky.

Zdroje:

- Mastercard Europe interchange hub: https://www.mastercard.com/europe/en/regulatory/european-interchange.html
- Evropská komise / výroční zpráva o soutěžní politice 2019: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A52020DC0302
- Shrnutí rozhodnutí MasterCard II: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.C_.2019.185.01.0010.01.ENG
- FTC, First American Payment Systems settlement: https://www.ftc.gov/enforcement/refunds/first-american-payment-systems-settlement

## 13. Úniky dat: akceptace karet rozšiřuje útokovou plochu

Přijetím karty obchodník vstupuje do prostředí, kde se zpracovávají citlivé platební údaje a kde může mít bezpečnostní selhání obrovské finanční i reputační následky.

### 13.1 Target

Target v prosinci 2013 potvrdil unauthorized access to payment card data v amerických prodejnách. Firma uvedla, že mohlo být zasaženo přibližně 40 milionů kreditních a debetních účtů. Následně firma popsala, že šlo o customer name, card number, expiration date a CVV. V roce 2015 Target uváděl breach-related net expense 145 milionů USD za rok 2014.

To je důležité proto, že i velmi velký retailer s obrovským IT rozpočtem může v karetním ekosystému utrpět přímé a sekundární ztráty. Malý obchodník tím spíš vnímá bezpečnostní povinnosti jako další důvod opatrnosti.

Zdroje:

- Target potvrzení incidentu: https://corporate.target.com/press/release/2013/12/target-confirms-unauthorized-access-to-payment-card-data-in-u-s-stores
- Detail dat včetně CVV: https://corporate.target.com/press/release/2013/12/a-message-from-ceo-gregg-steinhafel-about-target-s-payment-card-issues
- Dopad do výsledků a breach-related expense: https://corporate.target.com/press/release/2015/02/target-reports-fourth-quarter-and-full-year-2014-earnings

### 13.2 Home Depot

Multistate settlement kolem Home Depot popisuje, že malware na self-checkout systému vedl ke kompromitaci přibližně 40 milionů platebních karet. Státní žalobci výslovně uvedli, že malware běžel na self-checkout lanech a umožnil útočníkům získat payment card information.

Pro veřejnost je to důkaz „úniku dat“. Pro obchodníky je to i důkaz, že fyzický POS není jen pohodlný nástroj, ale bezpečnostně exponovaná část podnikání.

Zdroje:

- Colorado AG settlement summary: https://coag.gov/press-releases/11-24-20/
- Arizona AG settlement summary: https://www.azag.gov/press-release/home-depot-pay-175-million-multistate-settlement-over-2014-data-breach

### 13.3 British Airways

V britském případě British Airways šlo o kompromitaci webu a mobilní aplikace. Reprint oficiálního ICO press releasu uvádí, že útočník mohl získat data asi 429 612 zákazníků a zaměstnanců, včetně payment card numbers a CVV u 244 000 zákazníků. ICO za to udělil BA pokutu 20 milionů GBP.

Význam pro obchodníka:

- i „digitální“ karetní akceptace mimo fyzický terminál vytváří citlivou datovou stopu,
- e-commerce a cestovní služby nesou zvláštní riziko,
- škoda není jen ve fraudu, ale i v regulatorních postizích a žalobách.

Zdroje:

- Reprint oficiálního ICO oznámení: https://www.wired-gov.net/wg/news.nsf/articles/ICO%2Bfines%2BBritish%2BAirways%2B20m%2Bfor%2Bdata%2Bbreach%2Baffecting%2Bmore%2Bthan%2B400000%2Bcustomers%2B19102020122500
- FOI odpověď ICO potvrzující existenci archivovaného press releasu: https://cy.ico.org.uk/about-the-ico/our-information/disclosure-log/2025/06/ic-391901-d8c6/

### 13.4 Rutter’s

Pennsylvania Attorney General v roce 2023 oznámil settlement s řetězcem Rutter’s, kde útoky exponovaly informace z více než 1,3 milionu customer payment cards.

To znovu potvrzuje, že problém není výjimečný ani omezený na jeden typ retailu.

Zdroj:

- Pennsylvania AG, Rutter’s settlement: https://www.attorneygeneral.gov/taking-action/ag-henry-announces-1-million-settlement-with-rutters-after-data-breach-exposed-pennsylvanians-private-info/

## 14. Co se děje s daty o nákupech a jak probíhá jejich monetizace

Toto je oblast, kterou veřejnost často podceňuje. Zákazník i obchodník mají tendenci vnímat karetní platbu jen jako přesun peněz. Ve skutečnosti s ní vzniká velmi cenný datový záznam:

- kdo nakoupil,
- kde nakoupil,
- kdy nakoupil,
- za kolik,
- v jaké kategorii,
- někdy i s jakým item-level detailem nebo enrichovanými atributy,
- a jak se chová v čase napříč obchodníky.

### 14.1 Obvyklý datový tok

Typický tok vypadá takto:

1. Obchodník přijme karetní transakci.
2. Data tečou přes acquirera, schéma, issuera a případně gateway nebo payment facilitator.
3. Síťové a bankovní subjekty z nich dělají fraud modely, risk modely, settlement data a zároveň i analytické produkty.
4. V dalším kroku se data nebo z nich odvozené insighty monetizují přes:
   - benchmarky pro merchanty a banky,
   - marketingové a loyalty systémy,
   - card-linked offers,
   - consulting a market intelligence,
   - public-sector analytics,
   - někdy i komerční API pro reporting a data solutions.

### 14.2 Cardlytics: explicitní obchodní model nad bankovními transakčními daty

Cardlytics je v tomto směru mimořádně názorný příklad, protože svůj produkt popisuje otevřeně. Na stránce Purchase Intelligence uvádí, že analyzuje anonymized transaction data a poskytuje dashboardy, které ukazují:

- kde lidé nakupují,
- kdy nakupují,
- kolik utrácejí,
- jak si vede značka vůči konkurenci,
- regionální chování,
- loyalty a customer migration.

V FAQ Cardlytics výslovně uvádí, že díky bank partnerships vidí credit, debit, ACH a bill pay transactions a že jejich reklamní platforma cíluje nabídky na základě purchase patterns. Privacy Policy popisuje, že Publishing Partners sdílí data tak, aby jejich klienti dostávali targeted and relevant offers.

To je praktický důkaz, že transakční data nejsou jen „vedlejší stopa“, ale samostatné obchodní aktivum. Byť jsou popisována jako anonymizovaná nebo bez přímého PII, slouží přímo k marketingovému cílení a měření výkonu kampaní.

Zdroje:

- Cardlytics Purchase Intelligence: https://www.cardlytics.com/marketing-solutions/purchase-intelligence
- Cardlytics FAQ: https://www.cardlytics.com/faqs
- Cardlytics Privacy Policy: https://www.cardlytics.com/privacy-policy

### 14.3 Mastercard: agregovaná a anonymizovaná transakční data jako produkt

Mastercard má přímo celé portfolio Insights & Intelligence. Na oficiálních stránkách uvádí, že disponuje petabajty aggregated and anonymized proprietary data a že 159 miliard agregovaných transakcí používá k hlubokým insightům. Produkt Shopper Intelligence explicitně říká, že využívá aggregated and anonymized transaction data k určení spending patterns, customer segmentations a competitive positioning.

Mastercard Privacy Notice jde ještě dál: výslovně uvádí, že může anonymize Personal Information and prepare and furnish aggregated data reports showing anonymized information, včetně analyses, predictive models a dalších reportů, za účelem poradenství financial institutions, merchants a dalším partnerům ohledně spending patterns, fraud a credit risk. Existence samostatného Data Analytics Opt-out formuláře je další silný důkaz, že takové analytické využití transakčních dat není okrajové.

To znamená, že obchodník nepouští do svého podnikání jen platební rail, ale i datový rail, ze kterého vznikají komerční analytické produkty.

Zdroje:

- Mastercard Insights & Intelligence: https://www.mastercard.com/us/en/business/insights-intelligence.html
- Mastercard Shopper Intelligence: https://www.mastercard.com/global/en/business/services/services-migration---do-not-rollout/insights---intelligence/economic---market-insights/solutions/shopper-intelligence.html
- Mastercard Global Privacy Notice: https://www.mastercard.com/us/en/global-privacy-notice.html
- Mastercard Data Analytics Opt-out: https://www.mastercard.com/us/en/data-analytics-opt-out.html
- Mastercard Geo Insights / about the data: https://geoinsights.mastercard.com/about-the-data

### 14.4 Visa: payments intelligence, business intelligence a commercial data

Visa otevřeně nabízí Payments Intelligence a uvádí, že její data insights stojí na agregovaných a anonymizovaných payment data z miliard karet a milionů merchant locations. Visa Global Privacy Notice výslovně uvádí, že Visa používá transaction and financial information k analytics and modeling, business intelligence and insights a ke generování de-personalized, de-identified, anonymized, or aggregated datasets pro product development a consulting services to clients.

Důležitý detail je také Visa Business Data Solutions. Tato API umožňují oprávněným issuerům, jejich commercial clients a někdy i third-party reporting system service providers přístup ke commercial transaction data a enhanced data.

To ukazuje dva různé světy monetizace:

- agregované a depersonalizované insighty pro benchmarky, marketing, consulting a veřejný sektor,
- a vedle toho i bohatší strukturovaná transakční data pro oprávněné partnery v commercial/card reporting ekosystému.

Zdroje:

- Visa Payments Intelligence: https://corporate.visa.com/en/solutions/payments-intelligence.html
- Visa Global Privacy Notice: https://corporate.visa.com/en/legal/global-privacy-notice.html
- Visa Business Data Solutions: https://developer.visa.com/products/vbds
- Visa Business Data Solutions, getting started: https://developer.visa.com/capabilities/vbds/docs-getting-started

### 14.5 Co se s daty děje v praxi

Z výše uvedených zdrojů lze poměrně bezpečně vyvodit tento praktický obraz:

- transakční data se používají k fraud modelům a risk scoringu,
- používají se k benchmarkům výkonu obchodníků proti trhu,
- používají se k odhadu spotřebitelského chování a „share of wallet“,
- používají se k cílení nabídek a odměn v bankovních aplikacích a loyalty programech,
- používají se k měření efektu reklamní kampaně na skutečné nákupy,
- používají se i pro public-sector a destination intelligence produkty.

Přesnost je důležitá: nejde obvykle o to, že by Visa nebo Mastercard veřejně prodávaly syrový seznam jmen a nákupů komukoli. Jde ale o to, že z transakčních dat vytvářejí a monetizují analytické, marketingové a poradenské produkty. Z pohledu soukromí i z pohledu obchodníka je to podstatné. Obchodník generuje data, jejichž sekundární hodnota může být využívána daleko za hranicí samotného vypořádání platby.

## 15. Důvody obchodníků, proč terminál nepořizují nebo ho ruší

Tahle sekce je zásadní pro vyvrácení zkratky „nebere karty = chce krátit tržby“. Doložené nebo velmi silně indikované důvody obchodníků zahrnují:

### 15.1 Nízké marže a citlivost na procentní poplatek

U malého ticketu nebo u oboru s nízkou marží může i 1 % až 3 % z obratu znamenat likvidaci velké části zisku. Česká mediální praxe je v tomhle konzistentní: obchodníci opakovaně uvádějí poplatky jako hlavní důvod neakceptace karet. Kupi i Deník popisují, že část obchodníků po zrušení EET od karet ustoupila právě kvůli poplatkům.

Zdroje:

- Kupi, „Karty nebereme, máme pro to své důvody“: https://www.kupi.cz/magazin/clanek/28350-karty-nebereme
- Deník, „Máme vysoké poplatky“: https://www.denik.cz/ekonomika/obchodnici-hotovost-poplatky-za-bezkontaktni-platby.html

### 15.2 Potřeba okamžité hotovosti pro provoz

ČT24 v roce 2023 popsala, že někteří provozovatelé argumentují potřebou mít hotové peníze pro dodavatele i zaměstnance. V prostředí opožděných payoutů a rezerv je to zcela racionální. Hotovost je okamžitě k dispozici. Karetní payout není.

Zdroj:

- ČT24, reportáž o důvodech obchodníků: https://ct24.ceskatelevize.cz/clanek/domaci/cesi-stale-vice-plati-kartou-nektera-mista-presto-odmitaji-pouzivat-terminaly-4795

### 15.3 Špatné připojení nebo slabý signál

ČT24 přímo cituje provoz, který karty zaváděl dvakrát a dvakrát od nich kvůli kolísavému signálu ustoupil. To je zcela konkrétní důkaz, že technický problém není teoretický.

Zdroj:

- ČT24: https://ct24.ceskatelevize.cz/clanek/domaci/cesi-stale-vice-plati-kartou-nektera-mista-presto-odmitaji-pouzivat-terminaly-4795

### 15.4 Nechuť ke smluvní a poplatkové komplexitě

Případ FTC vs. First American Payment Systems ukazuje, že strach malých podniků ze skrytých poplatků a exit fees není paranoia. Je to regulátorem doložený typ problému.

Zdroj:

- FTC: https://www.ftc.gov/enforcement/refunds/first-american-payment-systems-settlement

### 15.5 Obava z chargebacků, blokací a reserve režimu

Dokumentace Visa, Stripe, Square i Adyen ukazuje, že chargebacky, reserves, payout delays a negative payouts nejsou okrajové scénáře, ale standardní součást ekosystému. Pro obory s vyšší mírou sporů nebo refundů je to reálný důvod terminál nepořizovat nebo držet co nejmenší podíl karetních tržeb.

Zdroje:

- Visa chargebacks: https://corporate.visa.com/en/solutions/acceptance/chargebacks.html
- Square reserves: https://squareup.com/help/us/en/article/6832-reserves-faq
- Stripe payout delays: https://support.stripe.com/questions/payout-availability-delays?locale=en-GB
- Adyen reserve: https://docs.adyen.com/account/balances/reserve/

### 15.6 Jednodušší provoz a jednodušší účetnictví hotovosti nebo převodu

U řady malých provozů není prioritou „maximální platební komfort za každou cenu“, ale jednoduchost. Hotovost je okamžitá. Převod je předvídatelný a dobře spárovatelný na fakturu. Karta přináší dispute layer, payout layer a fee layer navíc.

Tento důvod není vždy snadno „surveyovatelný“, ale je silně podpořen kombinací regulace IFR, payout dokumentace providerů a mediálních výpovědí provozovatelů.

## 16. Co víme o vztahu bezhotovostních plateb a daňových úniků

Tady je potřeba být velmi přesný.

### Fakt

Existuje seriózní ekonomická literatura, která nachází negativní vztah mezi rozšířením bezhotovostních plateb a VAT evasion nebo shadow economy. Studie „Cashless payments and tax evasion“ (European Journal of Political Economy, 2018) uvádí, že cashless payments hinder tax evasion because they build a trail for the underlying transactions. Novější ZEW paper z roku 2023 i systematický review z roku 2024 docházejí ke stejnému obecnému směru: větší používání cashless/e-money plateb bývá spojováno s nižší VAT gap.

### Co z toho plyne

Plyne z toho, že stát i výzkumná sféra mají důvod považovat elektronické stopy za užitečné pro compliance.

### Co z toho neplyne

Neplyne z toho, že každý jednotlivý obchodník, který karty neakceptuje, krátí tržby. Korelace na úrovni ekonomik a daňových mezer není důkazem o konkrétním podnikateli.

Zdroje:

- European Journal of Political Economy, Cashless payments and tax evasion: https://www.sciencedirect.com/science/article/pii/S0176268017302239
- ZEW Discussion Paper 23-060: https://www.zew.de/en/publications/cashless-payments-and-tax-evasion-evidence-from-vat-gaps-in-the-eu
- Systematic literature review 2024: https://www.risk.net/journal-of-financial-market-infrastructures/7960247/can-tax-evasion-be-reduced-by-fostering-cashless-payments-a-systematic-literature-review

## 17. Důkazy a indicie, že státy a karetní sektor posilují narativ „digital = transparent, cash = riziko“

Tady je fér rozlišit tři úrovně: přímý důkaz, silná indicie a interpretace.

### 17.1 Přímé důkazy veřejné politiky

Evropská komise na stránce k legal tender of cash výslovně uvádí, že limity na hotovostní platby jsou možné například k boji proti tax fraud and evasion. V jiné projektové dokumentaci Komise k litevské legislativě je uvedeno, že omezení hotovostních plateb v rizikových sektorech „reduce opportunities for businesses and natural persons to conceal their income“.

To je přímý důkaz, že veřejná politika explicitně spojuje omezování hotovosti s omezením prostoru pro zatajení příjmů.

Zdroje:

- Evropská komise, FAQ k digital euro a cash legal tender: https://finance.ec.europa.eu/digital-finance/digital-euro/frequently-asked-questions-digital-euro-and-legal-tender-cash_en
- Evropská komise, litevský projekt na omezení hotovosti: https://commission.europa.eu/projects/entry-force-legislation-limiting-cash-payments-risky-economic-sectors-andor-individual-types_en

### 17.2 Silné indicie ze strany karetního sektoru

Mastercard pro veřejný sektor otevřeně prodává revenue collection solutions pro taxes, fees a fines a používá jazyk jako transparency, efficiency a digitization of revenue collections. V materiálech „Digitalizing the public purse“ a „Government revenue collections“ je zjevné, že digitalizace plateb je prezentována jako nástroj lepší veřejné správy a transparentnějšího výběru veřejných příjmů.

To sice není přímý důkaz výroku „kdo nebere karty, obchází daně“, ale je to velmi silná indicie, že karetní sektor aktivně prodává státům obraz digitálních plateb jako cesty k vyšší transparentnosti veřejných financí.

Zdroje:

- Mastercard, Digitalizing the public purse: https://newsroom.mastercard.com/news/insights/2025/digitalizing-the-public-purse-the-next-generation-of-g2p-payments/
- Mastercard, Government revenue collections: https://www.mastercard.com/us/en/business/industry-segment/public-sector/collections.html

### 17.3 Indicie z českého prostředí

Český projekt „Česko platí kartou“ je státem podporovaná iniciativa směřující k rozšíření akceptace karet. BusinessInfo navíc shrnuje, že podle ministerské rétoriky stát kvůli platbám pouze v hotovosti přichází o desítky miliard ročně. I když je potřeba být opatrný a nepřehánět z toho záměr, je zřejmé, že veřejná komunikace státu spojuje širší bezhotovostní akceptaci s lepší ekonomickou transparentností a vyšším výběrem příjmů.

Zdroje:

- MPO, Česko platí kartou: https://mpo.gov.cz/cz/rozcestnik/pro-media/tiskove-zpravy/cesko-plati-kartou-pokracuje--obchodnici-mohou-stale-zadat-o-platebni-terminaly-zdarma--269029/
- BusinessInfo, podpora placení kartou a argumentace státu: https://www.businessinfo.cz/clanky/podpora-placeni-kartou-v-cesku-trva-obchodnici-ale-museji-umoznit-platby-v-hotovosti/

### 17.4 Střízlivé vyhodnocení

Nejsilnější poctivý závěr je tento:

- je prokazatelné, že státy a část literatury explicitně spojují cashless payments s nižším prostorem pro daňové úniky,
- je prokazatelné, že karetní sektor prodává státům a partnerům digitální platby jako nástroj transparentnosti a revenue collection,
- z toho lze rozumně vyvodit, že tyto instituce spoluutvářejí veřejný dojem, že hotovost je „méně průhledná“ a digitální platba „čistší“,
- není však prokázáno, že by každý konkrétní obchodník bez terminálu jednal z daňově nepoctivých důvodů.

## 18. Důkazy, že obchodníci mají i jiné důvody než daňové

Tady už jsou důkazy poměrně silné.

### 18.1 ECB: firmy v eurozóně vnímají hotovost jako levnější, spolehlivější a soukromější

ECB ve studii „Use of cash by companies in the euro area“ za rok 2024 uvádí, že společnosti považují hotovost oproti kartám a mobilním platbám za lepší z hlediska overall costs, reliability a privacy. To je zásadní důkaz, že preference hotovosti nejsou jen „daňový trik“, ale i racionální hodnoticí úsudek firem.

Zdroj:

- ECB, Use of cash by companies in the euro area: https://www.ecb.europa.eu/stats/ecb_surveys/use_of_cash_by_companies_in_the_euro_area/html/index.el.html

### 18.2 Česká televize: signál, potřeba hotovosti a praktický provoz

ČT24 doložila konkrétní české případy, kde důvodem nebyla daňová motivace, ale kolísavý signál a praktická potřeba pracovat s hotovostí.

Zdroj:

- ČT24: https://ct24.ceskatelevize.cz/clanek/domaci/cesi-stale-vice-plati-kartou-nektera-mista-presto-odmitaji-pouzivat-terminaly-4795

### 18.3 Deník a Kupi: poplatky jako uváděný důvod

Česká média opakovaně zachytila provozovatele, kteří za hlavní motiv uvádějí poplatky. To není definitivní důkaz jejich účetní poctivosti, ale je to důkaz existence jiných motivací.

Zdroje:

- Deník: https://www.denik.cz/ekonomika/obchodnici-hotovost-poplatky-za-bezkontaktni-platby.html
- Kupi: https://www.kupi.cz/magazin/clanek/28350-karty-nebereme

### 18.4 Samotná infrastruktura providerů dokládá, že existují reálná provozní negativa

Dokumentace Stripe, Square, Adyen a Visa ukazuje, že existují:

- payout delays,
- rolling reserves,
- negative payouts,
- refund fail kvůli nedostatku dostupných prostředků,
- chargeback spory.

Jinými slovy: i kdyby obchodník nic nezkracoval a vše danil poctivě, pořád může mít racionální důvod k neochotě vstoupit do tohoto systému.

## 19. Proč může obchodník preferovat hotovost nebo klasický bankovní převod

Z pohledu obchodníka mají hotovost a převod několik strukturálních výhod oproti kartě:

### Hotovost

- okamžité vypořádání,
- žádný interchange, scheme fee ani chargeback schéma,
- funguje i při výpadku sítě,
- vysoká provozní jednoduchost,
- menší datová stopa mimo samotné účetnictví obchodníka.

### Bankovní převod

- nejde přes karetní schéma a nenese card scheme fees,
- je dobře párovatelný na konkrétní fakturu,
- neexistuje karetní chargebackový režim,
- v EU je přeshraniční eurový převod v rámci SEPA regulován jako běžný elektronický platební nástroj.

To neznamená, že převod nebo hotovost jsou bez nákladů. Znamená to ale, že obchodník může legitimně dojít k závěru, že pro jeho obor, velikost a typ zákazníků jsou méně problematické než karty.

Zdroje:

- Evropská komise, SEPA: https://finance.ec.europa.eu/consumer-finance-and-payments/payment-services/single-euro-payments-area-sepa_en
- Your Europe, electronic and cash payments: https://europa.eu/youreurope/business/finance-funding/making-receiving-payments/electronic-cash-payments/index_en.htm

## 20. Co lze tvrdit bezpečně a co už by bylo přehnané

### Bezpečně podložená tvrzení

- Karetní akceptace přináší obchodníkům vícevrstvé náklady, které nejsou totožné se samotným interchange fee.
- Poplatky mohou být pro malé a nízkomaržové provozy relevantní důvod neakceptace.
- Obchodník často nemůže u běžných spotřebitelských karet v EU náklad přenést přímou přirážkou na zákazníka.
- Payouty mohou být zpožděné a provider může prostředky zadržovat nebo vyplácet netto po odečtení dalších položek.
- Chargebacky a friendly fraud jsou reálný a strukturální problém.
- Přes karetní platby vzniká cenná datová stopa, která je monetizována přes analytické, marketingové a poradenské produkty.
- Státy a karetní sektor skutečně používají jazyk transparentnosti, digitalizace a lepšího výběru příjmů.
- Z toho ale automaticky neplyne, že každý obchodník bez terminálu obchází daně.

### Tvrzení, která by byla přehnaná nebo nepoctivá

- „Každá karetní asociace prodává syrová osobní nákupní data komukoli.“ To doloženo není.
- „Žádný obchodník bez terminálu nekrátí tržby.“ To také doloženo není.
- „Hlavním důvodem neakceptace karet je vždy odpor proti sledování dat.“ U části obchodníků to může hrát roli, ale z dostupných zdrojů dominují spíš náklady, likvidita a provozní jednoduchost.

## 21. Teze použitelné pro budoucí web

1. Nepřijímat karty automaticky neznamená krácení daní. Znamená to často odmítnutí drahého a asymetrického platebního railu.
2. Karta není jen pohodlnost pro zákazníka. Pro obchodníka je to komplexní služba s poplatky, pravidly, spory, zadrženými penězi a datovou stopou.
3. Veřejný narativ o transparentnosti bezhotovostních plateb má reálné opodstatnění, ale bývá zneužíván ke zkratce, že hotovost nebo absence terminálu jsou samy o sobě podezřelé.
4. Reálné důvody obchodníků jsou často prozaické: marže, cash-flow, technika, výpadky, rezervy, účetnictví, chargebacky a smluvní rizika.
5. Je legitimní, aby zákazník preferoval pohodlí karty. Je stejně legitimní, aby obchodník preferoval takovou platební metodu, která jeho podnikání nepoškozuje.

## 22. Seznam hlavních zdrojů

- EU IFR 2015/751: https://eur-lex.europa.eu/eli/reg/2015/751/oj/eng
- Evropská komise, PSD2 / payment services: https://finance.ec.europa.eu/consumer-finance-and-payments/payment-services/payment-services_bg
- Your Europe, electronic and cash payments: https://europa.eu/youreurope/business/finance-funding/making-receiving-payments/electronic-cash-payments/index_en.htm
- Your Europe, pricing and payments: https://europa.eu/youreurope/citizens/consumers/shopping/pricing-payments/indexamp_en.htm
- Evropská komise, Mastercard II / antitrust shrnutí: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A52020DC0302
- Mastercard Europe interchange hub: https://www.mastercard.com/europe/en/regulatory/european-interchange.html
- Mastercard Insights & Intelligence: https://www.mastercard.com/us/en/business/insights-intelligence.html
- Mastercard Shopper Intelligence: https://www.mastercard.com/global/en/business/services/services-migration---do-not-rollout/insights---intelligence/economic---market-insights/solutions/shopper-intelligence.html
- Mastercard Global Privacy Notice: https://www.mastercard.com/us/en/global-privacy-notice.html
- Visa Payments Intelligence: https://corporate.visa.com/en/solutions/payments-intelligence.html
- Visa Global Privacy Notice: https://corporate.visa.com/en/legal/global-privacy-notice.html
- Visa Chargebacks: https://corporate.visa.com/en/solutions/acceptance/chargebacks.html
- Visa Order Insight: https://corporate.visa.com/en/products/order-insight.html
- Stripe payout docs: https://docs.stripe.com/treasury/moving-money/payouts
- Stripe payout delays: https://support.stripe.com/questions/payout-availability-delays?locale=en-GB
- Square reserves FAQ: https://squareup.com/help/us/en/article/6832-reserves-faq
- Adyen reserve / payout docs: https://docs.adyen.com/account/balances/reserve/ , https://docs.adyen.com/account/balances/next-payout
- FTC / First American Payment Systems: https://www.ftc.gov/enforcement/refunds/first-american-payment-systems-settlement
- ECB, Use of cash by companies in the euro area: https://www.ecb.europa.eu/stats/ecb_surveys/use_of_cash_by_companies_in_the_euro_area/html/index.el.html
- ČT24, proč někteří obchodníci terminály nechtějí: https://ct24.ceskatelevize.cz/clanek/domaci/cesi-stale-vice-plati-kartou-nektera-mista-presto-odmitaji-pouzivat-terminaly-4795
- Kupi: https://www.kupi.cz/magazin/clanek/28350-karty-nebereme
- Deník: https://www.denik.cz/ekonomika/obchodnici-hotovost-poplatky-za-bezkontaktni-platby.html
- Target breach: https://corporate.target.com/press/release/2013/12/target-confirms-unauthorized-access-to-payment-card-data-in-u-s-stores
- Home Depot settlement: https://coag.gov/press-releases/11-24-20/
- British Airways / ICO reprint: https://www.wired-gov.net/wg/news.nsf/articles/ICO%2Bfines%2BBritish%2BAirways%2B20m%2Bfor%2Bdata%2Bbreach%2Baffecting%2Bmore%2Bthan%2B400000%2Bcustomers%2B19102020122500
- Rutter’s settlement: https://www.attorneygeneral.gov/taking-action/ag-henry-announces-1-million-settlement-with-rutters-after-data-breach-exposed-pennsylvanians-private-info/
- Cardlytics Purchase Intelligence / FAQ / Privacy: https://www.cardlytics.com/marketing-solutions/purchase-intelligence , https://www.cardlytics.com/faqs , https://www.cardlytics.com/privacy-policy
- Literatura o cashless payments a tax evasion: https://www.sciencedirect.com/science/article/pii/S0176268017302239 , https://www.zew.de/en/publications/cashless-payments-and-tax-evasion-evidence-from-vat-gaps-in-the-eu , https://www.risk.net/journal-of-financial-market-infrastructures/7960247/can-tax-evasion-be-reduced-by-fostering-cashless-payments-a-systematic-literature-review
