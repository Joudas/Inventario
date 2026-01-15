import {Router} from 'express';
import { PurchaseController } from '../controller/purchase.js';

export const routerPurchase = Router();

routerPurchase.post('/register', PurchaseController.registerPurchase);
routerPurchase.post('/createGroup', PurchaseController.createGroupPurchases);
routerPurchase.get('/get', PurchaseController.getPurchases);
routerPurchase.get('/getGroup', PurchaseController.getGroupPurchases);
routerPurchase.delete('/delete/:id', PurchaseController.deletePurchase);
routerPurchase.put('/update/:id', PurchaseController.updatePurchase);
routerPurchase.put('/state/:id', PurchaseController.statePurchase);

