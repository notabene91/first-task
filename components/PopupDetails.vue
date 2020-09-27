<template>
  <div class="popup__content">
    <!-- <div class="popup__wrapper">
      <img src="" alt="" class="popup__image">
      <h2 class="popup__title"></h2>
      <p class="popup__subtitle"></p>
      <span class="popup__price"></span>
      <div class="popup__nutrients"></div>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .popup__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px;
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
</style>
