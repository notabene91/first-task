<template>
  <div class="catalog">
    <card
      v-for="card in cards.value"
      :key="card.item_id"
      :photo="card.photo"
      :name="card.item_name"
      :description="card.item_description"
      :price="card.prices[0].formatted_price"
      :addon="card.addon_item"
    />
  </div>
</template>

<script>
export default {
  computed: {
    menu () {
      return this.$store.getters['menu/getMenu']
    },
    cards () {
      return this.$store.getters['card/getCards']
    }
  }
}
</script>

<style scoped>
  .catalog {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 326px);
    grid-gap: 30px;
    margin-bottom: 30px;
    justify-content: center;
    padding-top: 45px;
  }
</style>
