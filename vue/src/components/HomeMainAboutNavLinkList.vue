<template>
  <div class="home-main-about-nav-link-list">
    <HomeMainAboutNavLinkItem
      v-for="textAndLink in textAndLinkList" :key="textAndLink.id"
        :text="textAndLink.text"
        :link="textAndLink.link"
    />
  </div>
</template>

<script>
import HomeMainAboutNavLinkItem from "./HomeMainAboutNavLinkItem.vue"

export default {
  props: {
    textAndLinkList: Array,
  },
  components: {
    HomeMainAboutNavLinkItem,
  },
}
</script>

<style lang="scss" scoped>
.home-main-about-nav-link-list {
  display: flex;
  // height: 35px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
</style>
