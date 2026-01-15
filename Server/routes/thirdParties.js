import {Router} from 'express';
import { ThirdPartiesController } from '../controller/thridParties.js';

export const routerProvider = Router();

routerProvider.post('/create', ThirdPartiesController.createProviders);
routerProvider.get('/get', ThirdPartiesController.getProviders);
routerProvider.delete('/delete/:id', ThirdPartiesController.deleteProviders);
routerProvider.put('/state/:id', ThirdPartiesController.stateProviders);
routerProvider.put('/update/:id', ThirdPartiesController.updateProviders);

