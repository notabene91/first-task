<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    settings () {
      return this.$store.getters['footer/getSettings']
    }
  }
}
</script>
<style>
html {
  font-family:
    'Rubik',
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
