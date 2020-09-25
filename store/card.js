/* eslint-disable no-console */
import axios from 'axios'

export const state = () => ({
  cards: []
})

export const mutations = {
  setState (state, value) {
    return (state.cards = value)
  }
}

export const actions = {
  async fetchCardInfo (state, id) {
    try {
      const res = await axios.get(`https://vsem-edu-oblako.ru/singlemerchant/api/loadItemByCategory/?merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&lang=ru&device_id=XXX_555_&device_plarform=site&json=1&cat_id=${id}`)
      return state.commit('setState', {
        value: res.data.details.data
      })
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  }
}
//   category_id: - id категории
// item_id: - id товара
// two_flavors: - передавать значение: 0
// price: - сумма товара
// notes: Комментарий клиента к товару
// qty: Кол-во товара
// *Если у товара несколько тип цен (т.е товар с модификаторами)
// category_id: - id категории
// item_id: - id товара
// two_flavors: - передавать значение: 0
// price: price|size|size_id  - эти данные можно получить методом: Получить детальную информацию по товару (блюду) https://prnt.sc/prriqc

// *Если у товара несколько тип цен (т.е товар с модификаторами) и есть добавки

// const addItemToBasket = ({
//   category_id,
//   item_id,
//   price,
//   qty,
//   row,
//   currentAddons = "",
//   data,
//   merchant_keys,
//   device_id,
// }) => {
//   if (data) {
//     data = qs.stringify(data);
//   }

//   return axios.post(
//     `${constants.URL}/addToCart/`,
//     `category_id=${category_id}&item_id=${item_id}&price=${price}&two_flavors=0&notes=""&qty=${qty}&row=${row}${currentAddons}&${data}`,
//     {
//       headers: constants.HEADERS,
//       params: { ...params, merchant_keys, device_id },
//     }
//   );
// };
export const getters = {
  getCards (state) {
    return state.cards
  }
}
