<template>
  <transition name="slide">
    <div class="menu-page"
      v-show="isOpen"
      @click="toggleIsOpen()"
    >
      <transition name="slide-up">
        <div class="menu-page-box"
          v-show="isOpen"
        >
          <BaseThemeHeading 
            :heading="'Menu'"
            :desc   ="'メニューだよ。'"
          />

          <TheMenuPageLinkBox 
            :textAndLinks="textAndLinks1"
          />

          <TheMenuPageHeading
            :text="'校内祭'"
          />
          <TheMenuPageLinkBox 
            :textAndLinks="textAndLinks2"
          />

          <TheMenuPageHeading
            :text="'一般祭'"
          />
          <TheMenuPageLinkBox 
            :textAndLinks="textAndLinks3"
          />

          <!-- <ul class="menu-share_buttons">
            <li>
              <a target="blank" href="http://twitter.com/share?url=https://ngtfes.com">
                <img src="../imgs/sns_icon/twitter.png" alt="Twitter">
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.facebook.com/sharer/sharer.php?u=https://ngtfes.com">
                <img src="../imgs/sns_icon/facebook.png" alt="FaceBook">
              </a>
            </li>
            <li>
              <a target="blank" href="http://line.me/R/msg/text/?https://ngtfes.com">
                <img src="../imgs/sns_icon/line.png" alt="LINE">
              </a>
            </li>
          </ul> -->

        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
// HACK: TheMenu"Page".vue はよくない。プレフィクスとしてPageが使われている
// HACK: menu-page と manu-page-box を分けるべき
import TheMenuPageLinkBox from "./TheMenuPageLinkBox.vue"
import TheMenuPageHeading from "./TheMenuPageHeading.vue"
// import BaseThemeHeading   from "./BaseThemeHeading.vue"

export default {
  props: {
    isOpen: Boolean,
    toggleIsOpen: Function,
  },
  data() {
    return {
      textAndLinks1: [
        { id: 0, text: 'ホーム',      link: "/" },
        { id: 1, text: 'インタビュー', link: "/interview" },
      ],
      textAndLinks2: [
        { id: 0, text: "構内地図",    link: "/" },
        { id: 1, text: "模擬店",      link: "/" },
        { id: 2, text: "ステージ",    link: "/" },
      ],
      textAndLinks3: [
        { id: 0, text: "構内地図",    link: "/" },
        { id: 1, text: "模擬店",      link: "/" },
        { id: 2, text: "ステージ",    link: "/" },
      ],
    }
  },
  components: {
    TheMenuPageLinkBox,
    TheMenuPageHeading,
    // BaseThemeHeading,
  }
}
</script>

<style lang="scss" scoped>
// HACK:
// アニメーションがクソコードすぎる気がする、、、
// と言ってもどうリファクトしていいかもわからん、、、
.menu-page {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(../assets/menu_background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  user-select: none;
  &-box {
    margin: 38px auto 70px;
    width: 90%;
    @media (min-width: 376px) {
      width: 335px;
    }
    @media (min-width: 480px) {
      width: 420px;
    }
    @media (min-width: 600px) {
      width: 520px;
    }
    @media (min-width: 760px) {
      width: 700px;
    }   
  }
  &-link-box {
    margin-top: 22px
  }
}

// animation: slide 
.slide {
  &-enter-active {
    animation: slide 0.2s 0s forwards;
  }
  &-leave-active {
    animation: slide 0.2s 0s forwards reverse;
  }
}
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@media (min-width: 1000px) {
  @keyframes slide {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }    
}
// animation: slide-up
.slide-up {
  &-enter-active {
    animation: slide-up 0.2s ease 0s forwards;
  }
  &-leave-active {
    animation: slide-up 0.2s ease 0s forwards reverse;
  }
}
@keyframes slide-up {
}
@media (min-width: 1000px) {
  @keyframes slide-up {
    0% {
      transform: translateY(20px);
      // opacity: 0;
    }
    100% {
      transform: translateY(0px);
      // opacity: 1;
    }
  }
}
</style>
