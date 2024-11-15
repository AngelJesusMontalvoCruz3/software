// src/Presupuestos.js
import React from 'react';
import './presupuestos.css';

function Presupuestos() {
  return (
    <div className="presupuestos-container">
      <h1 className="presupuestos-title">Pantalla de Presupuestos</h1>
      <div className="presupuestos-options">
        <div className="presupuesto-card">
          <h2>Crear Presupuesto</h2>
          <p>Configura presupuestos para diferentes categorías de gastos y objetivos financieros.</p>
        </div>
        <div className="presupuesto-card">
          <h2>Seguimiento de Presupuestos</h2>
          <p>Monitorea tu progreso en cada presupuesto y observa cómo tus gastos se ajustan a tu plan.</p>
        </div>
        <div className="presupuesto-card">
          <h2>Editar Presupuesto</h2>
          <p>Ajusta tus presupuestos según tus necesidades y adapta tu plan financiero a cambios inesperados.</p>
        </div>
      </div>
    </div>
  );
}

export default Presupuestos;
