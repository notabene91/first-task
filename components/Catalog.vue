<template>
  <div class="catalog">
    <card
      v-for="card in cards"
      :key="card.item_id"
      :card="card"
      :photo="card.photo"
      :name="card.item_name"
      :description="card.item_description"
      :price="card.prices[0].formatted_price"
      :formatted="card.prices[0].formatted_price"
      :addon="card.addon_item"
      :item="card.item_id"
      :cat="cat"
    />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['cards', 'cat'],
  computed: {
    menu () {
      return this.$store.getters['menu/getMenu']
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
