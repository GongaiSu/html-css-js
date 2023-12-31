const { type } = require("os")
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
        // 告诉webpack匹配什么文件
        test:/\.css$/,
        // use:[//use中多个loader的使用顺序是从后往前
        //   {loader:"style-loader"},
        //   {loader:"css-loader"}
        // ]

        // 简写
        use:["style-loader","css-loader","postcss-loader"
          // {
          //   loader:"postcss-loader",
          //   options:{
          //     postcssOptions:{
          //       plugins:[
          //         "autoprefixer"
          //       ]
          //     }
          //   }
          // }
        ]
      }
    ]
  }
}