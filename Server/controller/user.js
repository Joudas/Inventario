import { UserModel } from '../model/mysql/user.js';
import { userSchema, userLoginSchema } from '../Schema/schema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { KEY_JWT } from '../config.js';

export class UserController {
    // static async getAll(req, res){
    //     const users = await UserModel.getAll();
    //     res.json(users);
    // }
    static async register(req, res){
        try {
            const validation = userSchema.safeParse(req.body);
            if(!validation.success) return res.status(400).json({error: validation.error.issues});

            const input = validation.data;

            if(!input.name || !input.email || !input.password) return res.status(400).json({ error: 'Faltan campos' }); 
            
            const result = await UserModel.register(input);
            //Esto debería llegar para un mensaje al momento de crear el usuario
            res.status(201).json({ message: 'Usuario creado exitosamente'});

        } catch (error) {
            //Campos unique duplicados
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ error: error.message }); // 409 Conflict
            }
            console.log('Error internoen el controlador');
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
    static async login(req, res){
        try{
            const validation = userLoginSchema.safeParse(req.body);
            if(!validation.success){
                return res.status(401).json({message: 'Campos invalidos'});
            }
            // Se extrae data del array de validation
            const input = validation.data;
            const result = await UserModel.login(input);

            if(result && await bcrypt.compare(input.password, result.password)){
                const token = jwt.sign({id: result.id}, 
                    KEY_JWT,
                    {
                        expiresIn: '1h'
                    });
                const isProduction = process.env.NODE_ENV === 'production';
                const cookieOptions = {
                    httpOnly: true, // Crucial para seguridad
                    secure: isProduction, // HTTPS en producción, HTTP en desarrollo
                    sameSite: 'lax' // 'lax' es una buena opción para desarrollo
                };
                res.cookie('access_token', token, cookieOptions);
                //.send({token});
                return res.status(200).json({message: 'Usuario Encontrado Exitosamente'}); 
            }
            return res.status(401).json({message:'Usuario Invalido'}); //Unauthorized 401

        } catch (error) {
            console.log('Error en el login: ', error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
    static async logout(req, res) {
        const token = await req.cookies.access_token;
        if(!token)return res.status(401).json({message:'Usuario No Iniciado'});
        
        try {
            //Limpias las cookies del navegador, y solo falta que vuelva a verificar
            res.clearCookie('access_token');
            console.log(token);
            return res.status(200).json({message: 'Sección Cerrada'});
        } catch (error) {
            console.log('Error en el metodo logout: ',error);
            return res.status(500).json({message: 'Error interno del servidor'});
        }
    }

    static async verify(req, res, next) {
        const token = await req.cookies.access_token;
        if(!token) return res.status(401).json({message: 'Falta Iniciar Sección'});
        try {
            const decode = jwt.verify(token, KEY_JWT);
            req.user = decode;
            next();
        } catch (error) {
            console.log('Error en el verify: ',error);
            return res.status(401).json({message: 'Token Invalido'});
        }
    }

}