<template>
    <div>
        <TopImage />
        <TopHeading />
    </div>
</template>

<script>
import TopHeading from "../components/TopHeading.vue"
import TopImage from "../components/TopImage.vue"

export default {
    data() {
        return {
     
        }
    },
    components: {
        TopHeading,
        TopImage,
    }
}
</script>

<style lang="scss" scoped>
// .zoom-out-left {
//     &-enter-active {
//         transition: all .1s ease;
//     }
//     &-enter {
//         transform: translateX(5000px) scale(10);
//     }
//     &-enter-to {
//         transform: translateX(0) scale(1);
//     }
// }
</style>