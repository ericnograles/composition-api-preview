<template>
  <div class="c-meme-table">
    <button @click="addMeme">Add</button>
  </div>
</template>

<script>
import Vue from 'vue'
import useMemeRepository from './useMemeRepository'

const MemeTable = Vue.extend({
  name: 'MemeTable',
  props: {
    addMeme: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      pageLoading: false
    }
  },
  created() {
    console.log('[Component]: Created')
  }
})

const MemeTableWithRepository = useMemeRepository(MemeTable)
export default MemeTableWithRepository
</script>

<style lang="scss" scoped>
.c-meme-table {
  color: 'navy';
}
</style>
