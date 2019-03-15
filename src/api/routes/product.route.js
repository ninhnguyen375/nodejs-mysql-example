import express from 'express';
import { getProducts, insertProducts } from '../controllers/product.controller';
const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.post('/', insertProducts);

export default productRouter;
