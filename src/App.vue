<script setup>
import Rings from './components/CurlingRings.vue'
import AddPlayer from './components/AddPlayer.vue'
import DatabaseView from './components/DatabaseView.vue'
</script>

<template>
<div style="display:flex; width: 100vw; height: 100vh">
 <Rings/>
<add-player/>
<database-view dbName="Players" eventName="playerAdded"/>

 </div>

</template>
<style >
#app {
  padding: unset;
  margin: unset;
}
</style>
