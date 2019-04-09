<template>
  <div class="home-header">
    <HomeHeaderImage/>
    <!-- <HomeHeaderHeading/> -->
  </div>
</template>

<script>
// HACK: HomeHeaderImageというネーミングは良くないぞ、、。
// HomeHeaderImage が HomeHeaderHeading まで背負ってるからな
import HomeHeaderImage from "./HomeHeaderImage.vue";
// import HomeHeaderHeading from "./HomeHeaderHeading.vue";

export default {
  components: {
    HomeHeaderImage,
    // HomeHeaderHeading,
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