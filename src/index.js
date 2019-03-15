import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import productRoute from './api/routes/product.route';
import categoryRouter from './api/routes/category.route';

const PORT = process.env.PORT || 3000 || 8080;

// init app express
const app = express();

// setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API route
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRouter);

// Listen on port
app.listen(PORT, () => console.log(`Ready on http://localhost:${PORT}`));
