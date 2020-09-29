/* eslint-disable camelcase */
import { methods } from '@/api/'

export const state = () => ({
  userData: {},
  userRegustration: {}
})

export const mutations = {
  setUserData (state, value) {
    return (state.userData = value)
  },
  setRegistration (state, value) {
    return (state.userRegustration = value)
  }
}
export const actions = {
  async login ({ commit }, { username, password }) {
    const res = await methods.login({
      username,
      password
    })
    commit('setUserData', res.data)
  },
  async register ({ commit }, { username, password, passwordReplay }) {
    const res = await methods.register({
      username,
      password,
      passwordReplay
    })
    commit('setRegistration', res.data)
  },
  async resetPass (payload) {
    await methods.resetPass(payload)
  }
}

export const getters = {
  getUserData (state) {
    return state.userData
  },
  getRestrigation (state) {
    return state.userRegustration
  }
}
