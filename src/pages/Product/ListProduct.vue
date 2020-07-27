<template>
  <div>
    <div>Products</div>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span @click="showEditMode(product)">{{product.name}} - {{product.description}} ({{product.price}})</span>
        <button @click.prevent="removeProduct(product.uuid)">remove</button>
      </li>
    </ul>
    <CreateProduct :enableEdit="enableEdit" :product="productSelected" @hideEdit="hideEditMode" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import CreateProduct from "./CreateProduct.vue";
import ProductRepository from "./repository";
import { Product } from "./domain";
export default Vue.extend({
  name: "ListProduct",
  components: { CreateProduct },
  data() {
    return {
      products: [] as Product[],
      enableEdit: false as boolean,
      productSelected: {} as Product
    };
  },
  computed: {
    productRepo(): ProductRepository {
      return new ProductRepository();
    }
  },
  methods: {
    async getAllProducts() {
      this.products = await this.productRepo.getAll();
    },
    async removeProduct(uuid: string) {
      await this.productRepo.delete(uuid);
      this.products = await this.productRepo.getAll();
    },
    showEditMode(product: Product) {
      this.enableEdit = true;
      this.productSelected = product;
    },
    hideEditMode(value: boolean) {
      this.enableEdit = value;
    }
  },
  created(): void {
    this.getAllProducts();
  }
});
</script>
