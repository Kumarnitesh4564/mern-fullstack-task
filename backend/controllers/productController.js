const Product = require('../models/Product');

// ================= CREATE =================
exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    // Validation
    if (!name || !price) {
      return res.status(400).json({ error: "Name and price are required" });
    }

    const product = await Product.create({
      name,
      price,
      image: req.file ? req.file.filename : null
    });

    res.status(201).json(product);

  } catch (err) {
    console.error("CREATE PRODUCT ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// ================= GET ALL =================
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("GET PRODUCTS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// ================= DELETE =================
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    console.error("DELETE PRODUCT ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};