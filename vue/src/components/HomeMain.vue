<template>
  <div class="home-main">
    <div class="home-main-box">
      <div class="home-main-about">
        <BaseThemeHeading 
          :heading="'About'" 
          :desc="'長田高校文化祭について'"
        />
        <p class="home-main-about-desc-first">
          第72回長田高校文化祭「<span class="home-main-about-desc-first-highlight">HEAT BEAT</span>」開催決定。
        </p>
        <HomeMainAboutDateTable />
      </div>
    </div>
  </div>
</template>

<script>
import BaseThemeHeading from "./BaseThemeHeading.vue";
import HomeMainAboutDateTable from "./HomeMainAboutDateTable.vue"

export default {
  components: {
    BaseThemeHeading,
    HomeMainAboutDateTable,
  }
};
</script>

<style lang="scss" scoped>
.home-main {
  overflow: hidden;
  background-color: $white;
  &-box {
    margin: 40px 20px 70px;
    @media (min-width: 376px) {
      margin: 40px auto 70px;
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
      margin: 120px auto 70px;
      // margin: 50px auto 60px auto;
      // padding: 50px 20px;
    }
    font-family: $normal-font;
  }
  &-about {
    &-desc {
      &-first {
        margin-top: 40px;
        font-size: 25px;
        &-highlight {
          color: $theme;
        }
      }
    }
    &-date {

    }
  }
}
</style>


