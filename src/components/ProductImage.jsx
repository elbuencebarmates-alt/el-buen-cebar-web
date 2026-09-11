import { useState } from "react";
import { CATEGORY_ICONS, MateIcon } from "./icons";

export default function ProductImage({ imagen, nombre, categoria, className = "" }) {
  const [failed, setFailed] = useState(false);
  const src = imagen ? `/images/${imagen}` : null;
  const Icon = CATEGORY_ICONS[categoria] || MateIcon;

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-forest to-forest-light text-gold-light ${className}`}
        role="img"
        aria-label={nombre}
      >
        <div className="flex flex-col items-center gap-2 opacity-80">
          <Icon className="h-10 w-10" strokeWidth={1.2} />
          <span className="font-serif text-[11px] tracking-wide text-cream/70">
            Foto próximamente
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={nombre}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
