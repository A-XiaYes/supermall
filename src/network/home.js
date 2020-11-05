import { request } from './network'

function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    method: 'get',
    params: {
      type,
      page
    }
  })
}

export {
  getHomeMultidata,
  getHomeGoods
}
