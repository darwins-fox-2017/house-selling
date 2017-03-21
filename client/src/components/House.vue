<template lang="html">
  <div class="houses">
    <div>Judul : <router-link :to="{ name: 'Detail', params: { slug: house.slug }}">{{ house.title }}</router-link></div>
    <div>Tanggal Posting : {{ house.createdAt }}</div>
    <div>Spesifikasi : {{ house.spesification }}</div>
    <div>Harga : ${{ house.price }}</div>
    <div><button>Edit</button> | <button @click="onDelete(house.slug)">Delete</button></div>
    <div>Gambar <br><img v-bind:src="house.image"></div>
  </div>
</template>

<script>
export default {
  props: ['house', 'idx'],
  methods: {
    onDelete(slug) {
      this.$emit('delete', slug)
    }
  }
}
</script>

<style lang="css">
</style>
