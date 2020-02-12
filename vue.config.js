module.exports = {
  publicPath: '/ncovh5/',
  productionSourceMap: true,
  chainWebpack: config => {
    config.optimization.minimizer('terser').tap(args => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  },
  transpileDependencies: ['vue-echarts', 'resize-detector']
}
