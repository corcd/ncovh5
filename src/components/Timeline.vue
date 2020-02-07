<template>
  <div class="timeline">
    <div class="news" v-for="(item, index) in news" :key="index">
      <div class="news-dot">
        <div class="dot"></div>
        <div class="date">
          {{ item.pubDateStr }}
        </div>
        <div class="time">
          {{ getPubTime(item.pubDate) }}
        </div>
      </div>
      <div class="news-content" @click="link(item.sourceUrl)">
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="message">
            {{ item.summary }}
          </div>
          <div class="source">信息来源：{{ item.infoSource }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'Timeline',
  computed: {
    ...mapState(['news']),
    getPubTime() {
      return item => {
        return dayjs(item.pubDate).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  },
  methods: {
    link(url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  width: 100%;
  min-height: 600px;
  padding: 2% 3.5%;
  background: #f7f7f7;

  .news {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 4%;
    background: transparent;

    .news-dot {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 2%;

      .dot {
        width: 14px;
        height: 14px;
        margin-right: 2%;
        background: #476cdb;
        border: 3px solid #b0bfeb;
        border-radius: 100px;
      }

      .date {
        margin-right: 2%;
        color: #333;
        font-size: 80%;
        font-weight: bold;
        text-align: left;
      }

      .time {
        flex-grow: 1;
        color: #999;
        font-size: 80%;
        text-align: left;
      }
    }

    .news-content {
      width: 100%;

      .content {
        width: 100%;
        height: 100%;
        padding: 3% 4%;
        background: #fff;
        border-radius: 3px;

        .title {
          width: 100%;
          font-size: 110%;
          font-weight: bold;
          text-align: left;
        }

        .message {
          width: 100%;
          margin-top: 4px;
          color: #999;
          font-size: 80%;
          font-weight: bold;
          text-align: left;
        }

        .source {
          width: 100%;
          margin-top: 4px;
          color: #999;
          font-size: 80%;
          font-weight: bold;
          text-align: right;
        }
      }
    }
  }
}
</style>
