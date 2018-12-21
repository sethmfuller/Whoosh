<template>
  <div class="hello">
    <h1>Welcome to administrator page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'The superheros'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/Admin";
</style>
