<template>
  <div class="topbar">
    <div class="wrap">
      <div class="l">欢迎来到商城</div>
      <div class="r">
        <ul>
          <li>
            <img width="26px" src="../assets/img/狗头/1.png" alt="">
            用户名: 游客
          </li>
          <li>我的积分: --</li>
          <li>获取积分</li>
          <li>官网</li>
          <li class="login-btn">登录</li>
        </ul>
      </div>
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
  .topbar {
    height: 40px;
    background: #242839;
    font-size: 14px;
    font-weight: 300;
    color: #FFFEFE;
    line-height: 40px;
    .r ul {
      display: flex;
      li {
        /* 
          将图标设置成居中
        */
        display: flex;
        align-items: center;
        margin-left: 20px;
        cursor: pointer;
        img {
          border-radius: 50%;
          margin-right: 6px;
        }
        /* 
        &表示既是上面的那种类型，同时又是其他类型
      */
        &.login-btn {
          width: 124px;
          height: 40px;
          background-color: #0A328E;
          /* 
            text-align不行，只能使用justify-content
          */
          // text-align: center;
          justify-content: center;
        }
      };
    };
    .wrap {
      height: 40px;
      display: flex;
      /* 
        下面这行就是让内容分散在两边，space-between地意思就是在中间添加一个空格
      */
      justify-content: space-between;
    };
  
  }

  
</style>