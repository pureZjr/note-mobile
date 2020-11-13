module.exports = {
    outputDir: "dist",
    //增加vue.config.js文件配置css
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // 增加全局样式
                additionalData: `@import "~@/styles/app.scss"; @import "~@/styles/var.scss";`,
            },
        },
    },
};