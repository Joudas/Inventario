import { InventaryModal } from '../model/mysql/inventary.js';
import { productSchema, categorySchema, searchInventary } from '../Schema/schema.js';

export class InventaryController{
    //Simplemente es para tener un metodo que se use para verificar verifyToken, aunque no haga nada
    
    static async createInventary(req, res){
        try {
            const validation = productSchema.safeParse(req.body);
            console.log(validation);

            if(!validation.success) return res.status(400).json({error: validation.error.issues});

            const input = validation.data;

            const id = Buffer.from(req.user.id.data);
            if(input.id_category){
                const reference = InventaryController.generateReference(input.id_category);
                input.reference = reference;
            }
            await InventaryModal.createProduct(id, input);

            return res.status(200).json({message: "Producto Creado"});
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getProductByReference(req, res){
        try {
            const validation = searchInventary.safeParse(req.body);
            if(!validation.success) return res.status(400).json({error: validation.error.issues});
            const input = validation.data;
            input.idUser = Buffer.from(req.user.id.data)
            const result = await InventaryModal.getProductByReference(input);
            return res.status(200).json({products: result[0], message: "Productos Encontrados"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async getProduct(req, res){
        try {
            //req.user llega como {id:code}; se descomprime esa data y se pone en formato buffer
            const id = Buffer.from(req.user.id.data)
            const result = await InventaryModal.getProduct(id);
            return res.status(200).json({products: result[0], message: "Productos Encontrados"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async deleteProduct(req, res){
        try{
            const {id} = req.params;
            const result = await InventaryModal.deleteProduct(id);
            return res.status(200).json({message: "Producto Eliminado"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async updateProduct(req, res){

        const validation = productSchema.safeParse(req.body);
        if(!validation.success) return res.status(400).json({error: validation.error.issues});
        try{
            const input = validation.data;
            // console.log(input.id_provider);
            const {id} = req.params;
            await InventaryModal.updateProduct(id, input);
            return res.status(200).json({message: "Producto Actualizada"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async stateProduct(req, res){
        try{
            const {id} = req.params;
            await InventaryModal.stateProduct(id);
            return res.status(200).json({message: "Estado de el producto Cambiado"});
        }catch(error){
            throw error;
        }
    }
    static generateReference(category){
        const number = InventaryController.generateRandomNumber();
        return `${category}${number}`;
    }
    static generateRandomNumber = () => {
        return Math.floor(1000 + Math.random() * 9000);
    };
}