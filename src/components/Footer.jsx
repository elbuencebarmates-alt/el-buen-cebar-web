import { Link } from "react-router-dom";
import { BRAND_NAME, CATEGORIES, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../config";
import { buildGeneralInquiryUrl } from "../utils/whatsapp";
import PaymentShippingInfo from "./PaymentShippingInfo";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  const scrollTo = (slug) => (e) => {
    if (window.location.pathname !== "/") return;
    e.preventDefault();
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt={BRAND_NAME} className="h-11 w-11 rounded-full" />
              <span className="font-serif text-lg font-semibold text-cream">{BRAND_NAME}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream/55">
              Vitrina digital de mates, bombillas y todo lo que hace falta para
              el ritual matero. Todo se coordina por WhatsApp.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={buildGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/50">
              Categorías
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`/#${cat.slug}`}
                    onClick={scrollTo(cat.slug)}
                    className="transition-colors hover:text-gold-light"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/50">
              Legal
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/politica-de-privacidad" className="transition-colors hover:text-gold-light">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="transition-colors hover:text-gold-light">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="transition-colors hover:text-gold-light">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-cream/50">
              Pagos y envíos
            </h4>
            <div className="[&_*]:border-cream/15 [&_*]:bg-cream/[0.06] [&_*]:text-cream/70 [&_strong]:text-cream">
              <PaymentShippingInfo compact />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          <p>
            © {new Date().getFullYear()} {BRAND_NAME}. Instagram: {INSTAGRAM_HANDLE}
          </p>
          <p className="mt-1">Hecho con cariño matero. Vitrina digital — no procesamos pagos en el sitio.</p>
        </div>
      </div>
    </footer>
  );
}
