
import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve,reject) => {
        //1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.id ===payload.id)

      //2.判断oldProduct
      if(oldProduct) {  //数量+1
        //oldProduct.count += 1;
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量+1')
      }else{  //添加新的商品
        payload.count = 1;
        payload.checked = true;
        //state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  }
}