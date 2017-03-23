<template>
<div class="">
    <el-button type="primary" @click.native="backToShop">back to Shop</el-button>
    <br/>
    <br/>
    <el-row>
        <el-col :span="12">
            <div class="grid-content bg-purple"></div>
            <h4>Detail house</h4>
            <h3>{{ house.title }}</h3>
            <p>
                {{ house.description}}
            </p>
            <h3>{{ house.price }}</h3>
        </el-col>
        <el-col :span="12">
            <h3>Address</h3>
            <p>
                {{ house.address}}
            </p>
            <h3>Maps</h3>
            <gmap-map :center="center" :zoom="7" style="width: 500px; height: 300px">
                <gmap-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
            </gmap-map>
        </el-col>
    </el-row>

</div>
</template>
<script>
import axios from 'axios';
let host = 'http://localhost:3000/api';

export default {
    data() {
        return {
            house: '',
            center: {
                lat: 10.0,
                lng: 10.0
            },
            markers: [{
                position: {
                    lat: 10.0,
                    lng: 10.0
                }
            }, {
                position: {
                    lat: 11.0,
                    lng: 11.0
                }
            }]
        }
    },
    created() {
        this.getItem()
    },
    methods: {
        backToShop() {
            this.$router.push('/shop')
        },
        getItem() {
            let self = this
            axios.get(host + '/houses/' + self.$route.params.id).then(house => {
                self.house = house.data
            })
        }



    }
}
</script>
<style>
map {
    width: 100%;
    height: 600px;
    display: block;
}
</style>
