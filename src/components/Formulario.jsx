// src/components/Formulario.jsx
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './formulario.css'; // Asegúrate que esta ruta sea correcta

function Formulario() {
  const [state, handleSubmit] = useForm("xldbdjjw");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [mensajeCheckbox, setMensajeCheckbox] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!aceptaTerminos) {
      setMensajeCheckbox("Mensaje no enviado. Debes aceptar los términos.");
      return;
    }
    handleSubmit(e);
    setMensajeCheckbox("Mensaje enviado exitosamente");
  };

  return (
    <div className="form-container">
      <h2>Contáctanos</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" name="nombre" required />

        <label htmlFor="email">Correo electrónico</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="direccion">Dirección</label>
        <input id="direccion" type="text" name="direccion" required />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" required />
        <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />

        <label>
          <input
            type="checkbox"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
          />
          Acepto los términos y condiciones
        </label>

        {mensajeCheckbox && <p style={{ color: aceptaTerminos ? "green" : "red" }}>{mensajeCheckbox}</p>}

        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
