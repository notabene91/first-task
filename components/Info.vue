<template>
  <div class="info">
    <img src="../static/subtract.svg" class="info__icon" alt="Выбрать город." @click="toggleCityPopup">
    <img src="../static/profile.svg" class="info__icon" alt="Войти в профиль." @click="toggleProfilePopup">
    <nuxt-link class="link info__link" to="/">
      <img v-if="!isDropdownShown" src="../static/basket.svg" alt="Корзина" class="info__card">
      <span v-if="isDropdownShown" class="info__price_mobile">{{ cart | zero }} ₽</span>
      <span class="info__price" @click="clearCart()">{{ sum }} {{ curr }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('cart/fetchCart')
  },
  computed: {
    cart () {
      return this.$store.getters['cart/getCart']
    },
    isDropdownShown () {
      return this.$store.getters['header/getDropdown']
    },
    sum () {
      if (this.cart.details !== '') {
        return this.cart.details.data.total.subtotal
      } else {
        return '0 '
      }
    },
    curr () {
      if (this.cart.details !== '') {
        return this.cart.details.data.total.curr
      } else {
        return '₽'
      }
    }
  },
  methods: {
    toggleCityPopup () {
      this.$store.commit('header/toggleCityPopup')
    },
    toggleProfilePopup () {
      this.$store.commit('header/toggleProfilePopup')
    },
    clearCart () {
      this.$store.dispatch('cart/clearCart')
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
  .info__icon:last-of-type{
    margin-right: 30px;
  }
  .info__link {
    display: flex;
    align-items: center;
  }
  .info__price {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-left: 12px;
    color:#83CD26;
  }
  .info__price_mobile {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color:#83CD26;
  }
  .info__card {
    width: 24px;
    height: 24px;
  }

@media screen and (max-width: 1750px) {
  .info__price {
    font-size: 18px;
    line-height: 1;
  }
}
@media screen and (max-width: 768px) {
  .info__icon {
    display: none;
  }
  .info__price {
    display: none;
  }
}
</style>
