import express from 'express';
import {
  getCategories,
  insertCategory
} from '../controllers/category.controller';
const categoryRouter = express.Router();

categoryRouter.get('/', getCategories);
categoryRouter.post('/', insertCategory);

export default categoryRouter;
