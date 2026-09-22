import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getUnitPricing } from "../utils/pricing";

const CartContext = createContext(null);
const STORAGE_KEY = "elbuencebar_cart";

function readStoredCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function itemKey(productId, varianteNombre) {
  return varianteNombre ? `${productId}::${varianteNombre}` : productId;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage no disponible (modo privado, etc.) — el carrito sigue
      // funcionando en memoria durante la sesión.
    }
  }, [items]);

  const addItem = useCallback((product, variante = null, cantidad = 1) => {
    const key = itemKey(product.id, variante?.nombre);
    const { price: precioUnitario } = getUnitPricing(product, variante);

    setItems((prev) => {
      const existing = prev.find((it) => it.key === key);
      if (existing) {
        return prev.map((it) =>
          it.key === key ? { ...it, cantidad: it.cantidad + cantidad } : it
        );
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          nombre: product.nombre,
          categoria: product.categoria,
          imagen: product.imagen,
          precioUnitario,
          variante: variante ? { nombre: variante.nombre, precio: variante.precio } : null,
          cantidad,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((it) => it.key !== key));
  }, []);

  const updateQuantity = useCallback((key, cantidad) => {
    setItems((prev) => {
      if (cantidad <= 0) return prev.filter((it) => it.key !== key);
      return prev.map((it) => (it.key === key ? { ...it, cantidad } : it));
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const { totalItems, totalPrice } = useMemo(() => {
    return items.reduce(
      (acc, it) => {
        acc.totalItems += it.cantidad;
        acc.totalPrice += it.cantidad * it.precioUnitario;
        return acc;
      },
      { totalItems: 0, totalPrice: 0 }
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    }),
    [items, isOpen, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
