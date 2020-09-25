import { methods } from '@/api/'

export const state = () => ({
  menu: [],
  menuShown: false,
  currentCat: '',
  index: ''
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  },
  toggleMobileMenu (state) {
    return (state.menuShown = !state.menuShown)
  },
  setCurrentCat (state, value) {
    return (state.currentCat = value)
  },
  setIndex (state, value) {
    return (state.index = value)
  },
  increment (state) {
    return (state.index++)
  },
  decrement (state) {
    return (state.index--)
  }
}
export const actions = {
  async fetchMenu ({ commit }) {
    const res = await methods.getMenuCategories()
    commit('setState', {
      name: 'menu',
      value: res.data
    })
  }
}

export const getters = {
  getMenu (state) {
    return state.menu
  },
  getMenuShown (state) {
    return state.menuShown
  },
  getCurrentCat (state) {
    return state.currentCat
  },
  getIndex (state) {
    return state.index
  }
}
