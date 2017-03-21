<template lang="html">
  <div class="container">
    <div>Title : <input type="text" name="title" v-model="edithouse.title"/></div>
    <div>Image : <input type="text" name="image" v-model="edithouse.image" /></div>
    <div>Harga : <input type="text" name="price" v-model="edithouse.price" /></div>
    <div>Spesification : <input type="text" name="spesification" v-model="edithouse.spesification" /></div>
    <div>Lat : <input type="text" name="latitude" v-model="edithouse.latitude"/></div>
    <div>Lng : <input type="text" name="longitude" v-model="edithouse.longitude"/></div>
    <div><button v-on:click.prevent="editData">Submit</button></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['slug'],
  data() {
    return {
      edithouse : {
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
    getData() {
      var self = this
      axios.get('http://localhost:3000/api/house/' + self.slug).then((response) => {
        self.edithouse = response.data
      }).catch((err) => {
        console.log(err)
      })
    },
    editData() {
      console.log('data');
      // let self = this
      axios.put('http://localhost:3000/api/house/'+this.slug,this.edithouse).then((response) => {
        window.location = 'http://localhost:8080/#/'
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="css">
</style>
