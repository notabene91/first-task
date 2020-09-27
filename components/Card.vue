<template>
  <div class="card">
    <img class="card__image" :src="photo" alt="Фотография товара.">
    <div class="card__container">
      <h3 class="card__title">
        {{ name }}
      </h3>
      <p class="card__description">
        {{ description }}
      </p>
      <p class="card__price">
        {{ formatted }}
      </p>
    </div>
    <button class="button card__button" @click="addon ? openDetails() : addItemToCart()">
      {{ addon ? 'Выбрать' : 'Добавить в корзину' }}
    </button>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['card', 'photo', 'name', 'description', 'formatted', 'price', 'addon', 'item', 'cat'],
  methods: {
    addItemToCart () {
      this.$store.dispatch('card/addItemToCart', {
        category_id: this.cat,
        item_id: this.item,
        price: this.price
      })
    },
    openDetails () {
      this.$store.commit('card/setDetailsData', this.card)
      this.$store.commit('card/toggleDetails')
    }
  }
}
</script>

<style scoped>
  .card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
  }
  .card:hover {
    box-shadow: 0px 4px 32px rgba(78, 84, 96, 0.15);
  }
  .card__image {
    margin: 0 auto 8px;
    width: 280px;
    height: 280px;
    object-fit: cover;
    cursor: pointer;
  }
  .card__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0 24px 8px;
  }
  .card__title {
    min-height: 42px;
    font-weight: 500;
    font-size: 20px;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #181A1D;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .card__description {
    min-height: 55px;
    font-weight: normal;
    font-size: 15px;
    line-height: 1;
    color: #4E5460;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    margin-bottom: 10px;
  }
  .card__price {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #181A1D;
    margin-bottom: 4  px;
  }
  .card__button {
    min-height: 72px;
    background-color: #C7CACF;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    color: #4E5460;
    border:none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
  }
  .card__button:hover {
    background-color: #83CD26;
    color: #fff;
  }
  .card__button:focus {
    background-color: #83CD26;
    color: #fff;
  }
  .card__button:active {
    background-color: #68B00C;
    color: #fff;
  }
  @media screen and (max-width: 1550px) {
    .card__price {
      margin-bottom: 10px;
    }
  }
   @media screen and (max-width: 1220px) {
    .card__image {
      margin: 0 auto 16px;
      width: 260px;
      height: 260px;
    }
  }
</style>
