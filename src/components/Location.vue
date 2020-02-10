<template>
  <div class="location">
    <div class="introduction">
      <div class="info-location">
        <van-tag class="tag" type="danger">本地</van-tag>
        {{ gdy.area ? gdy.area : '未公开' }}
      </div>
      <span class="info-time">截至 {{ getTime }} 地方媒体公布</span>
    </div>
    <div class="info-count">
      <Count
        v-for="(item, index) in getCountInfo"
        :key="index"
        :title="item.title"
        :count="item.count"
        :incr="item.incr"
        :color="item.color"
        :showinc="item.showinc"
      ></Count>
    </div>
    <!-- <Localreport :info="caseInfo"></Localreport> -->
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
    <div class="live">
      <div class="title">相关媒体直播</div>
      <div class="list">
        <Liveitem
          v-for="(item, index) in liveList"
          :key="index"
          :title="item.title"
          :poster="item.cover"
          :date="item.createTime"
          :url="item.url"
        ></Liveitem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import Count from '@/components/Count'
import Liveitem from '@/components/Liveitem'
// import Localreport from '@/components/Localreport'

export default {
  name: 'Location',
  components: { Count, Liveitem },
  data() {
    return {
      liveList: []
    }
  },
  mounted() {
    this.getLiveList()
  },
  computed: {
    ...mapState(['desc', 'case', 'gdy']),
    getTime() {
      return dayjs(this.gdy.updateAt * 1000).format('YYYY-MM-DD HH:mm:ss')
    },
    getCountInfo() {
      return [
        {
          title: '确诊',
          count: this.gdy.confirmedCount,
          incr: this.gdy.confirmedCountInc,
          color: '#f74c31',
          showinc: false
        },
        {
          title: '死亡',
          count: this.gdy.deadCount,
          incr: this.gdy.deadCountInc,
          color: '#5d7092',
          showinc: false
        },
        {
          title: '治愈',
          count: this.gdy.curedCount,
          incr: this.gdy.curedCountInc,
          color: '#28b7a3',
          showinc: false
        }
      ]
    }
  },
  methods: {
    async getLiveList() {
      const uin = this.$utils.parseUrl('uin')
      const data = {
        uin: uin,
        page: 1,
        num: 100
      }
      const res = await this.$api.client.liveList(data)
      this.liveList = [...res.data.data.list]
    },
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
    justify-content: space-around;
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

  .live {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2% 0;

    .title {
      width: 100%;
      font-size: 90%;
      font-weight: bold;
      text-align: left;
    }

    .list {
      width: 100%;
    }
  }
}
</style>
