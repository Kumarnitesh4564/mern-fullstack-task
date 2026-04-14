import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar'; // ✅ ADD THIS
import './App.css'; // ✅ VERY IMPORTANT (CSS not working without this)

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ ADD NAVBAR */}

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;