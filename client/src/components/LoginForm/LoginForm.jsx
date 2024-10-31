import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from "react-router-dom";

function LoginForm({ onSubmit, createAccountPage, createAccountPageOptions }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones simples
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    // Lógica de autenticación
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    
    onSubmit(email, password);

    // Restablecer campos
    setEmail('');
    setPassword('');
    setError('');
  };

  const createAccount = (e) => {
    e.preventDefault();
    navigate(createAccountPage, createAccountPageOptions);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {/* Correo Electrónico */}
        <input
          htmlFor="email"
          className="credentials-input"
          placeholder="Correo electronico"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Contraseña */}
        <input
          htmlFor="password"
          className="credentials-input"
          placeholder="Contraseña"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className='credential'>
          ¿Olvidaste tu contraseña?
          <div className='green-credential'>Recuperar</div>
        </div>

        <div className='credential'>
          ¿No tienes cuenta?
          <div className='green-credential' onClick={createAccount}>Crear cuenta</div>
        </div>

        {/* Mensaje de Error */}
        {error && <p className="error">{error}</p>}

        {/* Botón de Enviar */}
        <button className="accept-button" type="submit">Acceso</button>
      </form>
    </div>
  );
};

export default LoginForm;