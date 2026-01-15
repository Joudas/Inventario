import {Router} from 'express';
import { CategoryController } from '../controller/category.js';

export const routerCategory = Router();

routerCategory.get('/get', CategoryController.getCategory);
routerCategory.post('/create', CategoryController.createCategory);
routerCategory.delete('/delete/:id', CategoryController.deleteCategory);
routerCategory.put('/update/:id', CategoryController.updateCategory);
routerCategory.put('/state/:id', CategoryController.stateCategory);
