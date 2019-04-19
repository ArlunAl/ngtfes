<template>
  <tr class="home-main-about-date-table-line">
    <td class="table-data">
      <span class="table-heading">
        {{ line.heading }}
      </span>
    </td>
    <td class="table-data">
      <span class="accent">{{ line.month }}</span>月<span class="accent">{{ line.date }}</span>日({{ line.day }})<br>
      <span>
        {{ line.time }}
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    line: Object,
  }
}
</script>

<style lang="scss" scoped>
.home-main-about-date-table-line {
  font-size: 20px;
  &:not(:first-child) {
    border-top: solid 2px $black;
  }
}
.table-data {
  padding: 20px 40px;
  vertical-align: middle;
  text-align: center;
  &:not(:first-child) {
    text-align: left;
    border-left: solid 2px $black;
  }
}
.accent {
  font-size: 42px;
  color: $accent;
}
</style>
