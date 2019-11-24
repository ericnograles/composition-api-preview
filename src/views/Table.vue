<template>
  <div class="container mx-auto flex flex-col items-center">
    <meme-table />
  </div>
</template>

<script>
import MemeTableHOC from '@/components/MemeTable/HOC/MemeTable'
import MemeTableMixin from '@/components/MemeTable/Mixin/MemeTable'
import MemeTableComposition from '@/components/MemeTable/Composition/MemeTable'

export default {
  name: 'TableView',
  components: {
    // MemeTable: MemeTableHOC
    // MemeTable: MemeTableMixin
    MemeTable: MemeTableComposition
  }
}
</script>
