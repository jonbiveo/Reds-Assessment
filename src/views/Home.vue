<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Roster />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Roster from '@/components/Roster.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Roster
  }
}
</script>
