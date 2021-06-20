import { request } from "./request"

export function getCommunity(type) {
  return request ({
    url: "/community.json",
    params: {
      type
    }
  })
}