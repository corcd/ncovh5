import Request from '@/request/index'

const tianapi = {
  /*
   * 天行数据相关
   */
  ncov(data) {
    return Request.get(`https://api.tianapi.com/txapi/ncov/index`, {
      data
    })
  },
  case(data) {
    return Request.get(`https://api.tianapi.com/txapi/ncovcity/index`, {
      data
    })
  },
  rumour(data) {
    return Request.get(`https://api.tianapi.com/txapi/rumour/index`, {
      data
    })
  },
  ncovsame(data) {
    return Request.get(`https://api.tianapi.com/txapi/ncovsame/index`, {
      data
    })
  }
}

export default tianapi
