<template>
    <div id="home">
        <HomeMenu />
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
import HomeMenu from"../components/HomeMenu.vue"
import HomeTop from "../components/HomeTop.vue"

export default {
    components: {
        HomeMenu,
        HomeTop,
    }
}
</script>