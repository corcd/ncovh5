<template>
  <div class="location">
    <div class="introduction">
      <div class="info-location">
        <van-tag class="tag" type="danger">本地</van-tag>
        {{ region ? region : '未公开' }}
      </div>
      <span class="info-time">截至 {{ updateTime }} 地区媒体公布</span>
    </div>
    <div class="info-count">
      <Count
        v-for="(item, index) in countInfo"
        :key="index"
        :title="item.title"
        :count="item.count"
        :incr="item.incr"
        :color="item.color"
        :showinc="item.showinc"
      ></Count>
    </div>
    <!-- <Localreport :info="caseInfo"></Localreport> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import Count from '@/components/Count'
// import Localreport from '@/components/Localreport'

export default {
  name: 'Location',
  components: { Count },
  data() {
    // const countInfo = [
    //   {
    //     title: '确诊',
    //     count: 34,
    //     incr: 0,
    //     color: '#f74c31'
    //   },
    //   {
    //     title: '死亡',
    //     count: 0,
    //     incr: 0,
    //     color: '#5d7092'
    //   },
    //   {
    //     title: '治愈',
    //     count: 5,
    //     incr: 2,
    //     color: '#28b7a3'
    //   }
    // ]

    const caseInfo = [
      {
        name: '越城区',
        confirmedCount: 13,
        deadCount: 0,
        curedCount: 2
      },
      {
        name: '柯桥区',
        confirmedCount: 7,
        deadCount: 0,
        curedCount: 0
      },
      {
        name: '诸暨市',
        confirmedCount: 5,
        deadCount: 0,
        curedCount: 0
      },
      {
        name: '上虞区',
        confirmedCount: 2,
        deadCount: 0,
        curedCount: 1
      },
      {
        name: '新昌县',
        confirmedCount: 2,
        deadCount: 0,
        curedCount: 0
      },
      {
        name: '嵊州市',
        confirmedCount: 1,
        deadCount: 0,
        curedCount: 0
      },
      {
        name: '未公布来源',
        confirmedCount: 4,
        deadCount: 0,
        curedCount: 2
      }
    ]

    return {
      region: '',
      updateTime: '',
      countInfo: [],
      caseInfo: caseInfo
    }
  },
  mounted() {
    this.getClientData()
  },
  computed: {
    ...mapState(['desc', 'case']),
    getTime() {
      return dayjs(this.desc.modifyTime).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    async getClientData() {
      const uin = this.$utils.parseUrl('uin')
      const data = {
        uin: uin
      }
      const res = await this.$api.client.ncovData(data)
      const date = res.data.data.updateAt ? res.data.data.updateAt : 0
      this.region = res.data.data.area
      this.updateTime = dayjs(date * 1000).format('YYYY-MM-DD HH:mm:ss')
      this.countInfo = [
        {
          title: '确诊',
          count: res.data.data.confirmedCount,
          incr: res.data.data.confirmedCountInc,
          color: '#f74c31',
          showinc: false
        },
        {
          title: '死亡',
          count: res.data.data.deadCount,
          incr: res.data.data.deadCountInc,
          color: '#5d7092',
          showinc: false
        },
        {
          title: '治愈',
          count: res.data.data.curedCount,
          incr: res.data.data.curedCountInc,
          color: '#28b7a3',
          showinc: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.location {
  width: 100%;
  min-height: 600px;
  padding: 2% 3.5%;
  background: #fff;

  .introduction {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-location {
      font-size: 40%;
      font-weight: bold;
    }

    .info-time {
      flex-grow: 1;
      font-size: 40%;
      text-align: right;
    }
  }

  .info-count {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2% 0;
  }
}
</style>
