/* eslint-disable no-console */

import LOAD_MENU from '../api/loadMenu'

export const state = () => ({
  menu: [],
  menuShown: false
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  },
  toggleMobileMenu (state) {
    return (state.menuShown = !state.menuShown)
  }
}

export const actions = {
  fetchMenu (state) {
    return LOAD_MENU.get()
      .then((res) => {
        return state.commit('setState', {
          name: 'menu',
          value: res.data.details.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const getters = {
  getMenu (state) {
    return state.menu
  },
  getMenuShown (state) {
    return state.menuShown
  }
}
