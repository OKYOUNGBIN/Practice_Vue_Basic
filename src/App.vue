<template>
  <div>
    <GreetingUser id="greeting" />
  </div>
</template>

<script>
import GreetingUser from "./components/GreetingUser.vue";
export default {
  name: "App",
  components: {
    GreetingUser,
    // ProductList,
  },
  data() {
    return {
      // products: [
      //   { id: 0, name: "TV", price: 500000, company: "LG" },
      //   { id: 1, name: "전자렌지", price: 900000, company: "삼성" },
      //   { id: 2, name: "냉장고", price: 400000, company: "SK" },
      //   { id: 3, name: "에어컨", price: 200000, company: "인텔" },
      //   { id: 4, name: "오븐", price: 10000, company: "마아크로" },
      // ],
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
