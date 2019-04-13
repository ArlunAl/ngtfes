<template>
    <div class="the-menu-icon"
        @click="toggleIsOpen()"
    >
        <TheMenuIconBar :class="{ 'is-open': isOpen }" />
        <TheMenuIconBar :class="{ 'is-open': isOpen }" />
        <TheMenuIconBar :class="{ 'is-open': isOpen }" />
    </div>
</template>

<script>
import TheMenuIconBar from "./TheMenuIconBar.vue"

export default {
    props: {
        isOpen: Boolean,
        toggleIsOpen: Function,
    },
    components: {
        TheMenuIconBar,
    },
}
</script>

<style lang="scss" scoped>
// 下のコメントアウトされてるのよりは見やすい
// QUESTION:
// scopedを生かしてシンプルに書くことを意識してもいいかも？
// メンテ面倒くなる？
.the-menu-icon {
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 10;
    padding: 10px;
    width: 34px;
    height: 34px;
    &-bar:not(:first-child) {
        margin-top: 13px;
    }
}
.is-open {
    &:nth-child(1) {
        transform: translateY(-1px) rotate(45deg);
        width: 45px;
    }
    &:nth-child(2) {
        opacity: 0;
    }
    &:nth-child(3) {
        transform: translateY(1px) rotate(-45deg);
        width: 45px;
    }
}

// .the-menu-icon {
//     // HACK: 配置(マージン等)は親の責務では？
//     position: fixed;
//     right: 20px;
//     top: 20px;
//     z-index: 10;
//     padding: 10px;
//     width: 34px;
//     height: 34px;
//     &-bar {
//         // HACK: vue使っててもnth-childが冗長になるのかな？
//         //       もっと簡単に書きたい。
//         &:nth-child(1) {
//             // transform: rotate(0deg);
//             transform: rotate(0deg);
//             &.is-open {
//                 transform: translateY(-1px) rotate(45deg);
//                 width: 45px;
//             }
//         }
//         &:nth-child(2) {
//             margin-top: 13px;
//             opacity: 1;
//             &.is-open {
//                 // QUESTION: opacityの処理は重い？
//                 opacity: 0;
//             }
//         }
//         &:nth-child(3) {
//             margin-top: 13px;
//             &.is-open {
//                 transform: translateY(1px) rotate(-45deg);
//                 width: 45px;
//             }
//         }
//     }
// }
</style>
