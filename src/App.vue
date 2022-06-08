<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import '@popperjs/core';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import 'bootstrap-vue/dist/bootstrap-vue-icons';
  import '@/assets/css/animations.css';
  import '@/assets/css/tag-style.css';
  import NavBar from '@/components/navigation/NavBar';

  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
