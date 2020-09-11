import axios from 'axios'

export const state = () => ({
  cardInfo: []
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  }
}

export const actions = {
  fetchCardInfo (state, id) {
    return axios.get(`https://vsem-edu-oblako.ru/singlemerchant/api/loadItemByCategory/?merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&lang=ru&device_id=XXX_555_&device_plarform=site&json=1&cat_id=${id}`)
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
