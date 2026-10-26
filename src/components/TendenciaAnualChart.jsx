// src/components/TendenciaAnualChart.jsx
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export const TendenciaAnualChart = ({ data }) => (
  <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
    <h3 style={{ marginBottom: '15px', fontSize: '16px', color: '#333' }}>Tendencia Anual de Ingresos y Egresos</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip formatter={(value) => [`Q ${Number(value).toFixed(2)}`, '']} />
        <Legend />
        <Bar dataKey="ingresos" fill="#22c55e" name="Ingresos" />
        <Bar dataKey="egresos" fill="#ef4444" name="Egresos" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);