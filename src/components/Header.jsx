import './Header.css';

function Header({ seccionActual, setSeccionActual }) {
  return (
    <header className="hotel-header">
      <div className="hotel-logo">Hotel Saelandia ✨</div>
      <nav className="hotel-nav">
        <button 
          className={seccionActual === 'inicio' ? 'activo' : ''} 
          onClick={() => setSeccionActual('inicio')}
        >
          Inicio
        </button>
        <button 
          className={seccionActual === 'acerca' ? 'activo' : ''} 
          onClick={() => setSeccionActual('acerca')}
        >
          Acerca de nosotros
        </button>
        <button 
          className={seccionActual === 'reservas' ? 'activo' : ''} 
          onClick={() => setSeccionActual('reservas')}
        >
          Reservas
        </button>
      </nav>
    </header>
  );
}

export default Header;