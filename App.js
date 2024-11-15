import React, { useState } from 'react';
import './App.css'; 
import Transacciones from './COMPONENTS/Transacciones'; // Import correcto para Transacciones
import ReportesFinancieros from './COMPONENTS/ReportesFinancieros'; // Import correcto para ReportesFinancieros
import Presupuestos from './Presupuestos'; // Import correcto para Presupuestos

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Control del formulario de registro
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState(''); // Estado para el registro de usuario
  const [newPassword, setNewPassword] = useState(''); // Estado para el registro de contraseña
  const [users, setUsers] = useState([{ username: 'admin', password: '1234' }]); // Lista de usuarios registrados

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (users.some((user) => user.username === newUsername)) {
      alert('El usuario ya existe.');
      return;
    }
    setUsers([...users, { username: newUsername, password: newPassword }]);
    alert('Usuario registrado con éxito.');
    setIsRegistering(false); // Cierra el formulario de registro después de registrar el usuario
  };

  return (
    <div className="App">
      {!loggedIn && !isRegistering ? (
        <div className="login-form">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Iniciar Sesión</button>
            <button type="button" onClick={() => setIsRegistering(true)}>
              Registrar Usuario
            </button>
          </form>
        </div>
      ) : !loggedIn && isRegistering ? (
        <div className="register-form">
          <h1>Registrar Usuario</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nuevo Usuario"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Nueva Contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="submit">Registrar</button>
            <button type="button" onClick={() => setIsRegistering(false)}>
              Cancelar
            </button>
          </form>
        </div>
      ) : (
        <div className="main-content">
          <h1>Bienvenido a FinanControl</h1>
          <div className="section">
            <Presupuestos />
          </div>
          <div className="section">
            <Transacciones />
          </div>
          <div className="section">
            <ReportesFinancieros />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;