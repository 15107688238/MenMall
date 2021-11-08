import {request} from './request'

export function getMultiData() {
  return request({
    url: '/multidata',
  })
}

export function getGoodsData(type,page) {
  return request({
    url: '/data',
    params: {
      type,
      page
    }
  })
}