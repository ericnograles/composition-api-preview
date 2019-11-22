<template>
  <div class="c-home container mx-auto flex">
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

<style lang="scss" scoped>
.c-home {
  flex-direction: column;
  align-items: center;
}
</style>
