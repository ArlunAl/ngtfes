<template>
  <div class="the-menu">
    <TheMenuIcon 
      :isOpen="isOpen" 
      :toggleIsOpen="toggleIsOpen"
    />

    <TheMenuPage
      :isOpen="isOpen"
      :toggleIsOpen="toggleIsOpen"
    />
  </div>
</template>

<script>
import TheMenuIcon from "./TheMenuIcon.vue";
import TheMenuPage from "./TheMenuPage.vue";

export default {
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    TheMenuIcon,
    TheMenuPage,
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
