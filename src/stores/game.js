import { defineStore } from 'pinia'

const defaultState = () => {
  return {
    end: 1,
    shot: 1,
    hammer: 1, // Team 1 or team 2
  }
}

export const useGameStore = defineStore('game', {
    state: () => {
      return {
        ...defaultState()
      }
    },
    actions: {
      nextShot() {
        if (this.shot === 16) {
          this.shot = 1; 
          this.end ++
        } else {
          this.shot ++
        }
      },
      previousShot() {
        if (this.shot === 1 && this.end === 1) return
        if (this.shot === 1) {
          this.shot = 16
          this.end --
        } else {
          this.shot --
        }
      },
      resetGame() {
        Object.assign(this, defaultState())
      },
    },
    getters: {

    }
  })