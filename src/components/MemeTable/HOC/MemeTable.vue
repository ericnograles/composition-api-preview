<template>
  <memes-provider v-slot="{ state: memesState, actions: memesActions }">
    <twitter-provider v-slot="{ state: twitterState, actiosn: twitterActions }">
      <div class="c-meme-table">
        <button @click="memesActions.list">
          List Memes
        </button>
      </div>
    </twitter-provider>
  </memes-provider>
</template>

<script>
import Vue from 'vue'
import MemesProvider from './providers/MemesProvider'
import TwitterProvider from './providers/TwitterProvider'

export default Vue.extend({
  name: 'MemeTable',
  components: {
    MemesProvider,
    TwitterProvider
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
