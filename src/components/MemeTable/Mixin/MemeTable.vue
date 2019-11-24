<template>
  <div class="c-meme-table">
    <button @click="list">
      List Memes
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import MemesMixin from './mixins/MemesMixin'
import TwitterMixin from './mixins/TwitterMixin'

export default Vue.extend({
  name: 'MemeTable',
  mixins: [MemesMixin, TwitterMixin],
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
