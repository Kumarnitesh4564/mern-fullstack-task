import React, { useState } from 'react';
import { createProduct } from '../services/api';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct(formData);
      alert("Product Added!");
      setFormData({ name: '', price: '' });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />

        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />

        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;