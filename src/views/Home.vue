<template>
  <div class="home">
    <Header class="header"></Header>
    <Tabs class="tabs"></Tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'

export default {
  name: 'home',
  components: {
    Header,
    Tabs
  },
  data() {
    return {
      wxShareInfo: {
        title: '',
        desc: '',
        imgUrl: ''
      }
    }
  },
  mounted() {
    // console.log(this.$utils.isWx())
    if (this.$utils.isWx()) {
      this.initWXShare()
      this.getWxJsapiPackage()
    }
  },
  computed: {
    ...mapState(['desc', 'gdy']),
    getShareInfo() {
      const info = {
        title: '新型冠状病毒肺炎实时追踪',
        desc: this.gdy.desc,
        imgUrl: this.desc.imgUrl,
        link: window.location.href,
        // eslint-disable-next-line no-empty-function
        success() {}
      }
      return info
    }
  },
  methods: {
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
        jsApiList: ['updateTimelineShareData', 'updateAppMessageShareData']
      })
    },
    initWXShare() {
      const that = this
      window.wx.ready(() => {
        window.wx.updateTimelineShareData(that.getShareInfo) // 分享至好友
        window.wx.updateAppMessageShareData(that.getShareInfo) // 分享至朋友圈
      })
      window.wx.error(err => {
        that.$toast.fail(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;

  .header {
    flex-shrink: 0;
  }

  .tabs {
    flex-grow: 1;
    width: 100%;
    height: 75%;
  }
}
</style>
