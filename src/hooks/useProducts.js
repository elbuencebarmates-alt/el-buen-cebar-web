import { useEffect, useState } from "react";
import Papa from "papaparse";
import { PRODUCTS_CSV_URL } from "../config";
import { normalizeRows } from "../utils/normalizeProduct";
import fallbackData from "../data/products.fallback.json";

export function useProducts() {
  const [products, setProducts] = useState(() => normalizeRows(fallbackData));
  const [source, setSource] = useState("fallback");
  const [loading, setLoading] = useState(Boolean(PRODUCTS_CSV_URL));

  useEffect(() => {
    if (!PRODUCTS_CSV_URL) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    Papa.parse(PRODUCTS_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (cancelled) return;
        const normalized = normalizeRows(results.data || []);
        if (normalized.length > 0) {
          setProducts(normalized);
          setSource("sheet");
        }
        setLoading(false);
      },
      error: () => {
        if (cancelled) return;
        // Si falla el fetch, nos quedamos con el catálogo de respaldo ya cargado.
        setLoading(false);
      },
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading, source };
}
