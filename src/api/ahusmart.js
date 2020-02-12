import Request from '@/request/index'

const ahusmart = {
  /*
   * 病例分布数据相关
   */
  getData(data) {
    return Request.get(`https://lab.ahusmart.com/nCoV/api/detail`, {
      data
    })
  }
}

export default ahusmart
