var app = new Vue({
  el: '#app',
  data: {
    houses: [],
    houseCreate: {
      title : '',
  		price : '',
  		detail : '',
  		image : '',
  		latitude: '',
      longitude: ''
    },
    houseEdit: {
      title : '',
  		price : '',
  		detail : '',
  		image : '',
  		latitude: '',
      longitude: ''
    }
  },
  methods: {
    listHouse: function(){
      let self = this;
      axios.get('http://localhost:3000/houses')
      .then(function(res){
        // console.log(res);
        self.houses = res.data
      })
      // console.log(JSON.stringify(this.houses));
    },
    createHouse: function(){
      axios.post('http://localhost:3000/houses', {
        title : app.houseCreate.title,
    		price : app.houseCreate.price,
    		detail : app.houseCreate.detail,
    		image : app.houseCreate.image,
    		latitude: app.houseCreate.latitude,
        longitude: app.houseCreate.longitude
      })
      .then(function(house){
        app.houses.push(house.data)
      })
    },
    deleteHouse: function(id){
      axios.delete(`http://localhost:3000/houses/${id}`)
      .then(function() {
        app.houses = app.houses.filter(function(house){
          return house._id != id
        })
      })
    },
    editHouse: function(id){
      axios.put(`http://localhost:3000/houses/${id}`, {
        title : app.houseEdit.title,
    		price : app.houseEdit.price,
    		detail : app.houseEdit.detail,
    		image : app.houseEdit.image,
    		latitude: app.houseEdit.latitude,
        longitude: app.houseEdit.longitude
      })
      .then(function(){
        app.listHouse()
      })
    },
    modalEdit: function(id, title, price, detail, image, latitude, longitude) {
      $('.ui.modal#modalEdit')
      .modal('setting', {
        onApprove: function(){
          app.editHouse(id)
        }
      })
      .modal('show')
      app.houseEdit.title = title
      app.houseEdit.price = price
      app.houseEdit.detail = detail
      app.houseEdit.image = image
      var map = new GMaps({
        el: '#mapEdit',
        lat: latitude,
        lng: longitude,
        click: function(e){
          map.removeMarkers()
          map.addMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          })
          app.houseEdit.latitude = e.latLng.lat()
          app.houseEdit.longitude = e.latLng.lng()
        }
      })
      map.addMarker({
        lat: latitude,
        lng: longitude,
        title: 'House Location'
      })
    },
    modalCreate: function() {
      $('.ui.modal#modalCreate')
      .modal('show')
      var map = new GMaps({
        el: '#createMap',
        lat: -6.1842581,
        lng: 106.8323914,
        click: function(e){
          map.removeMarkers()
          map.addMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          })
          app.houseCreate.latitude = e.latLng.lat()
          app.houseCreate.longitude = e.latLng.lng()
          alert('You clicked in this location for sell your house.');
        }
      })
    },
    modalMap: function(latitude, longitude){
      $('.small.modal#modalMap')
      .modal('show')
      var map = new GMaps({
        el: '#mapDetail',
        lat: latitude,
        lng: longitude,
      })
      map.addMarker({
        lat: latitude,
        lng: longitude,
        title: 'House Location',
        infoWindow: {
          content:
            `<p>Do you want to buy this house?</p>
            <br>
            <div class="ui buttons">
              <button class="ui black deny button">Cancel</button>
              <div class="or"></div>
              <button class="ui positive button">
                <i class="icon payment"></i>
                BUY NOW
              </button>
            </div>`
        }
      })
    }
  }
})
app.listHouse()
