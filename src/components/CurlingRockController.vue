<template>
  <div style="height: inherit; width: inherit; position: absolute">
    <button @click="addRock">Hi</button>
    <curling-rock v-for="(rock, index) in rocks" :key="`rock-${index}-home`" :index="index" />
  </div>
</template>

<script>
import CurlingRock from './CurlingRock.vue'
import { useGameStore } from '../stores/game'
import { DATABASE_NAMES } from '../constants/database'

export default {
  data() {
    return {
      gameStore: useGameStore(),
      rocks: []
    }
  },
  computed: {
    end() {
      return this.gameStore.end
    },

    shot() {
      return this.gameStore.shot
    }
  },
  async mounted() {
    const position = await this.getPosition();
    console.log('SHOT: ', position)
    if (position) {
        this.rocks = position;
        return;
    }
    await this.$database.insert({
        into: DATABASE_NAMES.SHOTS,
        values: [{
            gameId: 1,
            position:[...this.rocks],
            score: 0,
            endId: 1,
            playerId: 1,
            shotNo: this.shot,
            type: 'takeout',
            endNo: this.end
        }]

    })


  },
  methods: {
   async  addRock() {
    console.log(this.rocks.length, this.shot)
        if (this.rocks.length >= this.shot) return;
        await this.$database.update({
            in: DATABASE_NAMES.SHOTS,
            where: {
                shotNo: this.shot,
                endNo: this.end,
            },
            set: {
                position: [...this.rocks, {x:0, y:0}]
            }
        })
        this.rocks = await this.getPosition() || [];

    },
    async getPosition() {
const [shot] = await this.$database.select({
        from: DATABASE_NAMES.SHOTS,
        where: {
            endNo: this.end,
            shotNo: this.shot
        }
    });
    const {position} = shot || {};
    return position;
    }
  },
  components: {
    CurlingRock
  }
}
</script>
