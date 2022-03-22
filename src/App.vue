<template>
  <h1>Hello Vue {{ username }}</h1>
  <h1 v-text="username"></h1>
  <p>안녕하세요 저는 {{ user.name }}</p>
  <p>{{ user.job }}</p>
  <p>{{ user.age }}</p>
  <p v-html="button"></p>
  <p v-html="button2"></p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "scalper",
      year: 2021,
      user: {
        name: "scalper",
        job: "programmer",
        age: 100,
      },
      button: "<button>click</button>",
      button2: `<button onclick='alert("hacking!!!")'>click</button>`,
    };
  },
};
</script>

<style></style>
