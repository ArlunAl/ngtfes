<template>
  <div class="home-main-about-nav">
    <h5 class="heading">
      {{ aboutNavDatum.heading }}
    </h5>
    <HomeMainAboutNavLinkList 
      :textAndLinkList="aboutNavDatum.textAndLinkList"
    />
    <!-- {{ aboutNavDatum }} -->
  </div>
</template>

<script>
import HomeMainAboutNavLinkList from "./HomeMainAboutNavLinkList.vue"

export default {
  props: {
    aboutNavDatum: Object,
  },
  components: {
    HomeMainAboutNavLinkList,
  },
}
</script>

<style lang="scss" scoped>
.home-main-about-nav {
  &:not(:first-child) {
    margin-top: 25px;
    @media ( min-width: 1000px ) {
      margin-top: 40px;
    }
  }
}
.heading {
  font-size: 20px;
}
.home-main-about-nav-link-list {
  margin-top: 7px;
}
</style>
