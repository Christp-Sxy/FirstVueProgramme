<template>
  <div>
    <!-- 监听属性 -->
    <h1>{{ num }}</h1>
    <button @click="num++">阿是</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 11
    }
  },
  watch: {
    // 第一种格式
    // num(newVal, oldVal) {
    //   console.log("值被修改了", newVal, oldVal);
    // }

    // 第二种格式
    num: {
      handler(newVal, oldVal) {
        console.log("值被修改了", newVal, oldVal);
      },
      immediate: true // 立即监听
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>