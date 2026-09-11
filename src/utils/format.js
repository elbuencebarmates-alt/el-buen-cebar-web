export function formatPrice(value) {
  const n = Number(value) || 0;
  return `$${n.toLocaleString("es-AR", { maximumFractionDigits: 0 })}`;
}

export function priceRangeLabel(product) {
  if (!product.variantes || product.variantes.length === 0) {
    return formatPrice(product.precio);
  }
  const precios = product.variantes.map((v) => v.precio);
  const min = Math.min(...precios);
  const max = Math.max(...precios);
  if (min === max) return formatPrice(min);
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}
