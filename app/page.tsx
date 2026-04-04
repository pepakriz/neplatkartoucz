import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  Ban,
  Bitcoin,
  Clock,
  CreditCard,
  Database,
  DollarSign,
  FileSignature,
  FileText,
  Landmark,
  Lock,
  RadioTower,
  Shield,
  TrendingDown,
  Wrench,
} from "lucide-react"

import { Accordion } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const displayFont = {
  fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
} as const

const keyReasons = [
  {
    icon: DollarSign,
    title: "Náklady nese obchodník",
    description:
      "Ve veřejné debatě se mluví hlavně o stropech 0,2 % a 0,3 %. To je ale jen část ceny. Ve skutečnosti platíme i další poplatky a marže zprostředkovatelů.",
  },
  {
    icon: Ban,
    title: "U většiny karet nesmíme účtovat příplatek",
    description:
      "U běžných spotřebitelských karet nemůžeme zákazníkovi jednoduše připočítat příplatek. Náklad proto často platíme z vlastní marže nebo ho rozpouštíme do cen.",
  },
  {
    icon: Clock,
    title: "Peníze nedorazí hned",
    description:
      "Hotovost máme hned. U karet mohou peníze dorazit až později, po odečtení poplatků, vratek nebo reklamací. Část peněz navíc může být dočasně zadržena.",
  },
  {
    icon: Shield,
    title: "I zaplacený prodej se může vrátit do sporu",
    description:
      "Když zákazník platbu napadne, může se transakce vrátit do řešení. Obchodník pak musí dokládat, že nákup proběhl správně, a nese další práci i náklady.",
  },
  {
    icon: FileSignature,
    title: "Pravidla a ceníky neurčuje obchodník",
    description:
      "Podmínky určují karetní společnosti a poskytovatelé plateb. Cena se může lišit podle druhu karty, země vydání nebo typu prodeje.",
  },
  {
    icon: Wrench,
    title: "Terminál znamená další techniku",
    description:
      "Terminál je další zařízení, které potřebuje připojení, servis a někdy i napojení na pokladnu. Když vypadne internet nebo signál, problém má obchodník.",
  },
  {
    icon: CreditCard,
    title: "Cena se mění podle typu karty",
    description:
      "Jiný náklad může mít běžná debetní karta, jiný firemní, prémiová nebo zahraniční karta. Obchodník často dopředu přesně neví, kolik konkrétní platba opravdu bude stát.",
  },
  {
    icon: Landmark,
    title: "Část peněz může být zadržena",
    description:
      "Poskytovatel si může část tržeb ponechat jako rezervu na budoucí reklamace nebo vratky. U malého podniku to může nepříjemně zhoršit peněžní tok.",
  },
  {
    icon: DollarSign,
    title: "U malých plateb jsou poplatky citelnější",
    description:
      "U drobného nákupu je každý poplatek znát mnohem víc než u velké útraty. I malé procento může ukrojit velkou část marže.",
  },
  {
    icon: Shield,
    title: "Některé obory mají horší podmínky",
    description:
      "Rizikovější obory mohou dostat vyšší ceny, přísnější smlouvy, rezervy nebo jim může být přijímání karet úplně zamítnuto.",
  },
  {
    icon: FileText,
    title: "Karta přidává práci do účetnictví",
    description:
      "Je potřeba párovat prodej, připsání peněz, poplatky, vratky i reklamace. U hotovosti nebo převodu bývá tok peněz i dokladů jednodušší.",
  },
  {
    icon: Database,
    title: "Data o nákupech nekončí jen u obchodu",
    description:
      "Kartová platba vytváří datovou stopu, která má hodnotu pro analytiku, marketing i další služby. Obchodník tak řeší i soukromí a bezpečnost.",
  },
]

