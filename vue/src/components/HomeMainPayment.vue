<template>
  <div class="home-main-payment">
    <BaseThemeHeading :heading="'Payment'" :desc="'金券について'"/>
    <div class="box">
      <div class="image-box">
        <img class="image" src="../assets/money_ticket.png" alt>
      </div>
      <div class="text-box">
        <BaseText 
          v-for="(text, i) in texts" :key="i" 
            :text="text"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        "1枚20円です。200円単位で購入することができます。",
        "返金は100円で、一般の方は当日12:00〜14:30の間に金券販売所で行います。",
        "校内生の返金は後日行いますので、当日返金はできません。再発行はできません。ご了承ください。",
        "この金券はデザインパートがデザインしてくれました！ぜひ柄に注目してみてください！"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin-top: 50px;
}
.image-box {
  float: right;
  margin-left: 15px;
  margin-bottom: 15px;
  @media ( min-width: 1000px ) {
    margin-left: 40px;
    margin-bottom: 40px;
    height: 200px;
  }
  width: 40%;
}
.image {
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
}
// .text-box {
//   width: 60%;
// }
</style>
