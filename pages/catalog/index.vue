<template>
  <div class="body">
    <div class="main">
      <slider-menu />
      <my-footer />
    </div>
  </div>
</template>

<script>
import SliderMenu from '../../components/SliderMenu'
import Footer from '../../components/Footer'
export default {
  components: {
    'slider-menu': SliderMenu,
    'my-footer': Footer
  }
}
</script>

<style scoped>
  .body {
    position: relative;
    margin: 0 auto;
    min-height: 100vh;
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .button:focus  {
    outline: none;
    border: 1px solid coral;
  }
  .link:focus{
    outline: none;
    opacity: .7;
  }
  .logo {
    width: 245px;
    height: 72px;
    object-fit: cover;
  }
  .link {
    color: #4E5460;
    text-decoration: none;
  }
  .link:hover {
    color: #83CD26;
  }
  .link:active {
    color: #83CD26;
  }
  .input{
    box-shadow: inset 0 0 0 50px #fff;
  }
</style>
