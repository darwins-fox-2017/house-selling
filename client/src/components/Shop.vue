<template>
<div class="">
    <el-button type="primary" @click.native="checkout">Checkout</el-button>
    <br/>
    <br/>

    <el-row :gutter="20">
        <el-col :span="16">
            <el-row :gutter="20">
                <el-col :span="12" v-for="house in houses" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="house.pictlink" class="image">
                        <div style="padding: 14px;">
                            <h3>{{ house.title }}</h3>
                            <div class="bottom clearfix">
                                <p>
                                    {{ house.description }}
                                </p>
                                <h3>{{toRupiah(house.price )}}</h3>
                                <el-button type="" class="button" @click.native="addToCart(house)">Compare it</el-button>
                                <el-button type="primary" class="button" @click.native="viewDetail(house._id)">View detail</el-button>
                            </div>
                        </div>
                        <el-collapse>
                            <el-collapse-item title="Address" name="1">
                                <div>
                                  {{ house.address }}
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Contact" name="2">
                                <div>{{ house.contact }}</div>
                            </el-collapse-item>

                        </el-collapse>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">Shoping cart</span>
                    <el-button style="float: right;" type="primary">Purchase now</el-button>
                </div>
                <div v-for="item in cart" class="text item">
                    {{ item.product_name }} [ X {{ item.quantity }} ]
                    <span class="right">{{ toRupiah(item.subtotal) }}
                        <el-button size="mini" icon="delete" type="danger" @click.native="deleteFromCart(item.product_id)"></el-button>
                      </span>
                </div>
                <div class="">
                    <span class="total title">Total</span> <span class="total right">{{ total }}</span>
                </div>
            </el-card>
        </el-col>
        <map :center="center" :zoom="7">
        <marker
          v-for="m in markers"
          :position.sync="m.position"
          :clickable="true"
          :draggable="true"
          @g-click="center=m.position"></marker>
      </map>
    </el-row>

</div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash'
import rupiah from 'rupiah-format'
let host = 'http://localhost:3000/api';

export default {
    data() {
        return {
            houses: [],
            cart: [],
            local: localStorage.getItem('storedData'),
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
        console.log('run');
        this.getItems()
        this.cart = JSON.parse(this.$localStorage.get('cart')) || []
    },
    computed: {
        total: function() {
            return rupiah.convert(_.sumBy(this.cart, 'subtotal'))
        }
    },
    methods: {
        getItems() {
            let self = this;
            axios.get(host + '/houses')
                .then(response => {
                    // JSON responses are automatically parsed.
                    self.houses = response.data
                })
                .catch(e => {
                    console.log(e);
                })
        },
        toRupiah(price) {
            return rupiah.convert(price)
        },
        formatter(row, column) {
            return row.address;
        },
        viewDetail(id){
          this.$router.push('/houses/' + id)
        },
        getItem(){
          let self = this
          axios.get(host + '/houses/' + self.$route.params.id).then(item => {
            self.form = item.data
          })
        }
    }
}
</script>

<style>
.el-col {
    margin-bottom: 20px;
}

.image {
    width: 100%;
    display: block;
}

.text {
    font-size: 14px;
}

.item {
    padding: 10px 0;
}

.total {
    font-size: 18px;
    font-weight: bold;
}

.right {
    float: right;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
