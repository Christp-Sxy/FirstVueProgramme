<template>
  <div>
    <!-- 表达那修饰符 -->
    <!-- 
      .trim 是在获取到结果之前，将值的空格先去掉
      .number 是在获取到用户输入的数字之后自动转成数字类型
      .lazy 等到回车或者失焦的时候才会更新数据，可以节省性能损耗
    -->
    <input type="text" v-model.trim="txtVal1">
    <button @click="hdClick1">按钮</button>
    <hr>
    <input type="number" v-model.number="numVal">
    <button @click="hdClick2">阿牛</button>
    <hr>
    <input type="text" v-model.trim.lazy="txtVal2">
    <h1>{{txtVal2}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      txtVal1: "",
      numVal: null,
      txtVal2: "",
    }
  },
  methods: {
    hdClick1() {
      if(!this.txtVal){
        alert("请输入内容");
        return;
      }
    },
    hdClick2() {
      if(!this.txtVal){
        alert(this.numVal);
        return;
      }
    }
  }
}
</script>

<style lang = "less" scoped>
  
</style>