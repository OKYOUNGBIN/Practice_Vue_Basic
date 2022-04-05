<template>
  <div>
    <h2>Hello LifeCycle</h2>
    <ParentComp />
  </div>
</template>

<script>
import ParentComp from "./components/lifecycle/ParentComp.vue";
export default {
  name: "App",
  components: { ParentComp },
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
