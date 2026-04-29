import { useState } from 'react';
import { createProduct } from '../services/api';

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
    } catch (err) {
      console.error(err.response?.data);
      alert("Error adding product ❌");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddProduct;