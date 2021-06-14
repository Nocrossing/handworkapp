import {request} from "./request"

export function getHomeMultidata(){
  return request({
    url: "/home.json"
  })
}

export function getHomeGoods(type){
  return request({
    url: "/goods.json",
    params: {
      type
     // page
    }
  })
}