const path = require('path')
const resolve = function (dir) {
    return path.join(__dirname, dir);
};
module.exports = {
    // 基本路径，部署生产环境和开发环境下的url，可对当前环境进行区分，baseUrl从vuecli3.0版本开始已被弃用   需要使用publicPath
    //// baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    outputDir: "dist",// 输出文件目录
    assetsDir: "static",// 静态资源
    lintOnSave: true, // 是否开启eslint保存检测
    productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@v", resolve("src/views"))
            .set("@c", resolve("src/components"))
            .set("@u", resolve("src/utils"))
            .set("@s", resolve("src/service")); // 别名配置 
        config.optimization.runtimeChunk("single");
    },
};