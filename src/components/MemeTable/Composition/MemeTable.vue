<template>
  <div
    class="c-meme-table border-solid border-t-2 border-l-2 border-r-2 border-gray-300 rounded"
  >
    <div
      class="c-meme-table__row c-meme-table__row--header border-solid border-b-2 border-gray-300"
    >
      <div class="flex justify-end p-2">
        <a href="#" @click="refreshMemes">Refresh Memes</a>
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
          @click="removeMeme(meme.id)"
        >
          Remove
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, onUnmounted } from '@vue/composition-api'
import { createComponent } from '@vue/composition-api'
import useMemeRepository from './features/useMemeRepository'
import useTwitterService from './features/useTwitterService'

export default createComponent({
  name: 'MemeTable',
  setup() {
    const state = reactive({
      pageLoading: false
    })

    const memeRepository = useMemeRepository()
    const twitterService = useTwitterService()

    onMounted(() => {
      console.log('[MemeTable]: onMounted')
    })

    onUnmounted(() => {
      console.log('[MemeTable]: onUnmounted')
    })

    return {
      state,
      memes: memeRepository.state.items,
      memesLoading: memeRepository.state.loading,
      tweets: twitterService.state.items,
      tweetsLoading: twitterService.state.loading,
      refreshMemes: memeRepository.refresh,
      listMemes: memeRepository.list,
      addMeme: memeRepository.add,
      removeMeme: memeRepository.remove,
      getTwitterFeed: twitterService.feed,
      postTweet: twitterService.tweet
    }
  },
  methods: {
    tweetMeme(meme) {
      this.postTweet({
        message: `Check out ${meme.title}: ${meme.image}`
      })
    }
  },
  async created() {
    console.log('[MemeTable]: Created')
    this.pageLoading = true
    await this.listMemes()
    this.pageLoading = false
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
