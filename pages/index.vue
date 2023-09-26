<template>
  <div>
    <div class="landing" :class="{ 'dark' : darkSide }">
      <div class="headers">
        <h1 class="header1">Welcome to the website of</h1>
        <h1 class="header2">Swapi Graphql</h1>
      </div>
      </div>
    <div class="sabers">
      <p>Ignite Your Saber</p>
      <Lightsaber></Lightsaber>
      <Lightsaber color="red" style="transform: rotate(180deg);"></Lightsaber>
    </div>
    <h1>Project Information</h1>
  </div>
</template>

<script setup>
const darkSide = ref(true)
</script>

<style scoped>

.headers {
  font-family: serif;
}
.header1 {
  font-weight: 400;
}
.header2 {
  color: gold;
  font-weight: 900;
  margin-bottom: 100px;
}

.sabers {
  @apply text-center;
}
</style>
