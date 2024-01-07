const { generateKey } = require("crypto")
const path = require("path")

module.exports = {
  entry:"./src/main.js",
  output:{
    filename:"bundle.js",
    path:path.resolve(__dirname,"./build")
  },
  // 添加loader模块
  module:{
    rules:[
      {
        test:/\.css$/,
        use:["style-loader","css-loader","postcss-loader"]
      },
      {
        test:/\.(png|jpe?g|svg|gif)$/,
        // type:"asset/resource"
        type:"asset",
        generator:{
          filename:"img/[name]_[hash:8][ext]"
        }
      }
    ]
  }
}