const customerReactions = [
  {
    quote: "„To vám napíšu do recenze hned jako první věc.“",
    className:
      "border-orange-300 bg-orange-100/90 text-orange-950 rotate-2 sm:col-span-3 sm:col-start-4 sm:justify-self-end sm:-mt-1 sm:rotate-4 hover:-translate-y-0.5 hover:rotate-5",
    tailClassName: "after:left-auto after:right-10",
  },
  {
    quote: "„To je zase podnik, co nechce přiznávat tržby.“",
    className:
      "border-rose-300 bg-rose-50 text-rose-950 -rotate-2 sm:col-span-2 sm:col-start-2 sm:justify-self-center sm:-mt-2 sm:-rotate-4 hover:-translate-x-0.5 hover:-rotate-5",
    tailClassName: "after:left-1/2 after:-translate-x-1/2",
  },
  {
    quote: "„Sem už fakt nepřijdu.“",
    className:
      "border-lime-300 bg-lime-50 text-lime-950 rotate-2 sm:col-span-3 sm:col-start-1 sm:justify-self-center sm:-mt-4 sm:max-w-[15rem] sm:text-base sm:rotate-4 hover:translate-y-0.5 hover:rotate-5",
    tailClassName: "after:left-10",
  },
  {
    quote: "„V roce 2026 a bez karet? To je ostuda.“",
    className:
      "border-sky-300 bg-sky-50 text-sky-950 -rotate-3 sm:col-span-3 sm:col-start-4 sm:justify-self-start sm:-mt-3 sm:max-w-[15rem] sm:-rotate-5 hover:-translate-y-0.5 hover:-rotate-6",
    tailClassName: "after:left-auto after:right-9",
  },
  {
    quote: "„To je přesně, jak se obcházejí daně.“",
    className:
      "border-orange-400 bg-orange-200/80 text-orange-950 rotate-3 sm:col-span-2 sm:col-start-3 sm:justify-self-end sm:-mt-1 sm:rotate-5 hover:translate-x-0.5 hover:rotate-6",
    tailClassName: "after:left-1/2 after:-translate-x-1/2",
  },
  {
    quote: "„Jasně, jen hotovost... to je vždycky podezřelé.“",
    className:
      "border-amber-300 bg-amber-50 text-amber-950 -rotate-2 sm:col-span-3 sm:col-start-4 sm:justify-self-center sm:-mt-5 sm:max-w-[16rem] sm:-rotate-4 hover:-translate-x-0.5 hover:-rotate-5",
    tailClassName: "after:left-9",
  },
  {
    quote: "„Vy asi moc rádi daně neplatíte, co?“",
    className:
      "border-teal-300 bg-teal-50 text-teal-950 rotate-2 sm:col-span-3 sm:col-start-2 sm:justify-self-start sm:-mt-2 sm:max-w-[15rem] sm:rotate-4 hover:translate-y-0.5 hover:rotate-5",
    tailClassName: "after:left-auto after:right-10",
  },
  {
    quote: "„Tohle je přesně na jednu hvězdu.“",
    className:
      "border-emerald-300 bg-emerald-50 text-emerald-950 -rotate-2 sm:col-span-2 sm:col-start-5 sm:justify-self-center sm:-mt-6 sm:max-w-[14rem] sm:-rotate-4 hover:-translate-y-0.5 hover:-rotate-5",
    tailClassName: "after:left-8",
  },
  {
    quote: "„Nemám u sebe dost hotovosti.“",
    className:
      "border-violet-300 bg-violet-50 text-violet-950 rotate-2 sm:col-span-2 sm:col-start-1 sm:justify-self-center sm:-mt-3 sm:max-w-[13rem] sm:rotate-4 hover:translate-y-0.5 hover:rotate-5",
    tailClassName: "after:left-auto after:right-9",
  },
  {
    quote: "„Příště jdu radši jinam.“",
    className:
      "border-cyan-300 bg-cyan-50 text-cyan-950 -rotate-3 sm:col-span-2 sm:col-start-3 sm:justify-self-start sm:-mt-7 sm:max-w-[13rem] sm:-rotate-5 hover:-translate-y-0.5 hover:-rotate-6",
    tailClassName: "after:left-1/2 after:-translate-x-1/2",
  },
  {
    quote: "„To jste se zasekli v minulém století?“",
    className:
      "border-fuchsia-300 bg-fuchsia-50 text-fuchsia-950 rotate-2 sm:col-span-3 sm:col-start-4 sm:justify-self-end sm:-mt-4 sm:max-w-[16rem] sm:rotate-4 hover:translate-x-0.5 hover:rotate-5",
    tailClassName: "after:left-auto after:right-8",
  },
  {
    quote: "„Bohatší lidi u sebe hotovost běžně nenosí.“",
    className:
      "border-indigo-300 bg-indigo-50 text-indigo-950 -rotate-2 sm:col-span-3 sm:col-start-1 sm:justify-self-start sm:text-base sm:-rotate-4 hover:-translate-y-0.5 hover:-rotate-5",
    tailClassName: "after:left-8",
  },
]

const mythReality = [
  {
    myth: "„Kdo nebere karty, určitě obchází daně.“",
    whyItSticks:
      "Bezhotovostní platby opravdu vytvářejí lépe dohledatelnou stopu a stát je často spojuje s větší transparentností.",
    whatItMisses: [
      "Je to závěr o systému jako celku, ne důkaz o konkrétním podniku.",
      "Obchodník může karty odmítat kvůli nízké marži, opožděnému připsání peněz, technickým problémům nebo jednoduššímu provozu.",
      "Samotná absence terminálu nestačí. Smysl dává až širší kontext.",
    ],
  },
  {
    myth: "„Bez terminálu podnik automaticky přichází o tržby.“",
    whyItSticks:
      "Z pohledu zákazníka to dává smysl. Když nemůže zaplatit obvyklým způsobem, snadno předpokládá, že obchod zbytečně odmítá peníze i nové zákazníky.",
    whatItMisses: [
      "Není to stejné pro každou provozovnu. V malé obci mohou být místní zvyklí na hotovost a zdražení kvůli terminálu by část z nich mohlo od nákupů spíš odradit.",
      "U sezónního stánku nebo krátkodobého prodeje se náklady na techniku, připojení a obsluhu nemusí vrátit bez citelného zdražení.",
      "U zavedeného městského podniku může být situace opačná. Smysl terminálu proto závisí na typu provozu, marži, lokalitě i struktuře zákazníků.",
    ],
  },
  {
    myth: "„Je to jen dvě nebo tři desetiny procenta.“",
    whyItSticks:
      "Ve veřejné debatě se často opakují evropské stropy 0,2 % a 0,3 %, takže to působí jako celá cena karetní platby.",
    whatItMisses: [
      "Tyto stropy se týkají jen části regulovaných spotřebitelských karet.",
      "Skutečný náklad obchodníka zahrnuje i poplatky karetním schématům, marži poskytovatele a další položky.",
      "U firemních, zahraničních nebo online plateb může být reálná cena výrazně vyšší.",
    ],
  },
  {
    myth: "„Kartou dostanete peníze okamžitě stejně jako v hotovosti.“",
    whyItSticks:
      "Zákazník vidí schválenou transakci okamžitě a snadno si to splete s tím, že obchodník má peníze také hned.",
    whatItMisses: [
      "Schválení platby, zúčtování a skutečné připsání peněz jsou tři různé okamžiky.",
      "Na účet často dorazí až čistá částka po poplatcích, vratkách nebo reklamacích.",
      "Část peněz může být dočasně zadržena jako rezerva na budoucí spory.",
    ],
  },
  {
    myth: "„Když je platba schválená, je všechno vyřešené.“",
    whyItSticks:
      "Schválená platba působí definitivně. Na obrazovce je hotovo a zákazník odchází.",
    whatItMisses: [
      "U karet existují spory, zpětná vrácení plateb, vratky a dodatečné úpravy.",
      "Obchodník pak musí zpětně dokládat, že transakce proběhla správně.",
      "I vyhraný spor znamená další čas, administrativu a nejistotu navíc.",
    ],
  },
  {
    myth: "„Terminál je jen malá krabička na pult.“",
    whyItSticks:
      "Zvenku to tak opravdu vypadá. Zákazník vidí zařízení, přiložení karty a potvrzení.",
    whatItMisses: [
      "Za terminálem je další smlouva, připojení, servis, někdy i integrace s pokladnou a řešení výpadků.",
      "Když vypadne síť nebo poskytovatel, problém dopadne na obchodníka stojícího před zákazníkem.",
      "U malého provozu je i jeden technický článek navíc reálná provozní komplikace.",
    ],
  },
  {
    myth: "„Kartou se řeší jen platba, nic víc.“",
    whyItSticks:
      "V běžné řeči se karta popisuje jen jako pohodlný způsob, jak přesunout peníze od zákazníka k obchodníkovi.",
    whatItMisses: [
      "S platbou vzniká i datový záznam o nákupu, místě, čase a částce.",
      "Tato data neslouží jen pro zúčtování, ale i pro vyhodnocování rizik, srovnávací přehledy a analytické produkty.",
      "Vedle platební vrstvy tak vzniká i další bezpečnostní a datová vrstva.",
    ],
  },
]

