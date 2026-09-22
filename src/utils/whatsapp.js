import { WHATSAPP_NUMBER } from "../config";
import { formatPrice } from "./format";

function buildWaLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// cartItems: [{ nombre, categoria, cantidad, precioUnitario, variante: { nombre, precio } | null }]
export function buildWhatsAppCartMessage(cartItems) {
  const lines = [];
  lines.push("¡Hola! Quería hacer este pedido:");
  lines.push("");

  let total = 0;
  cartItems.forEach((item) => {
    // precioUnitario ya es el precio vigente (con descuento aplicado si
    // corresponde) — se fija al agregar el item al carrito.
    const subtotal = item.precioUnitario * item.cantidad;
    total += subtotal;
    const variantLabel = item.variante ? ` (${item.variante.nombre})` : "";
    lines.push(
      `• ${item.cantidad}x ${item.nombre}${variantLabel} — ${formatPrice(subtotal)}`
    );
  });

  lines.push("");
  lines.push(`Total estimado: ${formatPrice(total)}`);
  lines.push("");
  lines.push("¿Me confirmás disponibilidad y coordinamos pago y envío?");

  return lines.join("\n");
}

export function buildWhatsAppCartUrl(cartItems) {
  return buildWaLink(buildWhatsAppCartMessage(cartItems));
}

export function buildGeneralInquiryUrl() {
  return buildWaLink("Hola! Quería consultar por los productos disponibles.");
}

export function buildEngravingInquiryUrl() {
  return buildWaLink("Hola! Quería consultar por un grabado personalizado.");
}

export function buildProductInquiryUrl(productName) {
  return buildWaLink(`Hola! Quería consultar por: ${productName}`);
}
