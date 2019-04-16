<template>
  <div class="home-main-b1-grand-prix">
    <BaseThemeHeading 
      :heading="'B1 Grand Prix'"
      :desc   ="'B1グランプリ'"
    />
    <div class="box">
      <BaseText 
        v-for="(text, i) in texts" :key="i"
          :text="text"
      />
      <p class="highlight">
        <span class="highlight-text">見事1位となった団体には豪華商品あり！</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        "第72回文化祭では、来場者のみなさまの投票と文化祭スタッフの採点によって、最も満足度の高い模擬店を学年ごとに決定します。",
        "金券付属の「B1グランプリ投票権」を校内に設置されている投票箱に入れるだけで投票完了となります。",
        "皆さま、奮ってご投票ください！",
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-main-b1-grand-prix {

}
.box {
  margin-top: 50px;
}
.highlight {
  margin-top: 20px;
  &-text {
    font-size: 20px;
    border-bottom: 3px dotted $accent;
  }
}
</style>
