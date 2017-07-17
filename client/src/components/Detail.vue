<template lang="html">
  <div class="container">
    <h1>{{ $route.params.slug }}</h1>
    <house v-bind:house="house"></house>
    <div>Lat: {{ house.latitude }} Lng: {{ house.longitude }}</div>
  </div>
</template>

<script>
import axios from 'axios'
import House from './House'

export default {
  props: ['slug'],
  components: {
    House
  },
  data() {
    return {
      house: ''
    }
  },
  methods: {
    getData() {
      console.log('ini slug ', this.slug);
      var self = this
      axios.get('http://localhost:3000/api/house/' + self.slug).then((response) => {
        console.log(response.data);
        self.house = response.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="css">
.container {
  margin-left: 30%;
  margin-right: 30%;
}
</style>
