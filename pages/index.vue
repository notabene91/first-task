<template>
  <div class="body">
    <my-header />
    <div class="main">
      <slider />
      <food />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Slider from '../components/Slider'
import Menu from '../components/Menu'
export default {
  components: {
    'my-header': Header,
    slider: Slider,
    food: Menu
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
</style>
