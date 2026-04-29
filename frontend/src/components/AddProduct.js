import { useState } from 'react';
import { createProduct } from '../services/api';
import '../App.css';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image);

    try {
      await createProduct(formData);
      alert("Product Added ✅");

      // reset form
      setName('');
      setPrice('');
      setImage(null);

    } catch (err) {
      console.error(err.response?.data);
      alert("Error adding product ❌");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Add Product</h2>

      <form className="card form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Add Product</button>

      </form>
    </div>
  );
}

export default AddProduct;