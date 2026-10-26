import { useState, useEffect } from 'react';
import api from '../lib/api';
import { Skeleton } from '../components/Skeleton';
import { Tabla } from '../components/Tabla';

export default function Ingresos() {
  const [ingresos, setIngresos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchIngresos = async () => {
    setLoading(true);
    setError(null);
    try {
      // Petición al backend cuando esté listo:
      // const response = await api.get('/ingresos');
      // setIngresos(response.data);

      // Simulación de carga (eliminar setTimeout al conectar backend real)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIngresos([]); // Cambiar por datos para probar cuando los tengas
    } catch (err) {
      setError('Ocurrió un error al cargar los ingresos. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIngresos();
  }, []);

  // 1. Estado: Cargando (Loading con Skeletons)
  if (loading) {
    return (
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Cargando Ingresos...</h2>
        <Skeleton height="35px" count={5} />
      </div>
    );
  }

  // 2. Estado: Error (Con botón de reintento)
  if (error) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#e53e3e' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{error}</p>
        <button 
          onClick={fetchIngresos} 
          style={{ padding: '10px 20px', background: '#aa3bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
        >
          Reintentar
        </button>
      </div>
    );
  }

  // 3. Estado: Lista Vacía (Empty State)
  if (ingresos.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b6375' }}>
        <h2>Gestión de Ingresos</h2>
        <p style={{ marginTop: '20px', fontSize: '16px' }}>No hay movimientos de ingresos registrados para este período.</p>
      </div>
    );
  }

  // Renderizado normal cuando SÍ hay datos
  return (
    <div style={{ padding: '40px' }}>
      <h1>Gestión de Ingresos</h1>
      <Tabla 
        columns={['Fecha', 'Concepto', 'Monto']} 
        data={ingresos} 
      />
    </div>
  );
}