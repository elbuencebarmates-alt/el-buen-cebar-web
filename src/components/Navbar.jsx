import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES, BRAND_NAME } from "../config";
import { useCart } from "../context/CartContext";
import { CartIcon } from "./icons";

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToCategory = (slug) => (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${slug}`);
      return;
    }
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-shadow duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-cream/0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/logo.png"
            alt={BRAND_NAME}
            className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
          />
          <span className="hidden font-serif text-lg font-semibold tracking-tight text-forest xs:inline sm:text-xl">
            {BRAND_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`/#${cat.slug}`}
              onClick={goToCategory(cat.slug)}
              className="text-sm font-medium text-forest/80 transition-colors hover:text-gold-dark"
            >
              {cat.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          aria-label="Abrir carrito"
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream shadow-soft transition-transform active:scale-95 hover:bg-forest-light"
        >
          <CartIcon className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-forest-dark">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
