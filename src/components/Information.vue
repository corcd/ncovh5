<template>
  <div class="infomation">
    <div class="introduction">
      <span class="info-time">截至 2020-02-04 09:39 全国数据统计</span>
    </div>
    <div class="info-count">
      <Count
        v-for="item in countInfo"
        :key="item.title"
        :title="item.title"
        :count="item.count"
        :incr="item.incr"
        :color="item.color"
      ></Count>
    </div>
  </div>
</template>

<script>
import Count from '@/components/Count'

export default {
  name: 'Information',
  components: { Count },
  data() {
    return {
      countInfo: () => {}
    }
  },
  mounted() {
    this.getNcovInfo()
  },
  methods: {
    async getNcovInfo() {
      const data = {
        key: '115d31d6719afd73bcaad096fac0cb2b'
      }
      const res = await this.$api.tianapi.ncov(data)
      const newsList = res.data.newslist[0]
      this.countInfo = [
        {
          title: '确诊',
          count: newsList.desc.confirmedCount,
          incr: newsList.desc.confirmedIncr,
          color: '#f74c31'
        },
        {
          title: '疑似',
          count: newsList.desc.suspectedCount,
          incr: newsList.desc.suspectedIncr,
          color: '#f78207'
        },
        {
          title: '危重',
          count: newsList.desc.seriousCount,
          incr: newsList.desc.seriousIncr,
          color: '#a25a4e'
        },
        {
          title: '死亡',
          count: newsList.desc.deadCount,
          incr: newsList.desc.deadIncr,
          color: '#5d7092'
        },
        {
          title: '治愈',
          count: newsList.desc.curedCount,
          incr: newsList.desc.curedIncr,
          color: '#28b7a3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.infomation {
  width: 100%;
  min-height: 800px;
  padding: 2% 3.5%;
  background: #fff;

  .introduction {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-time {
      font-size: 40%;
    }
  }

  .info-count {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 0;
  }
}
</style>
