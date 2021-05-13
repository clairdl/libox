// Setup
import express from 'express';
import morgan from 'morgan';
import getRoutes from './routes/get/search';
import dotenv from 'dotenv';

dotenv.config();

// Init
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.set('query parser', 'simple');

// Routes
app.use('/', getRoutes);

// Listen to provided port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
