const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
};

// ================= REGISTER =================
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("REGISTER DATA:", email, password);

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 chars" });
    }

    // Check existing user
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    user = new User({
      email,
      password: hashedPassword
    });

    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      message: "Registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email
      }
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN DATA:", email, password);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = generateToken(user._id);

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email
      }
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};