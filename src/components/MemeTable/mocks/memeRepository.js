import memes from './memes'
let items = memes

export function getMemes() {
  return { items: memes }
}

export function addMeme(obj) {
  items = items.concat(obj)
  return { items }
}

export function removeMeme(id) {
  items = items.filter(item => item.id !== id)
  return { items }
}
