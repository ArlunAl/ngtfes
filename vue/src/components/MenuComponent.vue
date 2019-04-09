<template>
  <div class="menu-main">
    <MenuIcon 
      :isOpen="isOpen" 
      :toggleIsOpen="toggleIsOpen"
    />
    <MenuPage
      :isOpen="isOpen"
      :toggleIsOpen="toggleIsOpen"
    />
  </div>
</template>

<script>
import MenuIcon from "./MenuIcon.vue";
import MenuPage from "./MenuPage.vue";

export default {
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    MenuIcon,
    MenuPage,
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
