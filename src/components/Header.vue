<template>
  <div class="header">
    <div class="custom-count">
      <span id="busuanzi_container_site_pv">
        <span id="busuanzi_value_site_pv">0</span>人次已浏览
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 70%;
  color: #fff;
  font-size: 100%;
  text-align: center;
  background: transparent;

  .custom-count {
    position: absolute;
    top: 18%;
    right: 0;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4% 0 4%;
    color: #fff;
    font-size: 80%;
    line-height: 100%;
    background-color: rgba(19, 15, 133, 0.6);
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;

    #busuanzi_container_site_pv {
      display: block !important;
    }
  }
}
</style>
