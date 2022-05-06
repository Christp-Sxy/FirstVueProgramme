<template>
  <div>
    <h3>{{num}}</h3>
    <button @click="increment">增加</button>
    <button @click="increment2">增加(异步)</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    num() {
      return this.$store.state.num;
    }
  },
  methods: {
    increment() {
      // 使用commit来触发事件，第二个参数是要传递的数据
      this.$store.commit('addNum', 10)
    },
    increment2() {
      // 通过dipatch调用actions中的方法，异步修改vuex中的数据
      this.$store.dispatch("asyncAddnum", 20)
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>