const detailSections = [
  {
    value: "fees",
    title: "Poplatky nejsou jedna jednoduchá sazba",
    intro:
      "Když se mluví o evropských stropech, může to působit, že karta stojí skoro nic. Obchodník ale neplatí jednu malou sazbu. Platí celou sadu poplatků.",
    bullets: [
      "Stropy 0,2 % a 0,3 % platí jen pro část běžných spotřebitelských karet.",
      "Do konečné ceny vstupují i poplatky karetním schématům a marže firmy, která platbu zpracuje.",
      "Firemní, zahraniční a internetové platby bývají dražší.",
      "I proto EU nařídila, aby poskytovatelé poplatky rozepisovali přehledněji.",
    ],
    sources: [
      ["EU IFR 2015/751", "https://eur-lex.europa.eu/eli/reg/2015/751/oj/eng"],
      ["Mastercard Europe interchange hub", "https://www.mastercard.com/europe/en/regulatory/european-interchange.html"],
      ["Visa commitments k inter-regionálním MIF", "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A52019XC0904%2801%29"],
    ],
  },
  {
    value: "cashflow",
    title: "Peníze z karty nejsou totéž co hotovost v kase",
    intro:
      "Pro malý podnik je důležité, kdy peníze skutečně dorazí. U karty se prodej sice ukáže hned, ale peníze mohou přijít později a už snížené o další položky.",
    bullets: [
      "Sami poskytovatelé uvádějí, že výplata peněz běžně chodí až po jednom nebo více dnech.",
      "Na účet často přijde už jen čistá částka po odečtení poplatků, vratek a reklamací.",
      "Část peněz může poskytovatel dočasně zadržet jako rezervu na budoucí spory.",
      "V krajním případě může být další výplata nulová nebo dokonce záporná.",
    ],
    sources: [
      ["Stripe payouts", "https://docs.stripe.com/treasury/moving-money/payouts"],
      ["Stripe first payout delay", "https://support.stripe.com/questions/waiting-on-your-first-stripe-payout-what-you-need-to-know?locale=en-GB"],
      ["Adyen next payout", "https://docs.adyen.com/account/balances/next-payout"],
      ["Square reserves FAQ", "https://squareup.com/help/us/en/article/6832-reserves-faq"],
    ],
  },
  {
    value: "disputes",
    title: "Reklamace plateb a složitější účetnictví",
    intro:
      "U hotovosti nebo běžného převodu bývá situace po zaplacení většinou uzavřená. U karty může spor přijít i zpětně a účetnictví je kvůli tomu složitější.",
    bullets: [
      "Zákazník může platbu napadnout i po delší době.",
      "Nemusí jít jen o podvod. Často jde i o nepoznanou platbu na výpisu nebo o spor o službu.",
      "Liší se datum prodeje, schválení platby, skutečného zúčtování i připsání peněz.",
      "Vratky a další úpravy se objevují zpětně, takže přibývá párování a administrativa.",
    ],
    sources: [
      ["Visa chargebacks", "https://corporate.visa.com/en/solutions/acceptance/chargebacks.html"],
      ["Visa Order Insight", "https://corporate.visa.com/en/products/order-insight.html"],
      ["Adyen insufficient in-process funds", "https://help.adyen.com/knowledge/payments/refunds/what-does-insufficient-inprocess-funds-mean/"],
    ],
  },
  {
    value: "operations",
    title: "Terminál, připojení, výpadky a smlouvy",
    intro:
      "Přijímat karty neznamená jen položit na pult terminál. Znamená to i další techniku, další smlouvy a závislost na službách, které obchodník neřídí.",
    bullets: [
      "Terminál je potřeba pořídit nebo pronajmout, připojit, servisovat a někdy napojit na pokladnu.",
      "V některých provozech je problém slabý signál nebo nestabilní internet.",
      "Když vypadne síť nebo platební služba, zákazník stojí u pultu a obchodník neprodá.",
      "Regulátoři už řešili i firmy, které malým podnikům účtovaly skryté poplatky nebo komplikovaly odchod ze smlouvy.",
    ],
    sources: [
      ["ČT24 o důvodech obchodníků", "https://ct24.ceskatelevize.cz/clanek/domaci/cesi-stale-vice-plati-kartou-nektera-mista-presto-odmitaji-pouzivat-terminaly-4795"],
      ["FTC vs. First American Payment Systems", "https://www.ftc.gov/enforcement/refunds/first-american-payment-systems-settlement"],
      ["DW o výpadku Visa Europe 1. 6. 2018", "https://www.dw.com/en/visa-near-normal-after-outage-in-europe/a-44047990"],
    ],
  },
  {
    value: "data",
    title: "Data o nákupech nekončí jen u samotné platby",
    intro:
      "Platba kartou nevytváří jen pohyb peněz. Vzniká i cenný datový záznam o nákupu, který se používá pro analýzy, marketing a další obchodní služby.",
    bullets: [
      "Visa a Mastercard samy popisují produkty postavené na souhrnných a anonymizovaných datech o platbách.",
      "Firmy jako Cardlytics staví reklamní a analytické služby přímo nad bankovními transakčními daty.",
      "Úniky dat z obchodů a e-shopů ukazují, že přijímání karet přidává další bezpečnostní riziko.",
      "Obchodník tak neřeší jen platbu, ale i otázku, kdo dál využívá data vzniklá z jeho prodeje.",
    ],
    sources: [
      ["Visa Payments Intelligence", "https://corporate.visa.com/en/solutions/payments-intelligence.html"],
      ["Mastercard Insights & Intelligence", "https://www.mastercard.com/us/en/business/insights-intelligence.html"],
      ["Cardlytics Purchase Intelligence", "https://www.cardlytics.com/marketing-solutions/purchase-intelligence"],
    ],
  },
  {
    value: "narrative",
    title: "Proč si lidé absenci terminálu spojují s daněmi",
    intro:
      "Stát i část karetního sektoru dlouhodobě mluví o digitálních platbách jako o cestě k větší průhlednosti. Část veřejnosti pak snadno sklouzne k představě, že hotovost sama o sobě znamená problém.",
    bullets: [
      "Ekonomické studie opravdu ukazují, že více bezhotovostních plateb může v celé ekonomice zmenšovat prostor pro daňové úniky.",
      "Veřejná politika někdy výslovně spojuje omezení hotovosti s bojem proti daňovým únikům.",
      "To ale pořád nic nedokazuje o konkrétním obchodníkovi bez terminálu.",
      "Zároveň i Evropská centrální banka uvádí, že firmy hodnotí hotovost jako levnější, spolehlivější a soukromější.",
    ],
    sources: [
      ["ZEW: Cashless payments and tax evasion", "https://www.zew.de/en/publications/cashless-payments-and-tax-evasion-evidence-from-vat-gaps-in-the-eu"],
      ["European Commission FAQ k cash legal tender", "https://finance.ec.europa.eu/digital-finance/digital-euro/frequently-asked-questions-digital-euro-and-legal-tender-cash_en"],
      ["ECB: Use of cash by companies in the euro area", "https://www.ecb.europa.eu/stats/ecb_surveys/use_of_cash_by_companies_in_the_euro_area/html/index.el.html"],
    ],
  },
]

const dataFlow = [
  {
    step: "1",
    title: "Vznikne transakce",
    description:
      "Obchodník přijme platbu a spolu s ní vznikne záznam o místě, čase, částce a typu nákupu.",
  },
  {
    step: "2",
    title: "Data tečou přes další články",
    description:
      "Data necestují jen mezi obchodníkem a zákazníkem, ale i přes firmu nebo banku, která platbu přijímá, karetní schéma, banku, která kartu vydala, a další zprostředkovatele.",
  },
  {
    step: "3",
    title: "Vznikají vyhodnocení a srovnání",
    description:
      "Tatáž data slouží k vyhodnocení rizik, odhalování podvodů, reportům, srovnávacím přehledům a obchodním analýzám.",
  },
  {
    step: "4",
    title: "Vznikají z nich další produkty",
    description:
      "Z agregovaných a anonymizovaných dat pak vznikají marketingové, poradenské a analytické produkty.",
  },
]

const dataClarifications = [
  "Kartová data nejsou jen vedlejší technický záznam. Mají i samostatnou obchodní hodnotu.",
  "Visa, Mastercard i specializované firmy popisují produkty postavené na agregovaných a anonymizovaných transakčních datech.",
  "Netvrdíme, že někdo veřejně prodává komukoli syrový seznam jmen a nákupů.",
  "Tvrdíme, že z transakčních dat vznikají analytické, marketingové a poradenské produkty, které jdou daleko za hranici samotného zúčtování platby.",
]

const merchantBarriers = [
  {
    icon: DollarSign,
    title: "Nízké marže",
    description:
      "U malého nákupu nebo v nízkomaržovém oboru může i malé procento ukrojit velkou část zisku.",
  },
  {
    icon: Landmark,
    title: "Potřeba hotovosti pro provoz",
    description:
      "Hotovost je k dispozici hned. U karetní platby může obchodník na své peníze čekat a ještě o část z nich přijít po cestě.",
  },
  {
    icon: RadioTower,
    title: "Slabý signál a výpadky",
    description:
      "V některých provozech není spolehlivý internet ani signál samozřejmost. Když spojení padá, karta zdržuje nebo úplně blokuje prodej.",
  },
  {
    icon: FileSignature,
    title: "Smluvní a poplatková složitost",
    description:
      "Malý podnik často nechce řešit další ceníky, rezervy, dodatky, reklamace a podmínky odchodu ze smlouvy.",
  },
]

