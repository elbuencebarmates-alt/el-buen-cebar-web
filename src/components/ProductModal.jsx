import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { formatPrice } from "../utils/format";
import ProductImage from "./ProductImage";
import PaymentShippingInfo from "./PaymentShippingInfo";
import { CloseIcon, MinusIcon, PlusIcon } from "./icons";

export default function ProductModal() {
  const { product, closeProduct } = useProductModal();
  const { addItem } = useCart();
  const [variante, setVariante] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setVariante(product.variantes.length > 0 ? product.variantes[0] : null);
      setCantidad(1);
      setJustAdded(false);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e) => e.key === "Escape" && closeProduct();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, closeProduct]);

  if (!product) return null;

  const unitPrice = variante ? variante.precio : product.precio;

  const handleAdd = () => {
    if (!product.disponible) return;
    addItem(product, variante, cantidad);
    setJustAdded(true);
    setTimeout(() => closeProduct(), 550);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-forest-dark/50 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={closeProduct}
    >
      <div
        className="animate-scale-in relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-cream shadow-soft-lg sm:flex-row sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeProduct}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-forest-dark/40 text-cream backdrop-blur-sm transition-colors hover:bg-forest-dark/60"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        <div className="relative aspect-square w-full shrink-0 sm:aspect-auto sm:w-1/2">
          <ProductImage
            imagen={product.imagen}
            nombre={product.nombre}
            categoria={product.categoria}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto p-6 sm:p-8">
          {!product.disponible && (
            <span className="mb-2 inline-block w-fit rounded-full bg-forest/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest/70">
              Agotado por ahora
            </span>
          )}
          <h2 className="font-serif text-2xl font-medium text-forest sm:text-3xl">
            {product.nombre}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-forest/70">
            {product.descripcion_larga || product.descripcion_corta}
          </p>

          {product.variantes.length > 0 && (
            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-forest/50">
                Elegí una opción
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variantes.map((v) => {
                  const active = variante?.nombre === v.nombre;
                  return (
                    <button
                      key={v.nombre}
                      type="button"
                      onClick={() => setVariante(v)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        active
                          ? "border-forest bg-forest text-cream"
                          : "border-forest/15 text-forest/70 hover:border-gold hover:text-gold-dark"
                      }`}
                    >
                      {v.nombre} · {formatPrice(v.precio)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <p className="mt-5 font-serif text-2xl font-semibold text-gold-dark">
            {formatPrice(unitPrice)}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-medium text-forest/60">Cantidad</span>
            <div className="flex items-center gap-3 rounded-full border border-forest/15 px-2 py-1">
              <button
                type="button"
                onClick={() => setCantidad((q) => Math.max(1, q - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full text-forest/70 transition-colors hover:bg-wood-100"
                aria-label="Restar"
              >
                <MinusIcon className="h-3.5 w-3.5" />
              </button>
              <span className="w-5 text-center text-sm font-semibold text-forest">
                {cantidad}
              </span>
              <button
                type="button"
                onClick={() => setCantidad((q) => q + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-forest/70 transition-colors hover:bg-wood-100"
                aria-label="Sumar"
              >
                <PlusIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            disabled={!product.disponible}
            className="mt-6 w-full rounded-full bg-forest py-3.5 text-sm font-semibold text-cream shadow-soft transition-all hover:bg-forest-light active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-forest/30"
          >
            {!product.disponible
              ? "Agotado"
              : justAdded
                ? "¡Agregado! ✓"
                : "Agregar al carrito"}
          </button>

          <div className="mt-5">
            <PaymentShippingInfo compact />
          </div>
        </div>
      </div>
    </div>
  );
}
