const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('@components', path.join(__dirname, 'src/components'))
      .set('@static', path.join(__dirname, 'src/assets'))
      .set('@views', path.join(__dirname, 'src/views'))
      .set('@network', path.join(__dirname, 'src/network'))
      .set('@utils', path.join(__dirname, 'src/utils'))
  }
}
