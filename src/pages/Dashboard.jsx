// src/pages/Dashboard.jsx
import { useState } from 'react';
import { PeriodFilter } from '../components/PeriodFilter';
import { DashboardCards } from '../components/DashboardCards';
import { TendenciaAnualChart } from '../components/TendenciaAnualChart';
import { GastosCategoriaChart } from '../components/GastosCategoriaChart';
import { RecentTransactions } from '../components/RecentTransactions';

export default function Dashboard() {
  const [filtros, setFiltros] = useState({
    anio: '2026',
    mes: '10' // Octubre
  });

  const handleFilterChange = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
    console.log("Filtros actualizados:", nuevosFiltros);
  };

  // Datos simulados para las tarjetas KPI
  const datosFinancieros = {
    ingresos: 8500.00,
    egresos: 3200.50,
    anualConsumido: 34200.00
  };

  // Datos de prueba para la gráfica de Tendencia Anual
  const tendenciaAnualMock = [
    { mes: 'Ene', ingresos: 5000, egresos: 3000 },
    { mes: 'Feb', ingresos: 6000, egresos: 3500 },
    { mes: 'Mar', ingresos: 5500, egresos: 2800 },
    { mes: 'Abr', ingresos: 7000, egresos: 4000 },
    { mes: 'May', ingresos: 8000, egresos: 4500 },
    { mes: 'Jun', ingresos: 7500, egresos: 3200 },
    { mes: 'Jul', ingresos: 6500, egresos: 3100 },
    { mes: 'Ago', ingresos: 8200, egresos: 3900 },
    { mes: 'Sep', ingresos: 7800, egresos: 3600 },
    { mes: 'Oct', ingresos: 8500, egresos: 3200 },
    { mes: 'Nov', ingresos: 0, egresos: 0 },
    { mes: 'Dic', ingresos: 0, egresos: 0 }
  ];

  // Datos de prueba para la gráfica de Egresos por Categoría
  const egresosCategoriaMock = [
    { categoria: 'Alimentación', total: 1500 },
    { categoria: 'Transporte', total: 800 },
    { categoria: 'Servicios Básicos', total: 600 },
    { categoria: 'Entretenimiento', total: 300.50 }
  ];

  // Datos simulados de los últimos movimientos recientes (últimos 5)
  const transaccionesRecientesMock = [
    { fecha: '2026-10-24', concepto: 'Salario quincenal', tipo: 'ingreso', monto: 4250.00 },
    { fecha: '2026-10-22', concepto: 'Supermercado La Torre', tipo: 'egreso', monto: 650.50 },
    { fecha: '2026-10-20', concepto: 'Pago de energía eléctrica', tipo: 'egreso', monto: 350.00 },
    { fecha: '2026-10-18', concepto: 'Venta de diseño freelance', tipo: 'ingreso', monto: 1200.00 },
    { fecha: '2026-10-15', concepto: 'Combustible vehículo', tipo: 'egreso', monto: 250.00 }
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Dashboard Principal</h1>
      <p style={{ color: '#6b6375', marginBottom: '20px' }}>
        Resumen financiero correspondiente al periodo: {filtros.mes} / {filtros.anio}
      </p>

      {/* Componente de Selectores de Período */}
      <PeriodFilter 
        anio={filtros.anio} 
        mes={filtros.mes} 
        onChange={handleFilterChange} 
      />

      {/* Tarjetas de Resumen (KPIs) */}
      <DashboardCards 
        ingresos={datosFinancieros.ingresos}
        egresos={datosFinancieros.egresos}
        anualConsumido={datosFinancieros.anualConsumido}
      />

      {/* Contenedor en Grid para las Gráficas de Recharts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <TendenciaAnualChart data={tendenciaAnualMock} />
        <GastosCategoriaChart data={egresosCategoriaMock} />
      </div>

      {/* Tabla de Transacciones Recientes en la parte inferior */}
      <RecentTransactions transactions={transaccionesRecientesMock} />
    </div>
  );
}