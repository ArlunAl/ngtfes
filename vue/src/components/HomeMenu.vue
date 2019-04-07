<template>
    <MenuIcon 
        :isOpen      ="isOpen"
        :toggleIsOpen="toggleIsOpen"
    />
</template>

<script>
import MenuIcon from "./HomeMenuIcon.vue"

export default {
    data() {
        return {
            isOpen: false,
        }
    },
    components: {
        MenuIcon,
    },
    methods: {
        toggleIsOpen() {
            this.isOpen = !this.isOpen
        }
    },
}
</script>
