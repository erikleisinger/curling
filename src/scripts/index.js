import { Connection } from 'jsstore'
import tables from '../database/tables'
 
export const connection = new Connection(new Worker('src/scripts/jsstore.worker.js'));

export const init = async () => {
    var dbName ='Curling';
    var database = {
        name: dbName,
        tables,
    }
    
    await connection.initDb(database);
}