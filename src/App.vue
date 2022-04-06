<template>
  <div>
    <h2>Hello Mixins</h2>
  </div>
  <TestComponet />
</template>

<script>
import TestComponet from "./components/composition/TestComponent.vue";
export default {
  name: "App",
  components: { TestComponet },
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
