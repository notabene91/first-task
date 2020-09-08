<template>
  <div class="info">
    <nuxt-link class="link info__link" to="/">
      <img src="../static/subtract.svg" alt="">
    </nuxt-link>
    <nuxt-link class="link info__link" to="/">
      <img src="../static/profile.svg" alt="">
    </nuxt-link>
    <nuxt-link class="link info__link" to="/">
      <span class="info__price">640 ₽</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info__link {
    margin-right: 40px;
  }

  .info__link:last-of-type {
    margin-right: 0;
  }

  .info__price {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    position: relative;
    color:#83CD26;
    margin-left: 34px;
  }
  .info__price::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(../static/basket.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 24px;
    height: 24px;
    transform: translate(-180%,-5%);
  }

@media screen and (max-width: 1750px) {
  .info__price {
    font-size: 18px;
    line-height: 1;
  }
}
</style>
