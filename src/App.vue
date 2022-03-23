<template>
  <div>
    <h1>Hello Vue</h1>
    <!-- <h2 v-if="showName">My name is {{ user.name }}</h2>
    <h2 v-else>이름을 보여 줄 수 없습니다</h2>
    <h2 v-if="user.age > 20">당신은 성인 입니다.</h2>
    <h2 v-else-if="user.age > 14 && user.age < 20">당신은 청소년 입니다.</h2>
    <h2 v-else>당신은 어린이 입니다.</h2> -->
    <h2 v-if="!showName">{{ user.name }} IF</h2>
    <h2 v-show="!showName">{{ user.name }} Show</h2>
    <ul>
      <template v-if="question === 'frontend'">
        <li>HTML은 재밌나요?</li>
        <li>CSS 재밌나요?</li>
        <li>Javascript 재밌나요?</li>
      </template>
      <template v-else>
        <li>Java 재밌나요?</li>
        <li>Python 재밌나요?</li>
        <li>C# 재밌나요?</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: "frontend",
      showName: true,
      user: {
        name: "scalper",
        age: 15,
        job: "programmer",
      },
    };
  },
};
</script>

<style></style>
