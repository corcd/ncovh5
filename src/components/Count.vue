<template>
  <div class="count">
    <span class="title">{{ title }}</span>
    <span class="count" :style="{ color: color }">{{ count }}</span>
    <span class="incr" v-if="showinc">
      较昨日
      <span class="incr-count" :style="{ color: color }">+{{ incr }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Count',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    count: {
      type: Number,
      default: 0
    },
    incr: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#f74c31'
    },
    showinc: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.count {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    width: 100%;
    font-size: 100%;
    color: #000;
    font-weight: bold;
  }

  .count {
    width: 100%;
    padding: 4% 0;
    font-size: 140%;
    font-weight: bold;
  }

  .incr {
    width: 100%;
    font-size: 20%;
    color: #999999;
    transform: scale(0.9);

    .incr-count {
      font-weight: bold;
    }
  }
}
</style>
