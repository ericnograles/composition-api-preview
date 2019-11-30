export function getFeed() {
  console.log('[twitterService]: getFeed')
  return []
}

export function tweet(obj) {
  console.group('[twitterService]: tweet')
  console.log(obj)
  console.groupEnd()
}
