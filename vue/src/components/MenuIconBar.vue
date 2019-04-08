<template>
    <!--  
        QUESITON: このコンポーネントは必要か？
        分割のしすぎな気もする 
    -->
    <div class="menu-icon-bar" />
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.menu-icon-bar {
    background-color: $theme;
    height: 2px;
    width: 34px;
    transition: all .2s;
    border-radius: 1px;
    transform-origin: left center;
}
</style>
