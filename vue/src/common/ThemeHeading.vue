<template>
    <div class="theme-heading">
        <h3 class="theme-heading-heading">
            {{ heading }}
        </h3>
        <span class="theme-heading-desc">
            {{ desc }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        heading: String,
        desc: String,
    },
}
</script>

<style lang="scss" scoped>
.theme-heading {
    color: $theme;
    &-heading {
        font-size: 50px;
        @media (min-width: 1000px) {
            font-size: 70px;
        }
        font-family: $Anton;
    }
    &-desc {
        display: inline-block;
        margin-top: 2px;
        font-size: 15px;
        @media (min-width: 1000px) {
            font-size: 20px;
        }
    }
}
</style>
