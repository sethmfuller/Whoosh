<template>
  <div class="hello">
    <h1>Welcome to regular users page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'The commoners'
    }
  }
}
</script>

<style scoped>
  @import "styles/Home";
</style>
