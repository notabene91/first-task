/* eslint-disable camelcase */
import { methods } from '@/api/'

export const state = () => ({
  cards: [],
  categoriesWithCards: {},
  details: false,
  detailsData: {}
})

export const mutations = {
  setState (state, value) {
    return (state.cards = value)
  },
  setCat (state, { key, value }) {
    return (state.categoriesWithCards[key] = value)
  },
  toggleDetails (state) {
    return (state.details = !state.details)
  },
  setDetailsData (state, value) {
    return (state.detailsData = value)
  }
}

export const actions = {
  async fetchCardInfo ({ commit }, id) {
    const res = await methods.getItemsByCategory(id)
    commit('setState', res.data)
  },
  async fetchCategoryCards ({ commit }, id) {
    const res = await methods.getItemsByCategory(id)
    commit('setCat', {
      key: id,
      value: res.data
    })
  },
  async addItemToCart ({ dispatch },
    { category_id, item_id, price, qty = 1 }) {
    const res = await methods.addItemToCart({
      category_id,
      item_id,
      price,
      qty
    })
    res === 1 && dispatch('cart/fetchCart')
  }
}

export const getters = {
  getCards (state) {
    return state.cards
  },
  getCategoriesWithCards (state) {
    return state.categoriesWithCards
  },
  getDetails (state) {
    return state.details
  }
}
