<template>
    <div class="menu-page-link-box">
        <ul class="menu-page-link-box-list">
            <li class="menu-page-link-box-item"
                v-for="textAndLink in textAndLinks" :key="textAndLink.id"
                :style="{ width: linkWidthPer }"
            >   
                <router-link class="menu-page-link-box-item-link"
                    :to="textAndLink.link"
                >
                    {{ textAndLink.text }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        textAndLinks: Array,
    },
    computed: {
        linkWidthPer() {
            return (100 / this.textAndLinks.length) + "%"
        }
    },
}
</script>

<style lang="scss" scoped>
.menu-page-link-box {
    &-list {
        list-style: none;
    }
    &-item {
        display: inline-block;
        &-link {
            display: inline-block;
            border: solid 1px $white;
            padding: 22px 0px;
            width: 100%;
            font-size: 20px;
            text-align: center;
            text-decoration: none;
            color: $white;
            transition: 0.2s;
            &:hover {
                background-color: $accent;
            }
        }
    }
}
</style>
