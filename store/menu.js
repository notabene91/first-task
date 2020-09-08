
import LOAD_MENU from '../api/loadMenu'

export const state = () => ({
  menu: []
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
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
  }
}

export const getters = {
  getMenu (state) {
    return state.menu
  }
}
