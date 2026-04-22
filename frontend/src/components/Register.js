import { useState } from 'react';
import { registerUser } from '../services/api';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await registerUser({ email, password });
      localStorage.setItem('token', response.data.token);
      alert("Registration Successful! Now login.");
      setEmail('');
      setPassword('');
      window.location.href = '/login';
    } catch (error) {
        console.error("FULL ERROR:", error.response || error);
        const errorMsg = error.response?.data?.error || error.response?.data?.message || "Registration Failed";
        setError(errorMsg);
        alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;