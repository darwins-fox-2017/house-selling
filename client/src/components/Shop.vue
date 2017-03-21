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
                                <el-button type="primary" class="button" @click.native="addToCart(house)">Add to cart</el-button>
                            </div>
                        </div>
                        <el-collapse @change="handleChangeCollapse">
  <el-collapse-item title="Open Maps" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
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
                      {{ item.product_name }} [ X {{ item.quantity }}
                      ]<span class="right">{{ toRupiah(item.subtotal) }}
                        <el-button size="mini" icon="delete" type="danger" @click.native="deleteFromCart(item.product_id)"></el-button>
                      </span>
                </div>
                <div class="">
                  <span class="total title">Total</span> <span class="total right">{{ total }}</span>
                </div>
            </el-card>
        </el-col>
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
        }
    },
    created() {
        console.log('run');
        this.getItems()
        this.cart = JSON.parse(this.$localStorage.get('cart')) || []
    },
    computed: {
      total: function(){
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
        toRupiah(price){
          return rupiah.convert(price)
        },
        addToCart(item){
          let newItem = item
          let indexAlready = _.findIndex(this.cart, ['product_id', item.id])
          if (indexAlready == -1) {
            let cartItem = {
              product_id: item.id,
              product_name: item.name,
              quantity: 1,
              price: item.price,
              subtotal: parseInt(item.price)
            }
            this.cart.push(cartItem)
          } else {
            let cartItem = this.cart[indexAlready]
            cartItem.quantity = cartItem.quantity + 1
            cartItem.subtotal =cartItem.price * cartItem.quantity
          }
           this.$localStorage.set('cart', JSON.stringify(this.cart))
        },
        deleteFromCart(product_id){
          let indexAlready = _.findIndex(this.cart, ['product_id', product_id])
          this.cart.splice(indexAlready, 1)

        },
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>
.el-col  {
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
