<template>
  <div>
    <!-- 深度监听 -->
    <h1>{{ obj.age }}</h1>
    <button @click="obj.age++">阿是</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      obj: {
        name: "www",
        age: 4
      }
    }
  },
  watch: {
    // 第一种格式
    // num(newVal, oldVal) {
    //   console.log("值被修改了", newVal, oldVal);
    // }

    // 第二种格式
    obj: {
      handler(newVal, oldVal) {
        // obj中一旦有属性发生变化就会执行
        console.log("age被修改了", newVal, oldVal);
      },
      deep: true // 深度监听
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>