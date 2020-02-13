<template>
  <div class="map">
    <v-chart :options="setOptions" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// import 'echarts-gl'
import '@/assets/map/china.js'

export default {
  name: 'Map',
  components: {
    'v-chart': ECharts
  },
  computed: {
    ...mapState(['case']),
    setOptions() {
      let arr = []
      this.case.forEach(item => {
        arr.push({
          name: item.provinceShortName,
          value: item.confirmedCount
        })
      })
      const options = {
        backgroundColor: '#FFFFFF',
        title: {
          text: '全国疫情地图',
          subtext: '',
          textStyle: {
            fontSize: 16
          },
          x: 'left'
        },
        tooltip: {
          trigger: 'item'
        },
        //左侧小导航图标
        visualMap: {
          show: true,
          x: 'left',
          y: 'bottom',
          pieces: [
            { min: 10000 },
            { min: 1000, max: 9999 },
            { min: 100, max: 999 },
            { min: 10, max: 99 },
            { min: 1, max: 9 }
          ],
          color: ['#671E20', '#BC3A37', '#D56355', '#E9A188', '#FAEBD2']
        },
        //配置属性
        series: [
          {
            name: '确诊',
            type: 'map',
            mapType: 'china',
            roam: false,
            zoom: 1.2,
            label: {
              normal: {
                show: true, //省份名称
                align: 'center',
                fontSize: 8
              },
              emphasis: {
                show: false
              }
            },
            data: arr //数据
          }
        ]
      }

      return options
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
}
</style>

<style lang="scss">
.echarts {
  width: 100%;

  canvas {
    width: 100%;
  }
}
</style>
