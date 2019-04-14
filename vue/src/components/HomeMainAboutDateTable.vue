<template>
  <table class="home-main-about-date-table">
    <HomeMainAboutDateTableLine 
      v-for="line in lines" :key="line.id"
        :line="line"
    />
  </table>
</template>

<script>
import HomeMainAboutDateTableLine from "./HomeMainAboutDateTableLine.vue"

export default {
  data() {
    return {
      lines: [
        { 
          id: 0,
          heading: "校内祭",
          month: 5, date: 10, day: "金",
          time: "9:40 - 15:30",
        },
        { 
          id: 1,
          heading: "一般祭",
          month: 5, date: 11, day: "土",
          time: "9:00 - 14:30",
        },
      ]
    }
  },
  components: {
    HomeMainAboutDateTableLine,
  }
}
</script>

<style lang="scss" scoped>
.home-main-about-date-table {
  border-collapse: collapse;
}

// // HACK: ひどい。みてられん。重複多い。多すぎる。
// .home-main-about-date-table {
//   font-size: 20px;
//   border-collapse: collapse;
//   // table-layout: fixed;
//   // width: 278px;
//   &-accent {
//     color: $accent;
//     font-size: 42px;
//   }
//   &-top {
//     &-left {
//       padding: 20px 40px;
//       &-div {
//         // height: 100%;
//         // width: 100%; 
//         display: inline;
//         // padding: 20px 40px;
//       }
//     }
//     &-right {
//       padding: 20px 40px;
//       border-left: solid 2px $black;
//       &-div {
//         // height: 100%;
//         // width: 100%; 
//         display: inline;
//         // padding: 20px 40px;
//       }
//     }
//   }
//   &-bottom {
//     border-top: solid 2px $black;
//     &-left {
//       padding: 20px 40px;
//       &-div {
//         // height: 100%;
//         // width: 100%; 
//         display: inline;
//         // padding: 20px 40px;
//       }
//     }
//     &-right {
//       padding: 20px 40px;
//       border-left: solid 2px $black;
//       &-div {
//         // height: 100%;
//         // width: 100%; 
//         display: inline;
//         // padding: 20px 40px;
//       }
//     } 
//   }
// }
</style>
