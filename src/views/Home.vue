<template>
  <div class="container mx-auto flex flex-col items-center">
    <img alt="Vue logo" src="../assets/logo.png" class="block object-center" />
    <intro msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro'

export default {
  name: 'home',
  components: {
    Intro
  }
}
</script>
