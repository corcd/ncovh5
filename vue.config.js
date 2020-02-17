module.exports = {
  publicPath: '/ncovh5/',
  productionSourceMap: false,
  css: {
    extract: false,
    sourceMap: false
  },
  chainWebpack: config => {
    config.optimization.minimizer('terser').tap(args => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
    config.optimization.splitChunks({
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 200000,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]
            return `chunk.${packageName.replace('@', '')}`
          },
          priority: 10
        }
      }
    })
  },
  transpileDependencies: ['vue-echarts', 'resize-detector']
}
