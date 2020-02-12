<template>
  <div class="rumour">
    <div class="header">
      <div class="desc">新型冠状病毒肺炎</div>
      <div class="name">谣言终结榜</div>
    </div>
    <Roumeritem></Roumeritem>
    <div class="content">
      <div class="card" v-for="(item, index) in rumourList" :key="index">
        <div class="type">
          <div
            class="num"
            :style="{ background: item.rumorType ? '#72D36D' : '#e5593f' }"
          >
            {{ index + 1 }}
          </div>
          <img
            v-if="!item.rumorType"
            class="img img-rumour"
            alt="type"
            src="data:image/png;base64,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"
          />
          <img
            v-else
            class="img img-truth"
            alt="type"
            src="data:image/png;base64,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"
          />
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="summary">
          {{ item.mainSummary }}
          <div class="detail">{{ item.body }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Roumeritem from '@/components/Rumouritem'
export default {
  name: 'Rumour',
  components: {
    Roumeritem
  },
  data() {
    return {
      rumourList: []
    }
  },
  mounted() {
    this.getTopRumours()
  },
  methods: {
    async getTopRumours() {
      const res = await this.$api.dxy.rumour()
      // console.log(res.data)
      this.rumourList = [...res.data.data]
    }
  }
}
</script>

<style lang="scss" scoped>
.rumour {
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2% 3.5%;
  background: #fff;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .desc {
      width: 150px;
      font-size: 90%;
      font-weight: bold;
      line-height: 160%;
      border: 1px solid #cecece;
      border-radius: 100px;
    }

    .name {
      font-size: 200%;
      font-weight: bold;
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2% 0;

    .card {
      width: 100%;
      margin: 5px;
      padding: 25px 15px;
      background: #2639b2;
      border: none;
      border-radius: 12px;

      .type {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;

        .num {
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          padding: 8px;
          color: #fff;
          font-size: 140%;
          font-weight: bold;
          // background: #e5593f;
          border-radius: 3px;
        }

        .img {
          height: 40px !important;
        }
      }

      .title {
        width: 100%;
        margin-bottom: 15px;
        padding-right: 40px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #fff;
        font-size: 130%;
        font-weight: bold;
        text-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
        text-align: left;
      }

      .summary {
        width: 100%;
        min-height: 20px;
        padding: 10px;
        background: #fff;
        font-size: 100%;
        font-weight: bold;
        text-align: left;
        border-radius: 8px;

        .detail {
          margin-top: 5px;
          color: #999;
          font-size: 80%;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
