<template>
    <div :id="`rock-${index}`" class="rock"/>
</template>
<style scoped>
       .rock {
        position: absolute;
        background-color: black;
        height: 3.41%;
        aspect-ratio: 1/1;
        border-radius: 50%; 
        top: 0;
        left: 0;
        

       }
</style>
<script>
import interact from 'interactjs'
// import {useRockStore} from '../stores/rocks'

// const rockStore = useRockStore();
export default {
    data() {
        return {
            position: { x: 0, y: 0 }
        }
    },
    props: {
        index: Number,
    },
        mounted() {
            const {position} = this;
        interact(`#rock-${this.index}`).draggable({
            listeners: {
                move(event) {
                    position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`

        this.$emit('')
                }
            }
        })
    },
}
</script>