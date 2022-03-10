# 简介

> 2022.03.10更新：重构了代码，以前初学前端写了很多挺搞笑的代码以及现在看着挺傻逼的注释，现在将页面划分成了各个模块，尽量将各个功能抽离成单独的js文件出来了，加入了webpack用于打包，还有一些功能的小更新（等你发现，通过下面在线链接可以直接看），直接开辟出一个新分支，当作见证成长吧，当然肯定还有一堆我现在还没发现的可以进步的点，等以后回来肯定又是一堆感慨了哈哈哈

调用腾讯疫情数据接口，使用ECharts以及ECharts自带的地图js文件构建可视化界面

本项目已经部署在 [Github Pages](https://dong-666.github.io/te/) 以及 [Gitee Pages](https://ypigy.gitee.io/te/)上了，可以直接点击访问，建议国内访问 [Gitee Pages](https://ypigy.gitee.io/te/)

![image-20210402173702300](README/image-20210402173702300.png)

# 目录结构

- css（样式）
  - sources（框架css文件）
  - index.js（页面样式）
- font（字体文件）
- images（图片文件夹）
- js
  - sources（外部资源及框架）
    - china.js（中国地图文件）
    - echarts.min.js （echarts文件）
    - flexible.js（rem自适应布局文件）
    - jquery.js（JQ文件）
    - world.js（世界地图文件）
  - chartsInitData（图表数据初始化）
  - charts（图表文件）
  - public（接口调用等页面普通js脚本文件）
  - index.js（主函数入口）

# 使用

1. npm i
2. npm run build
3. 使用服务器打开index.html

# 改动记录

1. 使用了webpack
2. 功能抽离
3. 使用promise
4. 添加中国疫情
