import { createFileRoute } from "@tanstack/react-router";
import { Leaf, MapPin, Heart, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo, LeafIcon } from "@/components/Logo";
import heroBag from "@/assets/hero-bag.jpg";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bio am Markt – Ihr Biomarkt in Bad Salzuflen" },
      { name: "description", content: "Nachhaltig einkaufen, bewusst leben. Zertifizierte Bio-Produkte aus der Region in Bad Salzuflen." },
      { property: "og:title", content: "Bio am Markt – Ihr Biomarkt in Bad Salzuflen" },
      { property: "og:description", content: "Nachhaltig einkaufen, bewusst leben – für uns und unsere Region." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const nav = [
  { label: "Startseite", href: "#home" },
  { label: "Über uns", href: "#about" },
  { label: "Unser Sortiment", href: "#sortiment" },
  { label: "Regionales", href: "#regional" },
  { label: "Kontakt", href: "#kontakt" },
];

const features = [
  { icon: Leaf, title: "100% Bio", text: "Zertifizierte Bio-Produkte für Ihre Gesundheit und für die Umwelt." },
  { icon: MapPin, title: "Regional", text: "Wir setzen auf kurze Wege und unterstützen lokale Erzeuger." },
  { icon: Heart, title: "Nachhaltig", text: "Verantwortung übernehmen für eine lebenswerte Zukunft." },
  { icon: Users, title: "Persönlich", text: "Persönliche Beratung und ein Einkaufserlebnis mit Herz." },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 text-primary">
        <LeafIcon className="w-6 h-5" />
        <h2 className="text-xl md:text-2xl font-medium">{children}</h2>
      </div>
      <div className="w-10 h-px bg-primary/40" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="px-6 md:px-12 py-5 flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8 text-sm text-foreground/80">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-primary transition-colors">{n.label}</a>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <a href="#kontakt">Kontakt <LeafIcon className="w-4 h-3 ml-1" /></a>
        </Button>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-accent/40">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <LeafIcon className="absolute left-8 bottom-12 w-40 h-32 text-primary/40" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="flex items-center gap-2 text-primary mb-5">
              <LeafIcon className="w-5 h-4" />
              <span className="text-sm">Natürlich gut.</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-primary">
              Ihr Biomarkt<br />in Bad Salzuflen.
            </h1>
            <p className="mt-6 text-foreground/70 max-w-md leading-relaxed">
              Nachhaltig einkaufen, bewusst leben – für uns und unsere Region.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-md">
              <a href="#about">Mehr über uns <LeafIcon className="w-4 h-3 ml-2" /></a>
            </Button>
          </div>
          <div className="relative">
            <img
              src={heroBag}
              alt="Bio-Einkaufstasche mit frischem Gemüse"
              width={1600}
              height={1200}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionTitle>Das macht uns aus</SectionTitle>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title} className="text-center flex flex-col items-center">
              <f.icon className="w-12 h-12 text-primary stroke-[1.25]" />
              <h3 className="mt-5 text-lg text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm text-foreground/65 leading-relaxed max-w-[200px]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={storeInterior}
            alt="Innenansicht von Bio am Markt"
            width={1200}
            height={1000}
            loading="lazy"
            className="w-full h-auto rounded-2xl"
          />
          <div className="relative">
            <LeafIcon className="absolute -right-4 top-0 w-48 h-40 text-primary/10 -z-0" />
            <div className="flex items-center gap-2 text-primary">
              <LeafIcon className="w-5 h-4" />
              <span className="text-sm">Über uns</span>
            </div>
            <div className="w-10 h-px bg-primary/40 mt-2 mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Aus Überzeugung. Für Sie.</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Wir sind Katharina Laitsch & Anja Olden und Ihr Biomarkt in Bad Salzuflen.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Mit Leidenschaft für Bio-Produkte, einem Blick für Qualität und einem Herzen für unsere Region.
            </p>
            <Button asChild className="mt-8">
              <a href="#sortiment">Mehr erfahren <LeafIcon className="w-4 h-3 ml-2" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="mt-20 bg-accent/40 px-6 md:px-12 py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              <h3 className="text-base">Adresse</h3>
            </div>
            <div className="mt-5 text-sm text-foreground/75 space-y-1">
              <p>Am Markt 16</p>
              <p>32105 Bad Salzuflen</p>
              <p className="pt-4">Tel.: 05222 / 80 60 838</p>
              <p>E-Mail: <a href="mailto:info@bio-am-markt-bs.de" className="underline text-primary">info@bio-am-markt-bs.de</a></p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <h3 className="text-base">Öffnungszeiten</h3>
            </div>
            <div className="mt-5 text-sm text-foreground/75 space-y-1">
              <p>Mo – Fr: 08:00 – 18:30 Uhr</p>
              <p>Sa: 08:00 – 14:00 Uhr</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-primary">
              <LeafIcon className="w-5 h-4" />
              <h3 className="text-base">Newsletter</h3>
            </div>
            <p className="mt-5 text-sm text-foreground/75">
              Bleiben Sie auf dem Laufenden über Neuigkeiten, Angebote und Events.
            </p>
            <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Ihre E-Mail-Adresse" className="bg-background" />
              <Button type="submit" className="w-full">
                Anmelden <LeafIcon className="w-4 h-3 ml-2" />
              </Button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-primary/15 text-center text-xs text-foreground/60">
          <div className="flex items-center justify-center gap-2">
            <LeafIcon className="w-4 h-3 text-primary" />
            <span>© 2026 Bio am Markt – Katharina Laitsch & Anja Olden GbR</span>
          </div>
          <div className="mt-2 space-x-3">
            <a href="#" className="hover:text-primary">Impressum</a>
            <span>|</span>
            <a href="#" className="hover:text-primary">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
