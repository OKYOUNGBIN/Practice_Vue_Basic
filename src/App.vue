<template>
  <div>
    <h2>Hello slots</h2>
    <CardView>
      <template v-slot:header>
        <h3>Random Image</h3>
      </template>
      <template v-slot:default>
        <img src="https://placeimg.com/200/100/any" alt="" />
      </template>
      <template v-slot:footer>
        <small>thank you</small>
      </template>
    </CardView>
  </div>
</template>

<script>
import CardView from "./components/slot/CardView.vue";
export default {
  name: "App",
  components: {
    CardView,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
