import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import { buildWhatsAppCartUrl } from "../utils/whatsapp";
import ProductImage from "./ProductImage";
import { CartIcon, CloseIcon, MinusIcon, PlusIcon, TrashIcon, WhatsAppIcon } from "./icons";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const whatsappUrl = items.length > 0 ? buildWhatsAppCartUrl(items) : null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-forest-dark/50 backdrop-blur-sm" onClick={closeCart}>
      <aside
        className="animate-fade-in-up flex h-full w-full max-w-md flex-col bg-cream shadow-soft-lg"
        style={{ animationDuration: "0.35s" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-forest/10 px-5 py-4">
          <h2 className="flex items-center gap-2 font-serif text-lg font-medium text-forest">
            <CartIcon className="h-5 w-5" />
            Tu carrito
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="flex h-9 w-9 items-center justify-center rounded-full text-forest/60 transition-colors hover:bg-wood-100"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-forest/50">
              <CartIcon className="h-10 w-10 opacity-40" />
              <p className="text-sm">
                Todavía no agregaste nada. ¡Dale una vuelta al catálogo!
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.key} className="flex gap-3">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                    <ProductImage
                      imagen={item.imagen}
                      nombre={item.nombre}
                      categoria={item.categoria}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium leading-snug text-forest">
                        {item.nombre}
                      </p>
                      {item.variante && (
                        <p className="text-xs text-forest/50">{item.variante.nombre}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-forest/15 px-1.5 py-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.cantidad - 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-forest/70 hover:bg-wood-100"
                          aria-label="Restar"
                        >
                          <MinusIcon className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-xs font-semibold text-forest">
                          {item.cantidad}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.cantidad + 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-forest/70 hover:bg-wood-100"
                          aria-label="Sumar"
                        >
                          <PlusIcon className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-gold-dark">
                        {formatPrice(item.precioUnitario * item.cantidad)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.key)}
                    aria-label="Quitar producto"
                    className="h-fit rounded-full p-1.5 text-forest/40 transition-colors hover:bg-wood-100 hover:text-forest"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-forest/10 px-5 py-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-forest/60">Total estimado</span>
            <span className="font-serif text-xl font-semibold text-forest">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <a
            href={whatsappUrl || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!whatsappUrl}
            onClick={(e) => !whatsappUrl && e.preventDefault()}
            className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold shadow-soft transition-all active:scale-[0.98] ${
              whatsappUrl
                ? "bg-[#25D366] text-forest-dark hover:brightness-95"
                : "cursor-not-allowed bg-forest/15 text-forest/40"
            }`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir todo por WhatsApp
          </a>
          <p className="mt-2.5 text-center text-[11px] text-forest/45">
            Precio final, pago y envío se confirman por WhatsApp.
          </p>
        </div>
      </aside>
    </div>
  );
}
