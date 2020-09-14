<template>
  <div class="header">
    <img :src="logo" alt="Логотип." class="logo header__logo">
    <nav>
      <navigation class="header__navigation" />
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
  },
  async fetch () {
    await this.$store.dispatch('header/fetchSettings')
  },
  computed: {
    logo () {
      return this.$store.getters['header/getLogo']
    }
  }
}
</script>

<style  scoped>
  .header {
    width: 100%;
    min-height: 112px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 85px;
  }
  .header__navigation {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    width: 616px;
  }
  .header__logo {
    margin-right: 102px;
  }
  @media screen and (max-width: 1570px) {
    .header{
      padding: 0 40px;
    }
  }
</style>
