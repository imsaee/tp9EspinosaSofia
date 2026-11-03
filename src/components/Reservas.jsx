import { useState } from 'react';
import './Reservas.css';

const habitacionesDisponibles = [
  {
    id: 1,
    nombre: "Habitación Simple",
    descripcion: "Cama individual, baño privado, ventilación natural y escritorio de trabajo.",
    precioPorNoche: "$25.000"
  },
  {
    id: 2,
    nombre: "Habitación Doble Confort",
    descripcion: "Cama matrimonial o dos individuales, vista a los jardines y smart TV.",
    precioPorNoche: "$38.000"
  },
  {
    id: 3,
    nombre: "Suite Presidencial",
    descripcion: "Cama king size, balcón privado hacia los cerros y cafetera express.",
    precioPorNoche: "$52.000"
  },
  {
    id: 4,
    nombre: "Habitación Familiar Superior",
    descripcion: "Espacio amplio para 4 personas con dos ambientes y frigobar.",
    precioPorNoche: "$65.000"
  }
];

function Reservas() {
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(habitacionesDisponibles[0].nombre);
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [huespedes, setHuespedes] = useState("1");

  const manejarReserva = (e) => {
    e.preventDefault();

    if (!fechaEntrada || !fechaSalida) {
      alert("Por favor seleccione ambas fechas (ingreso y egreso).");
      return;
    }

    if (fechaEntrada >= fechaSalida) {
      alert("La fecha de salida debe ser posterior a la fecha de ingreso.");
      return;
    }

    alert(
      `¡Reserva confirmada con éxito!\n\n` +
      `🏨 Habitación: ${habitacionSeleccionada}\n` +
      `📅 Check-in: ${fechaEntrada}\n` +
      `📅 Check-out: ${fechaSalida}\n` +
      `👥 Huéspedes: ${huespedes}`
    );
  };

  return (
    <main className="seccion-reservas">
      <h1>Reservá tu Estadía</h1>
      <p className="subtitulo-reservas">Seleccioná una de nuestras 4 habitaciones y tu rango de fechas.</p>

      {/* Catálogo de 4 Habitaciones */}
      <div className="grilla-habitaciones">
        {habitacionesDisponibles.map((hab) => (
          <div 
            key={hab.id} 
            className={`tarjeta-hab ${habitacionSeleccionada === hab.nombre ? 'seleccionada' : ''}`}
            onClick={() => setHabitacionSeleccionada(hab.nombre)}
          >
            <h3>{hab.nombre}</h3>
            <p>{hab.descripcion}</p>
            <span className="precio">{hab.precioPorNoche} / noche</span>
            <button 
              type="button" 
              className="btn-elegir"
            >
              {habitacionSeleccionada === hab.nombre ? '✓ Seleccionada' : 'Elegir'}
            </button>
          </div>
        ))}
      </div>

      {/* Formulario con rango de fechas y confirmación */}
      <form className="formulario-reserva" onSubmit={manejarReserva}>
        <h2>Detalles de la Reserva</h2>

        <div className="campo">
          <label>Habitación elegida:</label>
          <input type="text" value={habitacionSeleccionada} disabled />
        </div>

        <div className="fila-fechas">
          <div className="campo">
            <label htmlFor="checkin">Fecha de ingreso (Check-in):</label>
            <input 
              id="checkin"
              type="date" 
              value={fechaEntrada} 
              onChange={(e) => setFechaEntrada(e.target.value)} 
              required 
            />
          </div>

          <div className="campo">
            <label htmlFor="checkout">Fecha de egreso (Check-out):</label>
            <input 
              id="checkout"
              type="date" 
              value={fechaSalida} 
              onChange={(e) => setFechaSalida(e.target.value)} 
              required 
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="huespedes">Cantidad de huéspedes:</label>
          <select 
            id="huespedes" 
            value={huespedes} 
            onChange={(e) => setHuespedes(e.target.value)}
          >
            <option value="1">1 huésped</option>
            <option value="2">2 huéspedes</option>
            <option value="3">3 huéspedes</option>
            <option value="4">4 huéspedes</option>
          </select>
        </div>

        <button type="submit" className="btn-confirmar">
          Confirmar Reserva
        </button>
      </form>
    </main>
  );
}

export default Reservas;