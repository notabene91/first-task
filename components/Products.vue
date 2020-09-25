
<template>
  <section>
    <div v-for="menu in menus" :key="menu.cat_id" class="products">
      <h2 class="products__title">
        {{ menu.category_name }}
      </h2>
      <!-- <catalog :cards="cards" /> -->
      <button class="button products__button" @click="goToCatalog(menu.category_code), setCurrentCat(menu.cat_id), setIndex(menu.cat_id)">
        Перейти в каталог
      </button>
    </div>
  </section>
</template>

<script>
// import Catalog from '../components/Catalog'
export default {
  components: {
    // catalog: Catalog
  },
  computed: {
    menus () {
      return this.$store.getters['menu/getMenu']
    }
  },
  methods: {
    goToCatalog (id) {
      this.$router.push({ path: `/catalog/${id}` })
    },
    setCurrentCat (id) {
      this.$store.commit('menu/setCurrentCat', id)
    },
    setIndex (name) {
      this.$store.commit('menu/setIndex', this.menus
        .findIndex((menu) => {
          return name === menu.cat_id
        })
      )
    }
  }
}
</script>

<style scoped>
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 66px 85px 18px;
  }
  .products__title {
    font-weight: 500;
    font-size: 72px;
    line-height: 85px;
    text-align: center;
    color: #4E5460;
  }
  .products__button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    min-height: 54px;
    border: 2px solid #4E5460;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #4E5460;
    margin-top: 10px;
  }
  .products__button::after {
    content: '';
    position: absolute;
    top: 18px;
    right: 20px;
    background-image: url(../static/arrow_black.svg);
    width: 8px;
    height: 14px;
  }
  .products__button:hover::after {
    content: '';
    position: absolute;
    top: 18px;
    right: 20px;
    background-image: url(../static/arrow_white.svg);
    width: 8px;
    height: 14px;
  }
  .products__button:hover {
    background: #4E5460;
    color: #fff;
  }
  .products__button:focus {
    background: #4E5460;
    color: #fff;
  }
  .products__button:active {
    background: #4E5460;
    color: #fff;
  }

   @media screen and (max-width: 1570px) {
    .products {
      padding: 42px 40px 18px;
    }
  }
  @media screen and (max-width: 768px) {
    .products {
      display: none;
    }
  }
</style>
