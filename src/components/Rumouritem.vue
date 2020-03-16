<template>
  <div class="backbox">
    <canvas
      class="my-canvas"
      ref="myCanvas"
      width="320"
      height="625"
      v-show="false"
    ></canvas>
    <img :src="imgURL" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawing: {},
      context: {},
      imgURL: ''
    }
  },
  methods: {
    drawTextLine(text, x, y, spacing) {
      const lineText = text.split('')
      const metrics = this.context.measureText(lineText[0])
      const width = metrics.width + spacing
      lineText.forEach((item, index) => {
        this.context.fillText(item, x + width * index, y)
      })
    },
    drawText(
      text = '',
      x = 0,
      y = 0,
      maxWidth = 30,
      lineHeight = 16,
      letterSpacing = 2
    ) {
      // 字符分隔为数组
      const arrText = text.split('')
      let line = ''

      for (let n = 0; n < arrText.length; n++) {
        let testLine = line + arrText[n]
        const metrics = this.context.measureText(testLine)
        let testWidth = metrics.width + letterSpacing * (testLine.length - 1)
        if (testWidth > maxWidth && n > 0) {
          this.drawTextLine(line, x, y, letterSpacing)
          line = arrText[n]
          y += lineHeight
        } else {
          line = testLine
        }
      }
      this.drawTextLine(line, x, y, letterSpacing)
      return y
    },
    drawlImage() {
      this.drawing = this.$refs.myCanvas
      if (this.drawing.getContext) {
        this.context = this.drawing.getContext('2d')
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
        const text4 = '深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?'
        const text5 =
          '深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼，吸再深呼吸再深呼，吸再深呼。吸再深呼?深呼吸再深呼'
        this.context.fillStyle = '#fff'
        this.context.font = 'bolder 50px arial'
        this.drawText(text1, 15, 98, 286, 50, 0)
        this.context.font = 'bold 22px 微软雅黑'
        this.drawText(text2, 20, 140, 286, 22, 0)
        this.context.fillStyle = '#333'
        this.context.font = 'bolder 50px arial'
        this.drawText(text3, 15, 304, 238, 50, 0)
        this.context.fillStyle = '#000'
        this.context.font = 'bold 16px 微软雅黑'
        const pos_y = this.drawText(text4, 20, 336, 238, 18, 1)
        this.context.fillStyle = '#6a6a6a'
        this.context.font = '14px 微软雅黑'
        this.drawText(text5, 20, pos_y + 26, 238, 18, 2)
      }
    },
    createImgURL() {
      const type = 'png'
      this.imgURL = this.drawing.toDataURL(type)
    }
  },
  mounted() {
    this.drawlImage()
    this.createImgURL()
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
