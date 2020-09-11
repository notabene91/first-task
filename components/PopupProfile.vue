<template>
  <div class="popup__content">
    <h2 class="popup__title">
      Войти на сайт
    </h2>
    <img src="../static/close.svg" alt="Кнопка закрыть." class="popup__close-btn" @click="toggleProfilePopup">
    <form class="popup__form">
      <input id="phone" type="tel" class="input popup__input" placeholder="Телефон +7">
      <input id="pass" type="password" class="input popup__input" autocomplete="new-password" placeholder="Пароль">
      <button id="button__form" type="submit" class="button popup__button">
        Войти
      </button>
    </form>
    <nuxt-link to="/" class="link popup__link">
      Регистрация
    </nuxt-link>
    <nuxt-link to="/" class="link popup__link">
      Забыли пароль?
    </nuxt-link>
  </div>
</template>

<script>
export default {

  methods: {
    toggleProfilePopup () {
      this.$store.commit('header/toggleProfilePopup')
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
    min-height: 50%;
    width: 35%;
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

  .popup__input {
    width: 100%;
    height: 72px;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    color: #0d0d0e;
    border: 2px solid #4E5460;
    margin-bottom: 30px;
  }
  .popup__input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .popup__button {
    width: 100%;
    height: 72px;
    background-color: #4E5460;
    color: #fff;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    border: 0;
    margin-bottom: 30px;
  }
  .popup__button:hover {
    background-color: #83CD26;
    color: #fff;
  }
  .popup__button:active {
    background-color: #68B00C;
    color: #fff;
  }
  .popup__button:focus {
    outline: none;
  }
  .popup__link {
    text-decoration: underline;
    font-size: 20px;
    line-height: 24px;
    color: #0d0d0e;
    margin-bottom: 16px;
  }
  .popup__link:last-of-type {
    margin-bottom: 0;
  }
</style>
