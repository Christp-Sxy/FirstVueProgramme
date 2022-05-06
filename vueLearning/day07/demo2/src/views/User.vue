<template>
  <div>
    <h1>{{ num }}</h1>
    <button @click="num++">按钮</button>
  </div>
</template>

<script>
export default {
  name: "user",
  data () {
    return {
      num: 3213
    }
  },
  created () {
    // 组件中接受id
    console.log(this.$route.params.id);
  }
}
</script>

<style lang = "less" scoped>
  
</style>