import { CategoryModel } from '../model/mysql/category.js';
import { categorySchema } from '../Schema/schema.js';

export class CategoryController{
    
    static async createCategory(req, res){
        const validation = categorySchema.safeParse(req.body);
        if(!validation.success) return res.status(400).json({error: validation.error.issues});
        try {
            const input = validation.data;
            input.id_user = Buffer.from(req.user.id.data);
            const result = await CategoryModel.createCategory(input);
            return res.status(200).json({message: "Categoria Creada"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async getCategory(req, res){
        try{
            const input = { id_user: Buffer.from(req.user.id.data) };
            const result = await CategoryModel.getCategories(input);
            return res.status(200).json({products: result[0], message: "Categorias Encontradas"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async deleteCategory(req, res){
        try{
            const {id} = req.params;
            const result = await CategoryModel.deleteCategory(id);
            return res.status(200).json({message: "Categoria Eliminada"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async updateCategory(req, res){
        const validation = categorySchema.safeParse(req.body);
        if(!validation.success) return res.status(400).json({error: validation.error.issues});
        try{
            const input = validation.data;
            const {id} = req.params;
            const result = await CategoryModel.updateCategory(id, input);
            return res.status(200).json({message: "Categoria Actualizada"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async stateCategory(req, res){
        try{
            const {id} = req.params;
            const result = await CategoryModel.stateCategory(id);
            return res.status(200).json({message: "Estado de la Categoria Cambiado"});
        }catch(error){
            throw error;
        }
    }
}