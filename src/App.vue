<template>
  <div>
    <h1>Hello Vue {{ name }}</h1>
    <button v-on:click.right="changeName">change Name</button>
    <button v-on:mouseover="name = 'Code Scalper'">change Name</button>
    <button v-on:mouseleave="name = 'scalper'">change Name</button>
    <a v-on:click.prevent="movePage" href="https://naver.com">naver로 이동</a>
    <h2>{{ number }}</h2>
    <button v-on:click="increment(1)">숫자 1증가</button>
    <button v-on:click="decrement(1)">숫자 1감소</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "scapler",
      number: 0,
    };
  },
  methods: {
    changeName() {
      this.name = "Code Scalper";
    },
    movePage(event) {
      //
      event.preventDefault();
      const check = confirm("페이지를 이동하시겠습니까?");
      if (check) {
        console.log("page이동");
      } else {
        console.log("페이지 이동 X");
      }
    },
    increment(num) {
      this.number += num;
    },
    decrement(num) {
      this.number -= num;
    },
  },
};
</script>

<style>
a {
  font-size: 24px;
  display: block;
}
</style>
