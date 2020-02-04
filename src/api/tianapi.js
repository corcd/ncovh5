import Request from '@/request/index'

const tianapi = {
  /*
   * 天行数据相关
   */
  ncov(data) {
    return Request.get(`https://api.tianapi.com/txapi/ncov/index`, {
      data
    })
  }
}

export default tianapi
