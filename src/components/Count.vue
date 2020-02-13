<template>
  <div class="count">
    <span class="title">{{ title }}</span>
    <span class="count" :style="{ color: color }">{{ getCount }}</span>
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
    type: {
      type: String,
      default: 'national'
    },
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
    enabled: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#f74c31'
    },
    showinc: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getCount() {
      if (this.type === 'local') {
        return this.enabled === 'true' ? this.count : '-'
      } else {
        return this.count
      }
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
    font-size: 90%;
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
    font-size: 40%;
    color: #999999;
    transform: scale(0.9);

    .incr-count {
      font-weight: bold;
    }
  }
}
</style>
