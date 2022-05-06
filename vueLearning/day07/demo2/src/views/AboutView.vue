<template>
  <div>
    <h1>{{ num }}</h1>
    <button @click="num++">按钮</button>
  </div>
</template>

<script>
export default {
  name: "about",
  data () {
    return {
      num: 10
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>