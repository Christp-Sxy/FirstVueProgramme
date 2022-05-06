<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user">User</router-link>
    </nav>

    <button @click="hdClick">按钮</button> -->
    <!-- keep-alive 可以做组件级别缓存，原理是不让组件销毁和重新创建 -->
    <!-- 如果要不同组件不同规则时，就在router中的index.js中配置路由元信息 -->

    <!-- 需求: / 有缓存     /about 没有缓存 -->
    <!-- 第一种 -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.iskeepalive"/>
    </keep-alive>

    <router-view v-if="!$route.meta.iskeepalive"/> -->

    <!-- 第二种 注意要包含的是组件内部定义的名字，如user定义在User.vue中的export default中-->
    <!-- <keep-alive :include="['user']">
      <router-view/>
    </keep-alive> -->

    <!-- 第三种 -->
    <keep-alive :exclude="['HomeView', 'about']">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  methods: {
    hdClick() {
      // 点击跳转到/user路径


      // 第一种: 通过path进行跳转
      // this.$router.push("/user);

      // 第二种: 通过name进行跳转
      // this.$router.push({name: "user"});

      // 第一种传参的方式: 查询字符串参数(queryString)
      // this.$router.push("/user?page=1&size=20");
      // this.$router.push({path: "/user", query: {page: 1, size: 20}});
      // this.$router.push({name: "user", query: {page: 1, size: 20}});

      // 第二种传参的方式: 路径信息参数
      // this.$router.push("/user/123456");
      this.$router.push({name: "user", params: {id: "123456"}});
    }
  }
}
</script>


<style lang="less">
*{
  list-style: none;
  padding: 0;
  margin: 0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
