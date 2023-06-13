import { Connection } from 'jsstore'
import tables from '../database/tables'
 
export const connection = new Connection(new Worker('src/scripts/jsstore.worker.js'));

export const init = async () => {
    console.log('INIT')
    var dbName ='JsStore_Demo';
    var database = {
        name: dbName,
        tables,
    }
    
    const isDbCreated = await connection.initDb(database);
    if(isDbCreated === true){
        console.log("db created");
        // here you can prefill database with some data
    }
    else {
        console.log("db opened");
        console.log(connection)
    }
    
}