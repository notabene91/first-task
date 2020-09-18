/* eslint-disable no-console */

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
    try {
      const res = await LOAD_SETTINGS.get()
      return state.commit('setState', {
        name: 'settings',
        value: res.data.details
      })
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
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
