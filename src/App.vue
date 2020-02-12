<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.getNcovInfo()
  },
  methods: {
    ...mapActions(['setGlobalData', 'setCaseData']),
    async getNcovInfo() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      // 天行数据接口配置
      const data = {
        key: '115d31d6719afd73bcaad096fac0cb2b'
      }
      const ncovRes = await this.$api.tianapi.ncov(data)
      const caseRes = await this.$api.tianapi.case(data)
      this.setGlobalData(ncovRes.data.newslist[0])
      this.setCaseData(caseRes.data.newslist)
      this.$toast.clear()
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
