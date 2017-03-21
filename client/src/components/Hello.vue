<template>
  <div class="container">
    <house v-for="house in houses" v-bind:house="house" @delete="deleteData(house.slug)"></house>
  </div>
</template>

<script>
import axios from 'axios'
import House from './House'
export default {
  name: 'hello',
  components: {
    House
  },
  data () {
    return {
      houses: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getData() {
      let self = this
      axios.get('http://localhost:3000/api/houses').then((response) => {
        console.log(response.data);
        self.houses = response.data;
      })
    },
    deleteData(slug) {
      let self = this;
      let houseIndex = self.houses.findIndex((house) => house.slug == slug )
      console.log(houseIndex);
      axios.delete('http://localhost:3000/api/house/' + slug).then((response) => {
        self.houses.splice(houseIndex, 1)
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    margin-left: 30%;
    margin-right: 30%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
