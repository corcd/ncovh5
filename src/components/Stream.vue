<template>
  <div class="stream">
    <div class="introduction">
      <span class="info-content">以下直播均收集至“广电云”平台</span>
    </div>
    <div class="streamlist">
      <div class="area">
        <div class="area-province area-province-title">省、市、区县及地区</div>
        <div class="area-count area-count-title">相关直播</div>
      </div>
      <div class="area" v-for="(item, index) in data" :key="index">
        <div class="area-province">{{ item.provinceShortName }}</div>
        <div class="area-count">{{ item.children.length }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const DATA = require('@/assets/stream/data.json')

export default {
  name: 'Stream',
  data() {
    return {
      data: DATA
    }
  }
}
</script>

<style lang="scss" scoped>
.stream {
  width: 100%;
  min-height: 800px;
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
  }
}
</style>
