<template>
  <div class="home">
    <Header class="header"></Header>
    <Tabs class="tabs"></Tabs>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'

export default {
  name: 'home',
  components: {
    Header,
    Tabs
  }
}
</script>

<style lang="scss" scoped>
.home {
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
