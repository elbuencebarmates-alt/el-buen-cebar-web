import LegalLayout, { LegalSection } from "../components/LegalLayout";

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Términos y Condiciones — El Buen Cebar" updated="10 de septiembre de 2026">
      <p>
        Al ingresar y utilizar el sitio web de <strong>El Buen Cebar</strong> (el
        "Sitio"), aceptás los siguientes Términos y Condiciones. Si no estás de
        acuerdo, te pedimos que no utilices el Sitio.
      </p>

      <LegalSection title="1. Naturaleza del Sitio">
        <p>
          Este Sitio funciona <strong>exclusivamente como una vitrina digital de
          productos</strong> (mates, bombillas, canastas, termos, yerba y
          accesorios). <strong>No es una plataforma de comercio electrónico</strong>:
          no permite crear cuentas, no procesa pagos ni concreta ventas dentro del
          Sitio.
        </p>
        <p>
          Toda compra se coordina de manera manual y personalizada a través de{" "}
          <strong>WhatsApp</strong> (+54 9 11 2471-3099), donde se confirma
          disponibilidad, precio final, forma de pago y envío.
        </p>
      </LegalSection>

      <LegalSection title="2. Precios y disponibilidad">
        <ul className="list-disc pl-5">
          <li>
            Los precios publicados en el Sitio están expresados en pesos
            argentinos (ARS) y pueden estar sujetos a cambios sin previo aviso,
            dado que se actualizan de forma manual.
          </li>
          <li>
            El precio y la disponibilidad definitivos de un producto se confirman
            siempre al momento de la consulta por WhatsApp.
          </li>
          <li>
            Nos reservamos el derecho de modificar, discontinuar o dejar de
            ofrecer cualquier producto sin previo aviso.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Formas de pago y envío">
        <ul className="list-disc pl-5">
          <li><strong>Formas de pago aceptadas:</strong> transferencia bancaria y efectivo.</li>
          <li>
            <strong>Envíos:</strong> realizamos envíos a todo el país. Los costos y
            tiempos de envío se coordinan por WhatsApp según el destino.
          </li>
          <li>No se procesa ningún pago dentro del Sitio.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual">
        <p>
          El contenido del Sitio (textos, imágenes de productos, logo, diseño y
          marca "El Buen Cebar") es propiedad del emprendimiento El Buen Cebar o
          se utiliza con la debida autorización. Queda prohibida su reproducción
          total o parcial sin autorización previa por escrito.
        </p>
      </LegalSection>

      <LegalSection title="5. Uso del Sitio">
        <p>
          Te comprometés a utilizar el Sitio de buena fe y a no realizar acciones
          que puedan dañar, sobrecargar o afectar su normal funcionamiento.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitación de responsabilidad">
        <p>
          El Sitio se ofrece "tal cual". Si bien procuramos que la información de
          productos, precios e imágenes sea precisa, puede haber demoras en la
          actualización. La confirmación final de cualquier compra se realiza
          siempre por WhatsApp antes de concretarse.
        </p>
      </LegalSection>

      <LegalSection title="7. Enlaces a terceros">
        <p>
          El Sitio incluye enlaces a WhatsApp e Instagram. No somos responsables
          por el contenido o las políticas de privacidad de esos servicios de
          terceros.
        </p>
      </LegalSection>

      <LegalSection title="8. Ley aplicable y jurisdicción">
        <p>
          Estos Términos y Condiciones se rigen por las leyes de la{" "}
          <strong>República Argentina</strong>. Cualquier controversia derivada del
          uso del Sitio se someterá a los tribunales ordinarios competentes que
          correspondan según el domicilio del consumidor, de acuerdo con la Ley de
          Defensa del Consumidor N° 24.240.
        </p>
      </LegalSection>

      <LegalSection title="9. Contacto">
        <p>
          Ante cualquier consulta sobre estos Términos, escribinos por WhatsApp al
          +54 9 11 2471-3099.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
