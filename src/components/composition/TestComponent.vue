<template>
  <h2>hello LifeCycle</h2>
  <ChildComponent
    firstname="Code"
    lastname="scalper"
    @sendParent="sendParent"
  />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
import {} from "vue";
export default {
  name: "TestComponet",
  components: { ChildComponent },
  methods: {
    sendParent() {
      console.log("Parent");
    },
  },
  // setup() {
  //   const inputRef = ref(null);
  //   const username = ref("scalper");

  //   onMounted(() => {
  //     inputRef.value.focus();
  //     console.log("onMounted");
  //   });

  //   return {
  //     username,
  //     inputRef,
  //   };
  // },
};
</script>

<style></style>
