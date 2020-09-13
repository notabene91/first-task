
import LOAD_CARD from '../api/loadCard'

export const state = () => ({
  cardInfo: []
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  }
}

export const actions = {
  fetchCardInfo (state) {
    return LOAD_CARD.get()
      .then((res) => {
        return state.commit('setState', {
          name: 'cardInfo',
          value: res.data.details.data
        })
      })
  }
}

export const getters = {
  getCardInfo (state) {
    return state.cardInfo
  }
}
