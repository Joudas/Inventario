import { UserModel } from '../model/mysql/user.js';
import { userSchema } from '../Schema/schema.js';

export class UserController {
    static async getAll(req, res){
        const users = await UserModel.getAll();
        res.json(users);
    }
    static async create(req, res){
        try {
            console.log(req.body);
            const validateResult = userSchema.safeParse(req.body);
            if(!validateResult.success) return res.status(400).json({error: validateResult.error.issues});

            const input = validateResult.data;

            if(!input.name || !input.email || !input.password) return res.status(400).json({ error: 'Faltan campos' }); 
            
            const result = await UserModel.create(input);
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

}