`tips: 前端训练营第19周笔记-工具链2发布系统1`

## toy-tool
- init
  + [webpack-compiler-instance](https://webpack.js.org/api/node/#compiler-instance)
- dev/debugger
- test

## publish 环境
- [ubuntu](https://ubuntu.com/download/desktop)
- [virtualbox](https://www.virtualbox.org/wiki/Downloads)
- [wsl](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

## Web发布系统
- server-publish 接收工具，链接server服务
- server-tool 上传工具
- server 静态服务器

```
思路：
  1. 明确目标：server静态服务器 pubilsh接收工具 tool上传工具
  2. 分解任务：stream个工作流程 post工作流程，然后再组合起来
  3. 逐步优化：打包工具， 解压工具 
```

+ depends
  - [archiver](https://www.npmjs.com/package/archiver)
  - [unzipper](https://www.npmjs.com/package/unzipper)
  - unzip

+ literacy
  - [node stream](https://www.runoob.com/nodejs/nodejs-stream.html)
  - [node-js-get-post](https://www.runoob.com/nodejs/node-js-get-post.html)