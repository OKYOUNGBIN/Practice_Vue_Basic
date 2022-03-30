<template>
  <div>
    <GreetingUser
      :username="username"
      :numberOfVisit="numberOfVisit"
      :siteInfo="siteInfo"
    />

    <button @click="changeName()">change</button>
  </div>
</template>

<script>
import GreetingUser from "./components/GreetingUser.vue";
export default {
  name: "App",
  components: {
    GreetingUser,
  },
  data() {
    return {
      username: "scapler",
      numberOfVisit: undefined,
      siteInfo: undefined,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {
    changeName() {
      this.username = "DDochi";
    },
  },
};
</script>

<style></style>
