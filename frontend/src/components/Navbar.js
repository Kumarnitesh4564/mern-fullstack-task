import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/add">Add Product</Link> |{" "}

      {/* ✅ If NOT logged in */}
      {!token ? (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          {/* ✅ If logged in */}
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;