<template>
  <div class="liveitem" @click="link()">
    <div class="left">
      <van-image width="178" radius="3" fit="fill" :src="poster" lazy-load>
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error>加载失败</template>
      </van-image>
    </div>
    <div class="right">
      <div class="title">{{ title }}</div>
      <div class="info">
        <div class="author">{{ type === 'news' ? getAuthor : '' }}</div>
        <div class="date">{{ getTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Liveitem',
  props: {
    poster: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: Number,
      default: 0
    },
    url: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'live'
    }
  },
  computed: {
    getTime() {
      return dayjs(this.date * 1000).format('YYYY-MM-DD')
    },
    getAuthor() {
      return this.author ? this.author : '佚名'
    }
  },
  methods: {
    link() {
      window.location.href = this.url
    }
  }
}
</script>

<style lang="scss" scoped>
.liveitem {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  // box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);

  .left {
    flex-shrink: 0;
    height: 100%;

    .van-image {
      height: 100%;
    }
  }

  .right {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 5px 10px 10px;

    .title {
      width: 100%;
      height: 75%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      color: #333;
      font-size: 120%;
      font-weight: bold;
      line-height: 120%;
      text-align: left;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      white-space: wrap;
      overflow: hidden;
    }

    .info {
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      color: #999;
      font-size: 90%;

      .author {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        // text-align: left;
      }

      .date {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        // text-align: right;
      }
    }
  }
}
</style>
