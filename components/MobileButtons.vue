<template>
  <div class="buttons">
    <button
      style="border-top: 0; border-left: 0; border-bottom: 0"
      class="button__btn"
      :class="{'button_btn_active': isMenuShown}"
      @click="toggleMenu"
    >
      Меню
    </button>
    <button style="border-top: 0; border-right: 0; border-left: 0; border-bottom: 0" class="button__btn">
      Доставка
    </button>
    <button style="border-bottom: 0; border-left: 0;" class="button__btn">
      Магазины
    </button>
    <button style="border-bottom: 0; border-right: 0; border-left: 0" class="button__btn">
      Самовывоз
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    isMenuShown () {
      return this.$store.getters['menu/getMenuShown']
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('menu/toggleMobileMenu')
    }
  }
}
</script>

<style  scoped>
.buttons {
  display: none;
}
@media screen and (max-width: 768px) {
  .buttons {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    border-bottom: 1px solid #383838;
  }
  .button__btn {
    font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
    border: 1px solid #383838;
    background-color: #fff;
    box-sizing: border-box;
    height: 84px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #4E5460;
  }
  .button_btn_active {
    background-color: #83CD26;
    color: #fff;
  }
  .button__btn:hover {
    background-color: #83CD26;
    color: #fff;
  }
  .button__btn:focus {
    background-color: #83CD26;
    color: #fff;
    outline: none;
  }
  .button__btn:active {
    background-color: #68B00C;
    color: #fff;
  }
}
</style>
