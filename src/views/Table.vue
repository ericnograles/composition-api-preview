<template>
  <div class="container mx-auto flex flex-col items-center">
    <meme-table />
  </div>
</template>

<script>
import MemeTable from '@/components/Memes/HOC/MemeTable'

export default {
  name: 'table',
  components: {
    MemeTable
  }
}
</script>
