<template>
    <div id="app">
        <router-view />
        <!-- <HomeMain /> -->
    </div>
</template>

<script>
import HomeMain from "./container/HomeMain.vue"

export default {
    components: {
        HomeMain,
    }
}
</script>