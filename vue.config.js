// 调整 webpack 配置，该对象会被 webpack-merge 合并入最终的 webpack 配置
module.exports = {
    configureWebpack: {
        resolve: {
            // extensions: [],  //默认已配置
            // 配置别名
            alias: {
                // '@': 'src',  //默认已配置
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'utils': '@/utils',
                'views': '@/views'
            }
        }
    }
}
