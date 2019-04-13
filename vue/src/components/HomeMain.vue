<template>
  <div class="home-main">
    <div class="home-main-box">
      <HomeMainAbout class="home-main-child" />
      <HomeMainPayment class="home-main-child" />
    </div>
  </div>
</template>

<script>
import HomeMainAbout   from "./HomeMainAbout.vue"
import HomeMainPayment from "./HomeMainPayment.vue"
// import BaseThemeHeading from "./BaseThemeHeading.vue";
// import HomeMainAboutDateTable from "./HomeMainAboutDateTable.vue"

export default {
  components: {
    HomeMainAbout,
    HomeMainPayment,
    // BaseThemeHeading,
    // HomeMainAboutDateTable,
  }
};
</script>

<style lang="scss" scoped>
.home-main {
  overflow: hidden;
  background-color: $white;
  &-box {
    margin: 40px 20px 700px;
    @media (min-width: 376px) {
      margin-left: auto;
      margin-right: auto;
      width: 335px;
    }
    @media (min-width: 480px) {
      width: 420px;
    }
    @media (min-width: 600px) {
      width: 520px;
    }
    @media (min-width: 760px) {
      width: 700px;
    }
    @media (min-width: 1000px) {
      width: 900px;
      margin-top: 120px;
      // margin: 50px auto 60px auto;
      // padding: 50px 20px;
    }
    font-family: $normal-font;
  }
  &-child {
    &:not(:first-child) {
      margin-top: 115px;
      @media ( min-width: 1000px ) {
        margin-top: 180px;
      }
    }
  }
}
</style>


