
import LOAD_SETTINGS from '../api/loadSettings'

export const state = () => ({
  settings: {}
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  }
}

export const actions = {
  async fetchSettings (state) {
    const res = await LOAD_SETTINGS.get()
    return state.commit('setState', {
      name: 'settings',
      value: res.data.details
    })
  }
}

export const getters = {
  getSettings (state) {
    return state.settings
  }
}
