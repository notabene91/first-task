
<template>
  <section>
    <div v-for="menu in menus" :key="menu.cat_id" class="products">
      <h2 class="products__title">
        {{ menu.category_name }}
      </h2>
      <div class="products__container">
        <!-- <card
          v-for="card in cards"
          :key="card.item_id"
          :photo="card.photo"
          :name="card.item_name"
          :description="card.item_description"
          :price="card.prices[0].formatted_price"
          :addon="card.addon_item"
        /> -->
      </div>
      <button class="button products__button">
        Перейти в каталог
      </button>
    </div>
  </section>
</template>

<script>
export default {
  async fetch () {
    await this.menus.forEach((item) => {
      this.$store.dispatch('card/fetchCardInfo', item.cat_id)
    })
    await this.$store.dispatch('menu/fetchMenu')
  },
  computed: {
    menus () {
      return this.$store.getters['menu/getMenu']
    },
    cards () {
      return this.$store.getters['card/getCard']
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
  .products__container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 326px);
    grid-gap: 30px;
    margin-bottom: 30px;
    justify-content: center;
  }
  .products__title {
    font-weight: 500;
    font-size: 72px;
    line-height: 85px;
    text-align: center;
    color: #4E5460;
    margin-bottom: 43px;
  }
  .products__button {
    position: relative;
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
