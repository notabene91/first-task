<template>
  <div
    v-swiper:mySwiper="swiperOptions"
    class="slider"
    @slideNextTransitionStart="incrIndex()"
    @slideNextTransitionEnd="setCurrentCat(menus[index].cat_id), goToCatalog(menus[index].category_code)"
    @slidePrevTransitionStart="decrIndex()"
    @slidePrevTransitionEnd="setCurrentCat(menus[index].cat_id), goToCatalog(menus[index].category_code)"
  >
    <div class="swiper-wrapper">
      <div
        v-for="menu in menus"
        :key="menu.cat_id"
        class="swiper-slide"
      >
        <p class="slider__text">
          {{ menu.category_name }}
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
        slidesPerView: '3',
        centeredSlides: true,
        initialSlide: this.start,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    menus () {
      return this.$store.getters['menu/getMenu']
    },
    currentCat () {
      return this.$store.getters['menu/getCurrentCat']
    },
    index () {
      return this.$store.getters['menu/getIndex']
    },
    currentName () {
      return this.$store.getters['menu/getCurrentName']
    }
  },
  methods: {
    goToCatalog (id) {
      this.$router.push({ path: `/catalog/${id}` })
    },
    setCurrentCat (id) {
      this.$store.commit('menu/setCurrentCat', id)
    },
    setIndex (id) {
      this.$store.commit('menu/setIndex', this.menus
        .findIndex((menu) => {
          return menu.category_code === this.$route.params.id
        })
      )
    },
    incrIndex () {
      this.$store.commit('menu/increment')
    },
    decrIndex () {
      this.$store.commit('menu/decrement')
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
    z-index: 10;
  }
  .swiper-slide-active {
    font-weight: 500;
    font-size: 72px;
    line-height: 1;
    color: #4E5460;
    padding-bottom: 0;
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
    left: 31%;
    top: 98%;
    background-image: url(../static/prev_arrow.svg);
  }
  .swiper-button-next {
    right: 31%;
    top: 98%;
    background-image: url(../static/next_arrow.svg);
  }
  .swiper-button-prev::after, .swiper-button-next:after {
    display: none;
  }
  @media screen and (max-width: 1800px) {
    .slider {
      width: 52%;
      height: 184px;
    }
    .swiper-button-prev {
      left: 32%;
    }
    .swiper-button-next {
      right: 32%;
    }
  }
  @media screen and (max-width: 1700px) {
    .slider {
      width: 50%;
    }
    .swiper-button-prev {
      left: 32%;
    }
    .swiper-button-next {
      right: 32%;
    }
  }
  @media screen and (max-width: 1550px) {
    .slider {
      width: 50%;
    }
  }
  @media screen and (max-width: 1450px) {
    .slider {
      height: auto;
    }
    .swiper-slide {
      height: 120px;
    }
    .swiper-slide-active {
      font-size: 54px;
    }
    .swiper-slide-prev, .swiper-slide-next   {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 1400px) {
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
