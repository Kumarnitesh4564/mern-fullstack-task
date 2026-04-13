require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());


// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Server start
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});