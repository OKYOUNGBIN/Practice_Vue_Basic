<template>
  <div>
    <ul>
      {{
        products
      }}
    </ul>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "product-list",
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style></style>
