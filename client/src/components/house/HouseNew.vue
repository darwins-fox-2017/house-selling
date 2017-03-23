houses<template>
<div class="">
    <el-button type="primary" @click.native="backToList">back to list</el-button>
    <br/>
    <br/>
    <h2>Add new house</h2>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Price">
            <el-input placeholder="Price" v-model="form.price">
                <template slot="prepend">Rp.
                </template>
              </el-input>
      </el-form-item>
      <el-form-item label="Description">
    <el-input type="textarea" v-model="form.description"></el-input>
  </el-form-item>
      <el-form-item label="Address">
    <el-input type="textarea" v-model="form.address"></el-input>
  </el-form-item>
  <el-form-item label="Latitude">
      <el-input v-model="form.lat"></el-input>
  </el-form-item>
  <el-form-item label="Longitude">
      <el-input v-model="form.lng"></el-input>
  </el-form-item>
  <el-form-item label="Contact">
      <el-input v-model="form.contact"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Add house</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import axios from 'axios';
let host = 'http://localhost:3000/api';
export default {
    data() {
        return {
            form: {
                title: '',
                price: '',
                address: '',
                lat: '',
                lng: '',
                contact: '',
                description: ''
            }
        }
    },
    methods: {
        backToList() {
            this.$router.push('/houses/')
        },
        onSubmit() {
            let self = this
            axios.post(host + '/houses/', self.form).then(x => {
                if (x.status) {
                    self.$router.push('/houses')
                } else {
                    console.log('something wrong');
                }
            })
            console.log('submit!');
        }
    }
}
</script>
