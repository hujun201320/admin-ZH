const {override,fixBabelImports,addLessLoader} =require('customize-cra');
 module.exports = override(
     //针对antd实现按需加载，根据import来打包
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,//自动打包的相关样式
   }),
   addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'},
  }),
 )




 