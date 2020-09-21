<template>
  <div v-swiper:mySwiper="swiperOptions" class="slider">
    <div class="swiper-wrapper">
      <div
        v-for="food in menu"
        :key="food.cat_id"
        class="swiper-slide"
        @click="goToCatalog(food.category_code, food.cat_id)"
      >
        <img :src="food.photo_url" :alt="food.name" class="slider__image">
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
  // eslint-disable-next-line vue/require-prop-types
  props: ['start'],
  async fetch () {
    await this.$store.dispatch('menu/fetchMenu')
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 14,
        spaceBetween: 20,
        centeredSlides: true,
        initialSlide: this.start,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1020: {
            slidesPerView: 8,
            spaceBetween: 0
          },
          1080: {
            slidesPerView: 12,
            spaceBetween: 20
          },
          1439: {
            slidesPerView: 14
          }
        }
      }
    }
  },
  computed: {
    menu () {
      return this.$store.getters['menu/getMenu']
    }
  },
  methods: {
    goToCatalog (id, num) {
      this.$router.push({ path: `/catalog/${id}`, query: { num } })
    }
  }
}
</script>

<style scoped>
  .slider {
    width: 100%;
  }
  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 138px;
    height: 174px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #4E5460;
    padding: 26px 0 24px;
  }
  .slider__image {
    object-fit: contain;
    width: 88px;
    height: 88px;
    margin: 0 auto;
    transition: transform 0.1s linear;
  }
  .slider__image:hover {
    transform: scale(1.1);
    transition: transform 0.1s linear;
  }
  .swiper-button-prev, .swiper-button-next{
    width: 36px;
    height: 36px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .swiper-button-prev {
    background-image: url(../static/prev_arrow_circle.svg);
  }
  .swiper-button-next {
    background-image: url(../static/next_arrow_circle.svg);
  }
  .swiper-button-prev::after, .swiper-button-next:after {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    .swiper-button-prev, .swiper-button-next {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .slider {
      display: none;
    }
  }
</style>
