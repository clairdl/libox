// Setup
require("dotenv").config();
const express = require('express');
const morgan = require('morgan');

const getRoutes = require('./routes/get/search.js');

// Init
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', getRoutes);

// Listen to provided port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port: ' + port));