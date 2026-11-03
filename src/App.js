import { useState } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import AcercaDeNosotros from './components/AcercaDeNosotros';
import Reservas from './components/Reservas';
import './App.css';

function App() {
  const [seccionActual, setSeccionActual] = useState('inicio');

  return (
    <div className="contenedor-app">
      <Header seccionActual={seccionActual} setSeccionActual={setSeccionActual} />

      {seccionActual === 'inicio' && <Inicio setSeccionActual={setSeccionActual} />}
      {seccionActual === 'acerca' && <AcercaDeNosotros />}
      {seccionActual === 'reservas' && <Reservas />}
    </div>
  );
}

export default App;