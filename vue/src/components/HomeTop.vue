<template>
  <div class="home-top">
    <TopImage/>
    <TopHeading/>
  </div>
</template>

<script>
import TopHeading from "./HomeTopHeading.vue";
import TopImage from "./HomeTopImage.vue";

export default {
  components: {
    TopHeading,
    TopImage
  }
};
</script>

<style lang="scss" scoped>
// .HomeTopHeading {
//     margin-top: 35px;
//     @media (min-width: 760px) {
//         margin-top: 40px;
//     }
// }
</style>