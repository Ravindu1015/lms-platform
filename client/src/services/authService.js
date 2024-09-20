import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const login = async (formData) => {
  const response = await axios.post(`${API_URL}/login`, formData);
  localStorage.setItem('token', response.data.token);
};

export const register = async (formData) => {
  await axios.post(`${API_URL}/register`, formData);
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
