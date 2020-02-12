import Request from '@/request/index'

const dxy = {
  /*
   * 丁香园数据相关
   */
  rumour(data) {
    return Request.get(
      `https://file1.dxycdn.com/2020/0130/454/3393874921745912507-115.json`,
      {
        data
      }
    )
  }
}

export default dxy
