<template>
  <div class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello Folders',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>