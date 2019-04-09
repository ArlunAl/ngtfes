<template>
  <div class="home-Header">
    <HomeHeaderImage/>
    <HomeHeaderHeading/>
  </div>
</template>

<script>
import HomeHeaderImage from "./HomeHeaderImage.vue";
import HomeHeaderHeading from "./HomeHeaderHeading.vue";

export default {
  components: {
    HomeHeaderImage,
    HomeHeaderHeading,
  }
};
</script>

<style lang="scss" scoped>
// .HomeHeaderHeading {
//     margin-Header: 35px;
//     @media (min-width: 760px) {
//         margin-Header: 40px;
//     }
// }
</style>