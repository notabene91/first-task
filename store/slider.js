/* eslint-disable no-console */

import LOAD_SLIDES from '../api/loadSlides'

export const state = () => ({
  slides: []
})

export const mutations = {
  setState (state, { name, value }) {
    return (state[name] = value)
  }
}

export const actions = {
  fetchSlides (state) {
    return LOAD_SLIDES.get()
      .then((res) => {
        return state.commit('setState', {
          name: 'slides',
          value: res.data.details.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const getters = {
  getSlides (state) {
    return state.slides
  }
}
