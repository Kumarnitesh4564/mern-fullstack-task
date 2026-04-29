import React, { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await fetchProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div className="container">
      <h2 className="title">Products</h2>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p._id}>
            
            {p.image && (
              <img
                src={`http://localhost:3000/uploads/${p.image}`}
                alt={p.name}
                className="image"
              />
            )}

            <h3>{p.name}</h3>
            <p className="price">₹{p.price}</p>

            <button onClick={() => handleDelete(p._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;