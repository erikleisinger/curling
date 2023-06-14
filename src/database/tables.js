import { DATABASE_NAMES } from "../constants/database";

var players = {
    name: DATABASE_NAMES.PLAYERS,
    columns: {
        // Here "Id" is name of column 
        id:{ primaryKey: true, autoIncrement: true },
        name:  { notNull: true, dataType: "string" },
    }
};

const shots = {
    name: DATABASE_NAMES.SHOTS,
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
    name: DATABASE_NAMES.ENDS,
    columns: {
        id: { primaryKey: true, autoIncrement: true },
        gameId: {dataType: 'number'},
    }
};
const games = {
    name: DATABASE_NAMES.GAMES,
    columns: {
        id: { primaryKey: true, autoIncrement: true },
    }
}

export default [players, shots, ends, games]