import mysql from 'mysql2/promise';

export const {
    CONFIGDB = {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '12345',
        database: 'inventary'
    },
    SALTROUNDS = 10,
    KEY_JWT = 'SECRET-KEY_TO-USE-FOR-MY_TOKEN-WHITH__JWT'
} = process.env

// Configuración del pool
// Se recomienda usar variables de entorno (process.env) para las credenciales
export const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345',
    database: 'inventary',  // Nombre de la base de datos
    waitForConnections: true, // Si el pool está lleno, espera a que una se libere
    connectionLimit: 10,     // Número máximo de conexiones simultáneas
    queueLimit: 0,           // Sin límite de peticiones en espera
    enableKeepAlive: true,   // Mantiene las conexiones activas para evitar cierres por inactividad
    keepAliveInitialDelay: 10000
});

/**
 * Explicación de los parámetros:
 * * 1. connectionLimit: Define cuántas conexiones reales puede tener abiertas el app.
 * Si tienes 100 usuarios, no necesitas 100 conexiones, ya que las consultas
 * son tan rápidas que 10 se reparten el trabajo eficientemente.
 * * 2. waitForConnections: Si las 10 conexiones están ocupadas, la petición 11
 * esperará unos milisegundos en lugar de lanzar un error.
 */
