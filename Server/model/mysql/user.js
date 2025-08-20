import mysql from 'mysql2/promise';
import {CONFIGDB, SALTROUNDS} from '../../config.js';
import bcrypt from 'bcrypt';

const connection = await mysql.createConnection(CONFIGDB);
export class UserModel {
    static async getAll(){
        const result = await connection.query('SELECT name, email FROM users');
        return result;
    }

    static async create(input){
        try {
            const query = 'INSERT INTO users(name, lastname, email, password) VALUES(?, ?, ?, ?)';
            const hashPass = await bcrypt.hash(input.password, SALTROUNDS);
            const values = [input.name, input.lastname, input.email, hashPass];
            const result = await connection.query(query, values);

            return result;        
        } catch (error) {
            // Verifica si el error es de tipo duplicado (código de error 1062 en MySQL)
            if (error.code === 'ER_DUP_ENTRY') {
                // Lanza un error personalizado que el controlador pueda reconocer
                throw new Error('Email duplicado.');
            }
             console.error('Error al insertar el usuario:', error);
            throw error;   
        }
    }
}