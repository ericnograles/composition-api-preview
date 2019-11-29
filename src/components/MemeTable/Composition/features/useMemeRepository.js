import { reactive, onMounted, onUnmounted, toRefs } from '@vue/composition-api'
import { getMemes, addMeme, removeMeme } from '../../mocks/memeRepository'

const list = state => async () => {
  console.log('[useMemeRepository]: list')
  try {
    state.loading = true
    const { items } = await getMemes()
    state.items.value = items
  } catch (err) {
    state.errors.list.value = err
  } finally {
    state.loading = false
  }
}

const add = state => async obj => {
  console.log('[useMemeRepository]: add')
  try {
    state.loading = true
    const { items } = await addMeme(obj)
    state.items.value = items
  } catch (err) {
    state.errors.add.value = err
  } finally {
    state.loading = false
  }
}

const remove = state => async id => {
  console.log('[useMemeRepository]: remove')
  try {
    state.loading = true
    const { items } = await removeMeme(id)
    state.items.value = items
  } catch (err) {
    state.errors.remove.value = err
  } finally {
    state.loading = false
  }
}

export default function useMemeRepository() {
  const state = toRefs(
    reactive({
      items: [],
      errors: {
        add: null,
        remove: null,
        list: null
      },
      loading: false
    })
  )

  onMounted(() => {
    console.log('[useMemeRepository]: onMounted')
  })

  onUnmounted(() => {
    console.log('[useMemeRepository]: onUnmounted')
  })

  return {
    state,
    list: list(state),
    add: add(state),
    remove: remove(state)
  }
}
