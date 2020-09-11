import axios from 'axios'

const LOAD_CART = axios.create({
  baseURL: 'https://vsem-edu-oblako.ru/singlemerchant/api/loadCart/?merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&lang=ru&device_id=XXX_555_&device_plarform=site&json=1'
})

export default LOAD_CART
