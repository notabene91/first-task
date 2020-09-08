<template>
  <div v-swiper:mySwiper="swiperOptions" class="slider">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
        <img :src="slide.photo" :alt="slide.page_name" class="slider__image">
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        grabCursor: true,
        // autoplay: {
        //   delay: 3000
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    slides () {
      return this.$store.getters['slider/getSlides']
    }
  },
  beforeMount () {
    this.$store.dispatch('slider/fetchSlides')
  }
}
</script>

<style >
  .slider {
    width: 100%;
    cursor: pointer;
  }
  .swiper-slide {
    height: 600px;
  }
  .slider__image {
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination {
    bottom: 24px;
  }
  .swiper-pagination-bullet {
    background-color: white;
    width: 12px;
    height: 12px;
    opacity: 1;
    border-radius: 2px;
    margin-right: 12px;
  }
  .swiper-pagination-bullet-active {
    background-color: #83CD26;;
  }
</style>
