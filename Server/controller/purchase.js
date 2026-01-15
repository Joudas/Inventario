import { PurchaseModal } from '../model/mysql/purchase.js';
import { purchaseSchema, purchaseGroupSchema } from '../Schema/schema.js';

export class PurchaseController{
    //Simplemente es para tener un metodo que se use para verificar verifyToken, aunque no haga nada
    static verify(req, res){
        if(!req.user || !req.user.id){
            console.log("Usuario no identificado");
        }else{
            return res.status(200).json({ message: 'Sesión activa y verificada.' });
        }
        return;
    }
    static async registerPurchase(req, res){
        try {
            const validation = purchaseSchema.safeParse(req.body);

            if(!validation.success) return res.status(400).json({error: validation.error.issues});

            const input = validation.data;

            input.userId = Buffer.from(req.user.id.data);

            input.date = new Date();
            input.total_cost = Number(input.cost) * Number(input.quantity);
            
            await PurchaseModal.registerFullPurchase(input);

            return res.status(200).json({message: "Compra registrada"});
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async createGroupPurchases(req, res){
        try {
            const validation = purchaseGroupSchema.safeParse(req.body);

            if(!validation.success) return res.status(400).json({error: validation.error.issues});

            const input = validation.data;

            input.userId = Buffer.from(req.user.id.data);
            input.subtotal = Number(input.subtotal);
            input.total_tax_amount = Number(input.total_tax_amount);
            input.total = input.subtotal + input.total_tax_amount;
            
            const result = await PurchaseModal.createGroupPurchases(input);
            console.log(result.insertId); // id del grupo creado
            //Ahora debería crear las compras con este id
            
            return res.status(200).json({message: "Compra registrada"});
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    static async getPurchases(req, res){
        try {
            //req.user llega como {id:code}; se descomprime esa data y se pone en formato buffer
            const id = Buffer.from(req.user.id.data)
            const result = await PurchaseModal.getPurchases(id);
            
            return res.status(200).json({products: result[0], message: "Compras Encontrados"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async getGroupPurchases(req, res){
        try {
            const id = Buffer.from(req.user.id.data)
            const result = await PurchaseModal.getGroupPurchases(id);
            return res.status(200).json({products: result[0], message: "Compras Encontrados"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async deletePurchase(req, res){
        try{
            const {id} = req.params;
            const result = await PurchaseModal.deletePurchase(id);
            return res.status(200).json({message: "Compra Eliminado"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async updatePurchase(req, res){

        const validation = purchaseSchema.safeParse(req.body);
        if(!validation.success) return res.status(400).json({error: validation.error.issues});
        try{
            const input = validation.data;
            input.id = req.params.id;
            input.total_cost = Number(input.unit_cost) * Number(input.quantity);
            await PurchaseModal.updatePurchase(input);
            return res.status(200).json({message: "Compra Actualizada"});
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async statePurchase(req, res){
        try{
            const {id} = req.params;
            await PurchaseModal.statePurchase(id);
            return res.status(200).json({message: "Estado de la compra Cambiado"});
        }catch(error){
            throw error;
        }
    }

}