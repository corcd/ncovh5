<template>
  <div class="tabs">
    <van-tabs v-model="active" class="vantabs" animated swipeable sticky>
      <van-tab title="疫情总览">
        <Information></Information>
      </van-tab>
      <van-tab title="相关直播">
        <Stream></Stream>
      </van-tab>
      <van-tab title="实时播报">内容 3</van-tab>
      <van-tab title="查询工具">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Information from '@/components/Information'
import Stream from '@/components/Stream'

export default {
  name: 'Tabs',
  components: { Information, Stream },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  height: 100%;

  .vantabs {
    width: 100%;
    height: 100%;
  }
}
</style>
