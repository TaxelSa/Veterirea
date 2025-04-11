import React, { useState } from "react";
import './Bano.css';

function Baño() {
  const [razaSeleccionada, setRazaSeleccionada] = useState("");
  const [costo, setCosto] = useState(null);
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [foto, setFoto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const calcularCosto = async (event) => {
    event.preventDefault();

    if (!razaSeleccionada) {
      setMensaje("Por favor, selecciona una raza.");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("razas", razaSeleccionada);

      const respuesta = await fetch("http://localhost/veterirea/veterinaria/php/control.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const resultado = await respuesta.json();

      if (resultado.error) {
        setMensaje(resultado.error);
        setCosto(null);
        return;
      }

      setCosto(resultado.costo);
      setNombre(resultado.nombre);
      setRaza(resultado.raza);
      setFoto(resultado.foto);
      setMensaje("");
    } catch (error) {
      setMensaje("Error de conexión con el servidor.");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Clínica y Estética Veterinaria</h2>
      </header>

      <main className="contenido">
        <section>
          <h3>Calcula el costo del baño</h3>
          <form onSubmit={calcularCosto}>
            <label htmlFor="razas">Selecciona una raza:</label>
            <select
              id="razas"
              value={razaSeleccionada}
              onChange={(e) => setRazaSeleccionada(e.target.value)}
            >
              <option value="">Seleccionar</option>
              <option value="chihuahua">Chihuahua</option>
              <option value="golden">Golden Retriever</option>
            </select>
            <button type="submit">Calcular</button>
          </form>

          {mensaje && <p className="mensaje">{mensaje}</p>}

          {costo !== null && (
            <div className="resultado">
              <h3>El costo del baño es: ${costo}</h3>
              <h4>Para el perrito: {nombre}</h4>
              <h4>Raza: {raza}</h4>
             
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Baño;