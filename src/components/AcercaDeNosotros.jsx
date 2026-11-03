import './AcercaDeNosotros.css';

function AcercaDeNosotros() {
  return (
    <main className="seccion-acerca">
      <h1>Acerca de Nosotros</h1>
      <p className="descripcion-acerca">
        Hotel Saelandia nació con la idea de brindar una experiencia cálida, hospitalaria y conectada con la calma de la región.
      </p>

      <div className="bloques-acerca">
        <div className="bloque">
          <h2>Nuestra Historia</h2>
          <p>
            Desde 2026 recibimos a turistas, parejas y familias que buscan despejarse de la rutina y disfrutar del aire libre con atención personalizada.
          </p>
        </div>
        <div className="bloque">
          <h2>Compromiso</h2>
          <p>
            Trabajamos con proveedores de la zona y cuidamos los recursos locales para ofrecer un servicio responsable y de calidad.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AcercaDeNosotros;