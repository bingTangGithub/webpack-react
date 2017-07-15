const webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");  
//使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来

module.exports = {
    // 插件项
    // plugins: [commonsPlugin],
    // 页面入口文件配置
    entry : {
        // build00 : "./src/react/genjs/index.js",
        // build01 : "./src/react/helloWorld/index.js",
        // build02 : "./src/reactstyleObj/index.js",
        // build03 : "./src/react/key/index.js",
        // build04 : "./src/antd/doubleComponent/index.jsx",
        // build05 : "./src/react/props/index.js",
        // build06 : "./src/react/children/index.js",
        // build07 : "./src/react/propTypes/index.js",
        // build08 : "./src/react/refs/index.js",
        // build09 : "./src/react/getInitialState/index.js",
        // build10 : "./src/react/demo10/index.js",
        // build11 : "./src/react/demo11/index.js",
        // build12 : "./src/react/demo12/index.js",
        // build13 : "./src/react/demo130/index.js",
        // build14 : "./src/react/demo14/index.js",
        // build15 : "./src/react/demo15/index.js",
        // build16 : "./src/react/demo16/index.js",
        // build17 : "./src/react/onClick/index.js",
        // build18 : "./src/react/demo18/index.js",
        // build19 : "./src/react/demo19/index.js",
        // build20 : "./src/react/demo20/index.jsx",
        // build21 : "./src/react/demo21/index.jsx",
        // build22 : "./src/react/demo22/index.jsx",
        // build23 : "./src/react/demo23/index.jsx",
        // build24 : "./src/react/demo24/index.js",
        // build25 : "./src/react/demo25/index.js",
        // build26 : "./src/react/demo26/index.js",
        // build27 : "./src/react/demo27/index.js",
        // build28 : "./src/react/demo28/index.js",
        // build29 : "./src/react/demo29/index.js",
        // build30 : "./src/react/demo30/index.js",
        // build31 : "./src/react/demo31/index.js",
        build32 : "./src/react/faAndSon/sonUseFa/index.js",
        // build33 : "./src/react/faUseSon/index.js",
        // build34 : "./src/react/faRenderFirst/index.js",
        // build35 : "./src/react/demo35/index.js",
        // build36 : "./src/baiduUtil/index.js",
        // build37 : "./src/baiduUtil/fetch/index.js",
        // build38 : "./src/antd/antButton/index.js",
        // build39 : "./src/antd/antGrid/index.js",
        // build40 : "./src/antd/antBreadcrumb/index.js", //面包屑 有错
        // build41 : "./src/antd/antPagination/index.js",
        // build42 : "./src/functionParameter/index.js", 
        // build43 : "./src/antd/antCascader/index.js", //级联
        // build44 : "./src/antd/antCalendar/index.js", //日历
        // build45 : "./src/antd/antForm/index.js", //0
        // build46 : "./src/antd/antTable/index.js",  
        // build47 : "./src/redux/reduxHelloWorld/index.js", 
        // build48 : "./src/redux/reduxHeart/index.js",  //redux核心思想  
        // build49 : "./src/redux/reduxReducer/index.js", 
        // build50 : "./src/redux/reduxTodo/index.js",  
        // build51 : "./src/redux/reduxPrinciple/index.js",  
        // build52 : "./src/redux/reduxStore/index.js",  
        // build53 : "./src/redux/noStateFunction/index.js",  
        // build54 : "./src/redux/reactNoStateParameter/index.js",  
        // build55 : "./src/antd/antFormJiPei/index.js",  
        // build56 : "./src/react/liGen/index.js",  
        // build57 : "./src/antd/antFormJiPeiMine/index.jsx", //有scss文件的 
        // build58 : "./src/antd/antFormJiPeiTable/index.jsx", 
        // build59 : "./src/antd/antFormJiPeiMineFormItem/index.jsx", 
        // build60 : "./src/antd/antFormSetstate/index.jsx", 
        // build61 : "./src/jieGou/index.jsx", 
        // build62 : "./src/antd/antTreeSelect/index.jsx",
        // build63 : "./src/project/export/index.jsx", 
        // build64 : "./src/antd/genFormItem/index.jsx", 
        // build65 : "./src/ajax/ajaxPro/index.js", 
        // build66 : "./src/ajax/ajaxApi/index.js", 
        // build67 : "./src/antd/useMyBaiduUtil/index.js", 
        // build68 : "./src/project/cookie/index.js", 
        // build69 : "./src/project/myForm/index.js", 
        // build70 : "./src/project/myForm/component/index.jsx", 
        // build71 : "./src/ES6/threeDian/index.jsx", 
        build72 : "./src/react/faAndSon/faVsSon/index.jsx"   // 重改目录之后的
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
