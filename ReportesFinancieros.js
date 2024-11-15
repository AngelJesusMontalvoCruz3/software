import React from 'react';
import './ReportesFinancieros.css';


import asets from './fin.png';

function ReportesFinancieros() {
  return (
    <div className="reportes-container">
      <h1>Reportes Financieros</h1>
      <div className="reportes-content">
        <img src={asets} alt="Reportes Financieros" className="report-image" />
        <div className="reportes-text">
          <h2>Resumen del presupuesto</h2>
          <h2>Análisis de gastos</h2>
          <h2>Predicciones de gasto</h2>
        </div>
      </div>
    </div>
  );
}

export default ReportesFinancieros;
