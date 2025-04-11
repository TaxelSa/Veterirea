// src/components/Vacuna.js
import React, { useState, useEffect } from 'react';

function Vacuna() {
  const [nombrePerro, setNombrePerro] = useState('');
  const [vacunaSeleccionada, setVacunaSeleccionada] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [perros, setPerros] = useState([]);

  const vacunas = [
    { nombre: 'Vacuna A', costo: 50, duracion: '6 meses' },
    { nombre: 'Vacuna B', costo: 75, duracion: '12 meses' },
    { nombre: 'Vacuna C', costo: 100, duracion: '18 meses' }
  ];

  const obtenerPerros = async () => {
    try {
      const res = await fetch('http://localhost/veterirea/veterinaria/php/mostrarMascotas.php');
      const data = await res.json();
      setPerros(data);
    } catch (error) {
      setMensaje('Error al obtener los perros registrados.');
    }
  };

  useEffect(() => {
    obtenerPerros();
  }, []);

  const registrarConsulta = (e) => {
    e.preventDefault();
    if (!nombrePerro || !vacunaSeleccionada) {
      setMensaje('Por favor, selecciona el nombre del perro y una vacuna.');
      return;
    }
    const vacuna = vacunas.find(v => v.nombre === vacunaSeleccionada);
    setMensaje(`Consulta registrada correctamente para el perro ${nombrePerro}. Has elegido ${vacuna.nombre}, costo: $${vacuna.costo}, duración: ${vacuna.duracion}.`);
  };

  return React.createElement('div', null,
    React.createElement('h2', null, 'Aplicación de Vacuna'),
    React.createElement('form', { onSubmit: registrarConsulta },
      React.createElement('label', { htmlFor: 'nombre' }, 'Selecciona el nombre del perro:'),
      React.createElement('select', {
        id: 'nombre',
        value: nombrePerro,
        onChange: e => setNombrePerro(e.target.value)
      },
        React.createElement('option', { value: '' }, 'Seleccionar perro'),
        perros.map(p => React.createElement('option', { key: p.num, value: p.nombre }, `${p.nombre} (${p.raza}) - Dueño: ${p.dueño}`))
      ),
      React.createElement('label', { htmlFor: 'vacuna' }, 'Selecciona una vacuna:'),
      React.createElement('select', {
        id: 'vacuna',
        value: vacunaSeleccionada || '',
        onChange: e => setVacunaSeleccionada(e.target.value)
      },
        React.createElement('option', { value: '' }, 'Seleccionar vacuna'),
        ...vacunas.map(v => React.createElement('option', {
          key: v.nombre,
          value: v.nombre
        }, `${v.nombre} - $${v.costo} - Duración: ${v.duracion}`))
      ),
      React.createElement('button', { type: 'submit' }, 'Registrar Consulta')
    ),
    mensaje && React.createElement('p', null, mensaje)
  );
}

export default Vacuna;