<template>
  <div class="order">
    <p class="order__title">
      Заказывают так же
    </p>
    <div class="order__container" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .order {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 66px 85px 18px;
  }
  .order__container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 326px);
    grid-gap: 30px;
    margin-bottom: 30px;
    justify-content: center;
  }
  .order__title {
    font-weight: 500;
    font-size: 72px;
    line-height: 85px;
    text-align: center;
    color: #4E5460;
    margin-bottom: 43px;
  }
  @media screen and (max-width: 1450px) {
    .order__title {
      font-size: 54px;
    }
  }
</style>
