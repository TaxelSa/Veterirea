import React, { useEffect, useState } from 'react';
import './ListaMascotas.css';

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetch('http://localhost/veterirea/veterinaria/php/mostrarMascotas.php')
      .then((res) => res.json())
      .then((data) => setMascotas(data))
      .catch((error) => console.error('Error al obtener mascotas:', error));
  }, []);

  return (
    <div className="lista-mascotas-container">
      <h2>🐶 Mascotas Registradas</h2>
      {mascotas.length === 0 ? (
        <p>No hay mascotas registradas.</p>
      ) : (
        <table className="tabla-mascotas">
          <thead>
            <tr>
              <th>Clave</th>
              <th>Nombre</th>
              <th>Raza</th>
              <th>Dueño</th>
              <th>Tamaño</th>
              <th>Sexo</th>
            </tr>
          </thead>
          <tbody>
            {mascotas.map((mascota) => (
              <tr key={mascota.clave}>
                <td>{mascota.clave}</td>
                <td>{mascota.nombre}</td>
                <td>{mascota.raza}</td>
                <td>{mascota.dueño}</td>
                <td>{mascota.tamano}</td>
                <td>{mascota.sexo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaMascotas;

