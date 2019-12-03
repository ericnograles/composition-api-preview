import { getFeed, tweet } from '../../mocks/twitterService'

export default {
  name: 'TwitterMixin',
  data() {
    return {
      // items: [],
      tweets: [],
      loading: false,
      errors: {
        feed: null,
        tweet: null
      }
    }
  },
  created() {
    console.log('[TwitterMixin]: Created')
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
    // TODO: Uncomment to show Mixin conflict
    // refresh() {
    //   console.log('[TwitterMixin]: refresh')
    // },
    async feed() {
      console.log('[TwitterMixin]: feed')
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
      console.log('[TwitterMixin]: tweet')
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
}
