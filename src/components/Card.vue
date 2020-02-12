<template>
  <div class="card">
    <div class="header"></div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: () => {
        // nothing
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
}
</style>
