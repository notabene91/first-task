<template>
  <div class="body">
    <div class="main">
      <slider-menu :start="startSlide()" />
      <slider-titles :start="startSlide()" />
      <catalog :cards="cards" />
      <order-more />
      <my-footer />
    </div>
  </div>
</template>

<script>
import SliderMenu from '../../components/SliderMenu'
import SliderTitles from '../../components/SliderTitles'
import Catalog from '../../components/Catalog'
import OrderMore from '../../components/OrderMore'
import Footer from '../../components/Footer'
export default {
  components: {
    'slider-menu': SliderMenu,
    'slider-titles': SliderTitles,
    catalog: Catalog,
    'order-more': OrderMore,
    'my-footer': Footer
  },
  async fetch () {
    await this.$store.dispatch('menu/fetchMenu')
    await this.$store.dispatch('card/fetchCardInfo', this.$route.query.num)
  },
  computed: {
    menu () {
      return this.$store.getters['menu/getMenu']
    },
    cards () {
      return this.$store.getters['card/getCards']
    }
  },
  methods: {
    startSlide () {
      return this.menu.findIndex(el => el.category_code === this.$route.params.id)
    }
  }
}
</script>

<style scoped>
  .body {
    position: relative;
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
