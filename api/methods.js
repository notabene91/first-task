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

// eslint-disable-next-line camelcase
const getItemsByCategory = (cat_id) => {
  return axios
    .get(`${constants.URL}/loadItemByCategory/`, {
      params: { ...params, cat_id }
    })
    .then(({ data: { details: { data } } }) => ({ data }))
}

export {
  getSlides,
  getNavigation,
  getMenuCategories,
  getSettings,
  getCart,
  getItemsByCategory
}
