<template>
  <div>
    <h1>Hello Vue</h1>

    <div v-for="(animal, animalIndex) in animals" :key="animalIndex">
      <h2>Animal ===> {{ animal.name }}</h2>
      <h3>food</h3>
      <ul>
        <li v-for="(food, foodIndex) in animal.food" :key="foodIndex">
          {{ food }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      animals: [
        {
          name: "monkey",
          size: "small",
          food: ["banana", "apple"],
        },
        {
          name: "mouse",
          size: "big",
          food: ["cheese", "kimchi"],
        },
        {
          name: "human",
          size: "medium",
          food: ["rice", "bread"],
        },
      ],
    };
  },
};
</script>

<style></style>
