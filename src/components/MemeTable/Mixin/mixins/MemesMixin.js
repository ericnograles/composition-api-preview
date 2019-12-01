import {
  getMemes,
  addMeme,
  removeMeme,
  refreshMemes
} from '../../mocks/memeRepository'

export default {
  name: 'MemesMixin',
  data() {
    return {
      items: [],
      errors: {
        add: null,
        remove: null,
        list: null,
        refresh: null
      },
      loading: false
    }
  },
  created() {
    console.log('[MemesMixin]: Created')
  },
  computed: {
    state() {
      return {
        items: this.items,
        errors: this.errors,
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
    async refresh() {
      console.log('[MemesMixin]: refresh')
      try {
        this.loading = true
        const { items } = await refreshMemes()
        this.items = items
      } catch (err) {
        this.errors.refresh = err
      } finally {
        this.loading = false
      }
    },
    async list() {
      console.log('[MemesMixin]: list')
      try {
        this.loading = true
        const { items } = await getMemes()
        this.items = items
      } catch (err) {
        this.errors.list = err
      } finally {
        this.loading = false
      }
    },
    async add(obj) {
      console.log('[MemesMixin]: add')
      try {
        this.loading = true
        const { items } = await addMeme(obj)
        this.items = items
      } catch (err) {
        this.errors.add = err
      } finally {
        this.loading = false
      }
    },
    async remove(id) {
      console.log('[MemesMixin]: remove')
      try {
        this.loading = true
        const { items } = await removeMeme(id)
        this.items = items
      } catch (err) {
        this.errors.remove = err
      } finally {
        this.loading = false
      }
    }
  }
}
