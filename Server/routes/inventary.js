import {Router} from 'express';
import { InventaryController } from '../controller/inventary.js';

export const routerInventary = Router();

routerInventary.get('/get', InventaryController.getProduct);
routerInventary.post('/getByReference', InventaryController.getProductByReference);
routerInventary.post('/create', InventaryController.createInventary);
routerInventary.delete('/delete/:id', InventaryController.deleteProduct);
routerInventary.put('/update/:id', InventaryController.updateProduct);
routerInventary.put('/state/:id', InventaryController.stateProduct);

