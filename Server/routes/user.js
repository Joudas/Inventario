import {Router} from 'express';
import {UserController} from '../controller/user.js';

export const routerUser = Router();

// routerUser.get('/all', UserController.getAll);
routerUser.post('/register', UserController.register);
routerUser.post('/login', UserController.login);
routerUser.get('/logout', UserController.logout);
