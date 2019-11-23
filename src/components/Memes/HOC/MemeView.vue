<template>
  <div class="c-meme-view">
    TODO: View
  </div>
</template>

<script>
import Vue from 'vue'
import useMemeRepository from './useMemeRepository'

const MemeView = Vue.extend({
  name: 'MemeView',
  data() {
    return {
      pageLoading: false
    }
  },
  methods: {
    add(obj) {
      this.addMeme(obj)
    }
  }
})

const MemeViewWithRepository = useMemeRepository(MemeView)
export default MemeViewWithRepository
</script>
