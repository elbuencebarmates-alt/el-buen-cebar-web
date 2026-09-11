export default function LegalLayout({ title, updated, children }) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 sm:pt-36">
      <h1 className="font-serif text-3xl font-medium text-forest sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-forest/50">Última actualización: {updated}</p>
      <div className="prose-legal mt-10 flex flex-col gap-6 text-forest/80">{children}</div>
    </main>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="font-serif text-xl font-medium text-forest">{title}</h2>
      <div className="mt-2.5 flex flex-col gap-2.5 text-[15px] leading-relaxed">{children}</div>
    </section>
  );
}
