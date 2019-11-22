<template>
  <div class="container mx-auto flex flex-col items-center">
    <img alt="Vue logo" src="../assets/logo.png" class="block object-center" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
