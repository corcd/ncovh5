<template>
  <div class="stream">
    <div class="introduction">
      <span class="info-content">以下直播均收集互联网</span>
    </div>
    <div class="streamlist">
      <div class="area">
        <div class="area-province area-province-title">平台</div>
        <div class="area-count area-count-title">相关直播</div>
      </div>
      <div class="area">
        <div class="area-province">广电云</div>
        <div class="area-count">{{ part.length }}</div>
      </div>
      <div class="live">
        <Liveitem
          v-for="(item, index) in part"
          :key="index"
          :title="item.title"
          :poster="item.coverImg"
          :date="item.createTime"
          :url="item.url"
        ></Liveitem>
      </div>
    </div>
  </div>
</template>

<script>
import Liveitem from '@/components/Liveitem'
const DATA = require('@/assets/stream/data.json')
const PART1 = require('@/assets/stream/part1_1.json')
const PART2 = require('@/assets/stream/part1_2.json')
const PART3 = require('@/assets/stream/part1_3.json')
const PART4 = require('@/assets/stream/part1_4.json')
const PART5 = require('@/assets/stream/part1_5.json')
const PART6 = require('@/assets/stream/part1_6.json')

export default {
  name: 'Stream',
  components: { Liveitem },
  data() {
    return {
      data: DATA,
      part: PART1.data.list.concat(
        PART2.data.list,
        PART3.data.list,
        PART4.data.list,
        PART5.data.list,
        PART6.data.list
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.stream {
  width: 100%;
  min-height: 600px;
  padding: 2% 3.5%;
  background: #fff;

  .introduction {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-content {
      font-size: 40%;
    }
  }

  .streamlist {
    width: 100%;
    padding: 2% 0;

    .area {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 100%;
      font-weight: bold;
      line-height: 200%;
      background: #f7f7f7;
      border-top: 1px solid #e9e9e9;

      &:last-child {
        border-bottom: 1px solid #e9e9e9;
      }

      .area-province-title {
        background: #e4e7f2;
      }

      .area-count-title {
        background: #e4e7f2;
      }

      .area-province {
        width: 70%;
        padding: 0 0 0 6%;
        text-align: left;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }

      .area-count {
        width: 30%;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }
    }

    .live {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 2% 0;
    }
  }
}
</style>
