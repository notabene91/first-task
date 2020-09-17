<template>
  <div v-swiper:mySwiper="swiperOptions" class="slider">
    <div class="swiper-wrapper">
      <div v-for="food in menu" :key="food.cat_id" class="swiper-slide">
        <p class="slider__text">
          {{ food.category_name }}
        </p>
      </div>
    </div>
    <div slot="button-prev" class="swiper-button-prev" />
    <div slot="button-next" class="swiper-button-next" />
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('menu/fetchMenu')
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: '3',
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1020: {
            spaceBetween: 20
          },
          1150: {
            spaceBetween: 50
          },
          1440: {
            spaceBetween: 100
          }
        }
      }
    }
  },
  computed: {
    menu () {
      return this.$store.getters['menu/getMenu']
    }
  }
}
</script>

<style scoped>
  .slider {
    width: 50%;
  }
  .swiper-wrapper {
    position: relative;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 150px;
    font-size: 36px;
    line-height: 1;
    padding-bottom: 5px;
    text-align: center;
    color: #DEDEDE;
  }
  .swiper-slide-active {
    font-weight: 500;
    font-size: 72px;
    line-height: 1;
    color: #4E5460;
  }
  .swiper-button-prev, .swiper-button-next{
    position: absolute;
    width: 10px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .swiper-button-prev:focus, .swiper-button-next:focus{
    outline: none;
  }
  .swiper-button-prev {
    left: 32%;
    top: 100%;
    background-image: url(../static/prev_arrow.svg);
  }
  .swiper-button-next {
    right: 32%;
    top: 100%;
    background-image: url(../static/next_arrow.svg);
  }
  .swiper-button-prev::after, .swiper-button-next:after {
    display: none;
  }
  @media screen and (max-width: 1800px) {
    .slider {
      width: 45%;
    }
    .swiper-button-prev {
      left: 30%;
    }
    .swiper-button-next {
      right: 30%;
    }
  }
  @media screen and (max-width: 1700px) {
    .swiper-button-prev {
      left: 28%;
    }
    .swiper-button-next {
      right: 28%;
    }
  }
  @media screen and (max-width: 1550px) {
    .swiper-button-prev {
      left: 26%;
    }
    .swiper-button-next {
      right: 26%;
    }
  }
  @media screen and (max-width: 1439px) {
    .swiper-button-prev {
      left: 29%;
    }
    .swiper-button-next {
      right: 29%;
    }
  }
  @media screen and (max-width: 1200px) {
    .swiper-slide {
      height: 120px;
    }
    .swiper-slide-active {
      font-size: 54px;
    }
    .swiper-slide-prev, .swiper-slide-next   {
      font-size: 24px;
    }
    .swiper-button-prev, .swiper-button-next{
      display: none;
    }
  }
   @media screen and (max-width: 768px) {
    .slider {
      display: none;
    }
  }
</style>
