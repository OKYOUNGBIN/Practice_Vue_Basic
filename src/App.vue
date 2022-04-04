<template>
  <div>
    <h2>Hello Teloport</h2>
    <teleport to="#extra-modal" :disabled="isTeloport">
      <div class="modal">
        this is modal!
        <button @click="isTeloport = !isTeloport">teleport toggle</button>
      </div>
    </teleport>
    <teleport to="#extra-modal">
      <div class="modal2">this is modal2</div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isTeloport: true,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style scoped>
.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
