<template>
  <div class="header wrap">
    <h1>
      <img class="logo" src="../assets/img/jojo.jpg" alt="">
    </h1>
    <ul class="nav">
      <li>首页</li>
      <li>全部商品</li>
      <li>个人中心</li>
      <li>我的订单</li>
      <li>专属福利</li>
    </ul>
    <div class="search">
      <input type="text" placeholder="请输入想要查询的内容">
      <span>
        <img src="../assets/img/狗头/2.png" alt="">
      </span>
    </div>
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
  .header {
    width: 1200px;
    height: 119px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      img {
        width: 350px;
        height: 119px;
      }
    }
    .search {
      // 用来处理内部元素不同意位置的问题
      display: flex;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        width: 50px;
        height: 40px;
        background: #0A328E;
        border-radius:0px 20px 20px 0px;
        /* flex用来处理span无法完整显示的问题 */
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }   
      input {
        width: 214px;
        height: 40px;
        border: 1px solid #DEDEDE;
        border-radius:20px 0px 0px 20px;
        text-indent: 12px;
      }
    }
    .nav {
      width: 500px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>