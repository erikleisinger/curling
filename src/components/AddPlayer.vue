<template>
<div style="padding: 4px;">
    <form @submit.stop.prevent="addPlayer">
    <p>Player name</p>
<input v-model="name" placeholder="Player Name"/>
<button type="submit" :disabled="!name">Add</button>
</form>
</div>
</template>

<script>
export default {
    name: 'DatabaseController',
    data() {
        return {
            name: null,
        }
    },
    methods: {
       async addPlayer() {
            if (!this.name) return;
            const inserted = await this.$database.insert({
                into: 'Players',
                values: [
                    {
                        name: this.name,
                    }
                ]
            })
            if (inserted > 0) this.dispatchAddPlayerEvent();
            this.name = null;
        },
        dispatchAddPlayerEvent() {
            const addPlayerEvent = new CustomEvent('playerAdded')
            window.dispatchEvent(addPlayerEvent)
        }
    }
}
</script>