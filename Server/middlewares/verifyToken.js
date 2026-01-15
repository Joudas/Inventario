import jwt from 'jsonwebtoken';
import { KEY_JWT } from '../config.js';

export const verifyToken  = async(req, res, next) => {
    const token = await req.cookies.access_token;
    if(!token) return res.status(401).json({message: 'Falta Iniciar Sección'});
    try {
        const decode = jwt.verify(token, KEY_JWT);
        req.user = { id: decode.id };
        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            console.log('Error en el verifyToken: Token expirado');
            return res.status(401).json({ message: 'Token ha expirado. Por favor, vuelve a iniciar sesión.' });
        } else {
            console.log('Error en el verifyToken: ',error);
            return res.status(401).json({ message: 'Token inválido.' });
        }
    }

}
