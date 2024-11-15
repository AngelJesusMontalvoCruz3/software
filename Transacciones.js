import React from 'react';
import './Transacciones.css';

function Transacciones() {
  return (
    <div className="transacciones-container">
      <h1>Pantalla de Transacciones</h1>
      <table className="transacciones-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/01/2024</td>
            <td>Supermercado</td>
            <td>Alimentación</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>02/01/2024</td>
            <td>Cine</td>
            <td>Entretenimiento</td>
            <td>$250</td>
          </tr>
          <tr>
            <td>03/01/2024</td>
            <td>Transporte</td>
            <td>Transporte</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transacciones;
