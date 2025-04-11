import React, { useState } from "react";
import "./RegistroMascota.css"; // Puedes usar el mismo estilo que usabas en Vue si lo tienes separado

function RegistroMascota() {
  const [mascota, setMascota] = useState("");
  const [razaSeleccionada, setRazaSeleccionada] = useState("");
  const [dueño, setDueño] = useState("");
  const [tamañoSeleccionado, setTamañoSeleccionado] = useState("");
  const [sexoSeleccionado, setSexoSeleccionado] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrarMascota = async (e) => {
    e.preventDefault();

    if (!mascota || !razaSeleccionada || !dueño || !tamañoSeleccionado || !sexoSeleccionado) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    const datos = {
      nombre: mascota,
      raza: razaSeleccionada,
      dueño: dueño,
      tamaño: tamañoSeleccionado,
      sexo: sexoSeleccionado,
    };

    try {
      const respuesta = await fetch("http://localhost/veterirea/veterinaria/php/registro.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      const resultado = await respuesta.json();
      setMensaje(resultado.mensaje || resultado.error);

      if (!resultado.error) {
        setMascota("");
        setRazaSeleccionada("");
        setDueño("");
        setTamañoSeleccionado("");
        setSexoSeleccionado("");
      }
    } catch (error) {
      setMensaje("Error de conexión con el servidor");
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <h2>Clínica y Estética Veterinaria</h2>
      </header>

      <section className="content">
        <h3>Registro de Mascota</h3>
        <form onSubmit={registrarMascota} className="form">
          <label htmlFor="mascota">Nombre de la Mascota:</label>
          <input
            id="mascota"
            type="text"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
            required
          />

          <label htmlFor="dueño">Nombre del Dueño:</label>
          <input
            id="dueño"
            type="text"
            value={dueño}
            onChange={(e) => setDueño(e.target.value)}
            required
          />

          <label>
            Raza:
            <select
              value={razaSeleccionada}
              onChange={(e) => setRazaSeleccionada(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="chihuahua">Chihuahua</option>
              <option value="golden">Golden Retriever</option>
              <option value="labrador">Labrador</option>
              <option value="poodle">Poodle</option>
            </select>
          </label>

          <label>
            Tamaño:
            <select
              value={tamañoSeleccionado}
              onChange={(e) => setTamañoSeleccionado(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="pequeño">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
          </label>

          <label>
            Sexo:
            <select
              value={sexoSeleccionado}
              onChange={(e) => setSexoSeleccionado(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="macho">Macho</option>
              <option value="hembra">Hembra</option>
            </select>
          </label>

          <button type="submit">Registrar</button>
        </form>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>
    </div>
  );
}

export default RegistroMascota;
