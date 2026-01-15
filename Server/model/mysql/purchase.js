import mysql from 'mysql2/promise';
import {pool} from '../../config.js';

// const connection = await mysql.createConnection(CONFIGDB);
const connection = await pool.getConnection(); // Obtener conexión para transacciones

export class PurchaseModal {
    static async createGroupPurchases(data){
        try{
            await connection.beginTransaction();
            const query = "INSERT INTO group_purchases (group_name, description, created_at, subtotal, total_tax_amount, total, id_user) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const values = [data.group_name, data.gp_description, new Date(), data.subtotal, data.total_tax_amount, data.total, data.userId];
            const [result ]= await connection.query(query, values);
            await connection.commit();
            return result;
        } catch (error) {
            await connection.rollback(); // Si algo falló, deshacemos todo para no corromper la DB
            throw error;
        } finally {
            connection.release();
        }
    }
    static async registerFullPurchase(data) {
        try {
            await connection.beginTransaction();
            
            // Convertir userId correctamente si viene como Buffer
            let userId = data.userId;

            const [groupResult] = await connection.query(
                "INSERT INTO group_purchases (group_name, gp_description, created_at, subtotal, total_tax_amount, total, id_user) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [data.group_name, data.gp_description, new Date(), data.subtotal, data.total_tax_amount, data.total, userId]
            );
            const newGroupId = groupResult.insertId; // <--- AQUÍ obtienes el ID generado

            const [purchaseResult] = await connection.query(
                "INSERT INTO purchase (date, total_cost, id_user, id_provider, id_group) VALUES (?, ?, ?, ?, ?)",
                [data.date, Number(data.total_cost), userId, Number(data.id_provider), newGroupId]
            );
            const newPurchaseId = purchaseResult.insertId; // <--- AQUÍ obtienes el ID generado

            // PASO 2: Insertar en 'purchase_items'
            await connection.query(
                "INSERT INTO purchase_items (id_purchase, id_product, quantity, unit_cost) VALUES (?, ?, ?, ?)",
                [newPurchaseId, data.id_product, Number(data.quantity), Number(data.cost)]
            );

            // PASO 3: Actualizar el Stock del Producto
            await connection.query(
                "UPDATE product SET acount = acount + ? WHERE id = ?",
                [Number(data.quantity), data.id_product]
            );

            await connection.commit(); // Si todo salió bien, guardamos cambios
        } catch (error) {
            await connection.rollback(); // Si algo falló, deshacemos todo para no corromper la DB
            throw error;
        } finally {
            connection.release();
        }
    }

    static async getPurchases(id){
        try {
            const query = `SELECT pi.id_product, pi.quantity, pi.unit_cost, pro.reference, pro.name , pu.state
            FROM purchase AS pu
            INNER JOIN purchase_items AS pi ON pu.id = pi.id_purchase
            INNER JOIN product AS pro ON pi.id_product = pro.id 
            WHERE pu.id_user = ?`;
            const value = [id];
            const result = await connection.query(query, value);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getGroupPurchases(id){
        try {
            const query = `SELECT gp.group_name, gp.description, DATE_FORMAT(gp.created_at, '%d/%m/%Y') AS date_created, gp.subtotal, gp.total_tax_amount, gp.total
            FROM group_purchases AS gp
            WHERE gp.id_user = ?`;
            const value = [id];
            const result = await connection.query(query, value);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async deletePurchase(id){
        try {
            await connection.beginTransaction();
            
            // PASO 1: Obtener los items de la compra para restar stock
            const [purchaseItems] = await connection.query(
                "SELECT id_product, quantity FROM purchase_items WHERE id_purchase = ?",
                [id]
            );

            // PASO 2: Restar el stock de cada producto
            for (const item of purchaseItems) {
                await connection.query(
                    "UPDATE product SET acount = acount - ? WHERE id = ?",
                    [Number(item.quantity), item.id_product]
                );
            }

            // PASO 3: Eliminar los purchase_items
            await connection.query(
                "DELETE FROM purchase_items WHERE id_purchase = ?",
                [id]
            );

            // PASO 4: Eliminar la purchase
            await connection.query(
                "DELETE FROM purchase WHERE id = ?",
                [id]
            );

            await connection.commit();
            return { success: true, message: 'Compra eliminada correctamente' };
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }
    static async updatePurchase(input){

        try {
            await connection.beginTransaction();
            const [purchaseItems] = await connection.query("SELECT id_product, quantity FROM purchase_items WHERE id_purchase = ?", [input.id]);

            await connection.query("UPDATE purchase_items SET quantity = ?, unit_cost = ? WHERE id_purchase = ?", [Number(input.quantity), Number(input.unit_cost), input.id]);
            
            await connection.query("UPDATE purchase SET total_cost = ?, id_provider = ? WHERE id = ?", [Number(input.total_cost), input.id_provider, input.id]);
            
            await connection.query("UPDATE product SET acount = acount - ? WHERE id = ?", [Number(purchaseItems[0].quantity), purchaseItems[0].id_product]);

            await connection.query("UPDATE product SET acount = acount + ? WHERE id = ?", [Number(input.quantity), purchaseItems[0].id_product]);

            await connection.commit(); // Si todo salió bien, guardamos cambios
        } catch (error) {
            await connection.rollback(); // Si algo falló, deshacemos todo para no corromper la DB
            throw error;
        } finally {
            connection.release();
        }
    }
    static async stateProduct(id){
        try{
            const query = 'UPDATE purchase SET state = NOT state WHERE id = ?';
            const value = [id];
            const result = await connection.query(query,value);
            return result;
        }catch(error){
            throw error;
        }
    }
}