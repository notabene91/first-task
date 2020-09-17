<template>
  <div>
    <my-header />
    <my-dropdown v-if="isDropdownShown" />
    <popup-profile v-if="isShownProfile" />
    <popup-city v-if="isShownCity" />
    <overlay v-if="isShownCity || isShownProfile" />
    <Nuxt />
  </div>
</template>
<script>
import Header from '../components/Header'
import Dropdown from '../components/Dropdown'
import PopupProfile from '../components/PopupProfile'
import PopupCity from '../components/PopupCity'
import Overlay from '../components/Overlay'
export default {
  components: {
    'my-header': Header,
    'my-dropdown': Dropdown,
    overlay: Overlay,
    'popup-profile': PopupProfile,
    'popup-city': PopupCity
  },
  async fetch () {
    await this.$store.dispatch('settings/fetchSettings')
  },
  computed: {
    settings () {
      return this.$store.getters['settings/getSettings']
    },
    isShownProfile () {
      return this.$store.getters['header/getPopupProfile']
    },
    isShownCity () {
      return this.$store.getters['header/getPopupCity']
    },
    isDropdownShown () {
      return this.$store.getters['header/getDropdown']
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
