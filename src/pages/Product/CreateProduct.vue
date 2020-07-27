<template>
  <div>
    <button @click="openForm">Create new</button>
    <div v-if="enableCreate || enableEdit">
      <input v-model="name" placeholder="name">
      <input v-model="price" type="number" placeholder="price">
      <input v-model="description" placeholder="description">
      <button v-if="!enableEdit" @click="createProduct">Add</button>
      <button v-else @click="editProduct">Edit</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductRepository from "./repository";
export default Vue.extend({
  props: {
    enableEdit: Boolean,
    product: Object
  },
  data() {
    return {
      enableCreate: false as boolean,
      name: "",
      price: 0,
      description: ""
    };
  },
  computed: {
    productRepo(): ProductRepository {
      return new ProductRepository();
    }
  },
  watch: {
    enableEdit(val) {
      if (val) {
        this.name = this.product.name;
        this.description = this.product.description;
        this.price = this.product.price;
      }
    }
  },
  methods: {
    openForm(): void {
      this.enableCreate = true;
      this.name = "";
      this.price = 0;
      this.description = "";
    },
    createProduct(): void {
      const product = {
        uuid: "" + new Date().getTime(),
        name: this.name,
        price: this.price,
        description: this.description
      };
      this.productRepo.add(product);
      this.enableCreate = false;
    },
    editProduct(): void {
      this.product.name = this.name;
      this.product.price = this.price;
      this.product.description = this.description;

      this.productRepo.edit(this.product);
      this.enableCreate = false;
      this.$emit("hideEdit", false);
    }
  }
});
</script>

<style>
</style>
