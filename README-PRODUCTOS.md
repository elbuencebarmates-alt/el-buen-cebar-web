# Cómo cargar y editar productos — El Buen Cebar

Esta guía es para la persona que maneja el catálogo, **no hace falta saber
programar**. Todo se hace desde un Google Sheet (como un Excel online).

---

## 1. La idea general

El sitio web lee los productos desde una planilla de Google Sheets. Cuando
vos cambiás un precio, agregás un producto o marcás algo como agotado en la
planilla, **el sitio se actualiza solo** (podés tardar unos minutos en verlo
reflejado, o simplemente recargar la página).

Si por algún motivo la planilla no está disponible o hay un error, el sitio
no se rompe: muestra automáticamente un catálogo de respaldo guardado dentro
del propio sitio (por eso es importante avisar a la persona que programó el
sitio si hacés cambios grandes, para que actualice también ese respaldo de
tanto en tanto).

---

## 2. La primera vez: configurar el Google Sheet

1. Creá una planilla nueva en Google Sheets.
2. En la primera fila, escribí exactamente estos nombres de columna (todo en
   minúscula, sin espacios, en este orden):

   ```
   id | categoria | nombre | precio | descripcion_corta | descripcion_larga | imagen | disponible | variantes
   ```

3. Cargá tus productos, una fila por producto. Mirá la sección "3. Cómo
   completar cada columna" más abajo para saber qué poner en cada una.
4. Andá a **Archivo → Compartir → Publicar en la web**.
5. En el menú desplegable, elegí la hoja correcta y el formato **CSV**.
6. Hacé clic en **Publicar** y confirmá.
7. Google te va a dar un link (una URL larga). **Copiá ese link.**
8. Enviaselo a la persona que mantiene el sitio para que lo pegue una única
   vez en el archivo `src/config.js`, en la línea `PRODUCTS_CSV_URL`. Una
   vez hecho esto, **no hace falta repetir este paso nunca más**: solo
   necesitás volver a "Publicar en la web" si en algún momento heres el link
   deja de funcionar (por ejemplo, si creás una planilla nueva de cero).

---

## 3. Cómo completar cada columna

| Columna | Qué va acá | Ejemplo |
|---|---|---|
| `id` | Un número único para cada producto. No repitas números. | `35` |
| `categoria` | Una de estas 6 palabras exactas, en minúscula: `mates`, `bombillas`, `canastas`, `termos`, `yerba`, `accesorios` | `mates` |
| `nombre` | El nombre del producto tal como se muestra en el sitio | `Mate Torpedo de Algarrobo` |
| `precio` | El precio en pesos, **sin puntos ni el signo $**. Si el producto tiene variantes (ver más abajo), este precio no se usa pero completalo igual con un valor de referencia. | `35000` |
| `descripcion_corta` | Una frase corta que se ve en la tarjeta del producto | `Mate torpedo tallado a mano.` |
| `descripcion_larga` | El texto completo que se ve al abrir el producto | `Mate torpedo de algarrobo macizo, tallado a mano, con virola de alpaca.` |
| `imagen` | El nombre del archivo de la foto (ver sección 4) | `mates/mate-torpedo.jpg` |
| `disponible` | `SI` si hay stock, `NO` si está agotado (igual se sigue mostrando en el sitio, pero con el cartel "Agotado" y sin poder agregarlo al carrito) | `SI` |
| `variantes` | Vacío si el producto no tiene opciones. Ver sección 5 si tiene. | *(vacío)* |

### Cosas importantes para no romper nada

- **No dejes filas vacías en el medio** de la planilla (podés dejar filas
  vacías al final, esas se ignoran solas).
- Si en algún texto (por ejemplo en `descripcion_corta`) necesitás escribir
  una coma, **no hay problema**: Google Sheets se encarga de eso solo al
  publicar como CSV. Vos escribí normal, con comas si hace falta.
- No cambies los nombres de las columnas de la primera fila.

---

## 4. Cómo subir las fotos de los productos

Las fotos **no se suben a Google Drive ni a la planilla**. Se suben directo
a la carpeta del sitio:

1. Guardá la foto del producto en tu computadora (formato `.jpg` o `.png`,
   sin espacios en el nombre — usá guiones, ejemplo: `mate-torpedo.jpg`).
