import {request} from "./request"

export function getDetails(id){
  return request({
    url: "/details",
    params: {
      id
    }
  })
}