import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Leaf, MapPin, Heart, Users, Clock, ArrowRight, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Logo, LeafIcon } from "@/components/Logo";
import heroBag from "@/assets/hero-bag.jpg";
import storeInterior from "@/assets/store-interior.jpg";

// About slider images — replace/add entries here to swap images
const aboutImages: { src: string; alt: string }[] = [
  { src: storeInterior, alt: "Innenansicht von Bio am Markt" },
];

function AboutSlider() {
  const [index, setIndex] = useState(0);
  const count = aboutImages.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 4500);
    return () => clearInterval(id);
  }, [count]);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-beige rounded-[32px] rotate-1" />
      <div className="relative overflow-hidden rounded-[24px] shadow-[var(--shadow-card)] aspect-[6/5]">
        {aboutImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Vorheriges Bild"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center hover:bg-background transition-colors shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Nächstes Bild"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center hover:bg-background transition-colors shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {aboutImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Bild ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-background/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bio am Markt – Premium Biomarkt in Bad Salzuflen" },
      { name: "description", content: "Nachhaltig einkaufen, bewusst leben. Zertifizierte Bio-Produkte aus der Region in Bad Salzuflen." },
      { property: "og:title", content: "Bio am Markt – Premium Biomarkt in Bad Salzuflen" },
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
  { label: "Sortiment", href: "#features" },
  { label: "Regionales", href: "#features" },
  { label: "Kontakt", href: "#kontakt" },
];

const features = [
  { icon: Leaf, title: "100% Bio", text: "Zertifizierte Bio-Produkte für Ihre Gesundheit und für die Umwelt." },
  { icon: MapPin, title: "Regional", text: "Wir setzen auf kurze Wege und unterstützen lokale Erzeuger." },
  { icon: Heart, title: "Nachhaltig", text: "Verantwortung übernehmen für eine lebenswerte Zukunft." },
  { icon: Users, title: "Persönlich", text: "Persönliche Beratung und ein Einkaufserlebnis mit Herz." },
];

function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-[14px] px-6 py-3 text-sm font-medium transition-all duration-300 ease-out";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgb(79_107_69_/_0.4)]"
      : "text-primary hover:bg-primary/5";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-primary text-sm tracking-wide">
      <LeafIcon className="w-4 h-3.5" />
      <span>{children}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-6 lg:py-8 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-10 text-sm text-foreground/75">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <CTAButton href="#kontakt">
            Kontakt <ArrowRight className="w-4 h-4" />
          </CTAButton>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <LeafIcon className="absolute -left-10 bottom-10 w-72 h-60 text-sage/20" />
          <LeafIcon className="absolute right-1/4 top-20 w-32 h-28 text-sage/15 rotate-45" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="space-y-8">
            <SectionLabel>Natürlich gut.</SectionLabel>
            <h1 className="font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary-dark tracking-tight">
              Ihr Biomarkt<br />
              <span className="text-primary">in Bad Salzuflen.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed font-light">
              Nachhaltig einkaufen, bewusst leben – für uns, für Sie und für unsere Region.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <CTAButton href="#about">
                Mehr über uns <ArrowRight className="w-4 h-4" />
              </CTAButton>
              <CTAButton href="#features" variant="ghost">
                Unser Sortiment
              </CTAButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-sage/15 rounded-[32px] -rotate-2" />
            <img
              src={heroBag}
              alt="Bio-Einkaufstasche mit frischem Gemüse"
              width={1600}
              height={1200}
              className="relative w-full h-auto rounded-[24px] shadow-[var(--shadow-card)] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <SectionLabel>Das macht uns aus</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light text-primary-dark leading-tight">
              Bewusst. Regional. <span className="text-primary">Echt.</span>
            </h2>
            <p className="text-muted-foreground font-light">
              Drei Werte, die jeden Tag in unserem Markt sichtbar werden.
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-card rounded-[14px] p-8 border border-border/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-medium text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AboutSlider />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <SectionLabel>Über uns</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light text-primary-dark leading-tight">
              Aus Überzeugung.<br />
              <span className="text-primary">Für Sie.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Wir sind <span className="text-foreground">Katharina Laitsch</span> und{" "}
                <span className="text-foreground">Anja Olden</span> – Ihre Geschäftsführerinnen
                von „Bio am Markt" in Bad Salzuflen.
              </p>
              <p>
                Mit Leidenschaft für Bio-Produkte, einem Blick für Qualität und einem Herzen
                für unsere Region, wählen wir täglich ein Sortiment, hinter dem wir mit voller
                Überzeugung stehen, für Sie aus.
              </p>
            </div>
            <div className="pt-2">
              <CTAButton href="#kontakt">
                Besuchen Sie uns <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[24px] bg-primary-dark text-primary-foreground p-12 lg:p-16">
            <LeafIcon className="absolute -right-8 -top-8 w-64 h-56 text-sage/15" />
            <LeafIcon className="absolute right-32 bottom-0 w-32 h-28 text-sage/10 rotate-180" />
            <div className="relative max-w-2xl space-y-5">
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Schauen Sie vorbei – wir freuen uns auf Sie.
              </h2>
              <p className="text-primary-foreground/75 font-light">
                Am Markt 16, mitten in Bad Salzuflen. Mo–Fr 08:00–18:30, Sa 08:00–14:00.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="border-t border-border/60 bg-card">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-5">
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              <h3 className="text-sm font-medium tracking-wide uppercase">Adresse</h3>
            </div>
            <address className="not-italic text-sm text-muted-foreground space-y-1 font-light">
              <p className="text-foreground">Bio am Markt</p>
              <p>Am Markt 16</p>
              <p>32105 Bad Salzuflen</p>
              <p className="pt-4 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>05222 / 80 60 838</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                <a href="mailto:info@bio-am-markt-bs.de" className="hover:text-primary transition-colors">
                  info@bio-am-markt-bs.de
                </a>
              </p>

            </address>
          </div>
          <div>
            <div className="flex items-center gap-2 text-primary mb-5">
              <Clock className="w-4 h-4" strokeWidth={1.5} />
              <h3 className="text-sm font-medium tracking-wide uppercase">Öffnungszeiten</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 font-light">
              <li className="flex justify-between max-w-[220px]">
                <span>Mo – Fr</span>
                <span className="text-foreground">08:00 – 18:30</span>
              </li>
              <li className="flex justify-between max-w-[220px]">
                <span>Samstag</span>
                <span className="text-foreground">08:00 – 14:00</span>
              </li>
              <li className="flex justify-between max-w-[220px]">
                <span>Sonntag</span>
                <span>geschlossen</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 text-primary mb-5">
              <LeafIcon className="w-4 h-3.5" />
              <h3 className="text-sm font-medium tracking-wide uppercase">Newsletter</h3>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Neuigkeiten, regionale Angebote und Events – einmal im Monat in Ihr Postfach.
            </p>
            <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="bg-background rounded-[14px] h-11"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-[14px] h-11 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                Anmelden <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <LeafIcon className="w-3.5 h-3 text-primary" />
              <span>© 2026 Bio am Markt – Katharina Laitsch & Anja Olden GbR</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-primary transition-colors">Impressum</a>
              <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
