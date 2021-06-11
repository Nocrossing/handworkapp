import {request} from "./request"

export function getHomeMultidata(){
  return request({
    url: "/data"
  })
}

export function getHomeGoods(type){
  return request({
    url: "/goods",
    params: {
      type
     // page
    }
  })
}