<template>
  <div class="c-meme-table">
    <div class="c-meme-table__row c-meme-table__row--header">
      <div />
      <div />
    </div>
    <div
      v-for="meme in memes"
      :key="meme.id"
      class="c-meme-table__row c-meme-table__row--item"
    >
      <div>
        {{ meme.title }}
      </div>
      <div>
        <img :src="meme.image" :alt="meme.title" />
      </div>
      <div>
        TODO: Controls
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
      listMemes: memeRepository.list,
      addMeme: memeRepository.add,
      removeMeme: memeRepository.remove,
      getTwitterFeed: twitterService.feed,
      postTweet: twitterService.tweet
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
}

.c-meme-table__row {
  display: grid;
}

.c-meme-table__row--header {
  grid-template-columns: [controls] 1fr;
}

.c-meme-table__row--item {
  grid-template-columns: [title] 1fr [img] 1fr [controls] 40px;
}
</style>
