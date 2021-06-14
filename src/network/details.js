import {request} from "./request"

export function getDetails(id){
  return request({
    url: "/db.json",
    params: {
      id
    }
  })
}