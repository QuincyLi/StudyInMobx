const ExtractTextPlugin = require("extract-text-webpack-plugin");

module: { //我写一个module
  //配置一个rules(规则),rules是一个数组,里面包含一条一条的规则
  rules: [{
      // test 表示测试什么文件类型
      test: /\.css$/,
      // 使用 'style-loader','css-loader'
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader', // 回滚
        use: [{
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          } //利用postcss-loader自动添加css前缀
        ],
        publicPath: '../' //解决css背景图的路径问题
      })
    },
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({ //分离less编译后的css文件
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    },
    {
      test: /\.(sass|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: { // 这里的options选项参数可以定义多大的图片转换为base64
          limit: 50000, // 表示小于50kb的图片转为base64,大于50kb的是路径
          outputPath: 'images' //定义输出的图片文件夹
        }
      }]
    }
  ]
}