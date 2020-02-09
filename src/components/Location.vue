<template>
  <div class="location">
    <div class="introduction">
      <div class="info-location">
        <van-tag class="tag" type="danger">本地</van-tag>
        绍兴
      </div>
      <span class="info-time">截至 {{ getTime }} 地区卫健委统计</span>
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
    <Localreport :info="caseInfo"></Localreport>
    <div class="btn-group">
      <van-button
        type="info"
        size="small"
        plain
        round
        block
        @click="community()"
      >
        新冠小区查询
      </van-button>
      <van-button
        type="info"
        size="small"
        plain
        round
        block
        @click="distribution()"
      >
        病例分布查询
      </van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import Count from '@/components/Count'
import Localreport from '@/components/Localreport'

export default {
  name: 'Location',
  components: { Count, Localreport },
  data() {
    const countInfo = [
      {
        title: '确诊',
        count: 36,
        incr: 0,
        color: '#f74c31'
      },
      {
        title: '死亡',
        count: 0,
        incr: 0,
        color: '#5d7092'
      },
      {
        title: '治愈',
        count: 5,
        incr: 2,
        color: '#28b7a3'
      }
    ]

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
        confirmedCount: 6,
        deadCount: 0,
        curedCount: 2
      }
    ]

    return {
      countInfo: countInfo,
      caseInfo: caseInfo
    }
  },
  computed: {
    ...mapState(['desc', 'case']),
    getTime() {
      return dayjs(this.desc.modifyTime).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    community() {
      window.location.href = 'https://ncov.html5.qq.com/community?channelid=17'
    },
    distribution() {
      this.$toast('功能开发中，即将上线...')
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
    justify-content: space-between;
    align-items: center;
    padding: 2% 0;
  }

  .btn-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2% 0;

    button {
      width: 48%;
      height: 40px;
      font-size: 100%;
      font-weight: bold;
    }
  }
}
</style>
