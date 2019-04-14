<template>
  <router-link class="home-main-about-nav-link-item"
    :to="link"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
  }
}
</script>

<style lang="scss" scoped>
.home-main-about-nav-link-item {
  display: inline-block;
  text-align: center;
  height: 35px;
  width: 31%;
  line-height: 35px;
  font-size: 15px;
  @media ( min-width: 1000px ) {
    height: 45px;
    line-height: 45px;
    font-size: 20px;
  }
  // vertical-align: middle;
  background-color: $gray;
  color: $white;
  text-decoration: none;
  transition: background-color 0.2s;
  &:hover {
    background-color: $accent;
  }
}
</style>
