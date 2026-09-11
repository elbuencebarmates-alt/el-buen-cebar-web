import { createContext, useContext, useMemo, useState } from "react";

const ProductModalContext = createContext(null);

export function ProductModalProvider({ children }) {
  const [product, setProduct] = useState(null);

  const value = useMemo(
    () => ({
      product,
      openProduct: (p) => setProduct(p),
      closeProduct: () => setProduct(null),
    }),
    [product]
  );

  return <ProductModalContext.Provider value={value}>{children}</ProductModalContext.Provider>;
}

export function useProductModal() {
  const ctx = useContext(ProductModalContext);
  if (!ctx) throw new Error("useProductModal debe usarse dentro de <ProductModalProvider>");
  return ctx;
}
