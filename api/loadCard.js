import axios from 'axios'

const LOAD_CARD = axios.create({
  baseURL: 'https://vsem-edu-oblako.ru/singlemerchant/api/loadItemByCategory/?merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&lang=ru&device_id=XXX_555_&device_plarform=site&json=1&cat_id=1508464'
})

export default LOAD_CARD
