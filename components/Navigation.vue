<template>
  <ul class="navigation__list">
    <li v-for="item in navigation" :key="item.id" class="navigation__item">
      <nuxt-link class="link navigation__link " to="/">
        {{ item.page_name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('navigation/fetchNavItems')
  },
  computed: {
    navigation () {
      return this.$store.getters['navigation/getNavItems']
    }
  }
}
</script>

<style scoped>
.navigation__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.header__navigation .navigation__item {
  display: flex;
  align-content: flex-end;
}
.footer__navigation .navigation__item {
  margin-right: 162px;
  margin-bottom: 24px;
}
.navigation__item:last-of-type {
  margin-right: 0;
}

@media screen and (max-width: 1750px) {
  .navigation__link {
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
  }
}
</style>
