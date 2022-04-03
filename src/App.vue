<template>
  <div>
    <h2>Hello Component</h2>
    <button @click="activeTab = 'Menu1'">Menu1</button>
    <button @click="activeTab = 'Menu2'">Menu2</button>
    <button @click="activeTab = 'Menu3'">Menu3</button>
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import Menu1 from "./components/tabItems/Menu1.vue";
import Menu2 from "./components/tabItems/Menu2.vue";
import Menu3 from "./components/tabItems/Menu3.vue";
export default {
  name: "App",
  components: { Menu1, Menu2, Menu3 },
  data() {
    return {
      username: "scapler",
      activeTab: "Menu1",
    };
  },
  provide() {
    return {
      name: this.username,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
