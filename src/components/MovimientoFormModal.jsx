// src/components/MovimientoFormModal.jsx
import { useState } from 'react';
import { Modal } from './Modal';
import { formatearQuetzales } from '../utils/formatters';

// Categorías de ejemplo (puedes cambiarlas o conectarlas a tu API más adelante)
const categoriasData = [
  { id: '1', nombre: 'Ingresos / Entradas' },
  { id: '2', nombre: 'Gastos / Salidas' }
];

// Subcategorías dependientes según el id de la categoría
const subcategoriasData = {
  '1': [
    { id: '101', nombre: 'Salario' },
    { id: '102', nombre: 'Ventas o Freelance' }
  ],
  '2': [
    { id: '201', nombre: 'Alimentación' },
    { id: '202', nombre: 'Transporte y Combustible' },
    { id: '203', nombre: 'Servicios Básicos (Luz/Agua)' }
  ]
};

export function MovimientoFormModal({ isOpen, onClose, onSave }) {
  const [categoriaId, setCategoriaId] = useState('');
  const [subcategoriaId, setSubcategoriaId] = useState('');
  const [monto, setMonto] = useState('');
  const [concepto, setConcepto] = useState('');

  // Filtra las subcategorías según la categoría seleccionada
  const subcategoriasDisponibles = categoriaId ? subcategoriasData[categoriaId] : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoMovimiento = {
      concepto,
      monto: Number(monto),
      montoFormateado: formatearQuetzales(Number(monto) || 0),
      categoriaId,
      subcategoriaId
    };
    
    onSave(nuevoMovimiento);
    // Limpiar formulario y cerrar
    setCategoriaId('');
    setSubcategoriaId('');
    setMonto('');
    setConcepto('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Registrar Nuevo Movimiento">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        
        {/* Concepto */}
        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px', fontWeight: '500' }}>
          Concepto:
          <input 
            type="text" 
            placeholder="Ej. Compra de supermercado" 
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>

        {/* Monto con vista previa en Quetzales */}
        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px', fontWeight: '500' }}>
          Monto ({monto ? formatearQuetzales(Number(monto)) : 'Q 0.00'}):
          <input 
            type="number" 
            step="0.01" 
            placeholder="0.00" 
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>

        {/* Select de Categoría */}
        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px', fontWeight: '500' }}>
          Categoría:
          <select 
            value={categoriaId} 
            onChange={(e) => {
              setCategoriaId(e.target.value);
              setSubcategoriaId(''); // Resetea la subcategoría al cambiar
            }}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">Seleccione una categoría</option>
            {categoriasData.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.nombre}</option>
            ))}
          </select>
        </label>

        {/* Select de Subcategoría (Dependiente y deshabilitado si no hay categoría) */}
        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px', fontWeight: '500' }}>
          Subcategoría:
          <select 
            value={subcategoriaId} 
            onChange={(e) => setSubcategoriaId(e.target.value)}
            disabled={!categoriaId}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: !categoriaId ? '#f4f3ec' : '#fff' }}
          >
            <option value="">Seleccione una subcategoría</option>
            {subcategoriasDisponibles.map((sub) => (
              <option key={sub.id} value={sub.id}>{sub.nombre}</option>
            ))}
          </select>
        </label>

        {/* Botón Guardar */}
        <button 
          type="submit" 
          style={{ marginTop: '10px', padding: '10px', background: '#aa3bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Guardar Movimiento
        </button>

      </form>
    </Modal>
  );
}