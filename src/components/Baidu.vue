<template>
  <baidu-map
    class="map"
    :center="center"
    :zoom="zoom"
    :mapStyle="mapStyle"
    :auto-resize="true"
    :scroll-wheel-zoom="true"
  >
    <bm-geolocation
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :showAddressBar="true"
      :autoLocation="true"
    ></bm-geolocation>
    <bm-marker
      v-for="(item, index) in items"
      :items="items"
      :item="item"
      :index="index"
      :key="item.id"
      :position="{ lng: item.position[0], lat: item.position[1] }"
      :dragging="false"
      @click="infoWindowOpen(index)"
    >
      <bm-info-window
        :autoPan="true"
        :show="item.show"
        :closeOnClick="true"
        @close="infoWindowClose(index)"
        @open="infoWindowOpen(index)"
      >
        <van-tag color="#5DBAB9">{{ item.province }}</van-tag>
        <van-tag type="warning">{{ item.city }}</van-tag>
        <van-tag type="danger">{{ item.county }}</van-tag>
        <h4>{{ item.detail }}</h4>
        <div class="tip">
          来源自:
          {{ item.infoSource }}
        </div>
      </bm-info-window>
    </bm-marker>
  </baidu-map>
</template>

<script>
export default {
  name: 'Baidu',
  props: ['items'],
  data() {
    return {
      center: { lng: 103.710338, lat: 31.812342 },
      zoom: 6,
      mapStyle: {
        styleJson: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: {
              hue: '#007fff',
              saturation: 89
            }
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#ffffff'
            }
          }
        ]
      }
    }
  },
  watch: {
    items: {
      handler(nv) {
        this.center = { lng: nv[0].position[0], lat: nv[0].position[1] }
      },
      deep: true
    }
  },
  methods: {
    infoWindowClose(index) {
      this.items[index].show = false
    },
    infoWindowOpen(index) {
      this.items[index].show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  position: absolute;
  .van-tag {
    margin: 0 5px 0 0;
  }
  h4 {
    margin-top: 5px;
  }
  .tip {
    font-size: 80%;
    color: #999;
  }
}
</style>
