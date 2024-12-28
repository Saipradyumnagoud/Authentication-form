const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const EmployeModel = require('./models/Employee');
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employee");

// Routes
app.post('/register', (req, res) => {
  EmployeModel.create(req.body)
  .then(emplyees=>res.json(emplyees))
  .catch(err=>res.json(err))
  // Simulate registration logic
  //res.status(200).json({ message: 'User registered successfully', data: { name, email } });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
