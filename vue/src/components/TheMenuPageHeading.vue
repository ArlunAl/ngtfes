<template>
  <h4 class="the-menu-page-heading">
    {{ text }}
  </h4>
</template>

<script>
export default {
  props: {
    text: String,
  }
}
</script>

<style lang="scss" scoped>
.the-menu-page-heading {
  margin-top: 30px;
  font-size: 25px;
  color: $white;
}
</style>
