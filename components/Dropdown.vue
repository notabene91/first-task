<template>
  <div class="dropdown">
    <img src="../static/profile_big.svg" alt="Профиль." class="dropdown__image" @click="toggleProfilePopup">
    <nav>
      <navigation class="dropdown__list" />
    </nav>
  </div>
</template>

<script>
import Navigation from './Navigation'
export default {
  components: {
    navigation: Navigation
  },
  methods: {
    toggleProfilePopup () {
      this.$store.commit('header/toggleProfilePopup')
    }
  }
}
</script>

<style scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-bottom: 1px solid #383838;
}
.dropdown__image {
  margin-bottom: 30px;
}
.dropdown__list {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #4E5460;
  overflow: auto;
  max-height: 340px;
}

</style>
