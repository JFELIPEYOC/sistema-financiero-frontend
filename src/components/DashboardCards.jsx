// src/components/DashboardCards.jsx
import { formatearQuetzales } from '../utils/formatters';

export function DashboardCards({ ingresos = 0, egresos = 0, anualConsumido = 0, presupuestoMaximo = 50000 }) {
  const balanceNeto = ingresos - egresos;
  
  // Calcula el porcentaje de la barra de progreso anual (limitado al 100% como máximo visual)
  const porcentajeProgreso = Math.min(Math.round((anualConsumido / presupuestoMaximo) * 100), 100);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
      
      {/* 1. Total Ingresos (Verde) */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #2e7d32', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b6375' }}>Total Ingresos</p>
        <h3 style={{ margin: 0, fontSize: '22px', color: '#2e7d32' }}>{formatearQuetzales(ingresos)}</h3>
      </div>

      {/* 2. Total Egresos (Rojo) */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #c62828', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b6375' }}>Total Egresos</p>
        <h3 style={{ margin: 0, fontSize: '22px', color: '#c62828' }}>{formatearQuetzales(egresos)}</h3>
      </div>

      {/* 3. Balance Neto (Azul / Neutro) */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #1565c0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b6375' }}>Balance Neto</p>
        <h3 style={{ margin: 0, fontSize: '22px', color: balanceNeto >= 0 ? '#1565c0' : '#c62828' }}>
          {formatearQuetzales(balanceNeto)}
        </h3>
      </div>

      {/* 4. Acumulado Anual con Barra de Progreso */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #aa3bff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b6375' }}>Acumulado Anual</p>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#333' }}>
          {formatearQuetzales(anualConsumido)} <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#888' }}>/ {formatearQuetzales(presupuestoMaximo)}</span>
        </h3>
        
        {/* Barra de Progreso */}
        <div style={{ width: '100%', background: '#e5e4e7', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
          <div style={{ width: `${porcentajeProgreso}%`, background: '#aa3bff', height: '100%', transition: 'width 0.3s ease' }} />
        </div>
        <span style={{ fontSize: '11px', color: '#888', marginTop: '4px', display: 'block' }}>{porcentajeProgreso}% consumido</span>
      </div>

    </div>
  );
}