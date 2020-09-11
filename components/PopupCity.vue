<template>
  <div class="popup__content">
    <h2 class="popup__title">
      Выберите город
    </h2>
    <img src="../static/close.svg" alt="Кнопка закрыть." class="popup__close-btn" @click="toggleCityPopup">
    <ul class="popup__list">
      <li class="popup__city">
        <nuxt-link to="/" class="link popup__link">
          Владивосток
        </nuxt-link>
      </li>
      <li class="popup__city">
        <nuxt-link to="/" class="link popup__link">
          Владивосток
        </nuxt-link>
      </li>
      <li class="popup__city">
        <nuxt-link to="/" class="link popup__link">
          Владивосток
        </nuxt-link>
      </li>
      <li class="popup__city">
        <nuxt-link to="/" class="link popup__link">
          Владивосток
        </nuxt-link>
      </li>
      <li class="popup__city">
        <nuxt-link to="/" class="link popup__link">
          Владивосток
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

  methods: {
    toggleCityPopup () {
      this.$store.commit('header/toggleCityPopup')
    }
  }
}
</script>
<style scoped>
  .popup__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      padding: 20px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25%;
      box-sizing: border-box;
      border-radius: 8px;
      z-index: 10;
  }
    .popup__title {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #4E5460;
      margin-bottom: 30px;
    }
    .popup__close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      border: none;
      cursor: pointer;
    }
    .popup__close-btn:hover {
      opacity: .7;
    }
    .popup__list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      font-size: 20px;
      line-height: 24px;
    }
    .popup__city {
      margin-bottom: 15px;
    }
    .popup__link {
      color: #0d0d0e;
    }
</style>
