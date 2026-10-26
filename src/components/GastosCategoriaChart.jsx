// src/components/GastosCategoriaChart.jsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const GastosCategoriaChart = ({ data }) => (
  <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
    <h3 style={{ marginBottom: '15px', fontSize: '16px', color: '#333' }}>Distribución de Egresos por Categoría</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="total" nameKey="categoria" cx="50%" cy="50%" innerRadius={60} outerRadius={80}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `Q ${Number(value).toFixed(2)}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);