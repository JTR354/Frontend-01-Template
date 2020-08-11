`tips: 前端训练营第18周笔记-工具链`

## 工具链雏形(开发过程中用到的工具)

### 从开发流程的视角来看四大基础环节
- 初始化
  + yeoman
  + create-react-app
  + vue-cli
- 开发/调试
  + dev-tool/chrome
  + webpack-dev-server
  + mock
  + wireshark
  + charies
- 测试
  + mocha
  + jest
- 发布
  + lint
  + jenkins

`demo: vue-cli create-react-app ng-cli`  
`tip: 闭包给函数式编程提供基础设施`

### yeoman
`tips: yeoman脚手架的脚手架`
#### yeoman-generator 
`knowledge: npm link `
- User Interactions
- Managing Dependencies
- Interacting with the file system

#### 自研CLI交互
- [node-process](https://nodejs.org/dist/latest-v12.x/docs/api/process.html#process_process_stdin)
- [move-cursor](https://stackoverflow.com/questions/10585683/how-do-you-edit-existing-text-and-move-the-cursor-around-in-the-terminal/10830168)

## Dev 工具
`tips: 处理底层原理的关键技术之一：字符串 + 事件处理 `
### Server
- build
  + webpack
  + babel
  + vue
  + jsx
  + postcss
  + npm
- watch
  + fsevent
- mock
  + ...
- http
  + http-server
  + ws

### Client
- debugger
  + vscode
  + devtool
- source-map

#### Debugger
- [node-inspect](https://nodejs.org/en/docs/guides/debugging-getting-started/)
> 以vscode为例：   
debugger开启时，通过websocket连接vscode-ide和node-v8，该服务和node-v8隶属同一进程，所以当client端进行调试操作时，可以通过ws进行通信，反之亦然。

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
  + [Integrating with DevTools](https://developer.chrome.com/devtools/docs/integrating)
  + [chrome devtools protocol](https://github.com/ChromeDevTools/devtools-protocol)

#### SourceMap
- [Source maps: languages, tools and other info](https://github.com/ryanseddon/source-map/wiki/Source-maps:-languages,-tools-and-other-info)
- [Source Map Revision 3 Proposal](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/preview#)

`demo: babel vue npm fsevents`


## Test测试工具

### 测试覆盖率Coverage维度
- Statements
- Branches
- Functions
- Lines

### 测试工具
- mocha
- ava
- jest
- [Selenium Webdriver](https://wizardforcel.gitbooks.io/selenium-doc/content/official-site/introduction.html)
- chai（断言库）

### 测试覆盖率
- nyc
- istanbul

## 持续集成相关
- [Codecov](https://docs.codecov.io/docs/supported-languages)
- [Travis](https://docs.travis-ci.com/user/tutorial/)
- [Benchmark](https://benchmarkjs.com/)
- [jsperf](https://jsperf.com/)

### YAML
`YAML 是专门用来写配置文件的语言，非常简洁和强大，远比 JSON 格式方便`
- [YAML 语言教程 阮一峰](https://www.ruanyifeng.com/blog/2016/07/yaml.html)
- [https://yaml.org/](https://yaml.org/)

### ohter
- [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
- [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
- [DDD](https://en.wikipedia.org/wiki/Domain-driven_design)

---- 
`home-work mocha report`  
```bash

-----------|---------|----------|---------|---------|-------------------------------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                         
-----------|---------|----------|---------|---------|-------------------------------------------
All files  |   90.97 |    84.35 |     100 |   90.97 |                                           
 parser.js |   90.97 |    84.35 |     100 |   90.97 | 95-98,111-114,144,168,187,234,255,271-274 
-----------|---------|----------|---------|---------|-------------------------------------------
```
- [https://github.com/Comet32/Frontend-01-Template/tree/master/week18](https://github.com/Comet32/Frontend-01-Template/tree/master/week18)