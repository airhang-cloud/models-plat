<template>
  <div class="inner-box">
    <a-button v-for="i in 100" :key="i">测试页面{{ i }}</a-button>
  </div>
</template>

<script>
export default {
  name: "demoOne",
};
</script>

<style scoped></style>
