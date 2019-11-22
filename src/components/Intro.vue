<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This demo will compare and contrast how to build reusable logic in Vue
      using both the
      <a
        href="https://vuejs.org/v2/api/#Vue-extend"
        rel="noopener noreferrer"
        target="_blank"
        >Options API</a
      >
      and the upcoming
      <a
        href="https://vue-composition-api-rfc.netlify.com/#summary"
        rel="noopener noreferrer"
        target="_blank"
        >Composition API</a
      >
      in Vue 3.0.
    </p>
    <p>
      You can use the Composition API in your Vue 2.x apps thanks to the
      <a
        href="https://github.com/vuejs/composition-api"
        rel="noopener noreferrer"
        target="_blank"
        >composition-api</a
      >
      plugin!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Intro extends Vue {
  @Prop() private msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
