import { methods } from '@/api/'
export const state = () => ({
  cart: ''
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  }
}

export const actions = {
  async fetchCart ({ commit }) {
    const res = await methods.getCart()
    commit('setState', {
      name: 'cart',
      value: res.data
    })
  }
}

export const getters = {
  getCart (state) {
    return state.cart
  }
}
