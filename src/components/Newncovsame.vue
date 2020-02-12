<template>
  <div class="ncovsame">
    <div class="header"></div>
    <div class="content">
      <div class="query">
        <div class="tips">输入任意一项即可查询</div>
        <van-field
          :value="getTime"
          label="时间"
          readonly
          @click="popUp('date')"
        />
        <van-field
          :value="getType"
          label="类型"
          readonly
          @click="popUp('type')"
        />
        <van-field v-model="no" label="车次" placeholder="航班号/车次/车牌号" />
        <van-field
          v-model="arrive"
          label="地区"
          placeholder="例如：武汉、湖北"
        />
        <div class="btn-group">
          <van-button type="default" size="normal" @click="clearData()">
            清空查询
          </van-button>
          <van-button
            type="primary"
            color="#DC3131"
            size="normal"
            @click="search()"
          >
            马上查询
          </van-button>
        </div>
        <div class="source">数据来源于官方报道{{ getCount }}</div>
      </div>
      <div class="intro">{{ intro }}</div>
      <DetailList :data="resList"></DetailList>
    </div>
    <van-popup v-model="dateShow" position="bottom">
      <van-datetime-picker
        v-model="date"
        type="date"
        :show-toolbar="false"
        :min-date="minDate"
        :max-date="maxDate"
    /></van-popup>
    <van-popup v-model="typeShow" position="bottom">
      <van-picker :columns="columns" @change="onChange"
    /></van-popup>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import DetailList from '@/components/DetailList'

export default {
  name: 'Newncovsame',
  components: {
    DetailList
  },
  data() {
    return {
      typeShow: false,
      dateShow: false,
      columns: [
        '飞机 ',
        '火车',
        '地铁',
        '大巴',
        '公交车',
        '网约车',
        '轮船',
        '场所'
      ],
      minDate: new Date(2019, 12, 1),
      maxDate: new Date(),
      type: 1,
      no: '',
      arrive: '',
      date: new Date(),
      intro: '部分最新数据',
      data: [],
      resList: []
    }
  },
  mounted() {
    this.getNcovSameInfo()
  },
  computed: {
    getType() {
      return this.columns[this.type - 1]
    },
    getTime() {
      return dayjs(this.date).format('YYYY-MM-DD')
    },
    getCount() {
      return `，共${this.data.length}条，已筛选${this.resList.length}条`
    }
  },
  methods: {
    async getNcovSameInfo() {
      const res = await this.$api.nosugartech.getData()
      this.data = res.data.data
      this.resList = this.data.slice(0, 99)
    },
    search() {
      // console.log(dayjs(this.date).unix(), this.type, this.no)
      this.intro = '搜索结果'
      let res = []
      this.data.forEach(item => {
        if (item.t_no.includes(this.no) || this.no === '') {
          if (
            item.t_pos_start.includes(this.arrive) ||
            item.t_pos_end.includes(this.arrive) ||
            this.arrive === ''
          ) {
            if (dayjs(item.t_date).unix() === dayjs(this.date).unix()) {
              if (item.t_type === this.type) {
                res.push(item)
              }
            }
          }
        }
      })
      this.resList = [...res]
    },
    clearData() {
      this.type = 1
      this.no = ''
      this.arrive = ''
      this.date = new Date()
      this.intro = '部分最新数据'
      this.resList = this.data.slice(0, 99)
    },
    popUp(type) {
      switch (type) {
        case 'type':
          this.typeShow = true
          break
        case 'date':
          this.dateShow = true
          break
        default:
          break
      }
    },
    onChange(picker, value, index) {
      // this.$toast(`当前值：${value}, 当前索引：${index}`)
      this.type = index + 1
    }
  }
}
</script>

<style lang="scss" scoped>
.ncovsame {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .header {
    width: 100%;
    height: 300px;
    background: url(../assets/images/ncovsame.png) no-repeat;
    background-size: cover;
  }

  .content {
    position: absolute;
    left: 0;
    top: 180px;
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: transparent;
    padding: 0 2%;

    .query {
      width: 100%;
      height: 365px;
      padding: 10px 10px;
      background: #fff;
      // border: 1px solid #e9e9e9;
      border-radius: 6px;
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08);

      .tips {
        width: 100%;
        padding: 10px 25px;
        color: #999;
        font-size: 80%;
        text-align: left;
      }

      .btn-group {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px 10px 30px;

        button {
          width: 45%;
        }
      }

      .source {
        width: 100%;
        padding: 5px 0;
        color: #999;
        font-size: 80%;
        text-align: center;
      }
    }

    .intro {
      width: 100%;
      margin-top: 20px;
      color: #333;
      font-size: 90%;
      font-weight: bold;
      text-align: left;
    }
  }
}
</style>

<style lang="scss">
.ncovsame {
  .van-cell {
    padding: 5px 16px;

    &:not(:last-child)::after {
      border-bottom: none !important;
    }
  }

  .van-cell__title {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 110%;
    font-weight: bold;
    text-align: center;
  }

  .van-field__control {
    height: 40px;
    padding: 0 10px;
    border: 1px solid #e9e9e9;
    border-radius: 3px;
  }
}
</style>
