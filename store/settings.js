import { methods } from '@/api/'

export const state = () => ({
  settings: {}
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  }
}

export const actions = {
  async fetchSettings ({ commit }) {
    const res = await methods.getSettings()
    commit('setState', {
      name: 'settings',
      value: res.details
    })
  }
}

export const getters = {
  getSettings (state) {
    return state.settings
  },
  getGA (state) {
    return state.settings.google_analytics
  },
  getYM (state) {
    return state.settings.yandex_mertica
  }
}
