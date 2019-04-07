<template>
    <div class="top">
        <div class="top-image" />
        <!-- <transition name="zoom-out-left"> -->
            <h1 class="top-heading">
                72nd<br>
                Nagata<br>
                Festival
            </h1>
        <!-- </transition> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
     
        }
    }
    
}
</script>

<style lang="scss" scoped>
.top {
    &-image {
        &::before {
            content: "";
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -10;
            height: 100vh;
            width: 100%;
            background: url(../assets/top_image.png) center/cover no-repeat;
        }
    }
    &-heading {
        margin-top: 35px;
        font-size: 50px;
        line-height: 85px;
        font-family: "Anton", sans-serif;
        color: #fafafa;

        transform: translateX(1000px);
        animation: zoom-out-left 0.2s ease 2s 1 normal forwards running;
    }
}

@keyframes zoom-out-left {
    0% {
        transform: translateX(1000px);
        font-size: 500px;
    }
    100% {
        transform: translateX(0);
        font-size: 50px;
    }
}
// .zoom-out-left {
//     &-enter-active {
//         transition: all .1s ease;
//     }
//     &-enter {
//         transform: translateX(5000px) scale(10);
//     }
//     &-enter-to {
//         transform: translateX(0) scale(1);
//     }
// }
</style>