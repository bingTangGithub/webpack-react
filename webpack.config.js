var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");  
//使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来

module.exports = {
    //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry : {
        // build00 : "./genjs/index.js",
        // build01 : "./helloWorld/index.js",
        // build02 : "./styleObj/index.js",
        // build03 : "./key/index.js",
        // build04 : "./doubleComponent/index.jsx",
        // build05 : "./props/index.js",
        // build06 : "./children/index.js",
        // build07 : "./propTypes/index.js",
        // build08 : "./refs/index.js",
        // build09 : "./getInitialState/index.js",
        // build10 : "./demo10/index.js",
        // build11 : "./demo11/index.js",
        // build12 : "./demo12/index.js",
        // build13 : "./demo130/index.js",
        // build14 : "./demo14/index.js",
        // build15 : "./demo15/index.js",
        // build16 : "./demo16/index.js",
        // build17 : "./onClick/index.js",
        // build18 : "./demo18/index.js",
        // build19 : "./demo19/index.js",
        // build20 : "./demo20/index.jsx",
        // build21 : "./demo21/index.jsx",
        // build22 : "./demo22/index.jsx",
        // build23 : "./demo23/index.jsx",
        // build24 : "./demo24/index.js",
        // build25 : "./demo25/index.js",
        // build26 : "./demo26/index.js",
        // build27 : "./demo27/index.js"
        // build28 : "./demo28/index.js"
        // build29 : "./demo29/index.js",
        // build30 : "./demo30/index.js",
        // build31 : "./demo31/index.js",
        // build32 : "./sonUseFa/index.js",
        // build33 : "./faUseSon/index.js",
        // build34 : "./faRenderFirst/index.js",
        // build35 : "./demo35/index.js",
        // build36 : "./baiduUtil/index.js",
        // build37 : "./fetch/index.js",
        build38 : "./antButton/index.js",
        // build39 : "./antGrid/index.js",
        // build40 : "./antBreadcrumb/index.js", //面包屑 有错
        // build41 : "./antPagination/index.js",
        // build42 : "./functionParameter/index.js", 
        // build43 : "./antCascader/index.js", //级联
        // build44 : "./antCalendar/index.js", //日历
        // build45 : "./antForm/index.js", //0
        // build46 : "./antTable/index.js",  
        // build47 : "./reduxHelloWorld/index.js", 
        // build48 : "./reduxHeart/index.js",  //redux核心思想  
        // build49 : "./reduxReducer/index.js", 
        // build50 : "./reduxTodo/index.js",  
        // build51 : "./reduxPrinciple/index.js",  
        // build52 : "./reduxStore/index.js",  
        // build53 : "./noStateFunction/index.js",  
        // build54 : "./reactNoStateParameter/index.js",  
        // build55 : "./antFormJiPei/index.js",  
        // build56 : "./liGen/index.js",  
        // build57 : "./antFormJiPeiMine/index.jsx",  
        // build58 : "./antFormJiPeiTable/index.jsx", 
        // build59 : "./antFormJiPeiMineFormItem/index.jsx", 
        // build60 : "./antFormSetstate/index.jsx", 
        // build61 : "./jieGou/index.jsx", 
        // build62 : "./antTreeSelect/index.jsx",
        // build63 : "./export/index.jsx", 
        // build64 : "./genFormItem/index.jsx", 
    },
    //入口文件输出配置
    output : {
        // path : './build/',
        path : __dirname,
        filename : '[name].js'
    },
    module: {
        //加载器配置
        loaders: [

            // {exclude: [/\.html$/,/\.(js|jsx)$/,/\.less$/,/\.css$/,/\.json$/,/\.svg$/],loader: 'url',},
            {test: /\.less$/, loader: 'style!css!less?{modifyVars:{"@primary-color":"#1DA57A"}}' },
            // {test: /.(js|jsx)$/,loaders: ['react-hot', 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0&presets[]=stage-1']},
            {test: /.(js|jsx)$/,loaders: ['react-hot', 'babel-loader']},
             // Process JS with Babel.
            // {
            //     test: /\.(js|jsx)$/,
            //     // include: paths.appSrc,
            //     loader: 'babel',
            //     query: {
            //         plugins: [
            //             ['import', [{ libraryName: "antd", style: true }]],  // 加载 less 文件
            //         ],

            //       cacheDirectory: true
            //     }
            // },
            {test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.scss$/i, loader:ExtractTextPlugin.extract('style-loader','css!sass')},

            // 三个loader将scss文件转化为css文件，然后将css文件从js中抽取出来
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=81920&name=[path][name].[ext]'}
            //超过8kb的才使用 url-loader来影射到文件，否则转化为 base64形式  
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css",{
            allchunks:true
         }) 
    ],
    //其它解决方案配置
    resolve: {
        extension: ['','.js','.css','.jsx']   //自动检测识全后缀名
    },
 
};
