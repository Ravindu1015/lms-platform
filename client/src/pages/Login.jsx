// eslint-disable-next-line no-unused-vars
import React from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      navigate('/profile');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return <AuthForm onSubmit={handleLogin} type="login" />;
}

export default Login;
