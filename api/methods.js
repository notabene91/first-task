/* eslint-disable camelcase */
import axios from 'axios'
import { constants } from './index'

const params = {
  ...constants.PARAMS
}

const getSlides = () => {
  return axios
    .get(`${constants.URL}/loadSliders/`, {
      params: { ...params }
    })
    .then(({ data: { details: { data } } }) => ({ data }))
}

const getNavigation = () => {
  return axios
    .get(`${constants.URL}/loadPages/`, {
      params: { ...params }
    })
    .then(({ data: { details: { data } } }) => ({ data }))
}

const getMenuCategories = () => {
  return axios
    .get(`${constants.URL}/loadCategory/`, {
      params: { ...params }
    })
    .then(({ data: { details: { data } } }) => ({ data }))
}

const getSettings = () => {
  return axios
    .get(`${constants.URL}/getAppSettings/`, {
      params: { ...params }
    })
    .then(({ data: { details } }) => ({ details }))
}

const getCart = () => {
  return axios
    .get(`${constants.URL}/loadCart/`, {
      params: { ...params }
    })
    .then(({ data }) => ({ data }))
}

const getItemsByCategory = (cat_id) => {
  return axios
    .get(`${constants.URL}/loadItemByCategory/`, {
      params: { ...params, cat_id }
    })
    .then(({ data: { details: { data } } }) => ({ data }))
}

const addItemToCart = ({
  category_id,
  item_id,
  price,
  qty
}) => {
  return axios
    .post(`${constants.URL}/addToCart/`,
    `category_id=${category_id}&item_id=${item_id}&price=${price}&two_flavors=0&notes=""&qty=${qty}`,
    {
      params: { ...params }
    })
    .then(({ data: { details: { data } } }) => ({ data }))
}

const clearCart = () => {
  axios.get(`${constants.URL}/clearCart/`, {
    params: { ...params }
  })
}

const login = (payload) => {
  return axios
    .get(`${constants.URL}/login/`, {
      params: {
        ...params,
        ...payload
      }
    })
    .then(({ data }) => ({ data }))
}

const register = (payload) => {
  return axios
    .get(`${constants.URL}/customerRegister/`, {
      params: {
        ...params,
        ...payload
      }
    })
    .then(({ data }) => ({ data }))
}

const resetPass = (user_email) => {
  return axios
    .get(`${constants.URL}/requestForgotPass/`, {
      params: {
        ...params,
        user_email
      }
    })
    .then(({ data }) => ({ data }))
}

export {
  getSlides,
  getNavigation,
  getMenuCategories,
  getSettings,
  getCart,
  getItemsByCategory,
  addItemToCart,
  clearCart,
  login,
  register,
  resetPass
}
