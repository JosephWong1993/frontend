import mysql from 'mysql2';
import dbConfig from "./dbConfig";

const pool = mysql.createPool({
    host: dbConfig.host,
    port: dbConfig.port,
    database: 'my_db_01',
    user: dbConfig.user,
    password: dbConfig.password
});

export default pool.promise();