<template>
  <div class="infomation">
    <div class="introduction">
      <span class="info-time">截至 {{ getTime }} 全国数据统计</span>
    </div>
    <div class="info-count">
      <Count
        v-for="(item, index) in getCount"
        :key="index"
        :title="item.title"
        :count="item.count"
        :incr="item.incr"
        :color="item.color"
      ></Count>
    </div>
    <Map></Map>
    <van-swipe class="info-images" :autoplay="5000">
      <van-swipe-item v-for="(image, index) in desc.dailyPics" :key="index">
        <van-image fit="contain" :src="image">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
    <Report></Report>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import Count from '@/components/Count'
import Map from '@/components/Map'
import Report from '@/components/Report'

export default {
  name: 'Information',
  components: { Count, Map, Report },
  computed: {
    ...mapState(['desc', 'case']),
    getTime() {
      return dayjs(this.desc.modifyTime).format('YYYY-MM-DD HH:mm:ss')
    },
    getCount() {
      return [
        {
          title: '确诊',
          count: this.desc.confirmedCount,
          incr: this.desc.confirmedIncr,
          color: '#f74c31'
        },
        {
          title: '疑似',
          count: this.desc.suspectedCount,
          incr: this.desc.suspectedIncr,
          color: '#f78207'
        },
        {
          title: '危重',
          count: this.desc.seriousCount,
          incr: this.desc.seriousIncr,
          color: '#a25a4e'
        },
        {
          title: '死亡',
          count: this.desc.deadCount,
          incr: this.desc.deadIncr,
          color: '#5d7092'
        },
        {
          title: '治愈',
          count: this.desc.curedCount,
          incr: this.desc.curedIncr,
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
  min-height: 600px;
  padding: 2% 3.5%;
  background: #fff;

  .introduction {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-time {
      font-size: 70%;
      text-align: left;
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
