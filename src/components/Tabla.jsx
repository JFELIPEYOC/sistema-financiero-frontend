export const Tabla = ({ columns, data }) => {
  return (
    <div style={{ overflowX: 'auto', marginTop: '16px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f3ec', borderBottom: '2px solid #e5e4e7' }}>
            {columns.map((col, index) => (
              <th key={index} style={{ padding: '12px 16px' }}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} style={{ borderBottom: '1px solid #e5e4e7' }}>
                {Object.values(row).map((val, colIndex) => (
                  <td key={colIndex} style={{ padding: '12px 16px' }}>{val}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ padding: '16px', textAlign: 'center', color: '#6b6375' }}>
                No hay registros para mostrar.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};