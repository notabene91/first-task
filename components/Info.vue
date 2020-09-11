<template>
  <div class="info">
    <img src="../static/subtract.svg" class="info__icon" alt="Выбрать город." @click="toggleCityPopup">
    <img src="../static/profile.svg" class="info__icon" alt="Войти в профиль." @click="toggleProfilePopup">
    <nuxt-link class="link info__link" to="/">
      <span class="info__price">{{ cart | zero }} ₽</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  filters: {
    zero (value) {
      if (value === '') {
        return '0 '
      }
    }
  },
  computed: {
    cart () {
      return this.$store.getters['header/getCart']
    }
  },
  beforeMount () {
    this.$store.dispatch('header/fetchCart')
  },
  methods: {
    toggleCityPopup () {
      this.$store.commit('header/toggleCityPopup')
    },
    toggleProfilePopup () {
      this.$store.commit('header/toggleProfilePopup')
    }
  }
}
</script>

<style  scoped>
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info__icon {
    margin-right: 40px;
    cursor: pointer;
  }

  .info__icon:last-of-type {
    margin-right: 0;
  }

  .info__price {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    position: relative;
    color:#83CD26;
    margin-left: 74px;
  }
  .info__price::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(../static/basket.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 24px;
    height: 24px;
    transform: translate(-180%,4%);
  }

@media screen and (max-width: 1750px) {
  .info__price {
    font-size: 18px;
    line-height: 1;
  }
}
</style>
