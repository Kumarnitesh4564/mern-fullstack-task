import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});


export const fetchProducts = () => API.get('/products');

export const createProduct = (product) => 
  API.post('/products', product);

export const updateProduct = (id, product) => 
  API.put(`/products/${id}`, product);

export const deleteProduct = (id) => 
  API.delete(`/products/${id}`);


export const registerUser = (userData) => 
  API.post('/auth/register', userData);

export const loginUser = (userData) => 
  API.post('/auth/login', userData);