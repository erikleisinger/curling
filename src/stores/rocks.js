import { defineStore } from 'pinia'

const shot = {
  id: 3,
  positions: [
    {
      id: 'a1',
      pos: {x: 0, y:0}
    },
    {
      id: 'b1',
      pos: {x: 50, y:20}
    },
  ],
  score: 4,
};

const rockMap = [
  {
    i: 0,
    team: 0,
    pos: {x: 0, y:0}
  },
  {
    i: 0,
    team: 1,
    pos: {x: 10, y:10}
  },
];

export const useRockStore = defineStore('rocks', {
  state: () => {
    return {
      home: [],
      away: [],
      game: {
        name: 'NameOfTheGameFile',
        teams: [

        ],
        players: {
          team1: {
            lead: {},
            second: {},
            third: {},
            skip: {},
          },
          team2: {
            lead: {},
            second: {},
            third: {},
            skip: {},
          },
        },
        game: {

        },
        ends: [],
        score: 0,


      }
    }
  },
  actions: {
    addRock() {
      this.home.push({x:0, y:0})
    }
  },
  getters: {
    getRock: (state) => {
      return (index) => state.home[index]
    }
  }
})
