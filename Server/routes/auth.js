import {Router} from 'express';
import { AuthController } from '../controller/auth.js';

export const routerAuth = Router();

routerAuth.get('/verify', AuthController.verify);