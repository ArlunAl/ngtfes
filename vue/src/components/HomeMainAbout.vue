<template>
  <div class="home-main-about">
    <BaseThemeHeading
      :heading="'About'"
      :desc="'長田高校文化祭について'"
    />
    <h4 class="home-main-about-sub-heading">
      第72回長田高校文化祭「<span class="home-main-about-sub-heading-highlight">HEAT BEAT</span>」開催決定。
    </h4>
    <HomeMainAboutDateTable/>
    <div class="home-main-about-text">
      <p>校内祭は生徒のみとなっておりますが、一般祭はどなたでもお越しいただけます。</p>
      <p>校内祭と一般祭では模擬店やステージ内容が変更されておりますので、ご注意ください。</p>
    </div>
    <div class="home-main-about-nav-list">
      <HomeMainAboutNav 
        v-for="aboutNavDatum in aboutNavData" :key="aboutNavDatum.id"
          :aboutNavDatum="aboutNavDatum"
      />
    </div>
  </div>
</template>

<script>
import BaseThemeHeading       from "./BaseThemeHeading.vue"
import HomeMainAboutDateTable from "./HomeMainAboutDateTable.vue"
import HomeMainAboutNav       from "./HomeMainAboutNav.vue"

export default {
  data() {
    return {
      aboutNavData: [
        {
          id: 0,
          heading: "校内祭",
          textAndLinkList: [
            { id: 0, text: "校内地図", link: "/" },
            { id: 1, text: "模擬店", link: "/" },
            { id: 2, text: "ステージ", link: "/" },
          ],
        },
        {
          id: 1,
          heading: "一般祭",
          textAndLinkList: [
            { id: 0, text: "校内地図", link: "/" },
            { id: 1, text: "模擬店", link: "/" },
            { id: 2, text: "ステージ", link: "/" },
          ],
        }
      ]
    }
  },
  components: {
    BaseThemeHeading,
    HomeMainAboutDateTable,
    HomeMainAboutNav,
  }
}
</script>

<style lang="scss" scoped>
.home-main-about {
  &-sub-heading {
    margin-top: 50px;
    font-size: 25px;
    &-highlight {
      color: $theme;
    }
  }
  &-date-table {
    margin-top: 30px;
  }
  &-text {
    margin-top: 30px;
    font-size: 15px;
    line-height: (5/3);
  }
  &-nav-list {
    margin-top: 30px;
    @media ( min-width: 1000px ) {
      margin-top: 60px;
    }
  }
}
</style>
