// Convierte una fila cruda (del CSV publicado o del JSON de respaldo) en un
// objeto de producto con forma consistente para toda la app.
export function parseVariantes(raw) {
  const value = (raw ?? "").toString().trim();
  if (!value) return [];
  return value
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [nombre, precio] = part.split(":");
      return {
        nombre: (nombre ?? "").trim(),
        precio: Number((precio ?? "0").trim()) || 0,
      };
    })
    .filter((v) => v.nombre);
}

export function normalizeRow(row) {
  const id = (row.id ?? "").toString().trim();
  const categoria = (row.categoria ?? "").toString().trim().toLowerCase();
  const nombre = (row.nombre ?? "").toString().trim();

  // Fila vacía o incompleta: se descarta silenciosamente.
  if (!id || !categoria || !nombre) return null;

  const variantes =
    Array.isArray(row.variantes) ? row.variantes : parseVariantes(row.variantes);

  const disponibleRaw = (row.disponible ?? "").toString().trim().toUpperCase();
  const disponible =
    typeof row.disponible === "boolean" ? row.disponible : disponibleRaw === "SI";

  return {
    id,
    categoria,
    nombre,
    precio: Number(row.precio) || 0,
    descripcion_corta: (row.descripcion_corta ?? "").toString().trim(),
    descripcion_larga: (row.descripcion_larga ?? "").toString().trim(),
    imagen: (row.imagen ?? "").toString().trim(),
    disponible,
    variantes,
  };
}

export function normalizeRows(rows) {
  return rows.map(normalizeRow).filter(Boolean);
}
