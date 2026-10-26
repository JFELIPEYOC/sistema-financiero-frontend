import { useState } from 'react';
import { MovimientoFormModal } from '../components/MovimientoFormModal';
import { Tabla } from '../components/Tabla';

export default function Ingresos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ingresos, setIngresos] = useState([]);

  // Función que se ejecuta al presionar "Guardar Movimiento" en el modal
  const handleSaveMovimiento = (nuevoMov) => {
    setIngresos((prevList) => [
      ...prevList,
      {
        concepto: nuevoMov.concepto,
        monto: nuevoMov.montoFormateado // Muestra el dinero en Quetzales (Q)
      }
    ]);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Gestión de Ingresos</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{ 
            padding: '10px 18px', 
            background: '#aa3bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: 'bold' 
          }}
        >
          + Registrar Ingreso
        </button>
      </div>

      {/* Si no hay datos, muestra el estado vacío. De lo contrario, muestra la tabla */}
      {ingresos.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#6b6375', background: '#f9f9fb', borderRadius: '8px' }}>
          <p style={{ fontSize: '16px' }}>No hay movimientos de ingresos registrados aún.</p>
          <p style={{ fontSize: '14px', color: '#888' }}>Haz clic en "+ Registrar Ingreso" para agregar uno nuevo.</p>
        </div>
      ) : (
        <Tabla 
          columns={['Concepto', 'Monto']} 
          data={ingresos} 
        />
      )}

      {/* Modal con los Selects Dependientes y Formato en Quetzales */}
      <MovimientoFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveMovimiento} 
      />
    </div>
  );
}