2. Pedile a la persona que mantiene el sitio que la suba a la carpeta
   `/public/images/` **dentro de la subcarpeta de la categoría
   correspondiente**. Por ejemplo, una foto de un mate va en
   `/public/images/mates/mate-torpedo.jpg`.
3. En la columna `imagen` de la planilla, escribí la ruta relativa: para el
   ejemplo anterior sería `mates/mate-torpedo.jpg` (sin `/public/images/`
   adelante, eso ya está implícito).

**Si todavía no tenés la foto real de un producto**, dejá la columna
`imagen` con el nombre que pensás usar a futuro, o dejala vacía. El sitio
muestra automáticamente una imagen genérica de la marca con la leyenda "Foto
próximamente" — no se rompe ni queda una imagen rota.

---

## 5. Productos con variantes (por ejemplo, la Yerba en 500gr y 1kg)

Si un producto tiene distintas opciones con distinto precio (como la yerba,
que viene en 500gr y en 1kg), completá la columna `variantes` con este
formato exacto:

```
nombre1:precio1|nombre2:precio2
```

Por ejemplo, para una yerba que sale $8.000 en 500gr y $12.000 en 1kg:

```
500gr:8000|1kg:12000
```

- Separá cada opción con una barra vertical `|`.
- Separá el nombre de la opción y su precio con dos puntos `:`.
- No pongas espacios, puntos ni el signo `$`.
- Podés tener 2, 3 o más variantes, siempre con el mismo formato.

En el sitio, la persona que compra va a poder elegir la opción antes de
agregarla al carrito, y tanto el precio mostrado como el mensaje de WhatsApp
van a reflejar la opción elegida automáticamente.

---

## 6. Tareas comunes, paso a paso

### Agregar un producto nuevo
1. Andá al final de la planilla y agregá una fila nueva.
2. Completá todas las columnas (ver sección 3).
3. Subí la foto si la tenés (ver sección 4).
4. Listo, no hace falta hacer nada más — ya había quedado publicado el link
   una vez, así que se actualiza solo.

### Cambiar un precio
1. Buscá el producto en la planilla.
2. Editá el número en la columna `precio` (o en `variantes` si tiene
   opciones).
3. Listo.

### Marcar un producto como agotado
1. Buscá el producto.
2. Cambiá la columna `disponible` de `SI` a `NO`.
3. El producto va a seguir viéndose en el sitio, pero con el cartel
   "Agotado" y sin botón para agregarlo al carrito. Cuando vuelva a haber
   stock, volvé a poner `SI`.

### Agregar o editar una variante
1. Buscá el producto en la planilla.
2. Editá la columna `variantes` siguiendo el formato de la sección 5.

### Volver a publicar el Sheet (por si algo dejó de funcionar)
1. Archivo → Compartir → Publicar en la web.
2. Si ya estaba publicado, vas a ver la opción de dejarlo como está o
   volver a publicar — elegí volver a publicar.
3. Si el link cambió, pasáselo a quien mantiene el sitio.

---

## 7. Sobre las políticas legales y las cookies

El sitio tiene 3 páginas legales (Privacidad, Términos y Condiciones,
Cookies) enlazadas desde el pie de página. Por ahora **no usamos ningún
sistema de analítica ni publicidad** (como Google Analytics o Meta Pixel),
así que no hace falta un cartel de cookies.

**Importante:** si en algún momento se agrega Google Analytics, Meta Pixel o
cualquier otra herramienta de seguimiento al sitio, hay que:

1. Sumar un banner de consentimiento de cookies antes de activarla.
2. Actualizar el contenido de `/politica-de-cookies` para reflejar qué datos
   recolecta esa herramienta.

No lo actives sin hacer estos dos pasos antes — es un tema legal, no solo
técnico.

---

## 8. ¿Algo no se ve como esperabas?

- Si un producto no aparece: revisá que la columna `categoria` tenga
  exactamente una de las 6 palabras permitidas, en minúscula.
- Si el precio se ve como "$0": revisá que la columna `precio` tenga solo
  números, sin el signo `$` ni puntos.
- Si una variante no aparece: revisá el formato exacto de la sección 5
  (dos puntos entre nombre y precio, barra vertical entre opciones).
- Si nada de esto funciona, escribile a quien mantiene el sitio pasándole el
  link de la planilla publicada.
