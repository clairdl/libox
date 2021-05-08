// Setup
import express from 'express';
import morgan from 'morgan';
import getRoutes from './routes/get/search';

require('dotenv').config();

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
app.listen(port, () => console.log(`Listening on port: ${port}`));
