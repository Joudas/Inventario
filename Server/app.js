import express from 'express';
import {routerUser} from './routes/user.js';
import {routerInventary} from './routes/inventary.js';
import {routerCategory} from './routes/category.js';
import {routerProvider} from './routes/thirdParties.js';
import {routerAuth} from './routes/auth.js';
import {routerPurchase} from './routes/purchase.js';
import {corsMiddleware} from './middlewares/cors.js';
import {verifyToken} from './middlewares/verifyToken.js';
import cookieParser from 'cookie-parser';

const app = express();
app.disable('x-powered-by');
app.use(corsMiddleware());
app.use(express.json());
app.use(cookieParser());
app.use('/user', routerUser);
app.use(verifyToken);
app.use('/auth', routerAuth);
app.use('/inventary', routerInventary);
app.use('/category', routerCategory);
app.use('/provider', routerProvider);
app.use('/purchase', routerPurchase);

const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
    console.log(`OPEN PORT: http://localhost:${PORT}`)
})