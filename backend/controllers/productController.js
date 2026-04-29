const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    const product = await Product.create({
      name,
      price,
      image: req.file ? req.file.filename : null
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const { keyword } = req.query;

    let query = {};

    if (keyword) {
      query.name = { $regex: keyword, $options: 'i' };
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        ...(req.file && { image: req.file.filename })
      },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};