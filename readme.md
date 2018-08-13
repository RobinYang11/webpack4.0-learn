# webpack4.0 入门到精通

# npm init 

# npm install --save-dev webpack webpack-cli 
    webpack 4.0+ 需要安装webpack-cli
    注意 webpack4.0+不建议直接在命令行运行webpack 命令,而应该把webpack 命令配置到script里面，例如这样：
     "dev":"webpack --config webpack.config.js"
    然后运行 npm run dev

# add a webpack.config.js

# add script like this :
    "script":{
        "dev":"webpack --config webpack.config.js --"
    }

# 自动生成html并加载打包后的js 文件 
    使用 htmlwebpackplugin 插件可以帮我们生成index.html 并自动加载生成 后 的 js

# 清理dist插件
    npm install clean-webpack-plugin --save-dev

# 生成sourcemap文件
    在webpack.config.js中增加 devtool: 'inline-source-map',

# 使用webpack观察模式 自动打包文件
    在 scripts 中增加如下选项 
    "watch":"webpack --watch"
    然后运行npm run watch  
    当有文件 变化时，webpack会自动打包 

# 使用 webpack-dev-server 启动一个前端服务器
    npm install --save-dev webpack-dev-server
    配置scripts
    devServer: {
        contentBase: './dist'
    },
# 使用 webpack-dev-middleware 中间件 和express 搭建前端服务器  
    npm install --save-dev express webpack-dev-middleware
    在配置文件中的output 中增加如下代码，以确保前端服务器正常访问
    publicPath: '/'
# 启动HMR 
    
    

