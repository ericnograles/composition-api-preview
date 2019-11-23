import Vue from 'vue'
import { getMemes, addMeme, removeMeme } from '../mocks/repositoryMeme'

const useMemeRepository = component => {
  return Vue.component('useMemeRepository', {
    render(createElement, context) {
      return createElement(component, {
        props: {
          addMeme: this.add
        }
      })
    },
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
    created() {
      console.log('[HOC]: created')
    },
    methods: {
      async list() {
        console.log('[HOC]: list')
        try {
          this.loading = true
          const { items } = await getMemes()
          this.items = items
        } catch (err) {
          errors.list = err
        } finally {
          this.loading = false
        }
      },
      async add(obj) {
        console.log('[HOC]: add')
        try {
          this.loading = true
          const { items } = await addMeme(obj)
          this.items = items
        } catch (err) {
          errors.add = err
        } finally {
          this.loading = false
        }
      },
      async remove(id) {
        console.log('[HOC]: remove')
        try {
          this.loading = true
          const { items } = await removeMeme(id)
          this.items = items
        } catch (err) {
          errors.remove = err
        } finally {
          this.loading = false
        }
      }
    }
  })
}

export default useMemeRepository
