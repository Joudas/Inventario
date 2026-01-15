import mysql from 'mysql2/promise';
import {CONFIGDB} from '../../config.js';

const connection = await mysql.createConnection(CONFIGDB);
export class ThirdPartiesModel {
    static async createProviders(input){
        try {
            const state=1;
            const query = "INSERT INTO provider(name, email, phone, description, state, id_user) VALUES(?,?,?,?,?,?)";
            const values = [input.name, input.email, input.phone, input.description, 1, input.id_user];
            const result = await connection.query(query, values);
            return result;
        }catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getProviders(id){
        try {
            const query = `SELECT p.id,p.name,p.email,p.phone,p.description,p.state FROM provider as p LEFT JOIN users as u ON p.id_user = u.id WHERE u.id = ?`;
            const values = [id];
            const result = await connection.query(query, values);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async deleteProviders(id){
        try{
            const query = 'DELETE FROM provider where id = ?';
            const values = [id];
            const result = await connection.query(query,values);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async updateProviders(id, input){
        try {
            const query = "UPDATE provider SET name = ?, email = ?, phone = ?, description = ? WHERE id = ?";
            const values = [input.name, input.email, input.phone, input.description, id];
            const result = await connection.query(query, values);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async stateProviders(id){
        try{
            const query = 'UPDATE provider SET state = NOT state WHERE id = ?';
            const value = [id];
            const result = await connection.query(query,value);
            return result;
        }catch(error){
            throw error;
        }
    }
}