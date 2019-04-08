<template>
    <div id="home-main">
        <MenuMain />
        <HomeTop />
        <!-- <HomeHeader /> -->
        <!-- <HomeMain /> -->
        <!-- <Footer /> -->
    </div>
</template>

<script>
// import HomeHeader from "../components/home/HomeHeader.vue"
// import HomeMain from "../components/home/HomeMain.vue"
// import HomeHeader from "../components/home/HomeHeader.vue"
import MenuMain from"../components/MenuMain.vue"
import HomeTop from "../components/HomeTop.vue"

export default {
    components: {
        MenuMain,
        HomeTop,
    }
}
</script>
