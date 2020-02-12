<template>
  <div class="community">
    <div class="input">
      <van-field
        :value="areaName"
        label="地区"
        placeholder="选择所在地区"
        readonly
        @click="popUp()"
      />
    </div>
    <div class="mapBox">
      <Baidu :items="resList"></Baidu>
    </div>
    <van-popup v-model="areaShow" position="bottom">
      <van-area
        :area-list="areaList"
        title="选择省市"
        @confirm="onConfirm($event)"
        @cancel="onCancel()"
    /></van-popup>
  </div>
</template>

<script>
import Area from '@/assets/data/area'
import Baidu from '@/components/Baidu'

export default {
  name: 'Community',
  components: {
    Baidu
  },
  data() {
    return {
      areaList: Area,
      areaShow: false,
      areaName: '',
      resList: []
    }
  },
  computed: {
    getArea() {
      return this.areaList
    }
  },
  methods: {
    async getData() {
      const data = {
        province: this.areaName.split(' ')[0],
        city: this.areaName.split(' ')[1],
        county: this.areaName.split(' ')[2]
      }
      const res = await this.$api.ahusmart.getData(data)
      this.resList = [...res.data.results]
    },
    popUp() {
      this.areaShow = true
    },
    onConfirm(e) {
      this.areaShow = false
      let temp = ''
      temp += e.map(item => {
        return item.name
      })
      this.areaName = temp.replace(',', ' ')
      this.areaName = this.areaName.replace(',', ' ')
      this.getData()
    },
    onCancel() {
      this.areaShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.community {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .input {
    width: 100%;
    height: 44px;
    background: #fff;
  }

  .mapBox {
    width: 100%;
  }
}
</style>

<style lang="scss">
.BMap_stdMpZoom,
.ui_city_change,
.anchorBL {
  display: none;
}
</style>
