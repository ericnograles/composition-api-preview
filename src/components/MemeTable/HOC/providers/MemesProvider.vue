<template>
  <div>
    <slot :state="state" :actions="actions" />
  </div>
</template>

<script>
import Vue from 'vue'
import {
  getMemes,
  addMeme,
  removeMeme,
  refreshMemes
} from '../../mocks/memeRepository'

export default Vue.extend({
  name: 'MemesProvider',
  data() {
    return {
      items: [],
      errors: {
        add: null,
        remove: null,
        list: null
      },
      loading: false
    }
  },
  async created() {
    console.log('[MemesProvider]: Created')
    await this.refresh()
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
        refresh: this.refresh,
        list: this.list,
        add: this.add,
        remove: this.remove
      }
    }
  },
  methods: {
    async refresh() {
      console.log('[MembersProvider]: refresh')
      try {
        this.loading = true
        const { items } = await refreshMemes()
        this.items = items
      } catch (err) {
        this.errors.list = err
      } finally {
        this.loading = false
      }
    },
    async list() {
      console.log('[MembersProvider]: list')
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
      console.log('[MembersProvider]: add')
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
      console.log('[MembersProvider]: remove')
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
})
</script>
