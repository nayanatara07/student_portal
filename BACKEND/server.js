const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/userModel');
const authRoutes = require('./routes/authRoutes')

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();
app.use('/api/auth',authRoutes)
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});