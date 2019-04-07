<template>
    <div class="home-top-image" />
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.home-top-image {
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
</style>
