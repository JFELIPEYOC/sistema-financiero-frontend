// src/utils/formatters.js

export const formatearQuetzales = (monto) => {
  return new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: 'GTQ',
    minimumFractionDigits: 2
  }).format(monto);
};