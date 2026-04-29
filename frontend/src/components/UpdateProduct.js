import { useState } from 'react';
import { updateProduct } from '../services/api';

function UpdateProduct({ product, refresh, close }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);

    if (image) {
      formData.append('image', image);
    }

    await updateProduct(product._id, formData);
    refresh();
    close();
  };

  return (
    <form onSubmit={handleUpdate}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button>Save</button>
    </form>
  );
}

export default UpdateProduct;