const securityCases = [
  {
    title: "Platební infrastruktura zvětšuje útokovou plochu",
    description:
      "Přijímat karty neznamená jen nabídnout pohodlnější způsob placení. Znamená to i další bezpečnostní vrstvu a další povinnosti.",
  },
  {
    title: "Velké úniky dat ukazují, že to není teorie",
    description:
      "Incidenty u velkých firem ukazují, že platební data jsou cenný cíl a že i robustní infrastruktura může selhat.",
  },
  {
    title: "Malý obchod to vnímá jako další riziko navíc",
    description:
      "Vedle nákladů, sporů a techniky přibývá i otázka, nakolik chce podnik vstupovat do dalšího bezpečnostně citlivého systému.",
  },
]

const alternatives = [
  {
    icon: DollarSign,
    title: "Hotovost",
    description:
      "Peníze jsou k dispozici hned, nehrozí zpětné stažení platby a prodej nezávisí na internetu ani na karetní síti.",
  },
  {
    icon: Landmark,
    title: "Bankovní převod",
    description:
      "Dobře se páruje k fakturám, nejde přes karetní společnosti a nepřidává stejnou vrstvu sporů a dalších poplatků.",
  },
  {
    icon: Bitcoin,
    title: "Bitcoin",
    description:
      "Pokud ho obchodník přijímá, může spojovat výhodu přímého přijetí peněz s možností zaplatit na dálku. Zároveň nejde přes karetní infrastrukturu.",
  },
]

const comparisonColumns = [
  { key: "settlement", label: "Kdy má obchodník peníze" },
  { key: "disputes", label: "Riziko zpětného sporu" },
  { key: "dependency", label: "Závislost na síti a třetích stranách" },
  { key: "accounting", label: "Složitost párování" },
  { key: "data", label: "Datová stopa" },
] as const

