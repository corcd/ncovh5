// import qs from 'qs'
import base from '@/api/base'
import Request from '@/request/index'

const client = {
  /*
   * C 端数据相关
   */
  ncovData(data) {
    return Request.get(`${base.gateWay}/c/data`, {
      data
    })
  },
  cmsList(data) {
    return Request.get(`${base.gateWay}/c/list`, {
      data
    })
  }
}

export default client
