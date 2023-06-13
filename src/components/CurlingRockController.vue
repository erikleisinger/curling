<template>
    <div style="height: inherit; width: inherit; position: absolute">
        <button @click="addRock">Hi</button>
        <curling-rock v-for="rock, index in home" :key="`rock-${index}-home`" :index="index"/>
        </div>
</template>

<script>
import CurlingRock from './CurlingRock.vue'
import {useRockStore }from '../stores/rocks'


export default {
    data() {
        return {
            rockStore: useRockStore(),
        }
    },
    methods: {
        addRock() {
            this.rockStore.addRock();
        }
    },
    computed: {
        home() {
            return this.rockStore.home
        }
    },
    components: {
        CurlingRock,
    },

}
</script>