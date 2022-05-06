<template>
  <div>

  </div>
</template>

<script>
import mixins from "../mixins"
export default {
  data () {
    return {
      
    }
  },
  /* 
    mixins 可以用来抽取一i邪恶声明周期函数和一些组件中会出现的方法
    mixins 中的生命周期函数会优先于组件中的生命周期函数执行
  */
  mixins: [mixins],
  created () {
    console.log("这是Comp3的created方法")
  }
}
</script>

<style lang = "less" scoped>
  
</style>