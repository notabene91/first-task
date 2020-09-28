<template>
  <div class="popup__content">
    <div class="popup__social">
      <a href="" class="popup__link">
        <img src="../static/fb_grey.svg" alt="" class="popup__icon">
      </a>
      <a href="" class="popup__link">
        <img src="../static/insta_grey.svg" alt="" class="popup__icon">
      </a>
    </div>
    <img src="../static/close.svg" alt="Кнопка закрыть." class="popup__close-btn" @click="toggleDetailsPopup">
    <div class="popup__wrapper">
      <img :src="card.photo" alt="" class="popup__image">
      <div class="popup__information">
        <h2 class="popup__title">
          {{ card.item_name }}
        </h2>
        <p class="popup__subtitle">
          {{ card.item_description }}
        </p>
        <div class="popup__price-section">
          <p class="popup__price">
            {{ card.prices[0].price * counter }} Р
          </p>
          <div class="popup__counter">
            <button class="popup__button" @click="decrement">
              -
            </button>
            <p class="popup__count">
              {{ counter }}
            </p>
            <button class="popup__button" @click="increment">
              +
            </button>
          </div>
        </div>
        <div class="nutrients">
          <p class="nutrients_name nutrients__protein-name">
            Белки
          </p>
          <p class="nutrients_name nutrients__fats-name">
            Жиры
          </p>
          <p class="nutrients_name nutrients__carbo-name">
            Углеводы
          </p>
          <p class="nutrients_name nutrients__calories-name">
            кКал
          </p>
          <p class="nutrients_name nutrients__grams-name">
            {{ card.item_massa }} {{ mass }}
          </p>
          <p class="nutrients_count nutrients__protein">
            {{ card.item_protein }}
          </p>
          <p class="nutrients_count nutrients__fats">
            {{ card.item_fats }}
          </p>
          <p class="nutrients_count nutrients__carbo">
            {{ card.item_carbohydrates }}
          </p>
          <p class="nutrients_count nutrients__calories">
            {{ card.item_calories }}
          </p>
          <p class="nutrients_name nutrients__article">
            Артикул: <span class="nutrients_count">{{ card.item_id }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    card () {
      return this.$store.getters['card/getDetailsData']
    },
    mass () {
      if (this.card.item_massa !== '') {
        return 'г'
      } else { return '' }
    },
    counter () {
      return this.$store.getters['card/getCounter']
    }
  },
  methods: {
    toggleDetailsPopup () {
      this.$store.commit('card/toggleDetails')
    },
    increment () {
      this.$store.commit('card/increment')
    },
    decrement () {
      this.$store.commit('card/decrement')
    }
  }
}
</script>

<style scoped>
  .popup__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 50px 80px 60px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 50%;
    width: 72%;
    box-sizing: border-box;
    border-radius: 8px;
    z-index: 10;
  }
  .popup__social {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
  .popup__link {
    width: 36px;
    height: 36px;
    margin-right: 20px;
  }
  .popup__link:last-of-type {
    margin-right: 0;
  }
  .popup__close-btn {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
  }
  .popup__close-btn:hover {
    opacity: .7;
  }
  .popup__wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .popup__image {
    width: 50%;
    object-fit: cover;
  }
  .popup__information {
    width: 37%;
  }
  .popup__title {
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.05em;
    color: #181A1D;
    margin-bottom: 20px;
  }
  .popup__subtitle {
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #4E5460;
    height: 42px;
    margin-bottom: 72px;
  }
  .popup__price-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 104px;
  }
  .popup__price {
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.05em;
  }
  .popup__counter {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    width: 100px;
    height: 44px;
    grid-column-gap: 24px;
    transform: translateX(-45%)
  }
  .popup__button {
    border: none;
    background-color: #fff;
    color: #4E5460;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.05em;
    cursor: pointer;
  }
  .popup__button:hover {
    color: #83CD26;
  }
  .popup__button:focus {
    outline: none;
    color: #83CD26;
  }
  .popup__button:active {
    color: #68B00C;
  }
  .nutrients {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 50px);
    font-size: 18px;
    line-height: 21px;
    color: #4E5460;
  }
  .nutrients__protein-name {
    grid-column-start: 2;
  }
  .nutrients_count {
    color: #181A1D;
    font-weight: 500;
  }
  .nutrients__name {
    color: #4E5460;
  }
  .nutrients__article {
    grid-row-start: 4;
    grid-column-start: 4;
    grid-column-end: 6;
  }
</style>
