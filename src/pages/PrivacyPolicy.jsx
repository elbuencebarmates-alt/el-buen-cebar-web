import { Link } from "react-router-dom";
import LegalLayout, { LegalSection } from "../components/LegalLayout";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../config";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidad — El Buen Cebar" updated="10 de septiembre de 2026">
      <p>
        En <strong>El Buen Cebar</strong> ("nosotros", "nuestro", "la marca") valoramos
        tu privacidad. Esta Política de Privacidad explica qué información
        recolectamos cuando visitás nuestro sitio web (el "Sitio"), cómo la usamos
        y qué derechos tenés al respecto, de acuerdo con la{" "}
        <strong>Ley N° 25.326 de Protección de los Datos Personales</strong> de la
        República Argentina y sus normas complementarias.
      </p>

      <LegalSection title="1. Responsable del tratamiento de datos">
        <ul className="list-disc pl-5">
          <li>
            <strong>Titular:</strong> El Buen Cebar, emprendimiento unipersonal de
            venta de mates y accesorios, con domicilio en Argentina.
          </li>
          <li>
            <strong>Canal de contacto principal:</strong> WhatsApp +54 9 11 2471-3099
          </li>
          <li>
            <strong>Instagram:</strong>{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gold-dark underline underline-offset-2">
              {INSTAGRAM_HANDLE}
            </a>
          </li>
        </ul>
        <p className="italic text-forest/60">
          El Buen Cebar es un emprendimiento en formación. A medida que se formalice
          ante los organismos correspondientes (ej. inscripción como monotributista
          en AFIP), esta sección se va a actualizar con la razón social, CUIT y
          domicilio fiscal definitivos.
        </p>
      </LegalSection>

      <LegalSection title="2. Qué información recolectamos">
        <p>
          El Sitio funciona como una vitrina digital de productos.{" "}
          <strong>
            No pedimos registro, no creamos cuentas de usuario y no procesamos pagos
            dentro del Sitio.
          </strong>{" "}
          La información que podemos recolectar es:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Datos de navegación</strong>: información técnica básica (tipo
            de navegador, dispositivo, páginas visitadas) recolectada de forma
            automática para que el Sitio funcione correctamente y, si corresponde,
            con fines estadísticos (ver Política de Cookies).
          </li>
          <li>
            <strong>Datos que vos nos brindás voluntariamente por WhatsApp</strong>:
            cuando hacés clic en "Pedir por WhatsApp" o en el botón de contacto, se
            abre una conversación en la aplicación de WhatsApp. Los datos que
            compartas ahí (nombre, número de teléfono, dirección de envío,
            preferencias de productos) quedan sujetos también a la{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark underline underline-offset-2"
            >
              Política de Privacidad de WhatsApp
            </a>
            , ya que esa conversación ocurre fuera de nuestro Sitio.
          </li>
        </ul>
        <p>
          No recolectamos datos sensibles (salud, opiniones políticas, religión,
          etc.) ni datos de menores de edad de forma intencional.
        </p>
      </LegalSection>

      <LegalSection title="3. Para qué usamos tu información">
        <ul className="list-disc pl-5">
          <li>Responder tus consultas y coordinar la venta de productos.</li>
          <li>Coordinar el envío y la forma de pago acordada (transferencia o efectivo).</li>
          <li>Mejorar el funcionamiento y diseño del Sitio.</li>
          <li>Cumplir con obligaciones legales cuando corresponda.</li>
        </ul>
        <p>No vendemos ni cedemos tus datos a terceros con fines comerciales.</p>
      </LegalSection>

      <LegalSection title="4. Dónde se alojan los datos">
        <p>
          El Sitio está alojado en servidores de <strong>Vercel Inc.</strong>, y la
          información de productos se administra en <strong>Google Sheets</strong>{" "}
          (Google LLC). Esto puede implicar que cierta información técnica se
          procese en servidores ubicados fuera de la Argentina. En esos casos,
          dichos proveedores cuentan con sus propias políticas de protección de
          datos, disponibles en sus sitios oficiales.
        </p>
      </LegalSection>

      <LegalSection title="5. Tus derechos (Derechos ARCO)">
        <p>De acuerdo con la Ley 25.326, tenés derecho a:</p>
        <ul className="list-disc pl-5">
          <li><strong>Acceder</strong> a los datos personales que tengamos sobre vos.</li>
          <li><strong>Rectificar</strong> datos inexactos o desactualizados.</li>
          <li><strong>Cancelar/suprimir</strong> tus datos cuando corresponda.</li>
          <li><strong>Oponerte</strong> al tratamiento de tus datos en ciertos casos.</li>
        </ul>
        <p>
          Para ejercer estos derechos, escribinos por WhatsApp al +54 9 11
          2471-3099. La <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>,
          autoridad de control en materia de protección de datos personales, tiene
          la atribución de atender denuncias y reclamos que presenten quienes
          resulten afectados en sus derechos:{" "}
          <a
            href="https://www.argentina.gob.ar/aaip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-dark underline underline-offset-2"
          >
            www.argentina.gob.ar/aaip
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>
          El uso de cookies en el Sitio se detalla en nuestra{" "}
          <Link to="/politica-de-cookies" className="text-gold-dark underline underline-offset-2">
            Política de Cookies
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Cambios a esta política">
        <p>
          Podemos actualizar esta Política de Privacidad ocasionalmente. La fecha
          de "Última actualización" al inicio del documento refleja la versión
          vigente.
        </p>
      </LegalSection>

      <LegalSection title="8. Contacto">
        <p>
          Ante cualquier duda sobre esta política, escribinos por WhatsApp al +54 9
          11 2471-3099.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
