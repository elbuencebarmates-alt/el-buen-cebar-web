import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CATEGORIES } from "../config";
import { useProducts } from "../hooks/useProducts";
import Hero from "../components/Hero";
import CategoryChips from "../components/CategoryChips";
import CategoryGrid from "../components/CategoryGrid";
import CategorySection from "../components/CategorySection";
import AboutSection from "../components/AboutSection";
import EngravingBanner from "../components/EngravingBanner";

export default function Home() {
  const { products } = useProducts();
  const location = useLocation();

  const byCategory = useMemo(() => {
    const map = {};
    for (const cat of CATEGORIES) map[cat.slug] = [];
    for (const p of products) {
      if (map[p.categoria]) map[p.categoria].push(p);
    }
    return map;
  }, [products]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <CategoryChips />
      <CategoryGrid />

      {CATEGORIES.map((cat, i) => (
        <CategorySection
          key={cat.slug}
          slug={cat.slug}
          label={cat.label}
          products={byCategory[cat.slug] || []}
          alt={i % 2 === 1}
        />
      ))}

      <AboutSection />
      <EngravingBanner />
    </>
  );
}
