// src/components/Skeleton.jsx
export function Skeleton({ height = '20px', width = '100%', count = 1 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            height: height,
            width: width,
            backgroundColor: '#e5e4e7',
            borderRadius: '4px',
            animation: 'pulse 1.5s infinite ease-in-out'
          }}
        />
      ))}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}