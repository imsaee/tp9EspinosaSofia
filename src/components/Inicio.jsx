import './Inicio.css';

function Inicio({ setSeccionActual }) {
  return (
    <main className="seccion-inicio">
      <div className="banner-hotel">
        <h1>Bienvenidos a Hotel Cordillera</h1>
        <p>Tu refugio de descanso y tranquilidad en el norte argentino.</p>
        <button 
          className="btn-reservar-ahora" 
          onClick={() => setSeccionActual('reservas')}
        >
          Ver Habitaciones y Reservar
        </button>
      </div>

      <section className="destacados">
        <div className="item-destacado">
          <h3>Vistas a los Cerros</h3>
          <p>Disfrutá de atardeceres únicos en medio del paisaje natural.</p>
        </div>
        <div className="item-destacado">
          <h3>Desayuno Incluido</h3>
          <p>Variedad regional, cafetería y panificación artesanal cada mañana.</p>
        </div>
        <div className="item-destacado">
          <h3>Wifi y Confort</h3>
          <p>Conexión de alta velocidad y ambientes climatizados.</p>
        </div>
      </section>
    </main>
  );
}

export default Inicio;