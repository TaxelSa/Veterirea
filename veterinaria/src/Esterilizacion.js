import React, { useState, useEffect } from 'react';

function Esterilizacion() {
  const [perros, setPerros] = useState([]);
  const [perroSeleccionado, setPerroSeleccionado] = useState('');
  const [genero, setGenero] = useState('');
  const [costo, setCosto] = useState(null);
  const [mensaje, setMensaje] = useState('');

  // Función para obtener la lista de perros desde la API
  const obtenerPerros = async () => {
    try {
      const res = await fetch('http://localhost/veterirea/veterinaria/php/mostrarMascotas.php');
      const data = await res.json();
      setPerros(data);
    } catch (err) {
      setMensaje('Error al obtener los perros.');
    }
  };

  // Llamar a obtenerPerros al montar el componente
  useEffect(() => {
    obtenerPerros();
  }, []);

  // Función para calcular el costo de esterilización según el género
  const calcularCosto = (e) => {
    e.preventDefault();
    if (!perroSeleccionado || !genero) {
      setMensaje('Por favor, selecciona un perro y el género.');
      setCosto(null);
      return;
    }

    let costoBase = 0;
    if (genero === 'macho') {
      costoBase = 1200;
    } else if (genero === 'hembra') {
      costoBase = 1000;
    }

    setMensaje('');
    setCosto(costoBase);
  };

  return (
    <div>
      <h2>Costo de Esterilización</h2>
      <form onSubmit={calcularCosto}>
        <label>Selecciona el perro:</label>
        <select
          value={perroSeleccionado}
          onChange={(e) => setPerroSeleccionado(e.target.value)}
        >
          <option value="">Seleccionar perro</option>
          {perros.map((p) => (
            <option key={p.num} value={p.num}>
              {p.nombre} - Dueño: {p.dueño}
            </option>
          ))}
        </select>

        <br />

        <label>Selecciona el género del perro:</label>
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="">Seleccionar género</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>

        <br />
        <button type="submit">Calcular Costo</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
      {costo !== null && <p>Costo estimado de esterilización: ${costo}</p>}
    </div>
  );
}

export default Esterilizacion;
