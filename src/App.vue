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
    ...mapActions(['setGlobalData']),
    async getNcovInfo() {
      const data = {
        key: '115d31d6719afd73bcaad096fac0cb2b'
      }
      const res = await this.$api.tianapi.ncov(data)
      const newsList = res.data.newslist[0]
      this.setGlobalData(newsList)
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background: url('./assets/images/health.png') no-repeat fixed;
  background-size: cover;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
