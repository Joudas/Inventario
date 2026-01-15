import mysql from 'mysql2/promise';
import {CONFIGDB} from '../../config.js';
import { th } from 'zod/v4/locales';
const connection = await mysql.createConnection(CONFIGDB);
export class CategoryModel{
    static async getCategories(input){
        try {
            const query = "SELECT id, name, description, state FROM category WHERE id_user = ?";
            const values = [input.id_user];
            const result = await connection.query(query, values);
            return result;
        }catch (error) {
            throw error;
        }
    }
    static async createCategory(input){
        try {
            const state=1;
            const query = "INSERT INTO category(name, description, state, id_user) VALUES(?,?,?,?)";
            const values = [input.name, input.description, state, input.id_user];
            const result = await connection.query(query, values);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async deleteCategory(id){
        try {
            const query = "DELETE FROM category WHERE id = ?";
            const values = [id];
            const result = await connection.query(query, values);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async updateCategory(id, input){
        try {
            const query = "UPDATE category SET name = ?, description = ? WHERE id = ?";
            const values = [input.name, input.description, id];
            const result = await connection.query(query, values);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async stateCategory(id){
        try {
            const query = "UPDATE category SET state = NOT state WHERE id = ?";
            const values = [id];
            const result = await connection.query(query, values);
            return result;
        }catch(error){
            throw error;
        }
    }
}