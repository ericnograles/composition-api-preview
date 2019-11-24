<template>
  <div>
    <slot :state="state" :actions="actions" />
  </div>
</template>

<script>
import Vue from 'vue'
import { getFeed, tweet } from '../mocks/twitterService'

export default Vue.extend({
  name: 'TwitterProvider',
  data() {
    return {
      tweets: [],
      loading: false,
      errors: {
        feed: null,
        tweet: null
      }
    }
  },
  created() {
    console.log('[TwitterProvider]: Created')
  },
  computed: {
    state() {
      return {
        tweets: this.tweets,
        loading: this.loading
      }
    },
    actions() {
      return {
        list: this.list,
        add: this.add,
        remove: this.remove
      }
    }
  },
  methods: {
    async feed() {
      console.log('[TwitterProvider]: feed')
      try {
        this.loading = true
        const tweets = await getFeed()
        this.tweets = tweets
      } catch (err) {
        this.errors.feed = err
      } finally {
        this.loading = false
      }
    },
    async tweet(tweetObj) {
      console.log('[TwitterProvider]: tweet')
      try {
        this.loading = true
        await tweet(tweetObj)
      } catch (err) {
        this.errors.tweet = err
      } finally {
        this.loading = false
      }
    }
  }
})
</script>
