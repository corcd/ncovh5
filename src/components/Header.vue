<template>
  <div class="header">
    <div class="custom-count">
      <span id="busuanzi_container_site_pv">
        <span id="busuanzi_value_site_pv">0</span>人次已浏览
      </span>
    </div>
    <div class="desc">
      {{ '新冠肺炎媒体信息实时追踪同步平台' }}
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
  padding-top: 65%;
  color: #fff;
  font-size: 100%;
  text-align: center;
  background: url('../assets/images/health.png') no-repeat;
  background-size: cover;

  .custom-count {
    position: absolute;
    top: 15%;
    right: 0;
    min-width: 160px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 5px;
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

  .desc {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 20%;
    padding-left: 6.2%;
    color: #fff;
    font-size: 90%;
    font-weight: bold;
    line-height: 110%;
    text-align: left;
    vertical-align: middle;
  }
}
</style>
