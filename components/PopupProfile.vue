<template>
  <div>
    <div v-if="currentTab == 'login'" class="popup__content">
      <h2 class="popup__title">
        Войти на сайт
      </h2>
      <img src="../static/close.svg" alt="Кнопка закрыть." class="popup__close-btn" @click="toggleProfilePopup">
      <form class="popup__form" @submit.prevent="submit()">
        <input
          id="phone"
          v-model="phone"
          v-mask="'+7(###)###-####'"
          type="tel"
          class="input popup__input"
          placeholder="Телефон +7"
        >
        <input
          id="pass"
          v-model="password"
          type="password"
          class="input popup__input"
          autocomplete="new-password"
          placeholder="Пароль"
        >
        <div v-if="error !== ''" class="popup__error">
          <p class="popup__error-msg">
            {{ error }}
          </p>
        </div>
        <button id="button__form" type="submit" class="button popup__button">
          Войти
        </button>
      </form>
      <p class="link popup__link" @click="swap('registration')">
        Регистрация
      </p>
      <p class="link popup__link" @click="swap('resetPassword')">
        Забыли пароль?
      </p>
    </div>
    <div v-else-if="currentTab == 'registration'" class="popup__content">
      <h2 class="popup__title">
        Регистрация
      </h2>
      <img src="../static/close.svg" alt="Кнопка закрыть." class="popup__close-btn" @click="toggleProfilePopup">
      <form class="popup__form" @submit.prevent="submit()">
        <input
          id="phone"
          v-model="phone"
          v-mask="'+7(###)###-####'"
          type="tel"
          class="input popup__input"
          placeholder="Телефон +7"
        >
        <input
          id="pass"
          v-model="password"
          type="password"
          class="input popup__input"
          autocomplete="new-password"
          placeholder="Пароль"
        >
        <input
          id="pass_replay"
          v-model="passwordReplay"
          type="password"
          class="input popup__input"
          autocomplete="new-password"
          placeholder="Повторить пароль"
        >
        <div v-if="error !== ''" class="popup__error">
          <p class="popup__error-msg">
            {{ error }}
          </p>
        </div>
        <label class="checkbox">
          <input type="checkbox" class="checkbox__hidden" required>
          <span class="checkbox__pseudo" />
          <p class="checkbox__title">
            Я ознакомлен и согласен с условиями использования и обработки моих <nuxt-link
              to="/privacy"
              class="link checkbox__privacy"
            > персональных данных</nuxt-link>
          </p>
        </label>
        <button id="button__form" type="submit" class="button popup__button">
          Получить код
        </button>
      </form>
      <p class="link popup__link" @click="swap('login')">
        Авторизация
      </p>
    </div>
    <div v-if="currentTab == 'resetPassword'" class="popup__content">
      <h2 class="popup__title">
        Забыли пароль?
      </h2>
      <img src="../static/close.svg" alt="Кнопка закрыть." class="popup__close-btn" @click="toggleProfilePopup">
      <form class="popup__form" @submit.prevent="submit()">
        <input
          id="phone"
          v-model="phone"
          v-mask="'+7(###)###-####'"
          type="tel"
          class="input popup__input"
          placeholder="Телефон +7"
        >
        <div v-if="error !== ''" class="popup__error">
          <p class="popup__error-msg">
            {{ error }}
          </p>
        </div>
        <button id="button__form" type="submit" class="button popup__button">
          Отправить код
        </button>
      </form>
      <p class="link popup__link" @click="swap('login')">
        Назад
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 'login',
      phone: '',
      password: '',
      passwordReplay: '',
      requestCode: '',
      error: ''
    }
  },
  methods: {
    toggleProfilePopup () {
      this.$store.commit('header/toggleProfilePopup')
    },
    swap (tab) {
      this.currentTab = tab
    },
    async submit () {
      const response = this.$store.getters['user/getUserData']
      this.error = ''
      const { phone, password, passwordReplay } = this

      if (this.currentTab === 'login') {
        await this.$store.dispatch('user/login', {
          phone, password
        })
        this.error = response.code === 1 ? '' : response.msg
      }

      if (this.currentTab === 'registration') {
        await this.$store.dispatch('user/registration', {
          phone,
          password,
          passwordReplay
        })
        this.error = response.code === 1 ? '' : response.msg
      }

      if (this.currentTab === 'resetPassword') {
        await this.$store.dispatch('user/resetPass',
          phone
        )
      }
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
    width: 35%;
    box-sizing: border-box;
    border-radius: 8px;
    z-index: 10;
}
  .popup__form {
    width: 75%;
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
    font-size: 20px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    color: #0d0d0e;
    border: 2px solid #4E5460;
    margin-bottom: 30px;
  }
  .popup__error {
    margin-bottom: 20px;
    color:red;
  }
  .popup__error-msg {
    text-align: center;
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
    cursor: pointer;
  }
  .popup__button:hover {
    transition: 0.2s linear;
    background-color: #83CD26;
    color: #fff;
  }
  .popup__button:active {
    background-color: #68B00C;
    color: #fff;
  }
  .popup__button:focus {
    outline: none;
    border: 0;
  }
  .popup__link {
    text-decoration: underline;
    font-size: 20px;
    line-height: 24px;
    color: #0d0d0e;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .popup__link:last-of-type {
    margin-bottom: 0;
  }
  .checkbox {
    position: relative;
    display: flex;
    width: 100%;
    font-size: 20px;
    line-height: 21px;
    color: #0d0d0e;
    padding-left: 35px;
    margin-bottom: 30px;
  }
  .checkbox__hidden {
    position: absolute;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .checkbox__pseudo {
    position:absolute ;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
    border: 2px solid #4E5460;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .checkbox__privacy {
    color: #0d0d0e;
    text-decoration: underline;
  }
  .checkbox__hidden:checked + .checkbox__pseudo {
    background-color: #83CD26;
    border-color: #0d0d0e;
  }
  @media screen and (max-width: 768px) {
      .popup__content {
        width: 75%;
      }
      .popup__input {
        height: 42px;
        border-radius: 8px;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1;
      }
      .popup__button {
        height: 42px;
        border-radius: 8px;
        font-size: 16px;
        line-height: 1;
      }
      .popup__link {
        font-size: 16px;
        line-height: 18px;
      }
       .checkbox {
        font-size: 16px;
        line-height: 18px;
      }
    }
</style>
