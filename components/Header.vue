<template>
  <div class="header">
    <img src="../static/logo.svg" alt="Логотип." class="header__logo">
    <nav class="header__navigation">
      <navigation />
    </nav>
    <info class="header__info" />
  </div>
</template>

<script>
import Navigation from './Navigation'
import Info from './Info'
export default {
  components: {
    navigation: Navigation,
    info: Info
  }
}
</script>

<style  scoped>
.header {
  max-width: 100%;
  height: 112px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 85px;
}
</style>
