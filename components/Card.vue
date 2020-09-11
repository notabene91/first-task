<template>
  <div class="container">
    <div v-for="card in cardInfo" :key="card.item_id" class="card">
      <img class="card__image" :src="card.photo" alt="">
      <div class="card__container">
        <h3 class="card__title">
          {{ card.item_name }}
        </h3>
        <p class="card__description">
          {{ card.item_description }}
        </p>
        <p class="card__price">
          {{ card.prices[0].formatted_price }}
        </p>
      </div>
      <button class="button card__button">
        {{ card.addon_item ? 'Выбрать' : 'Добавить в корзину' }}
      </button>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['id'],
  computed: {
    cardInfo () {
      return this.$store.getters['card/getCardInfo']
    },
    cat_id () {
      return this.id
    }
  },
  beforeMount () {
    this.$store.dispatch('card/fetchCardInfo', this.cat_id)
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    margin-bottom: 30px;
  }
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
    margin: 0 auto 36px;
    width: 200px;
    height: 200px;
    cursor: pointer;
  }
  .card__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0 24px 4px;
  }
  .card__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #181A1D;
    margin-bottom: 10px;
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
    -webkit-line-clamp: 3;
    margin-bottom: 10px;
  }
  .card__price {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #181A1D;
  }
  .card__button {
    min-height: 64px;
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
  .card__button:active {
    background-color: #68B00C;
    color: #fff;
  }
   @media screen and (max-width: 1220px) {
    .card__image {
      margin: 0 auto 16px;
      width: 260px;
      height: 260px;
    }
  }
</style>
