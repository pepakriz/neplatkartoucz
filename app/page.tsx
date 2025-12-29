"use client"

import {
  DollarSign,
  Clock,
  AlertTriangle,
  FileText,
  Wrench,
  FileSignature,
  TrendingDown,
  Ban,
  Shield,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[20vh] flex items-center justify-center px-4 py-10 pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Neplať kartou</h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Placení kartou přináší zákazníkovi především pohodlí, pro obchodníka však může znamenat značnou zátěž – ať už časovou, technickou, nebo finanční.
          </p>
        </div>
      </section>

      {/* Main Arguments Section */}
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Poplatky platí obchodník */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Vysoké poplatky pro obchodníka</h3>
            <p className="text-muted-foreground leading-relaxed">
              Obchodník platí 1,5-3% z každé transakce, což při větších částkách představuje významné náklady. Tyto
              poplatky snižují zisk a musí být promítnuty do cen.
            </p>
          </Card>

          {/* Poplatky nejsou dopředu známé */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Netransparentní struktura poplatků</h3>
            <p className="text-muted-foreground leading-relaxed">
              Výše poplatků se liší podle typu karty, banky a poskytovatele. Obchodník často neví dopředu, kolik přesně
              zaplatí za každou transakci.
            </p>
          </Card>

          {/* Zákaz přirážek */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <Ban className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Zákaz přirážek</h3>
            <p className="text-muted-foreground leading-relaxed">
              Obchodník nemůže dát přirážku za platbu kartou, proto musí náklady promítnout do základních cen, což
              zdražuje zboží i pro platby v hotovosti.
            </p>
          </Card>

          {/* Zpožděné platby */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Zpožděné připsání peněz</h3>
            <p className="text-muted-foreground leading-relaxed">
              Obchodník obdrží peníze v nejlepším případě až druhý den, často i později. To komplikuje cash flow a
              likviditu, zejména u malých podniků.
            </p>
          </Card>

          {/* Chargeback */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Riziko chargebacku</h3>
            <p className="text-muted-foreground leading-relaxed">
              Zákazník může transakci zpětně zrušit. Obchodník čelí poplatku za chargeback (často 300-500 Kč), i když se
              úspěšně obhájí před bankou.
            </p>
          </Card>

          {/* Složité účetnictví */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Složitější účetnictví</h3>
            <p className="text-muted-foreground leading-relaxed">
              Každá transakce musí být párována s platbou, evidovány poplatky, vedeny vyrovnávací účty. To zvyšuje
              administrativní náklady a náročnost účetnictví.
            </p>
          </Card>

          {/* Hardware */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nutnost speciálního hardwaru</h3>
            <p className="text-muted-foreground leading-relaxed">
              Obchodník musí pořídit a udržovat platební terminál, případně více terminálů. To představuje počáteční
              investici i náklady na údržbu a aktualizace.
            </p>
          </Card>

          {/* Smlouvy */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <FileSignature className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Složité smluvní vztahy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Obchodník musí uzavřít smlouvu s poskytovatelem terminálu (acquirer) a bankou. Často dlouhodobé závazky s
              výpovědními lhůtami a nepřehledné podmínky.
            </p>
          </Card>

          {/* Technické problémy */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Technické výpadky</h3>
            <p className="text-muted-foreground leading-relaxed">
              Závislost na internetu a infrastruktuře poskytovatelů. Výpadek znamená ztrátu tržeb. Problémy s terminálem
              mohou zastavit prodej.
            </p>
          </Card>
        </div>
      </section>

      {/* Summary Section */}
      <section className="px-4 py-20 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Dopad na zákazníky</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            Všechny tyto náklady a komplikace se nakonec promítají do vyšších cen produktů a služeb. Zákazníci platící v
            hotovosti tak dotují ty, kteří platí kartou. Zároveň obchodníci musí navýšit ceny pro všechny, aby pokryli
            náklady na kartové platby.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <div className="px-6 py-4 rounded-lg bg-foreground/5 border border-border">
              <div className="text-3xl font-bold mb-1">2-4%</div>
              <div className="text-sm text-muted-foreground">průměrné zvýšení cen</div>
            </div>
            <div className="px-6 py-4 rounded-lg bg-foreground/5 border border-border">
              <div className="text-3xl font-bold mb-1">1-2 dny</div>
              <div className="text-sm text-muted-foreground">zpoždění platby</div>
            </div>
            <div className="px-6 py-4 rounded-lg bg-foreground/5 border border-border">
              <div className="text-3xl font-bold mb-1">300-500 Kč</div>
              <div className="text-sm text-muted-foreground">poplatek za chargeback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Arguments */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Další důležité faktory</h2>
        <div className="space-y-8">
          <div className="border-l-2 border-foreground/20 pl-6">
            <h3 className="text-xl font-semibold mb-2">Soukromí zákazníků</h3>
            <p className="text-muted-foreground leading-relaxed">
              Každá platba kartou je zaznamenána a sledována. Banky i státní orgány mají přehled o všech vašich
              nákupech, zatímco hotovost poskytuje anonymitu.
            </p>
          </div>

          <div className="border-l-2 border-foreground/20 pl-6">
            <h3 className="text-xl font-semibold mb-2">Závislost na technologii</h3>
            <p className="text-muted-foreground leading-relaxed">
              Systémy kartových plateb jsou zranitelné vůči kybernetickým útokům, technickým výpadkům a manipulaci.
              Hotovost funguje vždy, bez ohledu na stav infrastruktury.
            </p>
          </div>

          <div className="border-l-2 border-foreground/20 pl-6">
            <h3 className="text-xl font-semibold mb-2">Monopolizace trhu</h3>
            <p className="text-muted-foreground leading-relaxed">
              Několik velkých společností (Visa, Mastercard) kontroluje většinu platebního trhu, diktuje podmínky a
              inkasuje obrovské zisky na úkor obchodníků a spotřebitelů.
            </p>
          </div>

          <div className="border-l-2 border-foreground/20 pl-6">
            <h3 className="text-xl font-semibold mb-2">Podpora lokálního obchodu</h3>
            <p className="text-muted-foreground leading-relaxed">
              Platba v hotovosti ponechává 100% peněz u obchodníka okamžitě. U platby kartou odchází část transnačním
              korporacím a obchodník čeká na své peníze.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>Informační web o skrytých nákladech plateb kartou</p>
        </div>
      </footer>
    </main>
  )
}
