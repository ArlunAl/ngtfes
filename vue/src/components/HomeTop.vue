<template>
    <div class="home-top">
        <TopImage />
        <TopHeading />
    </div>
</template>

<script>
import TopHeading from "./HomeTopHeading.vue"
import TopImage from "./HomeTopImage.vue"

export default {
    components: {
        TopHeading,
        TopImage,
    }
}
</script>

<style lang="scss" scoped>
</style>