import express from 'express';
import {routerUser} from './routes/user.js';
import {corsMiddleware} from './middlewares/cors.js';
import cookieParser from 'cookie-parser';


const app = express();
app.disable('x-powered-by');
app.use(corsMiddleware());
app.use(express.json());
app.use(cookieParser());
app.use('/user', routerUser);

const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
    console.log(`OPEN PORT: http://localhost:${PORT}`)
})