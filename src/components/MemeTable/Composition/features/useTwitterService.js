import { reactive, toRefs } from '@vue/composition-api'
import { getFeed, tweet as postTweet } from '../../mocks/twitterService'

const feed = state => async () => {
  console.log('[useTwitterService]: feed')
  try {
    state.loading = true
    const tweets = await getFeed()
    state.items.value = tweets
  } catch (err) {
    state.errors.feed.value = err
  } finally {
    state.loading = false
  }
}

const tweet = state => async tweetObj => {
  console.log('[useTwitterService]: tweet')
  try {
    state.loading = true
    await postTweet(tweetObj)
  } catch (err) {
    state.errors.tweet.value = err
  } finally {
    state.loading = false
  }
}

export default function useTwitterService() {
  const state = toRefs(
    reactive({
      items: [],
      loading: false,
      errors: {
        feed: null,
        tweet: null
      }
    })
  )

  return {
    state,
    feed: feed(state),
    tweet: tweet(state)
  }
}
