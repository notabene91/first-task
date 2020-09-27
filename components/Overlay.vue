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
    },
    isShownDetails () {
      return this.$store.getters['card/getDetails']
    }
  },
  methods: {
    toggleCityPopup () {
      this.$store.commit('header/toggleCityPopup')
    },
    toggleProfilePopup () {
      this.$store.commit('header/toggleProfilePopup')
    },
    toggleDetailsPopup () {
      this.$store.commit('card/toggleDetails')
    },
    overlayClick () {
      if (this.isShownCity) {
        this.toggleCityPopup()
      } else if (this.isShownProfile) {
        this.toggleProfilePopup()
      } else if (this.isShownDetails) {
        this.toggleDetailsPopup()
      }
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
