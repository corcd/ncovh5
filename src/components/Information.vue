<template>
  <div class="infomation">
    <div class="introduction">
      <span class="info-time">截至 {{ getTime }} 全国数据统计</span>
    </div>
    <div class="tips">
      <div class="notice">
        较昨日数据待国家卫健委公布
      </div>
    </div>
    <div class="info-count">
      <Count
        v-for="(item, index) in getCount.slice(0, 3)"
        :key="index"
        :title="item.title"
        :count="item.count"
        :incr="item.incr"
        :color="item.color"
      ></Count>
    </div>
    <div class="info-count">
      <Count
        v-for="(item, index) in getCount.slice(3, 6)"
        :key="index"
        :title="item.title"
        :count="item.count"
        :incr="item.incr"
        :color="item.color"
      ></Count>
    </div>
    <Map></Map>
    <van-swipe class="info-images" :autoplay="5000">
      <van-swipe-item
        v-for="(image, index) in desc.quanguoTrendChart"
        :key="index"
      >
        <van-image fit="contain" :src="image.imgUrl">
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
          title: ' 现存确诊',
          count: this.desc.currentConfirmedCount,
          incr: this.desc.currentConfirmedIncr,
          color: '#f74c31'
        },
        {
          title: '现存疑似',
          count: this.desc.suspectedCount,
          incr: this.desc.suspectedIncr,
          color: '#f78207'
        },
        {
          title: '治愈',
          count: this.desc.curedCount,
          incr: this.desc.curedIncr,
          color: '#28b7a3'
        },
        {
          title: '累计确诊',
          count: this.desc.confirmedCount,
          incr: this.desc.confirmedIncr,
          color: '#a12f32'
        },
        {
          title: '现存危重',
          count: this.desc.seriousCount,
          incr: this.desc.seriousIncr,
          color: '#a25a4e'
        },
        {
          title: '死亡',
          count: this.desc.deadCount,
          incr: this.desc.deadIncr,
          color: '#5d7092'
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
    height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-time {
      height: 100%;
      font-size: 80%;
      line-height: 180%;
      text-align: left;
    }
  }

  .tips {
    width: 100%;
    height: 22px;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .notice {
      width: 200px;
      height: 100%;
      background: #f7f7f7;
      font-size: 70%;
      line-height: 180%;
      text-align: center;
      border-radius: 100px;
    }
  }

  .info-count {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2% 10%;
  }

  .info-images {
    width: 100%;
    padding: 4% 0;
  }
}
</style>
