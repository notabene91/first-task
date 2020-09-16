<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  async fetch () {
    await this.$store.dispatch('settings/fetchSettings')
  },
  computed: {
    settings () {
      return this.$store.getters['settings/getSettings']
    }
  },
  head () {
    return {
      title: this.settings.seo.seo_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.settings.seo.seo_description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.settings.seo.seo_keywords
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: this.settings.favicon
        }
      ]
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
@media screen and (max-width: 768px) {
  html {
    font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  }
}
</style>
