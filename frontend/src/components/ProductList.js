import { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../services/api';
import UpdateProduct from './UpdateProduct';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState(null);

  const loadProducts = async () => {
    const res = await fetchProducts(search);
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, [search]);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div className="container">
      <h2 className="title">Products</h2>

      <input
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "60%", marginBottom: "20px" }}
      />

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p._id}>
            {p.image && (
              <img
                src={`http://localhost:3000/uploads/${p.image}`}
                alt=""
                className="image"
              />
            )}

            {editId === p._id ? (
              <UpdateProduct
                product={p}
                refresh={loadProducts}
                close={() => setEditId(null)}
              />
            ) : (
              <>
                <h3>{p.name}</h3>
                <p className="price">₹{p.price}</p>

                <div className="btn-group">
                  <button onClick={() => setEditId(p._id)}>Update</button>
                  <button onClick={() => handleDelete(p._id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;