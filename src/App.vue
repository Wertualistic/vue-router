<template>
  <h1>Header</h1>
  <router-view></router-view>
  <div>
    <router-link to="/about">about</router-link>
  </div>
  <div>
    <router-link to="/portfolio">porfolio</router-link>
  </div>
  <div>
    <router-link to="/home">home</router-link>
  </div>
  <h1>Footer</h1>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
