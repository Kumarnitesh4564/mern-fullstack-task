import React, { useState, useEffect } from 'react';
import { fetchProducts, deleteProduct } from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await fetchProducts();

      // ✅ FIX: backend returns array directly
      setProducts(res.data || []);
    } catch (err) {
      console.error(err);
      setProducts([]); // prevent crash
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div>
      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <div key={p._id}>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>

            {/* ✅ Image */}
            {p.image && (
              <img
                src={`http://localhost:3000/uploads/${p.image}`}
                width="100"
                alt=""
              />
            )}

            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;