const paymentComparison = [
  {
    title: "Karta",
    icon: CreditCard,
    accent: "text-orange-900 bg-orange-100",
    settlement: "Často až později a už po odečtení dalších položek.",
    disputes: "Vyšší. Spor nebo zpětné vrácení platby může přijít i dodatečně.",
    dependency: "Vysoká. Terminál, síť, poskytovatel i karetní infrastruktura musí fungovat.",
    accounting: "Vyšší. Liší se datum prodeje, zúčtování i připsání peněz.",
    data: "Vysoká. Vzniká cenný transakční záznam využitelný i dál.",
  },
  {
    title: "Hotovost",
    icon: DollarSign,
    accent: "text-emerald-900 bg-emerald-100",
    settlement: "Ihned při prodeji.",
    disputes: "Nízké. Není tu karetní režim zpětného vracení plateb.",
    dependency: "Nízká. Funguje i bez internetu a bez karetní sítě.",
    accounting: "Nižší. Tok peněz je přímý a provozně jednoduchý.",
    data: "Nižší. Mimo vlastní evidenci vzniká méně externí stopy.",
  },
  {
    title: "Převod",
    icon: Landmark,
    accent: "text-sky-900 bg-sky-100",
    settlement: "Po připsání na účet, obvykle s jasným okamžikem doručení.",
    disputes: "Nižší. Neplatí tu karetní režim zpětného vracení plateb.",
    dependency: "Střední. Závisí na bankovní infrastruktuře, ne na karetní síti.",
    accounting: "Nižší. Dobře se páruje k faktuře nebo variabilnímu symbolu.",
    data: "Střední. Je to bankovní záznam, ale bez karetního schématu navíc.",
  },
  {
    title: "BTC",
    icon: Bitcoin,
    accent: "text-amber-900 bg-amber-100",
    settlement: "Podle způsobu přijetí může být rychlé a bez karetního zúčtování.",
    disputes: "Nízké z pohledu karetního schématu. Není tu zpětné vrácení platby jako u karty.",
    dependency: "Střední. Nepotřebuje karetní síť, ale vyžaduje vlastní proces, pravidla a technické zvládnutí.",
    accounting: "Střední až vyšší. Záleží na tom, jak ho obchodník přijímá, převádí a eviduje.",
    data: "Jiný typ stopy. Nevzniká karetní datová vrstva, ale soukromí záleží na konkrétním použití.",
  },
] as const

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
      {children}
    </span>
  )
}

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,39,0.16),_transparent_34%),radial-gradient(circle_at_85%_12%,_rgba(245,158,11,0.18),_transparent_22%),linear-gradient(180deg,_rgba(250,246,240,0.92),_rgba(255,255,255,1)_36%,_rgba(248,244,236,0.75)_100%)]" />

      <section className="relative overflow-hidden border-b border-border/60 px-4 pb-16 pt-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(120,63,30,0.34),transparent_0,transparent_26%),radial-gradient(circle_at_88%_16%,rgba(255,210,153,0.36),transparent_0,transparent_18%),linear-gradient(90deg,rgba(255,249,242,0.96)_0%,rgba(255,249,242,0.9)_34%,rgba(255,249,242,0.62)_56%,rgba(69,36,21,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_20%,rgba(255,248,242,0.7)_100%)]" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div>
              <p className="-mt-5 mb-9 flex flex-wrap items-end gap-x-2 gap-y-1 font-semibold uppercase sm:-mt-6 sm:mb-10">
                <span className="text-lg tracking-[0.18em] text-foreground/45 sm:text-xl">Prosím,</span>
                <span className="text-2xl tracking-[0.14em] text-foreground/80 sm:text-3xl">
                  neplať kartou,
                </span>
                <span className="text-lg tracking-[0.18em] text-orange-700 sm:text-xl">Děkujeme</span>
              </p>
              <h1
                className="my-12 max-w-4xl text-4xl leading-none tracking-tight text-balance sm:my-14 sm:text-5xl lg:text-6xl"
                style={displayFont}
              >
                Když chceme hotovost nebo převod, neznamená to, že něco skrýváme.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground sm:mt-6 sm:text-xl">
                Pro zákazníka je karta pohodlná. Pro obchodníka ale často znamená{" "}
                <strong className="font-semibold text-foreground">další poplatky</strong>,{" "}
                <strong className="font-semibold text-foreground">čekání na peníze</strong>,{" "}
                <strong className="font-semibold text-foreground">riziko sporů</strong>, další
                techniku a složitější účetnictví. Tady vysvětlujeme, proč část obchodníků raději
                bere hotovost nebo převod.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#hlavni-duvody"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Hlavní důvody
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#mylne-zkratky"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted"
              >
                Mylné domněnky
              </Link>
              <Link
                href="#detaily"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted"
              >
                Detaily a zdroje
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-orange-200/80 bg-[linear-gradient(180deg,rgba(255,247,237,0.96),rgba(255,255,255,0.88))] p-5 shadow-[0_18px_50px_-28px_rgba(194,65,12,0.45)] backdrop-blur">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-orange-200/50 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-sm">
                      <AlertTriangle className="size-4" />
                    </div>
                  </div>
                  <div className="mt-5 text-2xl font-semibold tracking-tight text-orange-950">
                    Jednostranný příběh
                  </div>
                  <p className="mt-3 text-sm leading-6 text-orange-950/75">
                    Ve veřejném prostoru se mluví hlavně o{" "}
                    <strong className="font-semibold text-orange-950">pohodlí zákazníka</strong> a
                    o <strong className="font-semibold text-orange-950">boji proti šedé ekonomice</strong>.
                    Mnohem méně se ale mluví o nákladech, omezeních a rizicích, které nese
                    obchodník.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-rose-200/80 bg-[linear-gradient(180deg,rgba(255,241,242,0.96),rgba(255,255,255,0.9))] p-5 shadow-[0_18px_50px_-28px_rgba(190,24,93,0.35)] backdrop-blur">
                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-rose-200/50 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-sm">
                      <TrendingDown className="size-4" />
                    </div>
                  </div>
                  <div className="mt-5 text-2xl font-semibold tracking-tight text-rose-950">
                    Morální nálepka
                  </div>
                  <p className="mt-3 text-sm leading-6 text-rose-950/75">
                    Články a komentáře často spojují absenci terminálu s{" "}
                    <strong className="font-semibold text-rose-950">podezřením na nepřiznané tržby</strong>.
                    Z běžného provozního rozhodnutí se tak snadno stává podezření, že podnik
                    nejedná poctivě.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,251,235,0.98),rgba(255,255,255,0.9))] p-5 shadow-[0_18px_50px_-28px_rgba(180,83,9,0.38)] backdrop-blur">
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-amber-200/60 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-sm">
                      <Shield className="size-4" />
                    </div>
                  </div>
                  <div className="mt-5 text-2xl font-semibold tracking-tight text-amber-950">
                    Silnější hráči
                  </div>
                  <p className="mt-3 text-sm leading-6 text-amber-950/75">
                    Stát i regulace dlouhodobě podporují{" "}
                    <strong className="font-semibold text-amber-950">bezhotovostní infrastrukturu</strong>.
                    V praxi to posiluje prostředí, ve kterém mají velcí karetní hráči typu Visa a
                    Mastercard silnější výchozí pozici než malý obchodník.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-5 lg:pl-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <AlertTriangle className="size-4 text-orange-800" />
                <span className="uppercase tracking-[0.22em]">Poznáváte se?</span>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                Možná jen nemáte představu,{" "}
                <strong className="font-semibold text-foreground">
                  co všechno se za akceptováním plateb kartou skrývá
                </strong>.
                Nevadí. Jste na správném místě.
              </p>
            </div>
            <div className="grid items-start gap-4 sm:grid-cols-6 lg:gap-5">
              {customerReactions.map(({ quote, className, tailClassName }) => (
                <div
                  key={quote}
                  className={`relative max-w-full rounded-[1.7rem] border px-4 py-3 text-xs leading-5 font-medium shadow-md transition-transform duration-300 ease-out will-change-transform after:absolute after:-bottom-[0.42rem] after:size-3.5 after:rotate-45 after:border-r after:border-b after:border-inherit after:bg-inherit after:content-[''] sm:max-w-[18rem] sm:text-sm ${tailClassName} ${className}`}
                >
                  {quote}
                </div>
              ))}
            </div>
            <div className="pt-3 sm:pt-5">
              <Link
                href="#mylne-zkratky"
                className="inline-flex items-center gap-2 text-sm font-medium text-orange-800 transition-colors hover:text-orange-950"
              >
                Proč tyto zkratky často neplatí
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="hlavni-duvody" className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl space-y-4">
            <SectionKicker>Hlavní důvody</SectionKicker>
            <h2 className="text-3xl leading-tight text-balance sm:text-4xl" style={displayFont}>
              Dvanáct důvodů, které obchodník řeší dřív, než vám vůbec terminál podá.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Na hlavní stránce uvádíme <strong className="font-semibold text-foreground">dvanáct nejčastějších důvodů</strong>.
              Podrobnosti a zdroje najdete níž v rozbalovacích blocích.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {keyReasons.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border/70 bg-background/85 py-0 shadow-sm backdrop-blur">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-900">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">{title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-stone-950 px-4 py-20 text-stone-50">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <SectionKicker>Jak to funguje</SectionKicker>
            <h2 className="text-3xl leading-tight text-balance sm:text-4xl" style={displayFont}>
              Zákazník vidí přiložení karty. Obchodník řeší celý řetězec navíc.
            </h2>
            <p className="text-lg leading-8 text-stone-300">
              Karta není jen jiný způsob, jak přijmout peníze. Přináší{" "}
              <strong className="font-semibold text-stone-50">další pravidla</strong>, další firmy
              mezi námi a zákazníkem, další data i další možné spory. U hotovosti nebo běžného
              převodu to bývá <strong className="font-semibold text-stone-50">výrazně jednodušší</strong>.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-white/10 bg-white/5 py-0 text-stone-50">
              <CardContent className="space-y-3 p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-stone-400">Co vidí zákazník</div>
                <div className="text-2xl font-semibold">„Pípnu a je hotovo.“</div>
                <p className="text-sm leading-7 text-stone-300">
                  Na terminálu vše působí okamžitě a bez komplikací. Zvenku to vypadá jednoduše.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 py-0 text-stone-50">
              <CardContent className="space-y-3 p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-stone-400">Co řeší obchodník</div>
                <div className="text-2xl font-semibold">Schválení platby, zúčtování, připsání peněz a případný spor.</div>
                <p className="text-sm leading-7 text-stone-300">
                  Každý z těchto kroků může přidat náklad, zpoždění nebo další práci, kterou zákazník
                  nevidí.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 py-0 text-stone-50 sm:col-span-2">
              <CardContent className="grid gap-5 p-6 md:grid-cols-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-stone-400">1</div>
                  <div className="mt-2 font-semibold">Platba se ověřuje</div>
                  <p className="mt-2 text-sm leading-6 text-stone-300">Transakce prochází cizí infrastrukturou a několika články mezi obchodníkem a zákazníkem.</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-stone-400">2</div>
                  <div className="mt-2 font-semibold">Vzniká náklad</div>
                  <p className="mt-2 text-sm leading-6 text-stone-300">Do ceny vstupují poplatky, které zákazník většinou vůbec nevidí.</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-stone-400">3</div>
                  <div className="mt-2 font-semibold">Peníze se připisují později</div>
                  <p className="mt-2 text-sm leading-6 text-stone-300">Na účet často dorazí až později a už po odečtení dalších položek.</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-stone-400">4</div>
                  <div className="mt-2 font-semibold">Spor může přijít zpětně</div>
                  <p className="mt-2 text-sm leading-6 text-stone-300">Vrácení peněz nebo reklamace může celý obchod vrátit zpátky do řešení.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="mylne-zkratky" className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl space-y-4">
            <SectionKicker>Mylné zkratky</SectionKicker>
            <h2 className="text-3xl leading-tight text-balance sm:text-4xl" style={displayFont}>
              Co si lidé často myslí a proč je obchodnická realita složitější.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Tyto věty často nevznikají ze zlé vůle. Obvykle v sobě mají kus pravdy, ale
              vynechávají <strong className="font-semibold text-foreground">důležitý kontext</strong>.
              Právě to pak vede k mylným závěrům o obchodnících i o kartách.
            </p>
          </div>

          <div className="space-y-4">
            {mythReality.map(({ myth, whyItSticks, whatItMisses }) => (
              <Card key={myth} className="border-border/70 bg-background/85 py-0 shadow-sm backdrop-blur">
                <CardContent className="space-y-5 p-6">
                  <div className="rounded-2xl bg-rose-50 p-5 text-rose-950">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-rose-700">
                      <AlertTriangle className="size-4" />
                      Častá domněnka
                    </div>
                    <p className="mt-3 text-lg font-semibold leading-7">{myth}</p>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
                    <div className="rounded-2xl bg-amber-50 p-5 text-amber-950">
                      <div className="text-xs uppercase tracking-[0.22em] text-amber-700">
                        Proč to zní uvěřitelně
                      </div>
                      <p className="mt-3 text-base leading-7">{whyItSticks}</p>
                    </div>

                    <div className="rounded-2xl bg-emerald-50 p-5 text-emerald-950">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-emerald-700">
                        <TrendingDown className="size-4" />
                        Co v té zkratce chybí
                      </div>
                      <ul className="mt-3 space-y-3 text-base leading-7">
                        {whatItMisses.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-800/70" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="detaily" className="border-y border-border/60 bg-[rgba(248,244,236,0.65)] px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionKicker>Detaily a zdroje</SectionKicker>
            <h2 className="text-3xl leading-tight text-balance sm:text-4xl" style={displayFont}>
              Podrobnosti najdete níže, aby hlavní argument zůstal čitelný.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Každé z témat níže vychází z podkladů v projektu. Nejde o kampaň proti kartám za každou
              cenu, ale o vysvětlení, proč je část obchodníků nechce upřednostňovat.
            </p>
          </div>

          <Card className="border-border/70 bg-background/90 py-0 shadow-sm">
            <CardContent className="p-6">
              <Accordion
                items={detailSections.map((section) => ({
                  value: section.value,
                  title: section.title,
                  content: (
                    <div className="space-y-5">
                      <p className="leading-7 text-muted-foreground">{section.intro}</p>
                      <ul className="space-y-3 text-sm leading-7 text-foreground/90">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/70" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-2xl border border-border/70 bg-muted/50 p-4">
                        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          <FileText className="size-4" />
                          Vybrané zdroje
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {section.sources.map(([label, href]) => (
                            <a
                              key={href}
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                            >
                              {label}
                              <ArrowRight className="size-3.5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ),
                }))}
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <SectionKicker>Datový tok</SectionKicker>
            <h2 className="text-3xl leading-tight text-balance sm:text-4xl" style={displayFont}>
              Kartová platba není jen přesun peněz. Zanechává i další datovou stopu.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Veřejnost často řeší hlavně pohodlí při placení. Méně už je vidět, že spolu s platbou
              vznikají data, která se nepoužívají jen pro samotné zúčtování.
            </p>
          </div>

          <div className="space-y-5">
            <Card className="border-border/70 bg-background/90 py-0 shadow-sm">
              <CardContent className="grid gap-5 p-6 md:grid-cols-2">
                {dataFlow.map(({ step, title, description }) => (
                  <div key={step} className="rounded-2xl border border-border/60 bg-muted/40 p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{step}</div>
                    <h3 className="mt-3 text-lg font-semibold leading-tight">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-stone-950 py-0 text-stone-50 shadow-xl shadow-orange-950/10">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-stone-400">
                  <Database className="size-4" />
                  Upřesnění bez přehánění
                </div>
                <ul className="space-y-3 text-sm leading-7 text-stone-300">
                  {dataClarifications.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-stone-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-stone-950 px-4 py-20 text-stone-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl space-y-4">
            <SectionKicker>Proč terminál nevznikne</SectionKicker>
            <h2 className="text-3xl leading-tight text-balance sm:text-4xl" style={displayFont}>
              Čtyři prozaické důvody, proč si podnik terminál nepořídí nebo ho zase zruší.
            </h2>
            <p className="text-lg leading-8 text-stone-300">
              Nejde jen o ideologii nebo odpor ke změně. Často jde o úplně běžné provozní rozhodnutí
              malého podniku.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {merchantBarriers.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-white/10 bg-white/5 py-0 text-stone-50">
                <CardContent className="space-y-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-orange-200">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">{title}</h3>
                  <p className="text-sm leading-7 text-stone-300">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionKicker>Bezpečnost</SectionKicker>
            <h2 className="text-3xl leading-tight text-balance sm:text-4xl" style={displayFont}>
              Když obchodník přijímá karty, nepřijímá jen platbu, ale i další bezpečnostní riziko.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Úniky platebních dat u velkých firem ukazují, že karetní infrastruktura není jen
              pohodlí. Znamená to i větší útokovou plochu a další odpovědnost.
            </p>
          </div>

          <div className="grid gap-5">
            {securityCases.map(({ title, description }) => (
              <Card key={title} className="border-border/70 bg-background/90 py-0 shadow-sm">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-900">
                    <Lock className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold leading-tight">{title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl space-y-4">
            <SectionKicker>Fér kompromis</SectionKicker>
            <h2 className="text-3xl leading-tight text-balance sm:text-4xl" style={displayFont}>
              Jak si z pohledu provozu stojí karta, hotovost, převod a bitcoin.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Nechceme ignorovat pohodlí zákazníků. Chceme jen ukázat, že různé platební metody mají
              z pohledu obchodníka velmi odlišné důsledky pro likviditu, spory, účetnictví i data.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="border-border/70 bg-stone-950 py-0 text-stone-50 shadow-xl shadow-orange-950/10">
              <CardContent className="space-y-6 p-8">
                <div className="text-xs uppercase tracking-[0.22em] text-stone-400">Zpráva pro zákazníka</div>
                <p className="text-3xl leading-tight text-balance" style={displayFont}>
                  Když obchodník řekne „raději hotově nebo převodem“, nemusí tím říkat „raději bez
                  daní“. Často tím říká „raději bez zbytečných komplikací“.
                </p>
                <p className="text-sm leading-7 text-stone-300">
                  Proto není fér číst absenci terminálu jako automatický důkaz nepoctivosti. Často
                  jde o běžné ekonomické a provozní rozhodnutí.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-5 sm:grid-cols-2">
              {alternatives.map((item) => {
                const Icon = item.icon

                return (
                  <Card
                    key={item.title}
                    className={`border-border/70 bg-background/85 py-0 shadow-sm backdrop-blur ${
                      item.title === "Bitcoin" ? "sm:col-span-2" : ""
                    }`}
                  >
                    <CardContent className="space-y-3 p-6">
                      <div className="flex items-center gap-3">
                        <Icon className="size-5 text-orange-800" />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border/70 bg-background/90 shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold">Metoda</th>
                    {comparisonColumns.map((column) => (
                      <th key={column.key} className="px-5 py-4 text-sm font-semibold">
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paymentComparison.map(({ title, icon: Icon, accent, ...values }) => (
                    <tr key={title} className="border-t border-border/60 align-top">
                      <td className="px-5 py-5">
                        <div className="flex min-w-40 items-center gap-3">
                          <div className={`flex size-10 items-center justify-center rounded-2xl ${accent}`}>
                            <Icon className="size-5" />
                          </div>
                          <span className="text-base font-semibold">{title}</span>
                        </div>
                      </td>
                      {comparisonColumns.map((column) => (
                        <td key={column.key} className="px-5 py-5 text-sm leading-7 text-muted-foreground">
                          {values[column.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      <footer className="border-t border-border/60 px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-4 text-sm text-muted-foreground">
          <Link
            href="https://github.com/pepakriz/neplatkartoucz/issues/new"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Napište nám vlastní příběh
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="https://github.com/pepakriz/neplatkartoucz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Zdrojový kód na GitHubu
            <ArrowRight className="size-4" />
          </Link>
          <Link href="#detaily" className="inline-flex items-center gap-2 font-medium text-foreground">
            Otevřít podrobné argumenty
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </footer>
    </main>
  )
}
