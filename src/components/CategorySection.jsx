import ProductCard from "./ProductCard";

export default function CategorySection({ slug, label, products, alt = false }) {
  if (products.length === 0) return null;

  return (
    <section
      id={slug}
      className={`scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18 ${alt ? "bg-wood-50" : ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <h2 className="font-serif text-2xl font-medium text-forest sm:text-3xl">
              {label}
            </h2>
            <div className="mt-2 h-[3px] w-12 rounded-full bg-gold" />
          </div>
          <span className="text-sm text-forest/50">
            {products.length} {products.length === 1 ? "producto" : "productos"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
