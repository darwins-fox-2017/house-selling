<template>
  <div id="app">
    <!-- <button class="pineapple"></button> -->
    <router-link to="Register" class="pineapple">Buat Iklan Rumah disini</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.pineapple {
  margin: 20px;
  padding: 17px;
  cursor: pointer;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
