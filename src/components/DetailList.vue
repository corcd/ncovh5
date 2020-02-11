<template>
  <div class="detaillist">
    <div class="item">
      <div class="title-item item-date">日期</div>
      <div class="title-item item-type">交通</div>
      <div class="title-item item-no">航班/车次/场所</div>
      <div class="title-item item-pos">地区</div>
    </div>
    <div v-if="data.length === 0" class="empty">暂无搜索结果</div>
    <div class="item" v-for="(item, index) in data" :key="index">
      <div class="item-date" style="color:#CC413A">
        {{ getTime(item.t_date) }}
      </div>
      <div class="item-type">{{ getType(item.t_type) }}</div>
      <div class="item-no">{{ item.t_no }}</div>
      <div v-if="item.t_pos_start && item.t_pos_end" class="item-pos">
        {{ `${item.t_pos_start}-${item.t_pos_end}` }}
      </div>
      <div v-else class="item-pos">
        {{ item.t_pos_start ? item.t_pos_start : '/' }}
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'DetailList',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      columns: [
        '飞机 ',
        '火车',
        '地铁',
        '大巴',
        '公交车',
        '网约车',
        '轮船',
        '场所'
      ]
    }
  },
  computed: {
    getType() {
      return type => {
        return this.columns[type - 1]
      }
    },
    getTime() {
      return date => {
        return dayjs(date).format('M月DD日')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detaillist {
  width: 100%;
  padding: 2% 0;

  .empty {
    width: 100%;
    padding: 5px;
    font-size: 80%;
    font-weight: normal;
  }

  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 100%;
    font-weight: bold;
    line-height: 100%;
    background: #f7f7f7;
    border-top: 1px solid #fff;

    &:last-child {
      border-bottom: 1px solid #fff;
    }

    .title-item {
      padding: 0 !important;
      font-size: 100% !important;
      font-weight: bold !important;
      line-height: 200% !important;
      background: #e4e7f2;
    }

    .item-date {
      width: 15%;
      padding: 5px;
      font-size: 80%;
      font-weight: bold;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    .item-type {
      width: 15%;
      padding: 5px;
      font-size: 80%;
      font-weight: normal;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    .item-no {
      width: 45%;
      padding: 5px;
      font-size: 80%;
      font-weight: normal;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    .item-pos {
      width: 25%;
      padding: 5px;
      font-size: 80%;
      font-weight: normal;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
  }
}
</style>
