<template>
    <div id="home-main">
        <TheMenu />
        <HomeHeader />
        <HomeMain />
        <!-- <Footer /> -->
    </div>
</template>

<script>
// import HomeHeader from "../components/home/HomeHeader.vue"
// import HomeMain from "../components/home/HomeMain.vue"
// import HomeHeader from "../components/home/HomeHeader.vue"
import TheMenu    from "../components/TheMenu.vue"
import HomeHeader from "../components/HomeHeader.vue"
import HomeMain   from "../components/HomeMain.vue"

export default {
    components: {
        TheMenu,
        HomeHeader,
        HomeMain,
    }
}
</script>
