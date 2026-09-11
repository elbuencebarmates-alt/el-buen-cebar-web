# El Buen Cebar — Sitio web

Vitrina digital de mates, bombillas, canastas, termos, yerba y accesorios.
No es un e-commerce: se explora el catálogo, se arma un carrito y se envía
todo por WhatsApp en un solo mensaje. Sin login, sin checkout, sin pagos
online.

> **¿Vas a cargar o editar productos?** Mirá [README-PRODUCTOS.md](./README-PRODUCTOS.md) —
> está pensado para alguien sin conocimientos de programación.

## Stack

- React + Vite + Tailwind CSS
- Sitio 100% estático, sin backend
- Catálogo de productos vía Google Sheet publicado como CSV (con respaldo
  local en `src/data/products.fallback.json`)
- Deploy en Vercel

## Desarrollo local

```bash
npm install
npm run dev
```

```bash
npm run build    # build de producción en /dist
npm run preview  # sirve el build de producción localmente
```

## Estructura relevante

```
src/
  components/     Componentes de UI (Navbar, ProductCard, CartDrawer, etc.)
  context/        Estado global: carrito (CartContext) y modal de producto
  pages/          Home + páginas legales
  hooks/          useProducts (fetch del CSV + fallback)
  utils/          whatsapp.js, format.js, normalizeProduct.js
  data/           products.fallback.json (catálogo de respaldo)
  config.js       WhatsApp, Instagram, categorías, URL del CSV publicado
public/
  images/         Fotos de producto, por categoría
  catalogo/       Copia de referencia del CSV original
  logo.png, favicons, og-image.jpg
```

## Configurar el catálogo (Google Sheet)

Ver [README-PRODUCTOS.md](./README-PRODUCTOS.md) para el paso a paso completo.
En resumen: se publica el Google Sheet como CSV y se pega esa URL una única
vez en `src/config.js` → `PRODUCTS_CSV_URL`. Si el fetch falla o la URL está
vacía, el sitio usa automáticamente el catálogo de respaldo.

## Deploy en Vercel

El repo ya incluye `vercel.json` con el rewrite necesario para que las rutas
de React Router (`/politica-de-privacidad`, etc.) funcionen en producción.

1. Importá el repositorio en Vercel.
2. Framework preset: **Vite** (se detecta solo).
3. Deploy. Por ahora queda en un subdominio `*.vercel.app`.

### Conectar el dominio propio (`.com.ar`) más adelante

No hace falta tocar código. Cuando se compre el dominio:

1. Vercel → Project Settings → Domains → agregar el dominio.
2. Apuntar los DNS del dominio según lo que indique Vercel.
3. Actualizar las URLs absolutas hardcodeadas en `index.html` (Open Graph,
   `canonical`) y en `public/robots.txt` / `public/sitemap.xml`, que hoy
   apuntan a `elbuencebar.vercel.app`.

## Qué NO tiene este sitio (a propósito)

Checkout, pagos online, Mercado Pago, login/registro, backend con base de
datos, banner de cookies (no se usa analítica todavía — ver nota al final de
[README-PRODUCTOS.md](./README-PRODUCTOS.md) sobre qué hacer si se agrega en
el futuro).
