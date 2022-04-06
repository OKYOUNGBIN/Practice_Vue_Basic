<template>
  <h2>Handsome?{{ isHandsome }}</h2>
  <h3>{{ name }}</h3>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
//import { reactive, toRefs } from "vue";
export default {
  name: "TestComponet",
  setup() {
    let isHandsome = ref(false);
    const state = reactive({
      name: "scalper",
      age: 50,
      job: "programmer",
    });

    return {
      isHandsome,
      ...toRefs(state),
    };
  },

  //   data() {
  //     return {
  //       username: "scalper",
  //     };
  //   },
};
</script>

<style></style>
