<template lang="html">
  <div class="container">
    <div>Title : <input type="text" name="title" v-model="newhouse.title"/></div>
    <div>Image : <input type="text" name="image" v-model="newhouse.image" /></div>
    <div>Harga : <input type="text" name="price" v-model="newhouse.price" /></div>
    <div>Spesification : <input type="text" name="spesification" v-model="newhouse.spesification" /></div>
    <div>Lat : <input type="text" name="latitude" v-model="newhouse.latitude"/></div>
    <div>Lng : <input type="text" name="longitude" v-model="newhouse.longitude"/></div>
    <div><button v-on:click.prevent="createData">Submit</button></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      newhouse : {
        title: '',
        image: '',
        price: '',
        spesification: '',
        latitude: '',
        longitude: ''
      }
    }
  },
  methods: {
    createData() {
      let self = this
      axios.post('http://localhost:3000/api/house', self.newhouse).then((response) => {
        window.location = 'http://localhost:8080/#/'
      })
    }
  }
}
</script>

<style lang="css">
</style>
