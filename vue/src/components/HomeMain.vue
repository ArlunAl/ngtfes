<template>
    <div class="home-main">
        <div class="home-main-box">
            <ThemeHeading 
                :heading="'About'"
                :desc   ="'長田高校文化祭について'"
            />
        </div>
    </div>
</template>

<script>
import ThemeHeading from "../common/ThemeHeading.vue"

export default {
    components: {
        ThemeHeading,
    },
}
</script>

<style lang="scss" scoped>
.home-main {
    overflow: hidden;
    background-color: $white;
    &-box {
        margin: 60px 20px 70px;
        @media (min-width: 376px) {
            margin: 120px auto 70px;
            width: 335px;
        }
        @media (min-width: 480px) {
            width: 420px;
        }
        @media (min-width: 600px) {
            width: 520px;
        }
        @media (min-width: 760px) {
            width: 700px;
        }
        @media (min-width: 1000px) {
            width: 900px;
            // margin: 50px auto 60px auto;
            // padding: 50px 20px;
        }
    }
}
</style>


