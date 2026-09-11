import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { priceRangeLabel } from "../utils/format";
import ProductImage from "./ProductImage";

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const { openProduct } = useProductModal();
  const hasVariants = product.variantes.length > 0;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    if (!product.disponible) return;
    if (hasVariants) {
      openProduct(product);
      return;
    }
    addItem(product, null, 1);
  };

  return (
    <div
      className="animate-fade-in-up group flex flex-col overflow-hidden rounded-3xl bg-white/60 shadow-soft ring-1 ring-forest/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
      style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
    >
      <button
        type="button"
        onClick={() => openProduct(product)}
        className="relative block aspect-square w-full overflow-hidden"
      >
        <ProductImage
          imagen={product.imagen}
          nombre={product.nombre}
          categoria={product.categoria}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.disponible && (
          <span className="absolute left-3 top-3 rounded-full bg-forest-dark/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">
            Agotado
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-serif text-base font-medium leading-snug text-forest">
          {product.nombre}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-forest/60">
          {product.descripcion_corta}
        </p>
        <p className="font-serif text-lg font-semibold text-gold-dark">
          {priceRangeLabel(product)}
        </p>

        <div className="mt-1 flex items-center gap-2">
          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={!product.disponible}
            className="flex-1 whitespace-nowrap rounded-full bg-forest px-3 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-light disabled:cursor-not-allowed disabled:bg-forest/30 sm:px-4"
          >
            {!product.disponible ? "Agotado" : hasVariants ? "Elegir opción" : "Agregar"}
          </button>
          <button
            type="button"
            onClick={() => openProduct(product)}
            className="whitespace-nowrap rounded-full border border-forest/15 px-3 py-2.5 text-sm font-medium text-forest/70 transition-colors hover:border-gold hover:text-gold-dark sm:px-4"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
