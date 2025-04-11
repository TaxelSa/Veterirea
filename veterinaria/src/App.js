// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Baño from './Baño';
import Inicio from './Inicio';
import Registro from './Registro';
import AgendarCita from './AgendarCita';
import ListaMascotas from './ListaMascotas';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <h2>Menú</h2>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/baño">Baño</Link></li>
            <li><Link to="/mascotas">Mascotas</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/agendarcita">Agendar Cita</Link></li>
            {/*<li><Link to="/consulta">Consulta</Link></li>
            <li><Link to="/esterilizacion">Esterilización</Link></li>
            <li><Link to="/vacuna">Vacuna</Link></li>
           */}
          </ul>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/baño" element={<Baño />} />
            <Route path="/mascotas" element={<ListaMascotas />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/agendarcita" element={<AgendarCita />} />
            {/*<Route path="/consulta" element={<Consulta />} />
            <Route path="/esterilizacion" element={<Esterilizacion />} />
            <Route path="/vacuna" element={<Vacuna />} />*/}
           
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
