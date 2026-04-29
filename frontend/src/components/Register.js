import { useState } from 'react';
import { registerUser } from '../services/api';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({ email, password });

      console.log("REGISTER SUCCESS:", res.data);
      alert("Registration Successful ✅");

    } catch (error) {
      console.error("REGISTER ERROR:", error.response?.data || error.message);

      alert(error.response?.data?.error || "Registration Failed ❌");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
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