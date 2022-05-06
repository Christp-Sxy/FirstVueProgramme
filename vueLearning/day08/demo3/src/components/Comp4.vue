<template>
  <div>
    <p ref="op">p标签</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created () {
    // 这个函数让我们在生命周期函数中"提前"获取某些数据，但是原理上还是让生命周期函数执行完毕
    // 也就是等到其他原本的生命周期函数执行完毕的时候再来使用nextTick函数
    /* this.$nextTick(() => {
      console.log(this.$refs.op);
    })
 */
    this.$nextTick().then(() => {
      console.log(this.$refs.op);
    })
  }
}
</script>

<style lang = "less" scoped>
  
</style>