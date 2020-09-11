<template>
  <div class="overlay" @click="overlayClick" />
</template>

<script>
export default {
  computed: {
    isShownProfile () {
      return this.$store.getters['header/getPopupProfile']
    },
    isShownCity () {
      return this.$store.getters['header/getPopupCity']
    }
  },
  methods: {
    toggleCityPopup () {
      this.$store.commit('header/toggleCityPopup')
    },
    toggleProfilePopup () {
      this.$store.commit('header/toggleProfilePopup')
    },
    overlayClick () {
      this.isShownCity ? this.toggleCityPopup() : this.toggleProfilePopup()
    }
  }
}
</script>

<style scoped>
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;
  }
</style>
