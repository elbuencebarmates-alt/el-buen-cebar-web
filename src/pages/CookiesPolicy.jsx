import LegalLayout, { LegalSection } from "../components/LegalLayout";

export default function CookiesPolicy() {
  return (
    <LegalLayout title="Política de Cookies — El Buen Cebar" updated="10 de septiembre de 2026">
      <LegalSection title="¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos de texto que un sitio web guarda en tu
          navegador para recordar información sobre tu visita.
        </p>
      </LegalSection>

      <LegalSection title="Cookies que usamos actualmente">
        <ul className="list-disc pl-5">
          <li>
            <strong>Cookies técnicas / necesarias</strong>: usamos almacenamiento
            local del navegador (localStorage) para recordar los productos que
            agregaste al carrito entre visitas. No se trata de una cookie de
            seguimiento: la información queda únicamente en tu dispositivo,
            nosotros no accedemos a ella, y se borra si limpiás los datos del
            navegador.
          </li>
          <li>
            <strong>[Solo si corresponde] Cookies de análisis/publicidad</strong>:
            si en el futuro incorporamos herramientas como Google Analytics o Meta
            Pixel para entender cómo se usa el Sitio o para mostrar anuncios en
            redes sociales, lo vamos a informar acá, detallando qué datos
            recolecta cada herramienta y ofreciendo un botón para aceptar o
            rechazar su uso antes de que se activen.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Cómo gestionar las cookies">
        <p>
          Podés borrar o bloquear las cookies y el almacenamiento local desde la
          configuración de tu navegador. Tené en cuenta que si bloqueás el
          almacenamiento local, el carrito de compras no va a recordar tus
          productos entre visitas.
        </p>
      </LegalSection>

      <LegalSection title="Contacto">
        <p>
          Ante cualquier consulta sobre esta política, escribinos por WhatsApp al
          +54 9 11 2471-3099.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
