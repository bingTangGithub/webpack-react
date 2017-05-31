var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");  
//使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来

module.exports = {
    //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry : {
        // build00 : "./src/genjs/index.js",
        // build01 : "./src/helloWorld/index.js",
        // build02 : "./src/styleObj/index.js",
        // build03 : "./src/key/index.js",
        // build04 : "./src/doubleComponent/index.jsx",
        // build05 : "./src/props/index.js",
        // build06 : "./src/children/index.js",
        // build07 : "./src/propTypes/index.js",
        // build08 : "./src/refs/index.js",
        // build09 : "./src/getInitialState/index.js",
        // build10 : "./src/demo10/index.js",
        // build11 : "./src/demo11/index.js",
        // build12 : "./src/demo12/index.js",
        // build13 : "./src/demo130/index.js",
        // build14 : "./src/demo14/index.js",
        // build15 : "./src/demo15/index.js",
        // build16 : "./src/demo16/index.js",
        // build17 : "./src/onClick/index.js",
        // build18 : "./src/demo18/index.js",
        // build19 : "./src/demo19/index.js",
        // build20 : "./src/demo20/index.jsx",
        // build21 : "./src/demo21/index.jsx",
        // build22 : "./src/demo22/index.jsx",
        // build23 : "./src/demo23/index.jsx",
        // build24 : "./src/demo24/index.js",
        // build25 : "./src/demo25/index.js",
        // build26 : "./src/demo26/index.js",
        // build27 : "./src/demo27/index.js"
        // build28 : "./src/demo28/index.js"
        // build29 : "./src/demo29/index.js",
        // build30 : "./src/demo30/index.js",
        // build31 : "./src/demo31/index.js",
        // build32 : "./src/sonUseFa/index.js",
        // build33 : "./src/faUseSon/index.js",
        // build34 : "./src/faRenderFirst/index.js",
        // build35 : "./src/demo35/index.js",
        // build36 : "./src/baiduUtil/index.js",
        // build37 : "./src/fetch/index.js",
        // build38 : "./src/antButton/index.js",
        // build39 : "./src/antGrid/index.js",
        // build40 : "./src/antBreadcrumb/index.js", //面包屑 有错
        // build41 : "./src/antPagination/index.js",
        // build42 : "./src/functionParameter/index.js", 
        // build43 : "./src/antCascader/index.js", //级联
        // build44 : "./src/antCalendar/index.js", //日历
        // build45 : "./src/antForm/index.js", //0
        // build46 : "./src/antTable/index.js",  
        // build47 : "./src/reduxHelloWorld/index.js", 
        // build48 : "./src/reduxHeart/index.js",  //redux核心思想  
        // build49 : "./src/reduxReducer/index.js", 
        // build50 : "./src/reduxTodo/index.js",  
        // build51 : "./src/reduxPrinciple/index.js",  
        // build52 : "./src/reduxStore/index.js",  
        // build53 : "./src/noStateFunction/index.js",  
        // build54 : "./src/reactNoStateParameter/index.js",  
        // build55 : "./src/antFormJiPei/index.js",  
        // build56 : "./src/liGen/index.js",  
        // build57 : "./src/antFormJiPeiMine/index.jsx",  
        // build58 : "./src/antFormJiPeiTable/index.jsx", 
        // build59 : "./src/antFormJiPeiMineFormItem/index.jsx", 
        // build60 : "./src/antFormSetstate/index.jsx", 
        // build61 : "./src/jieGou/index.jsx", 
        // build62 : "./src/antTreeSelect/index.jsx",
        // build63 : "./src/export/index.jsx", 
        // build64 : "./src/genFormItem/index.jsx", 
        // build65 : "./src/ajax/index.js", 
        build66 : "./src/ajaxApi/index.js", 
    },
    //入口文件输出配置
    output : {
        // path : './build/',
        path : __dirname,
        filename : '[name].js'
    },
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            //检测文件类型
            // include: path.join(__dirname, '/src'),
            include: __dirname + '/src',
            //检测文件位置
            loader: 'eslint-loader'
            //使用eslint-loader
        }],

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
