<template>
    <div id="home-main">
        <MenuComponent />
        <HomeHeader />
        <HomeMain />
        <!-- <Footer /> -->
    </div>
</template>

<script>
// import HomeHeader from "../components/home/HomeHeader.vue"
// import HomeMain from "../components/home/HomeMain.vue"
// import HomeHeader from "../components/home/HomeHeader.vue"
import MenuComponent from"../components/MenuComponent.vue"
import HomeHeader from "../components/HomeHeader.vue"
import HomeMain from "../components/HomeMain.vue"

export default {
    components: {
        MenuComponent,
        HomeHeader,
        HomeMain,
    }
}
</script>
