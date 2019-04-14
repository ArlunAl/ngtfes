<template>
    <div class="home-header-image">
        <home-header-heading />
    </div>
</template>

<script>
import HomeHeaderHeading from "./HomeHeaderHeading.vue";

export default {
    components: {
        HomeHeaderHeading,
    }
}
</script>

<style lang="scss" scoped>
.home-header-image {
    overflow: hidden;
    background: none;
    height: 100vh;
    &::before {
        content: "";
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -10;
        width: 100%;
        height: 100vh;
        background: url(../assets/home_header_image.png) center/cover no-repeat;
    }
}
</style>
