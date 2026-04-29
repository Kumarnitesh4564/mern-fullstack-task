import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams(); // get ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchSingleProduct();
  }, [id]);

  if (!product) return <div>Loading product...</div>;

  return (
    <div>
      <h2>Product Details</h2>
      {product.image && (
        <img
          src={`http://localhost:3000/uploads/${product.image}`}
          alt={product.name}
          style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
        />
      )}
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>ID:</strong> {product._id}</p>
    </div>
  );
}

export default ProductDetail;