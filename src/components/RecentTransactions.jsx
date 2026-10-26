// src/components/RecentTransactions.jsx
import { useNavigate } from 'react-router-dom';
import { Tabla } from './Tabla';
import { formatearQuetzales } from '../utils/formatters';

export function RecentTransactions({ transactions = [] }) {
  const navigate = useNavigate();

  // Preparamos los datos formateados para la tabla
  const dataFormateada = transactions.map((item) => ({
    fecha: item.fecha,
    concepto: item.concepto,
    tipo: (
      <span style={{ color: item.tipo === 'ingreso' ? '#22c55e' : '#ef4444', fontWeight: 'bold' }}>
        {item.tipo === 'ingreso' ? 'Ingreso' : 'Egreso'}
      </span>
    ),
    monto: (
      <span style={{ color: item.tipo === 'ingreso' ? '#22c55e' : '#ef4444', fontWeight: 'bold' }}>
        {item.tipo === 'ingreso' ? '+' : '-'} {formatearQuetzales(item.monto)}
      </span>
    )
  }));

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#333' }}>Transacciones Recientes</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => navigate('/ingresos')}
            style={{ padding: '6px 12px', background: '#aa3bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}
          >
            + Nuevo Registro
          </button>
        </div>
      </div>

      {transactions.length === 0 ? (
        <p style={{ color: '#6b6375', fontSize: '14px', textAlign: 'center', padding: '20px' }}>
          No hay transacciones recientes registradas en este período.
        </p>
      ) : (
        <Tabla 
          columns={['Fecha', 'Concepto', 'Tipo', 'Monto']} 
          data={dataFormateada} 
        />
      )}
    </div>
  );
}