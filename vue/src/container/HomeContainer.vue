<template>
    <div id="home-main">
        <MenuComponent />
        <HomeHeader />
        <!-- <HomeMain> -->
        <!-- <HomeHeader /> -->
        <!-- <HomeMain /> -->
        <!-- <Footer /> -->
    </div>
</template>

<script>
// import HomeHeader from "../components/home/HomeHeader.vue"
// import HomeMain from "../components/home/HomeMain.vue"
// import HomeHeader from "../components/home/HomeHeader.vue"
import MenuComponent from"../components/MenuComponent.vue"
import HomeHeader from "../components/HomeHeader.vue"

export default {
    components: {
        MenuComponent,
        HomeHeader,
    }
}
</script>
