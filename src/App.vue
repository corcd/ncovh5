<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      wxShareInfo: {
        title: '',
        desc: '',
        imgUrl: ''
      }
    }
  },
  created() {
    this.getNcovInfo()
  },
  mounted() {
    if (this.$utils.getUA.isWx) {
      this.getWxJsapiPackage()
    }
  },
  computed: {
    shareInfo() {
      const json = {
        link: window.location.href,
        // eslint-disable-next-line no-empty-function
        success() {},
        // eslint-disable-next-line no-empty-function
        fail() {}
      }
      const config = Object.assign(json, this.wxShareInfo)
      return config
    }
  },
  methods: {
    ...mapActions(['setGlobalData', 'setCaseData', 'setGdyData']),
    async getNcovInfo() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      const data = {
        key: '115d31d6719afd73bcaad096fac0cb2b'
      }
      const ncovRes = await this.$api.tianapi.ncov(data)
      const caseRes = await this.$api.tianapi.case(data)
      const uin = this.$utils.parseUrl('uin')
      const gdyData = {
        uin: uin
      }
      const gdyRes = await this.$api.client.ncovData(gdyData)
      this.setGdyData(gdyRes.data.data)
      this.setGlobalData(ncovRes.data.newslist[0])
      this.setCaseData(caseRes.data.newslist)
      if (this.$utils.getUA.isWx) {
        this.wxShareInfo = {
          title: '新型冠状病毒肺炎实时追踪',
          desc: gdyRes.data.data.desc,
          imgUrl: ncovRes.data.newslist[0].desc.imgUrl
        }
        this.initWXShare()
      }
      this.$toast.clear()
    },
    async getWxJsapiPackage() {
      const uin = this.$utils.parseUrl('uin')
      const data = {
        uin: Number(uin),
        herf: window.location.href
      }
      const res = await this.$api.client.getShareInfo(data)
      this.initWXSDK(res.data.data)
    },
    initWXSDK(info) {
      window.wx.config({
        debug: false,
        appId: info.appId,
        timestamp: info.timestamp,
        nonceStr: info.nonceStr,
        signature: info.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
      })
    },
    initWXShare() {
      const that = this
      window.wx.ready(() => {
        window.wx.onMenuShareTimeline(that.shareInfo) // 分享至好友
        window.wx.onMenuShareAppMessage(that.shareInfo) // 分享至朋友圈
      })
      window.wx.error(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  max-width: 100%;
  height: 100%;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
