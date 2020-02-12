<template>
  <div class="cmsitem" @click="link()">
    <div class="left">
      <div class="title">{{ title }}</div>
      <div class="info">
        <div class="author">{{ getAuthor }}</div>
        <div class="date">{{ getTime }}</div>
      </div>
    </div>
    <div class="right">
      <van-image width="140" radius="1" fit="fill" :src="poster" lazy-load>
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error>加载失败</template>
      </van-image>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Cmsitem',
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
.cmsitem {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 15px 0 0 0;
  padding: 0 0 15px 0;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  border-radius: 3px;
  // box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);

  .right {
    flex-shrink: 0;
    height: 100%;

    .van-image {
      height: 100%;
    }
  }

  .left {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px 0 0;

    .title {
      width: 100%;
      height: 75%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      color: #333;
      font-size: 110%;
      font-weight: 400;
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
      font-size: 80%;

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
