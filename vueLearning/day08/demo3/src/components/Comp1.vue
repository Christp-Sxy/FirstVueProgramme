<template>
  <div>
    <!-- 直接使用路径引入 -->
    <img src="../assets/images/i.jpg" alt="">

    <!-- 模块化写法，把图片作为模块 -->
    <img :src="dante" alt="">
    <img :src="img2" alt="">
    <img :src="require('../assets/images/dante - 副本 (2).jpg')" alt="">
    <div class="box1"></div>
    <div class="box2" :style="{background: 'url(' + img2 + ')'}"></div>
  </div>
</template>

<script>
import dante from "../assets/images/dante - 副本 (2).jpg"
export default {
  data () {
    return {
      dante,
      img2: require("../assets/images/i.jpg"),
    }
  }
}
</script>

<style lang = "less" scoped>
  .box1 {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    background: url("../assets/images/i.jpg")
  }
</style>