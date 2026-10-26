import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../lib/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ajusta la ruta del endpoint de registro de tu backend
      // await api.post('/auth/register', form);
      alert('Registro exitoso. Ahora inicia sesión.');
      navigate('/login');
    } catch (err) {
      setError('Error al registrarse. Inténtalo de nuevo.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
        <input type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required style={{ padding: '8px' }} />
        <input type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required style={{ padding: '8px' }} />
        <input type="password" placeholder="Contraseña" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required style={{ padding: '8px' }} />
        <button type="submit" style={{ padding: '10px', background: '#aa3bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Registrarse</button>
      </form>
      <p style={{ marginTop: '15px', textAlign: 'center' }}>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
    </div>
  );
}