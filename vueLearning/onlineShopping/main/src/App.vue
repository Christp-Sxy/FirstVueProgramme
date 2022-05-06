<template>
  <div id="app">
    <Topbar></Topbar>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default({
  data(){
    return{

    }
  },
  components: {
    Topbar,
    Header,
    Footer,
  }
})
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
