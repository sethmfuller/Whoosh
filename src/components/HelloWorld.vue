<template>
  <div class="hello">
    <h1>This is the homepage</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style scoped>
</style>
