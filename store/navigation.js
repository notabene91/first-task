
import LOAD_PAGES from '../api/loadPages'

export const state = () => ({
  navItems: []
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  }
}

export const actions = {
  fetchNavItems (state) {
    return LOAD_PAGES.get()
      .then((res) => {
        return state.commit('setState', {
          name: 'navItems',
          value: res.data.details.data
        })
      })
  }
}

export const getters = {
  getNavItems (state) {
    return state.navItems
  }
}
