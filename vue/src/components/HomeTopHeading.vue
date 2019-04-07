<template>
    <h1 class="home-top-heading">
        72nd<br>
        Nagata<br>
        Festival
    </h1>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.home-top-heading {
    margin-top: 35px;
    line-height: 85px;
    font-size: 50px;
    font-family: $Anton;
    color: $white;
    transform: translateX(1000px);
    animation-name: slide-zoom-out-mobile;
    animation-delay: 2s;
    animation-duration: .2s;
    animation-fill-mode: forwards;
    // QUESTION: 1プロパティにつき1つメディアクエリ書いたほうがいいのか？長くなるか？
    @media (min-width: 760px) {
        margin-top: 40px;
        line-height: 130px;
        font-size: 90px;
        animation-name: slide-zoom-out-tablet;
    }
    @media (min-width: 1000px) {
        text-align: right;
        line-height: 160px;
        font-size: 120px;
        animation-name: slide-zoom-out-pc;
    }
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

// margin-top: 35px;
// font-size: 50px;
// line-height: 85px;
// font-family: "Anton", sans-serif;
// color: #fafafa;

// transform: translateX(1000px);
// animation: zoom-out-left 0.2s ease 2s 1 normal forwards running;
/* slide-zoom-out */
</style>
