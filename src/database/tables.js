var players = {
    name: 'Players',
    columns: {
        // Here "Id" is name of column 
        id:{ primaryKey: true, autoIncrement: true },
        name:  { notNull: true, dataType: "string" },
    }
};

const shots = {
    name: 'Shots',
    columns: {
        id: { primaryKey: true, autoIncrement: true },
        gameId: {dataType: 'number'},
        endId: {dataType: 'number'},
        playerId: {dataType: 'number'},
        score:{dataType: 'number'},
        type: {dataType: 'string'}, // takeout or draw
        position: {dataType: 'array'},
    }
}

const ends = {
    name: 'Ends',
    columns: {
        id: { primaryKey: true, autoIncrement: true },
        gameId: {dataType: 'number'},
    }
};
const games = {
    name: 'Games',
    columns: {
        id: { primaryKey: true, autoIncrement: true },
    }
}

export default [players, shots, ends, games]