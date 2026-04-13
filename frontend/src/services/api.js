import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchProducts = () => API.get('/products');
export const createProduct = (product) => API.post('/products', product);
export const updateProduct = (id, product) => API.put(`/products/${id}`, product);
export const deleteProduct = (id) => API.delete(`/products/${id}`);