import { methods } from '@/api/'

export const state = () => ({
  slides: []
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  }
}

export const actions = {
  async fetchSlides ({ commit }) {
    const res = await methods.getSlides()
    commit('setState', {
      name: 'slides',
      value: res.data
    })
  }
}

export const getters = {
  getSlides (state) {
    return state.slides
  }
}
