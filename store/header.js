
import LOAD_SETTINGS from '../api/loadSettings'
import LOAD_CART from '../api/loadCart'

export const state = () => ({
  logo: '',
  cart: '',
  popupCityShown: false,
  popupProfileShown: false,
  dropdownShown: false
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  },
  toggleCityPopup (state) {
    return (state.popupCityShown = !state.popupCityShown)
  },
  toggleProfilePopup (state) {
    return (state.popupProfileShown = !state.popupProfileShown)
  },
  toggleDropdown (state) {
    return (state.dropdownShown = !state.dropdownShown)
  }
}

export const actions = {
  async fetchSettings (state) {
    const res = await LOAD_SETTINGS.get()
    return state.commit('setState', {
      name: 'logo',
      value: res.data.details.logo
    })
  },
  fetchCart (state) {
    return LOAD_CART.get()
      .then((res) => {
        return state.commit('setState', {
          name: 'cart',
          value: res.data.details
        })
      })
  }
}

export const getters = {
  getLogo (state) {
    return state.logo
  },
  getCart (state) {
    return state.cart
  },
  getPopupCity (state) {
    return state.popupCityShown
  },
  getPopupProfile (state) {
    return state.popupProfileShown
  },
  getDropdown (state) {
    return state.dropdownShown
  }
}
