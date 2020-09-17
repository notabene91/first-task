<template>
  <div class="body">
    <div class="main">
      <slider-banners />
      <slider-menu />
      <buttons />
      <mobile-menu v-if="isMenuShown" />
      <products />
      <my-footer />
    </div>
  </div>
</template>

<script>
import SliderBanners from '../components/SliderBanners'
import SliderMenu from '../components/SliderMenu'
import MobileButtons from '../components/MobileButtons'
import MobileMenu from '../components/MobileMenu'
import Products from '../components/Products'
import Footer from '../components/Footer'
export default {
  components: {
    'slider-banners': SliderBanners,
    'slider-menu': SliderMenu,
    buttons: MobileButtons,
    'mobile-menu': MobileMenu,
    products: Products,
    'my-footer': Footer
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
          nextEl: '.video__toggle_more',
          prevEl: '.video__toggle_less'
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    }
  },
  computed: {
    isMenuShown () {
      return this.$store.getters['menu/getMenuShown']
    }
  }
}
</script>

<style>
.body {
  margin: 0 auto;
  min-height: 100vh;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button:focus  {
  outline: none;
  border: 1px solid coral;
}
.link:focus{
  outline: none;
  opacity: .7;
}
.logo {
  width: 245px;
  height: 72px;
  object-fit: cover;
}
.link {
  color: #4E5460;
  text-decoration: none;
}
.link:hover {
  color: #83CD26;
}
.link:active {
  color: #83CD26;
}
.input{
  box-shadow: inset 0 0 0 50px #fff;
}
</style>
