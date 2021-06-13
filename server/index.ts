// Setup
import express from 'express';
import morgan from 'morgan';
import getRoutes from './routes/get';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// Init
const app = express();

// Serve static files from CRA
app.use('/', express.static(path.join(__dirname, '..', '..', 'client', 'build')));

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use(getRoutes);

app.get('/*', function (_, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});

// Listen to provided port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
