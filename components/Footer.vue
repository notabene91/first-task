<template>
  <div class="footer">
    <div class="footer__top">
      <img :src="logo" alt="Логотип." class="logo footer__logo">
      <nav>
        <navigation class="footer__navigation" />
      </nav>
    </div>
    <div class="footer__bottom">
      <div class="footer__phone-section">
        <h3 class="footer__heading">
          Телефон доставки:
        </h3>
        <p class="footer__phone">
          {{ settings.phone }}
        </p>
        <p class="footer__copyright">
          &#169; 2015 — {{ new Date().getFullYear() }}
        </p>
      </div>
      <div class="footer__social">
        <h3 class="footer__heading">
          Мы в социальных сетях
        </h3>
        <div class="footer__icons">
          <a href="" target="_blank" class="link footer__link">
            <img src="../static/vk.svg" alt="Вк." class="footer__icon footer__icon_social">
          </a>
          <a href="" class="link footer__link">
            <img src="../static/instagram.svg" alt="Инстаграм." class="footer__icon footer__icon_social">
          </a>
        </div>
      </div>
      <div class="footer__app">
        <h3 class="footer__heading">
          Приложения для мобильных устройств
        </h3>
        <a :href="settings.url_ios" class="link footer__link">
          <img src="../static/app_store.svg" alt="Вк." class="footer__icon footer__icon_app">
        </a>
        <a :href="settings.url_android" class="link footer__link">
          <img src="../static/google_play.svg" alt="Инстаграм." class="footer__icon footer__icon_app">
        </a>
      </div>
      <div class="footer__rules">
        <nuxt-link exact to="/privacy" class="link footer__link">
          <p class=" link footer__rule">
            С политикой конфиденциальности можно ознакомиться тут
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    logo () {
      return this.$store.getters['header/getLogo']
    },
    settings () {
      return this.$store.getters['footer/getSettings']
    }
  },
  beforeMount () {
    this.$store.dispatch('footer/fetchSettings')
  }
}
</script>

<style scoped>
.footer {
  margin-top: 80px;
  width: 100%;
  min-height: 112px;
  padding: 66px 85px 24px;
  background-color: #f6f6f7;
  font-size: 16px;
  line-height: 19px;
  color: #686869;
}
.footer__logo {
  position: relative;
  margin-right: 110px;
  z-index: 1;
  filter: grayscale(100%);
  opacity: 0.7;
}
.footer__top {
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #929292;
  padding-bottom: 20px;
}
.footer__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
.footer__phone {
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #686869;
  margin-bottom: 74px;
}
.footer__heading {
  margin-bottom: 10px;
  font-weight: 500;
}
.footer__rule {
  width: 276px;
  text-decoration-line: underline;
  color: #686869;
}
.footer__navigation {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-weight: 500;
  width: 616px;
  height: 130px;
}
.footer__copyright {
  font-weight: 500;
}
.footer__icon {
  margin-right: 10px;
}
.footer__icon_app {
  object-fit: cover;
}
@media screen and (max-width: 1320px) {
  .footer__heading {
    font-size: 14px;
    line-height: 1;
  }
  .footer__phone {
    font-size: 18px;
  }
  .footer__icon_app {
    width: 132px;
    height: 36px;
  }
  .footer__rule {
    font-size: 14px;
  }
  @media screen and (max-width: 1120px) {
    .footer__heading {
      width: 170px;
    }
    .footer__app {
      display: flex;
      flex-direction: column;
    }
    .footer__icon_app {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
}
</style>
