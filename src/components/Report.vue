<template>
  <div class="report">
    <div class="item">
      <div class="item-province item-province-title">地区</div>
      <div class="item-confirmed item-confirmed-title">确诊</div>
      <div class="item-dead item-dead-title">死亡</div>
      <div class="item-cured item-cured-title">治愈</div>
    </div>
    <div class="item" v-for="(item, index) in getCase" :key="index">
      <div class="item-province">{{ item.provinceShortName }}</div>
      <div class="item-confirmed">{{ item.confirmedCount }}</div>
      <div class="item-dead">{{ item.deadCount }}</div>
      <div class="item-cured">{{ item.curedCount }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Report',
  data() {
    return {
      activeName: '0'
    }
  },
  computed: {
    ...mapState(['case']),
    getCase() {
      const caseInfo = [...this.case].reverse()
      return caseInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.report {
  width: 100%;

  .item {
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

    .item-province-title {
      background: #e4e7f2;
    }

    .item-confirmed-title {
      background: #ebbcb2;
    }

    .item-dead-title {
      background: #b6c0d3;
    }

    .item-cured-title {
      background: #80c99d;
    }

    .item-province {
      width: 40%;
      padding: 0 0 0 6%;
      text-align: left;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    .item-confirmed {
      width: 20%;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    .item-dead {
      width: 20%;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }

    .item-cured {
      width: 20%;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
  }
}
</style>
