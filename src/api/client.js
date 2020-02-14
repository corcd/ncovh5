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
  liveList(data) {
    return Request.get(`${base.gateWay}/c/live/list`, {
      data
    })
  },
  cmsList(data) {
    return Request.get(`${base.gateWay}/c/cms/list`, {
      data
    })
  },
  getShareInfo(data) {
    return Request.post(`${base.gateWay}/c/share`, data)
  }
}

export default client
