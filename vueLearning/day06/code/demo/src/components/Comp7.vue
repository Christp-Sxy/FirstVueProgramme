<template>
  <div>
    <!-- ref 和 $refs 对象 -->
    <p ref="op">p标签</p>
    <button @click="hdClick">按钮</button>
    <Child ref="sd"></Child>
  </div>
</template>

<script>
import Child from "./CompChildFor7.vue"
export default {
  data () {
    return {
      
    }
  },
  methods: {
    hdClick() {
      // $refs专门来接受这个组件中带有ref的标签或子组件，作为自己的属性
      console.log(this.$refs.op.innerHTML);
      this.$refs.op.style.cursor = 'pointer';
      console.log(this.$refs.sd.sdas);
      this.$refs.sd.print();
    }
  },
  components: {
    Child
  }
}
</script>

<style lang = "less" scoped>
  
</style>