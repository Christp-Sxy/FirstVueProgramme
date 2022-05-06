<template>
  <div>
    <!-- 下面那一行用来展示组件中的某一个 -->
    <router-view/>
    <ul class="tabbar">
      <router-link tag="li" to="/tabbar/category">分类</router-link>
      <router-link tag="li" to="/tabbar/cart">购物车</router-link>
      <router-link tag="li" to="/tabbar/user">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang = "less" scoped>
  .tabbar{
    background-color: green;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    li {
      border-left: 1px solid greenyellow;
      flex: 1;
      text-align: center;
    }
  }
</style>