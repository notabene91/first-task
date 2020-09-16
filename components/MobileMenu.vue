<template>
  <div class="mobile-menu">
    <nuxt-link v-for="food in menu" :key="food.id" to="/" class="mobile-menu__item">
      <img :src="food.photo_url" :alt="food.name" class="mobile-menu__image">
      <p class="mobile-menu__text">
        {{ food.category_name }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('menu/fetchMenu')
  },
  computed: {
    menu () {
      return this.$store.getters['menu/getMenu']
    }
  }
}
</script>

<style scoped>
  .mobile-menu {
    display: grid;
    border-top: 1px solid #383838;
    padding-top: 10px;
  }
  .mobile-menu__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    padding: 6px 10px;
  }
  .mobile-menu__image {
    width: 118px;
    height: 68px;
    object-fit: contain;
    margin-bottom: 5px;
  }
  .mobile-menu__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #4E5460;
  }
  @media screen and (max-width: 768px) {
    .mobile-menu {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 550px) {
    .mobile-menu {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
