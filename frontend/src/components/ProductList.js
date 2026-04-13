import React, { useState, useEffect } from 'react';
import { fetchProducts, deleteProduct } from '../services/api';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter(p => p._id !== id));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product._id}>
            <Link to={`/product/${product._id}`}>
                {product.name}
            </Link> - ₹{product.price}

            <button onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;