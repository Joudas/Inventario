import mysql from 'mysql2/promise';
import {CONFIGDB} from '../../config.js';

const connection = await mysql.createConnection(CONFIGDB);
export class InventaryModal {
    static async createProduct(idUser, input){
        try {
            input.price, input.id_category = Number(input.price), Number(input.id_category);
            const query = "INSERT INTO product(id_user, id_category, reference, name, description, price, acount, state) VALUES(?,?,?,?,?,?,?,?)";
            const values = [idUser, input.id_category, input.reference, input.name, input.description, input.price, 0, 1];
            const result = await connection.query(query, values);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getProduct(id){
        try {
            if(id){
                const query = `SELECT p.id,p.reference,p.name,p.description,p.price,p.acount,p.state, p.tax_rate, p.is_tax_exempt,
                c.name AS category_name, c.id AS id_category
                FROM product p
                LEFT JOIN category c 
                ON c.id = p.id_category 
                WHERE p.id_user = ?`;
                const values = [id];
                const result = await connection.query(query, values);
                return result;
            }
        } catch (error) {
            throw error;
        }
    }
    static async getProductByReference(data){
        try {
            if(data){
                let values = [data.idUser];
                let query = `SELECT p.id,p.reference,p.name,p.description,p.price,p.acount,p.state, p.tax_rate,
                c.name AS category_name, c.id AS id_category
                FROM product p
                LEFT JOIN category c 
                ON c.id = p.id_category 
                WHERE p.id_user = ?`;
                if(data.name){
                    query += " AND p.name = ? ";
                    values.push(data.name);
                }
                if(data.reference){
                    query += " AND p.reference = ? ";
                    values.push(data.reference);
                }else if(data.cod){
                    query += " AND p.id = ? ";
                    values.push(data.cod);
                }

                const result = await connection.query(query, values);
                return result;
            }
        } catch (error) {
            throw error;
        }
    }
    static async deleteProduct(id){
        try{
            const query = 'DELETE FROM product where id = ?';
            const values = [id];
            const result = await connection.query(query,values);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async updateProduct(id, input){
        try {
            const query = "UPDATE product SET name = ?, description = ?, id_category = ?, reference = ?, price = ?, acount = ? WHERE id = ?";
            const values = [input.name, input.description, Number(input.id_category), input.reference, input.price, input.acount, id];
            const result = await connection.query(query, values);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async stateProduct(id){
        try{
            const query = 'UPDATE product SET state = NOT state WHERE id = ?';
            const value = [id];
            const result = await connection.query(query,value);
            return result;
        }catch(error){
            throw error;
        }
    }
}