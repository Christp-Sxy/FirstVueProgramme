<template>
  <!-- vue2中修改数组中元素失效的问题 -->
  <div>
    <p>{{arr[0]}}</p>
    <p>{{arr}}</p>
    <button @click="hdClick">按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    hdClick() {
      /* 
        出现这种bug的原因:
        原理:vue2中的双向数据绑定原理用的是Object.defineProperty, 
            修改引用类型的数据的时候就没有办法去触发set，所以只能修改原来引用地址的数据
            而不能够修改界面上显示的数据
      */
      this.arr[0] = 1000;
      console.log(this.arr[0]);

      // vue2中提供了$set()方法方便去修改数组中单个数据的值
      // this.$set(数组名, 要修改的元素的下标, 新的值)
      this.$set(this.arr, 0, 1999);

      /* 
        vue3不会有这种问题，因为vue3使用了.proxy方法来实现双向数据绑定
      */
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>