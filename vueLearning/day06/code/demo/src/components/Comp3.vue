<template>
  <!-- 事件修饰符 -->
  <div>
    <div class="big" @click="bc">
      <!-- 
        .stop可以阻止事件冒泡
      -->
      <div class="small" @click.stop="sc">
        <!-- 
          .prevent可以阻止浏览器的默认行为
        -->
        <a href="#" @click.stop.prevent>sss</a>
      </div>
    </div>
    <!-- 
      只让事件触发一次后面的都不触发了
    -->
    <button @click.once="btnClick">按钮</button>
    <input type="text" @keyup="hdKeyUp">
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    hdKeyUp () {
      console.log("12321");
    },
    btnClick () {
      alert("点击了");
    },
    bc () {
      alert("点击了大盒子");
    },
    sc () {
      alert("点击了小盒子");
    }
  }
}
</script>

/* 
  这里的scoped是为了让这个片段只服务于当前
 */
<style lang = "less" scoped>
  .big {
    width: 300px;
    height: 300px;
    background-color: #ffc;
    .small {
      width: 150px;
      height: 150px;
      background-color: #faf;
    }
  }
</style>