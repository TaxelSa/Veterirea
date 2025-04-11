import React, { useState, useEffect } from 'react';
import './AgendarCita.css';

const AgendarCita = () => {
  const [formData, setFormData] = useState({
    clave: '',
    servicio: '',
    fecha: '',
    descripcion: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [citas, setCitas] = useState([]);

  // Rutas reales que me diste
  const agendarURL = 'http://localhost/veterirea/veterinaria/php/agendarCita.php';
  const obtenerURL = 'http://localhost/veterirea/veterinaria/php/mostrarCitas.php';

  useEffect(() => {
    obtenerCitas();
  }, []);

  const obtenerCitas = async () => {
    try {
      const response = await fetch(obtenerURL);
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(agendarURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setMensaje(data.mensaje || data.error);
      if (data.mensaje) {
        setFormData({
          clave: '',
          servicio: '',
          fecha: '',
          descripcion: ''
        });
        obtenerCitas(); // Actualiza citas
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setMensaje('❌ Error al conectar con el servidor');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Agendar Cita para Mascota</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="clave"
          value={formData.clave}
          onChange={handleChange}
          placeholder="Clave del Perro"
          className="w-full border border-gray-300 rounded p-2"
          required
        />
        <input
          type="text"
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          placeholder="Servicio"
          className="w-full border border-gray-300 rounded p-2"
          required
        />
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full border border-gray-300 rounded p-2"
          rows="3"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Agendar Cita
        </button>
      </form>

      {mensaje && (
        <div className="mt-4 font-medium text-center text-green-600">{mensaje}</div>
      )}

      {/* Tabla de citas */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Citas Registradas</h3>
        {citas.length === 0 ? (
          <p>No hay citas registradas.</p>
        ) : (
          citas.map((mascota, index) => (
            <div key={index} className="mb-6 border border-gray-300 rounded p-4">
              <h4 className="font-bold">🐶 {mascota.nombre} (Dueño: {mascota.dueño})</h4>
              <table className="w-full mt-2 table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Servicio</th>
                    <th className="border px-4 py-2">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {mascota.citas.map((cita) => (
                    <tr key={cita.id}>
                      <td className="border px-4 py-2 text-center">{cita.id}</td>
                      <td className="border px-4 py-2">{cita.servicio}</td>
                      <td className="border px-4 py-2 text-center">{cita.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AgendarCita;

