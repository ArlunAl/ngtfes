<template>
  <tbody class="home-main-about-date-table">
    <tr class="home-main-about-date-table-top"
    >
      <td class="home-main-about-date-table-top-left"
        align="center"
      >
        <div class="home-main-about-date-table-top-left-div">
          校内祭
        </div>
      </td>
      <td class="home-main-about-date-table-top-right"
        align="center"
      >
        <div class="home-main-about-date-table-top-right-div">
          <div>
            <span class="home-main-about-date-table-accent">5</span>月<!--
         --><span class="home-main-about-date-table-accent">10</span>日(金)
          </div>
          <div>9:40 - 15:30</div>
        </div>
      </td>
    </tr>
    <tr class="home-main-about-date-table-bottom">
      <td class="home-main-about-date-table-bottom-left"
        align="center"
      >
        <div class="home-main-about-date-table-bottom-left-div">一般祭</div>
      </td>
      <td class="home-main-about-date-table-bottom-right"
        align="center"
      >
        <div class="home-main-about-date-table-bottom-right-div">
          <div>
            <span class="home-main-about-date-table-accent">5</span>月<!--
         --><span class="home-main-about-date-table-accent">11</span>日(土)
          </div>
          <div>9:00 - 14:30</div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.home-main-about-date-table {
  font-size: 20px;
  border-collapse: collapse;
  // table-layout: fixed;
  // width: 278px;
  &-accent {
    color: $accent;
    font-size: 42px;
  }
  &-top {
    &-left {
      padding: 20px 40px;
      &-div {
        // height: 100%;
        // width: 100%; 
        display: inline;
        // padding: 20px 40px;
      }
    }
    &-right {
      padding: 20px 40px;
      border-left: solid 2px $black;
      &-div {
        // height: 100%;
        // width: 100%; 
        display: inline;
        // padding: 20px 40px;
      }
    }
  }
  &-bottom {
    border-top: solid 2px $black;
    &-left {
      padding: 20px 40px;
      &-div {
        // height: 100%;
        // width: 100%; 
        display: inline;
        // padding: 20px 40px;
      }
    }
    &-right {
      padding: 20px 40px;
      border-left: solid 2px $black;
      &-div {
        // height: 100%;
        // width: 100%; 
        display: inline;
        // padding: 20px 40px;
      }
    } 
  }
}
</style>
