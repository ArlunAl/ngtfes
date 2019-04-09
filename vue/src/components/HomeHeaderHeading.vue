<template>
    <transition name="slide-zoom-out" appear>
        <h1 class="home-header-heading">
            72nd<br>
            Nagata<br>
            Festival
        </h1>
    </transition>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.home-header-heading {
    // QUESTION: margin-header を 親に置くべきか、どうか、、、
    margin-top: 35px;
    line-height: 85px;
    font-size: 50px;
    font-family: $Anton;
    color: $white;
    // QUESTION: 1プロパティにつき1つメディアクエリ書いたほうがいいのか？長くなるか？
    @media (min-width: 760px) {
        margin-top: 40px;
        line-height: 130px;
        font-size: 90px;
    }
    @media (min-width: 1000px) {
        text-align: right;
        line-height: 160px;
        font-size: 120px;
    }
}
// アニメーションをまとめた。速度にどう出るか。
.slide-zoom-out-enter-active {
    transform: translateX(1000px);
    animation-name: slide-zoom-out-mobile;
    @media (min-width: 760px) {
        animation-name: slide-zoom-out-tablet;
    }
    @media (min-width: 1000px) {
        animation-name: slide-zoom-out-pc;
    }
    animation-delay: 2s;
    animation-duration: .2s;
    animation-fill-mode: forwards;
}

// HACK: コピペ祭り。どうにか減らせないものか
@keyframes slide-zoom-out-mobile {
    0% {
        transform: translateX(1000px);
        font-size: 500px;
    }
    100% {
        transform: translateX(0px);
        font-size: 50px;
    }
}
@keyframes slide-zoom-out-tablet {
    0% {
        transform: translateX(1000px);
        font-size: 500px;
    }
    100% {
        transform: translateX(0px);
        font-size: 90px;
    }
}
@keyframes slide-zoom-out-pc {
    0% {
        transform: translateX(-1000px);
        font-size: 500px;
    }
    100% {
        transform: translateX(0px);
        font-size: 120px;
    }
}
</style>
