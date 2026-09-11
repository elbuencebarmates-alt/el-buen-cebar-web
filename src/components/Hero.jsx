import { MateIcon, YerbaIcon } from "./icons";

export default function Hero() {
  const scrollToCategories = (e) => {
    e.preventDefault();
    document.getElementById("categorias")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-forest pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-gold/[0.08] blur-3xl" />
        <YerbaIcon className="absolute -right-10 -bottom-16 h-72 w-72 text-cream/[0.04] sm:h-[26rem] sm:w-[26rem]" strokeWidth={0.6} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,155,39,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 sm:px-6">
        <div className="animate-fade-in-up flex items-center gap-2 rounded-full border border-gold/30 bg-cream/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
          <MateIcon className="h-3.5 w-3.5" />
          Ritual matero · Est. 2026
        </div>

        <h1
          className="animate-fade-in-up mt-6 max-w-2xl text-balance font-serif text-4xl font-medium leading-[1.08] text-cream sm:text-5xl md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          El mate bien elegido, bien cebado y con buena onda.
        </h1>

        <p
          className="animate-fade-in-up mt-6 max-w-xl text-balance text-base leading-relaxed text-cream/75 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Mirá el catálogo, armá tu carrito y listo: cerramos el pedido charlando
          directo por WhatsApp, como corresponde. Sin cuentas, sin checkout,
          sin vueltas raras — solo mate y buena atención.
        </p>

        <div
          className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#categorias"
            onClick={scrollToCategories}
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-dark shadow-soft-lg transition-all hover:bg-gold-light active:scale-[0.98]"
          >
            Ver productos
          </a>
          <a
            href="#quienes-somos"
            className="text-sm font-medium text-cream/80 underline-offset-4 transition-colors hover:text-cream hover:underline"
          >
            Conocé la marca
          </a>
        </div>
      </div>
    </section>
  );
}
