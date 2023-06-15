import { DATABASE_NAMES } from "../constants/database";
import {DATA_TYPE} from 'jsstore'

const players = {
    name: DATABASE_NAMES.PLAYERS,
    columns: {
        id:{ primaryKey: true, autoIncrement: true },
        name:  { notNull: true, dataType: DATA_TYPE.String },
    }
};

const shots = {
    name: DATABASE_NAMES.SHOTS,
    columns: {
        id: { primaryKey: true, autoIncrement: true },
        gameId: {dataType: DATA_TYPE.Number}, // Secondary key corresponding to 'game'
        endId: {dataType: DATA_TYPE.Number}, // Secondary key corresponding to 'end'
        playerId: {dataType: DATA_TYPE.Number}, // Secondary key corresponding to 'player'
        shotNo: {dataType: DATA_TYPE.Number}, // 1-16, order of the shot
        endNo: {dataType: DATA_TYPE.Number}, // Which end (1-10)
        score:{dataType: DATA_TYPE.Number}, // 1-5, whether the shot was 'made'
        type: {dataType: DATA_TYPE.String}, // takeout or draw
        position: {dataType: DATA_TYPE.Array}, // x y coordinates of all shots after this one was thrown
    }
}

const ends = {
    name: DATABASE_NAMES.ENDS,
    columns: {
        id: { primaryKey: true, autoIncrement: true },
        gameId: {dataType: DATA_TYPE.Number},
    }
};
const games = {
    name: DATABASE_NAMES.GAMES,
    columns: {
        id: { primaryKey: true, autoIncrement: true },
        name: {dataType: DATA_TYPE.String},
        date: {dataType: DATA_TYPE.DateTime}
    }
}

const teams = {
    name: DATABASE_NAMES.TEAMS,
    columns: {
        id: { primaryKey: true, autoIncrement: true }, 
        color: {dataType: DATA_TYPE.String},
        lead: {dataType: DATA_TYPE.Number}, // Secondary key pointing to id of a 'player'
        second: {dataType: DATA_TYPE.Number},// Secondary key pointing to id of a 'player'
        third:{dataType: DATA_TYPE.Number},// Secondary key pointing to id of a 'player'
        skip: {dataType: DATA_TYPE.Number},// Secondary key pointing to id of a 'player'
    }
}

export default [players, shots, ends, games, teams]