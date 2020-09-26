<template>
  <div v-if="!isDropdownShown" v-swiper:mySwiper="swiperOptions" class="slider">
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
  async fetch () {
    await this.$store.dispatch('slider/fetchSlides')
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        grabCursor: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000
        },
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
    },
    isDropdownShown () {
      return this.$store.getters['header/getDropdown']
    }
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
    width: 100%;
    object-position: left;
  }
  .swiper-pagination {
    bottom: 20px;
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
  .swiper-pagination-bullet:focus {
    outline: none;
    border: 1px solid coral;
  }
  @media screen and (max-width: 1550px) {
    .swiper-slide {
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .swiper-slide {
      height: 340px;
    }
    .slider__image {
      object-fit: cover;
      object-position: left;
    }
    .swiper-pagination-bullet {
      background-color: transparent;
      border-radius: 50%;
      margin-right: 16px;
      border: 2px solid #fff;
    }
    .swiper-pagination-bullet-active {
      background-color: #fff;;
    }
  }
</style>
