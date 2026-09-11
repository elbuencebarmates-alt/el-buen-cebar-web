import { CATEGORIES } from "../config";
import { CATEGORY_ICONS } from "./icons";

const BLURBS = {
  mates: "Algarrobo, calabaza y cuero.",
  bombillas: "Alpaca, acero y estilo.",
  canastas: "Para llevar el ritual a todos lados.",
  termos: "Temperatura a punto todo el día.",
  yerba: "Las marcas de siempre.",
  accesorios: "Ese detalle que completa todo.",
};

export default function CategoryGrid() {
  const scrollTo = (slug) => (e) => {
    e.preventDefault();
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="font-serif text-3xl font-medium text-forest sm:text-4xl">
          Explorá por categoría
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-balance text-forest/65">
          Seis rincones del ritual matero. Elegí por dónde arrancar.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {CATEGORIES.map((cat, i) => {
          const Icon = CATEGORY_ICONS[cat.slug];
          return (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              onClick={scrollTo(cat.slug)}
              className="animate-fade-in-up group relative flex aspect-[4/5] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-gradient-to-br from-forest to-forest-light p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg sm:aspect-square"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,155,39,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/[0.08] text-gold-light transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.3} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-cream sm:text-xl">
                  {cat.label}
                </h3>
                <p className="mt-1 text-xs text-cream/60 sm:text-sm">{BLURBS[cat.slug]}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
