import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px 30px', background: '#f4f3ec', borderBottom: '1px solid #e5e4e7', alignItems: 'center' }}>
      <Link to="/dashboard" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#08060d' }}>Dashboard</Link>
      <Link to="/ingresos" style={{ textDecoration: 'none', color: '#6b6375' }}>Ingresos</Link>
      <Link to="/egresos" style={{ textDecoration: 'none', color: '#6b6375' }}>Egresos</Link>
      <button onClick={handleLogout} style={{ marginLeft: 'auto', padding: '6px 12px', cursor: 'pointer' }}>Cerrar Sesión</button>
    </nav>
  );
};