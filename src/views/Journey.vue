<template>
  <div class="journey">
    <div class="header"></div>
    <div class="content">
      <div class="query"></div>
      <div class="result"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Journey',
  components: {}
}
</script>

<style lang="scss" scoped>
.journey {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;

  .header {
    flex-shrink: 0;
  }

  .tabs {
    flex-grow: 1;
    width: 100%;
    height: 75%;
  }
}
</style>
