export default function PaymentShippingInfo({ compact = false }) {
  return (
    <div
      className={`flex flex-col gap-2.5 rounded-2xl border border-wood-200 bg-wood-50 text-forest/80 ${
        compact ? "p-3.5 text-xs" : "p-4 text-sm"
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 text-gold-dark">💳</span>
        <p>
          <strong className="font-semibold text-forest">Formas de pago:</strong>{" "}
          transferencia bancaria o efectivo.
        </p>
      </div>
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 text-gold-dark">📦</span>
        <p>
          <strong className="font-semibold text-forest">Envíos:</strong> hacemos
          envíos a todo el país. Coordinamos todo por WhatsApp.
        </p>
      </div>
    </div>
  );
}
