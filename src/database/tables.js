var players = {
    name: 'Players',
    columns: {
        // Here "Id" is name of column 
        id:{ primaryKey: true, autoIncrement: true },
        name:  { notNull: true, dataType: "string" },
    }
};

export default [players]