<template>
  <div class="location">
    <div class="introduction">
      <span class="info-time">截至 {{ date }} 数据统计</span>
    </div>
    <div class="info-count">
      <Count
        v-for="(item, index) in countInfo"
        :key="index"
        :title="item.title"
        :count="item.count"
        :incr="item.incr"
        :color="item.color"
      ></Count>
    </div>
    <Report :caseinfo="caseInfo"></Report>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Count from '@/components/Count'
import Report from '@/components/Report'

export default {
  name: 'Location',
  components: { Count, Report },
  data() {
    return {
      date: '',
      images: [],
      countInfo: () => {},
      caseInfo: []
    }
  },
  created() {
    this.getNcovInfo()
  },
  methods: {
    async getNcovInfo() {
      const data = {
        key: '115d31d6719afd73bcaad096fac0cb2b'
      }
      const res = await this.$api.tianapi.ncov(data)
      const newsList = res.data.newslist[0]
      this.date = dayjs(newsList.desc.modifyTime).format('YYYY-MM-DD HH:mm:ss')
      this.images = [...newsList.desc.dailyPics]
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
      this.caseInfo = [...newsList.case].reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.location {
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
