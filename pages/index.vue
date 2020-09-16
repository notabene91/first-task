<template>
  <div class="body">
    <my-header />
    <my-dropdown v-if="isDropdownShown" />
    <div class="main">
      <slider />
      <slider-menu />
      <buttons />
      <mobile-menu v-if="isMenuShown" />
      <products />
      <my-footer />
      <popup-profile v-if="isShownProfile" />
      <popup-city v-if="isShownCity" />
      <overlay v-if="isShownCity || isShownProfile" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Dropdown from '../components/Dropdown'
import Slider from '../components/Slider'
import SliderMenu from '../components/SliderMenu'
import MobileButtons from '../components/MobileButtons'
import MobileMenu from '../components/MobileMenu'
import Products from '../components/Products'
import Footer from '../components/Footer'
import PopupProfile from '../components/PopupProfile'
import PopupCity from '../components/PopupCity'
import Overlay from '../components/Overlay'
export default {
  components: {
    overlay: Overlay,
    'my-header': Header,
    'my-dropdown': Dropdown,
    slider: Slider,
    'slider-menu': SliderMenu,
    buttons: MobileButtons,
    'mobile-menu': MobileMenu,
    products: Products,
    'my-footer': Footer,
    'popup-profile': PopupProfile,
    'popup-city': PopupCity
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
    isShownProfile () {
      return this.$store.getters['header/getPopupProfile']
    },
    isShownCity () {
      return this.$store.getters['header/getPopupCity']
    },
    isDropdownShown () {
      return this.$store.getters['header/getDropdown']
    },
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
