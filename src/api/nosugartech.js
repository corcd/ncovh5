import Request from '@/request/index'

const nosugartech = {
  /*
   * 同程数据相关
   */
  getData(data) {
    return Request.get(`https://2019ncov.nosugartech.com/data.json`, {
      data
    })
  }
}

export default nosugartech
