<template>
  <div class="tabs">
    <van-tabs v-model="active" class="vantabs" swipeable sticky>
      <van-tab title="疫情总览">
        <Information></Information>
      </van-tab>
      <van-tab title="本地疫情">
        <Location></Location>
      </van-tab>
      <!-- <van-tab title="相关直播">
        <Stream></Stream>
      </van-tab> -->
      <van-tab title="实时播报">
        <Timeline></Timeline>
      </van-tab>
      <van-tab title="病例分布">
        <Community></Community>
      </van-tab>
      <van-tab title="谣言终结">
        <Rumour></Rumour>
      </van-tab>
      <van-tab title="同程查询">
        <Ncovsame></Ncovsame>
      </van-tab>
      <!-- <van-tab title="查询工具">
        <Tools></Tools>
      </van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
import Information from '@/components/Information'
// import Stream from '@/components/Stream'
import Location from '@/components/Location'
import Rumour from '@/components/Rumour'
import Ncovsame from '@/components/Ncovsame'
import Community from '@/components/Community'
import Timeline from '@/components/Timeline'
// import Tools from '@/components/Tools'

export default {
  name: 'Tabs',
  components: { Information, Location, Rumour, Ncovsame, Community, Timeline },
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
