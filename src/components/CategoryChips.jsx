import { CATEGORIES } from "../config";

export default function CategoryChips() {
  const scrollTo = (slug) => (e) => {
    e.preventDefault();
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-[64px] z-30 -mt-px block glass border-b border-forest/5 py-2.5 md:hidden">
      <div className="flex gap-2 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            onClick={scrollTo(cat.slug)}
            className="shrink-0 rounded-full border border-forest/15 bg-white/40 px-4 py-1.5 text-sm font-medium text-forest/80 transition-colors active:bg-forest active:text-cream"
          >
            {cat.label}
          </a>
        ))}
      </div>
    </div>
  );
}
