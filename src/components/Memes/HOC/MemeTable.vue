<template>
  <memes-provider v-slot="{ state, actions }">
    <div class="c-meme-table">
      <button @click="actions.add">Add</button>
    </div>
  </memes-provider>
</template>

<script>
import Vue from 'vue'
import MemesProvider from './MemesProvider'

export default Vue.extend({
  name: 'MemeTable',
  components: {
    MemesProvider
  },
  data() {
    return {
      pageLoading: false
    }
  },
  created() {
    console.log('[MemeTable]: Created')
  }
})
</script>

<style lang="scss" scoped>
.c-meme-table {
  color: 'navy';
}
</style>
