<template>
  <div class="detaillist">
    <div class="item">
      <div class="title-item item-date">日期</div>
      <div class="title-item item-type">交通</div>
      <div class="title-item item-no">航班/车次/场所</div>
      <div class="title-item item-pos">地区</div>
    </div>
    <div class="item" v-for="(item, index) in data" :key="index">
      <div class="item-date" style="color:#CC413A">
        {{ getTime(item.date) }}
      </div>
      <div class="item-type">{{ item.type }}</div>
      <div class="item-no">{{ item.no }}</div>
      <div v-if="item.pos_start && item.pos_end" class="item-pos">
        {{ `${item.pos_start}-${item.pos_end}` }}
      </div>
      <div v-else class="item-pos">
        {{ item.pos_start }}
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
  computed: {
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
      width: 50%;
      padding: 5px;
      font-size: 80%;
      font-weight: normal;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    .item-pos {
      width: 20%;
      padding: 5px;
      font-size: 80%;
      font-weight: normal;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
  }
}
</style>
