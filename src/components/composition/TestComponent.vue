<template>
  <h2>hello Reusability</h2>
  <hr />
  <ProductStatus />
  <hr />
  <FeeStatus />
  <hr />
  <SavingStatus />
</template>

<script>
import FeeStatus from "../mixin/FeeStatus.vue";
import ProductStatus from "../mixin/ProductStatus.vue";
import SavingStatus from "../mixin/SavingStatus.vue";
import {} from "vue";
export default {
  name: "TestComponet",
  components: { SavingStatus, ProductStatus, FeeStatus },
};
</script>

<style></style>
