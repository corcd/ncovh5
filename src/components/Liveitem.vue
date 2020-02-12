<template>
  <div class="liveitem" @click="link()">
    <div class="left">
      <div class="icon">
        <div class="triangle"></div>
      </div>
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
    position: relative;
    flex-shrink: 0;
    width: 178px;
    height: 100%;

    .icon {
      position: absolute;
      left: 40%;
      top: 32%;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 100px;
      z-index: 3;

      .triangle {
        margin-left: 6px;
        margin-bottom: -1px;
        float: left;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 12px solid #fff;
        border-radius: 2px;
        transform: rotate(90deg);
      }
    }

    .van-image {
      position: absolute;
      left: 0;
      top: 0;
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
    padding: 5px 5px 5px 10px;

    .title {
      width: 100%;
      height: 75%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      color: #333;
      font-size: 110%;
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

      .date {
        width: 100%;
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
