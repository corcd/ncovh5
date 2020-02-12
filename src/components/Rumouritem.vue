<template>
  <div class="backbox">
    <canvas class="my-canvas" ref="myCanvas" width="320" height="625"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: {}
    }
  },
  methods: {
    drawText(text, x, y, maxWidth, lineHeight) {
      if (
        typeof text != 'string' ||
        typeof x != 'number' ||
        typeof y != 'number'
      ) {
        return
      }
      let canvas = this.context.canvas

      if (typeof maxWidth == 'undefined') {
        maxWidth = (canvas && canvas.width) || 300
      }

      // NaN
      if (typeof lineHeight == 'undefined') {
        lineHeight =
          (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) ||
          parseInt(window.getComputedStyle(document.body).lineHeight)
      }

      // 字符分隔为数组
      let arrText = text.split('')
      let line = ''

      for (let n = 0; n < arrText.length; n++) {
        let testLine = line + arrText[n]
        let metrics = this.context.measureText(testLine)
        let testWidth = metrics.width
        if (testWidth > maxWidth && n > 0) {
          this.context.fillText(line, x, y)
          line = arrText[n]
          y += lineHeight
        } else {
          line = testLine
        }
      }
      this.context.fillText(line, x, y)
    },
    drawlImage() {
      let drawing = this.$refs.myCanvas
      if (drawing.getContext) {
        this.context = drawing.getContext('2d')
        this.context.strokeStyle = '#0000ff'

        // 绘制矩形
        this.context.fillStyle = '#2734b9'
        this.context.fillRect(0, 0, 320, 216)
        this.context.fillStyle = '#fff'
        this.context.fillRect(0, 216, 320, 410)
        this.context.fillStyle = '#ccc'
        this.context.fillRect(240, 534, 56, 56)

        // 绘制文本
        const text1 = '谣言'
        const text2 = '深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?'
        const text3 = '辟谣'
        const text4 = '深呼吸再深呼，吸再深呼吸再深呼，吸再深呼.吸再深呼?'
        const text5 =
          '深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?'
        this.context.fillStyle = '#fff'
        this.context.font = 'bolder 50px arial'
        this.drawText(text1, 15, 98, 286, 50)
        this.context.font = 'bold 22px sans-serif'
        this.drawText(text2, 20, 140, 286, 22)
        this.context.fillStyle = '#333'
        this.context.font = 'bolder 50px arial'
        this.drawText(text3, 15, 304, 238, 50)
        this.context.fillStyle = '#000'
        this.context.font = 'bold 16px sans-serif'
        this.drawText(text4, 20, 336, 238, 18)
        this.context.fillStyle = '#6a6a6a'
        this.context.font = '14px sans-serif'
        this.drawText(text5, 20, 378, 238, 18)
      }
    }
  },
  mounted() {
    this.drawlImage()
  }
}
</script>

<style lang="scss" scoped>
.backbox {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  .my-canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
