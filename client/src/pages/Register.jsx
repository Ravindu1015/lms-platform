import React from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      await register(formData);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return <AuthForm onSubmit={handleRegister} type="register" />;
}

export default Register;
