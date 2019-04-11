<template>
  <div class="home-header">
    <!-- <HomeHeaderImage/> -->
    <HomeHeaderHeading/>
  </div>
</template>

<script>
// HACK: HomeHeaderImageというネーミングは良くないぞ、、。
// HomeHeaderImage が HomeHeaderHeading まで背負ってるからな
// - 構造を一つ浅くしたからこの問題は無くなるか、、、？
// import HomeHeaderImage from "./HomeHeaderImage.vue";
import HomeHeaderHeading from "./HomeHeaderHeading.vue";

export default {
  components: {
    // HomeHeaderImage
    HomeHeaderHeading,
  }
};
</script>

<style lang="scss" scoped>
.home-header {
  overflow: hidden;
  background: none;
  height: 100vh;
  &::before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
    width: 100%;
    height: 100vh;
    background: url(../assets/home_header_image.png) center/cover no-repeat;
  }
  &-heading {
    margin-top: 35px;
    @media (min-width: 760px) {
      margin-top: 40px;
    }
  }
}
</style>