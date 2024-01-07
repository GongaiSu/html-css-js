const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
      },
      {
        test:/\.js$/,
        use:[
          {
            loader:"babel-loader",
            // options:{
            //   presets:[
            //     "@babel/preset-env"
            //   ]
            // }
          }
        ]
      }
    ],
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {title:"测试"}
    )
  ]
}