<template>
  <div
    class="c-meme-table border-solid border-t-2 border-l-2 border-r-2 border-gray-300 rounded"
  >
    <div
      class="c-meme-table__row c-meme-table__row--header border-solid border-b-2 border-gray-300"
    >
      <div class="flex justify-end p-2">
        <a href="#" @click="refresh">Refresh Memes</a>
      </div>
    </div>
    <div
      v-for="meme in items"
      :key="meme.id"
      class="c-meme-table__row c-meme-table__row--item border-solid border-b-2 border-gray-300"
    >
      <div class="flex flex-col justify-center items-start p-2">
        {{ meme.title }}
      </div>
      <div class="flex flex-col justify-center items-start p-2">
        <img class="w-12 h-auto" :src="meme.image" :alt="meme.title" />
      </div>
      <div class="flex flex-col justify-center items-end p-2">
        <a
          href="#"
          class="text-blue-500 hover:text-blue-800"
          @click="tweetMeme(meme)"
        >
          Tweet
        </a>
        <a
          href="#"
          class="text-blue-500 hover:text-blue-800"
          @click="remove(meme.id)"
        >
          Remove
        </a>
      </div>
    </div>
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
  async created() {
    console.log('[MemeTable]: Created')
    await this.list()
  },
  methods: {
    tweetMeme(meme) {
      this.tweet({
        message: `Check out ${meme.title}: ${meme.image}`
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.c-meme-table {
  color: 'navy';
  width: 768px;
}

.c-meme-table__row {
  display: grid;
}

.c-meme-table__row--header {
  grid-template-columns: [controls] 1fr;
}

.c-meme-table__row--item {
  grid-template-columns: [title] 0.5fr [img] 0.2fr [controls] 0.3fr;
}
</style>
