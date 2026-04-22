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

    const payload = {
      ...formData,
      price: parseFloat(formData.price)
    };

    try {
      await createProduct(payload);
      alert("Product Added!");
      setFormData({ name: '', price: '' });
    } catch (error) {
      const message = error.response?.data?.errors?.map(err => err.msg).join(', ') || error.response?.data?.error || error.message;
      console.error("Create product error:", error.response || error);
      alert(`Failed to add product: ${message}`);
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