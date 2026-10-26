// src/components/PeriodFilter.jsx
export const PeriodFilter = ({ anio, mes, onChange }) => {
  const meses = [
    { value: '01', label: 'Enero' }, 
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' }, 
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' }, 
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' }, 
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' }, 
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' }, 
    { value: '12', label: 'Diciembre' }
  ];

  // Genera un rango de años (desde 2024 hasta el año actual 2026)
  const aniosDisponibles = [2024, 2025, 2026];

  return (
    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
      {/* Select de Mes */}
      <select 
        value={mes} 
        onChange={(e) => onChange({ anio, mes: e.target.value })} 
        style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}
      >
        <option value="">Seleccione un mes</option>
        {meses.map(m => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>

      {/* Select de Año */}
      <select 
        value={anio} 
        onChange={(e) => onChange({ anio: e.target.value, mes })} 
        style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}
      >
        <option value="">Seleccione un año</option>
        {aniosDisponibles.map(a => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>
    </div>
  );
};