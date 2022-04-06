<template>
  <div>
    <h2>Hello Mixins</h2>
    <ProductStatus />
    <FeeStatus />
    <SavingStatus />
  </div>
</template>

<script>
import SavingStatus from "./components/mixin/SavingStatus.vue";
import FeeStatus from "./components/mixin/FeeStatus.vue";
import ProductStatus from "./components/mixin/ProductStatus.vue";
export default {
  name: "App",
  components: { ProductStatus, SavingStatus, FeeStatus },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style scoped></style>
