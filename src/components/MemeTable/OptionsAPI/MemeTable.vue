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
      v-for="meme in memes"
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
import { tweet } from '../mocks/twitterService'
import { removeMeme, refreshMemes } from '../mocks/memeRepository'

export default Vue.extend({
  name: 'MemeTable',
  data() {
    return {
      memes: [],
      memesLoading: false,
      memeErrors: {
        add: null,
        remove: null,
        list: null,
        refresh: null
      },
      tweets: [],
      tweetsLoading: false,
      tweetErrors: {
        feed: null,
        tweet: null
      }
    }
  },
  async created() {
    console.log('[MemeTable]: Created')
    await this.refresh()
  },
  methods: {
    async refresh() {
      try {
        this.memesLoading = true
        const { items } = await refreshMemes()
        this.memes = items
      } catch (err) {
        this.memeErrors.refresh = err
      } finally {
        this.memesLoading = false
      }
    },
    async remove(id) {
      try {
        this.memesLoading = true
        const { items } = await removeMeme(id)
        this.memes = items
      } catch (err) {
        this.memeErrors.remove = err
      } finally {
        this.memesLoading = true
      }
    },
    async tweetMeme(meme) {
      this.tweetsLoading = true
      try {
        await tweet({
          message: `Check out ${meme.title}: ${meme.image}`
        })
      } catch (err) {
        this.errors.tweet = err
      } finally {
        this.tweetsLoading = false
      }
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
