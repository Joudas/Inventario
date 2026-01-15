import { ThirdPartiesModel } from '../model/mysql/thirdParties.js';
import { providerSchema } from '../Schema/schema.js';

export class ThirdPartiesController{
    static async getProviders(req, res){
        try {
            const id = Buffer.from(req.user.id.data)
            const result = await ThirdPartiesModel.getProviders(id);
            return res.status(200).json({provider: result[0], message: "Proveedores Encontrados"});
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async createProviders(req, res){
            const validation = providerSchema.safeParse(req.body);
            if(!validation.success) return res.status(400).json({error: validation.error.issues});
            try {
                const input = validation.data;
                const id = Buffer.from(req.user.id.data);
                input.id_user = id;
                await ThirdPartiesModel.createProviders(input);
                return res.status(200).json({message: "Proveedor Creado"});
            }catch(error){
                console.log(error);
                throw error;
            }
        }
        // static async getProviders(req, res){
        //     try{
        //         const result = await ThirdPartiesModel.getProviders();
        //         return res.status(200).json({provider: result[0], message: "Proveedor Encontradas"});
        //     }catch(error){
        //         console.log(error);
        //         throw error;
        //     }
        // }
        static async deleteProviders(req, res){
            try{
                const {id} = req.params;
                await ThirdPartiesModel.deleteProviders(id);
                return res.status(200).json({message: "Proveedor Eliminado"});
            }catch(error){
                console.log(error);
                throw error;
            }
        }
        static async updateProviders(req, res){
            const validation = providerSchema.safeParse(req.body);
            if(!validation.success) return res.status(400).json({error: validation.error.issues});
            try{
                const input = validation.data;
                const {id} = req.params;
                await ThirdPartiesModel.updateProviders(id, input);
                return res.status(200).json({message: "Proveedor Actualizado"});
            }catch(error){
                console.log(error);
                throw error;
            }
        }
        static async stateProviders(req, res){
            try{
                const {id} = req.params;
                await ThirdPartiesModel.stateProviders(id);
                return res.status(200).json({message: "Estado de el Proveedor Actualizado"});
            }catch(error){
                throw error;
            }
        }
}
