
export const state = () => ({
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

export const getters = {
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
