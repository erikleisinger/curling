<template>
    <div style="display:flex; width: 100vw; height: 100vh">
        <div style="height: inherit">
            <div style="display:flex; justify-content: space-between">
                <button @click="store.previousShot">{{`<`}}</button> <div><span>End {{end}}</span> <span>Shot {{shot}}</span></div><button @click="store.nextShot">{{`>`}}</button>
            </div>
 <Rings/>
 </div>
<!-- <add-player/> -->
<database-view dbName="Shots" eventName="shotAdded"/>
<div style="position: absolute; right: 0; bottom: 0;">
  <button @click="reset">Reset</button>
</div>

 </div>
</template>
<script setup>
import Rings from './CurlingRings.vue'
// import AddPlayer from './AddPlayer.vue'
import DatabaseView from './DatabaseView.vue'
</script>

<script>
import {useGameStore} from '../stores/game';

export default {
    data() {
        return {
            store: useGameStore(),
        }
    },
  methods: {
   async reset() {
      await this.$database.dropDb();
      window.location.reload()
    }
  },
  computed: {
    end() {
        return this.store.end;
    },
    shot() {
        return this.store.shot;
    }
  }
}
</script>
