<template>
    <div class="home-menu-icon"
        @click="toggleIsOpen()"
    >
        <MenuIconBar :class="{ 'is-open': isOpen }" />
        <MenuIconBar :class="{ 'is-open': isOpen }" />
        <MenuIconBar :class="{ 'is-open': isOpen }" />
    </div>
</template>

<script>
import MenuIconBar from "./HomeMenuIconBar.vue"

export default {
    props: {
        isOpen: Boolean,
        toggleIsOpen: Function,
    },
    components: {
        MenuIconBar
    },
}
</script>

<style lang="scss" scoped>
.home-menu-icon {
    // HACK: 配置(マージン等)は親の責務では？
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 10;
    padding: 10px;
    width: 34px;
    height: 34px;
    &-bar {
        // HACK: vue使っててもnth-childが冗長になるのかな？
        //       もっと簡単に書きたい。
        &:nth-child(1) {
            // transform: rotate(0deg);
            transform: rotate(0deg);
            &.is-open {
                transform: translateY(-1px) rotate(45deg);
                width: 45px;
            }
        }
        &:nth-child(2) {
            margin-top: 13px;
            opacity: 1;
            &.is-open {
                opacity: 0;
            }
        }
        &:nth-child(3) {
            margin-top: 13px;
            &.is-open {
                transform: translateY(1px) rotate(-45deg);
                width: 45px;
            }
        }
    }
}
</style>
