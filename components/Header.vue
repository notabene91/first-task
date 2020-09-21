<template>
  <div class="header">
    <div class="header__wrapper">
      <label class="header__checkbox">
        <input type="checkbox" class="header__input">
        <img
          v-if="!isDropdownShown"
          src="../static/hamburger.svg"
          alt="Открыть меню."
          class="header__icon"
          @click="toggleDropdown"
        >
        <img
          v-if="isDropdownShown"
          src="../static/close.svg"
          alt="Закрыть меню."
          class="header__icon"
          @click="toggleDropdown"
        >
        <img
          v-if="isDropdownShown"
          src="../static/phone.svg"
          alt="Позвонить."
          class="header__icon header__icon_phone"
        >
        <img
          v-if="isDropdownShown"
          src="../static/subtract_grey.svg"
          alt="Определить местоположение."
          class="header__icon header__icon_subtract"
          @click="toggleCityPopup"
        >
      </label>
      <nuxt-link to="/" class="header__link">
        <img v-if="!isDropdownShown" :src="logo" alt="Логотип." class="logo header__logo">
      </nuxt-link>
      <nav>
        <navigation class="header__navigation" />
      </nav>
    </div>
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
    },
    isDropdownShown () {
      return this.$store.getters['header/getDropdown']
    }
  },
  methods: {
    toggleCityPopup () {
      this.$store.commit('header/toggleCityPopup')
    },
    toggleDropdown () {
      this.$store.commit('header/toggleDropdown')
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
  align-items: center;
  padding: 0 85px;
  outline: none;
}
nav {
  display: flex;
  align-items: center;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__navigation {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 50px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.header__logo {
  margin-right: 102px;
}
.header__input {
  position: absolute;
  appearance: none;
}
.header__icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  margin-right: 36px;
}
.header__icon:last-of-type {
  margin-right: 0;
}
.header__icon_phone {
  width: 24px;
  height: 24px;
}
.header__icon_subtract {
  width: 24px;
  height: 24px;
}
.header__checkbox {
  display: none;
}
.header__link:focus {
  outline: none;
}
@media screen and (max-width: 1970px) {
  .header__navigation {
    grid-template-columns: repeat(6, 1fr);
  }
}
@media screen and (max-width: 1650px) {
  .header__navigation {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media screen and (max-width: 1570px) {
  .header {
    padding: 0 40px;
  }
  .header__logo {
    margin-right: 94px;
  }
}
@media screen and (max-width: 1370px) {
  .header__navigation {
    grid-template-columns: repeat(4, 1fr);
  }
  .header__navigation {
    grid-column-gap: 30px;
  }
}
@media screen and (max-width: 1170px) {
  .header__navigation {
    grid-template-columns: repeat(3, 1fr);
  }
  .header__logo {
    margin-right: 54px;
  }
}
@media screen and (max-width: 768px) {
  .header {
    min-height: 60px;
  }
  .header__logo {
    width: 94px;
    height: 28px;
    order: 2;
    margin-right: 0;
    transform: translate(50%, 0);
  }
  .header__wrapper {
    position: relative;
    width: 50%;
  }
  .header__link {
    position: absolute;
    right: 0;
  }
  .header__navigation {
    display: none;
  }
  .header__checkbox {
    display: flex;
    align-items: center;
  }
}
@media screen and (max-width: 550px) {
  .header {
    padding: 0 20px;
  }
}
</style>
