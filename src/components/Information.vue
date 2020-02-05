<template>
  <div class="infomation">
    <div class="introduction">
      <span class="info-time">截至 {{ date }} 全国数据统计</span>
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
    <van-swipe class="info-images" :autoplay="5000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image fit="contain" :src="image">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
    <Report :caseinfo="caseInfo"></Report>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Count from '@/components/Count'
import Report from '@/components/Report'

export default {
  name: 'Information',
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
      this.caseInfo = [...newsList.case].reverse()
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

  .info-images {
    width: 100%;
    padding: 4% 0;
  }
}
</style>
