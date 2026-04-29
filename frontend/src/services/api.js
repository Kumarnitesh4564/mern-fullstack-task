import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// ✅ Attach token to EVERY request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// AUTH
export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);

// PRODUCTS
export const fetchProducts = () => API.get('/products');

export const createProduct = (data) =>
  API.post('/products', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

// 🔥 FORCE TOKEN (THIS FIXES YOUR ISSUE)
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });