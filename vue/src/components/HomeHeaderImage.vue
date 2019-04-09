<template>
    <div class="home-header-image" />
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.home-header-image {
    &::before {
        content: "";
        display: block;
        position: fixed;
        header: 0;
        left: 0;
        z-index: -10;
        height: 100vh;
        width: 100%;
        background: url(../assets/home_header_image.png) center/cover no-repeat;
    }
}
</style>
