<template>
  <div class="liveitem" @click="link()">
    <div class="left">
      <van-image width="142" radius="3" fit="fill" :src="poster" lazy-load>
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error>加载失败</template>
      </van-image>
    </div>
    <div class="right">
      <div class="title">{{ title }}</div>
      <div class="date">{{ getTime }}</div>
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
    }
  },
  computed: {
    getTime() {
      return dayjs(this.date * 1000).format('YYYY-MM-DD HH:mm:ss')
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
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  background: #fff;
  border: 2px solid #f2f2f2;
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
    padding: 1%;

    .title {
      width: 100%;
      height: 80%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      font-size: 90%;
      font-weight: bold;
      text-align: left;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      white-space: wrap;
      overflow: hidden;
    }

    .date {
      width: 100%;
      height: 20%;
      color: #999;
      font-size: 80%;
      text-align: right;
    }
  }
}
</style>
