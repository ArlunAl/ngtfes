<template>
  <div class="base-text">
    <p 
      v-for="(line, i) in texts" :key="i"
    >
        {{ line }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  computed: {
    texts() {
      return this.text.split("\n")
    }
  },
}
</script>

<style lang="scss" scoped>
.base-text {
  font-size: 15px;
  line-height: 1.5;
  &:not(:first-child) {
    margin-top: 20px;
  }
}
</style>