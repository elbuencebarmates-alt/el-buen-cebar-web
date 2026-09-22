// Reglas de descuento: la columna "descuento" del Sheet puede pisar el
// precio vigente de un producto (o de sus variantes) sin tocar código.
// Formatos soportados en product.descuento (ya parseado, ver normalizeProduct.js):
//   - null                              -> sin descuento
//   - 12000 (number)                    -> precio final plano, aplica a cualquier variante
//   - [{ nombre, precio }, ...]         -> precio final por variante (mismo formato que "variantes")

function pickDiscountCandidate(descuento, varianteNombre) {
  if (descuento == null) return null;
  if (typeof descuento === "number") return descuento;
  if (Array.isArray(descuento)) {
    const match = descuento.find((d) => d.nombre === varianteNombre);
    return match ? match.precio : null;
  }
  return null;
}

// Precio original + vigente para una unidad puntual: un producto sin
// variantes, o una variante ya elegida. Si el descuento cargado es igual o
// mayor al precio normal (carga mal hecha), se ignora — nunca se muestra
// una "oferta" más cara que el precio de lista.
export function getUnitPricing(product, variante = null) {
  const original = variante ? variante.precio : product.precio;
  const candidate = pickDiscountCandidate(product.descuento, variante?.nombre ?? null);
  const hasDiscount =
    typeof candidate === "number" && candidate > 0 && candidate < original;

  return {
    original,
    price: hasDiscount ? candidate : original,
    hasDiscount,
  };
}

// Resumen de precios para la card, antes de elegir variante: cuando hay
// variantes, arma el rango original y el rango vigente (que puede ser más
// angosto si solo algunas variantes tienen descuento activo).
export function getCardPricing(product) {
  if (!product.variantes || product.variantes.length === 0) {
    const unit = getUnitPricing(product, null);
    return {
      originalMin: unit.original,
      originalMax: unit.original,
      priceMin: unit.price,
      priceMax: unit.price,
      hasDiscount: unit.hasDiscount,
    };
  }

  const units = product.variantes.map((v) => getUnitPricing(product, v));
  const originals = units.map((u) => u.original);
  const prices = units.map((u) => u.price);

  return {
    originalMin: Math.min(...originals),
    originalMax: Math.max(...originals),
    priceMin: Math.min(...prices),
    priceMax: Math.max(...prices),
    hasDiscount: units.some((u) => u.hasDiscount),
  };
}
