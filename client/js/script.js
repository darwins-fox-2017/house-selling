var app = new Vue({
      el: '#root',
      data: {
        _id: '',
        title: '',
        fullname: '',
        phonenumber: '',
        address: '',
        price: '',
        image: '',
        long: '',
        lat: '',
        houses: []
      },
      methods: {
        loadHouse: function() {
          axios.get("http://localhost:3000/api/house").then(function (result) {
            app.houses = result.data;
          }).then(function() {
            app.houses.forEach(function (house) {
              var url = GMaps.staticMapURL({
                size: [310, 300],
                lat: house.long,
                lng: house.lat,
                markers: [
                  {lat: house.long, lng: house.lat}
                ]
              });

              $('<img/>').attr('src', url)
                .appendTo(`#`+house._id);
            })
          })
          .catch(function (err) {
            console.log(err);
          })
        },
        addHouse: function () {
          axios.post("http://localhost:3000/api/house", {
            title: app.title,
            fullname: app.fullname,
            phonenumber: app.phonenumber,
            address: app.address,
            price: app.price,
            image: app.image,
            long: app.long,
            lat: app.lat
          }).then(function (data) {
            app.houses.push(data)
            app.resetButton()
          })
          .catch(function (err) {
            console.log(err);
          })
        },
        getHouse: function(id) {
          axios.get(`http://localhost:3000/api/house/${id}`).then(function (result) {
            var data = result.data
            app._id = data._id
            app.title = data.title
            app.fullname = data.fullname
            app.price = data.price
            app.address = data.address
            app.phonenumber = data.phonenumber
            app.image = data.image
            app.lat = data.lat
            app.long = data.long
          })
          .catch(function (err) {
            console.log(err);
          })
      },
      editHouse: function(id){
        axios.put(`http://localhost:3000/api/house/${id}`, {
          title: app.title,
          fullname: app.fullname,
          phonenumber: app.phonenumber,
          address: app.address,
          price: app.price,
          image: app.image,
          long: app.long,
          lat: app.lat
        }).then(function (data) {
          app.houses.push(data)
          app.resetButton()
        })
        .catch(function (err) {
          console.log(err);
        })
      },
      deleteHouse: function(id) {
        axios.get(`http://localhost:3000/api/house/${id}`).then(function (data) {
          app.loadHouse()
        })
        .catch(function (err) {
          console.log(err);
        })
      },
      resetButton: function() {
        app.title = ''
        app.fullname = ''
        app.phonenumber = ''
        app.address = ''
        app.price = ''
        app.image = ''
        app.long = ''
        app.lat = ''
      },
      loadMap: function () {
        setTimeout(function () {
          var map = new GMaps({
            div: '#map',
            zoom: 16,
            lat: -6.2297263,
            lng: 106.6890863,
            click: function(e) {
              var ltlg = JSON.stringify(e)
              var latlong = JSON.parse(ltlg).latLng
              map.addMarker({
                lat: latlong.lat,
                lng: latlong.lng,
                title: app.title,
                click: function(e) {
                  app.lat = latlong.lat
                  app.long = latlong.lng
                }
              });
            }
          });
        },2000)
      }
    }
    })
    app.loadHouse();
