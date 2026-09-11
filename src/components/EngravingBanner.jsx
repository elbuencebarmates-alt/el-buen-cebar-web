import { buildEngravingInquiryUrl } from "../utils/whatsapp";

export default function EngravingBanner() {
  return (
    <section className="px-4 py-4 sm:px-6">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 overflow-hidden rounded-3xl bg-gradient-to-br from-forest to-forest-light px-6 py-12 text-center shadow-soft-lg sm:flex-row sm:justify-between sm:px-12 sm:text-left">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
            Grabado personalizado
          </span>
          <h3 className="mt-2 max-w-md text-balance font-serif text-2xl font-medium text-cream sm:text-3xl">
            Contanos tu idea, lo personalizamos a tu gusto.
          </h3>
          <p className="mt-2 max-w-md text-sm text-cream/70">
            Iniciales, frases, fechas — le damos ese toque único a tu mate o tu bombilla.
          </p>
        </div>
        <a
          href={buildEngravingInquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-dark shadow-soft transition-all hover:bg-gold-light active:scale-[0.98]"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  );
}
