`tips: toy-react 学习笔记`

## Phase-1
### 学习目标
- 通过react理解组件的基本概念
- 学习vdom的实现思路
- 编写突破自我的困难代码

### 学习框架源码方法的思考
- 从具体到抽象，从感性认识到理性认识
- 找到突破口，一般从照葫芦画瓢开始

### React特点
- 组件化
- jsx
- vdom

### 环境搭建
- webpack
- [babel-loader(@babel/plugin-transform-react-jsx)](https://www.babeljs.cn/docs/babel-plugin-transform-react-jsx)

### JSX
- 先子后父的执行顺序，从DOM树最末端开始逐层递归“createElement方法”

## Phase-2
- 先让demo长的像，然后动起来
- 添加事件和class属性
- 添加setState方法
  + 可以使用range-API
  + 每次更新都是重新渲染

## Phase-3
- 先將实体DOM转换成虚拟DOM，即创建实体DOM的时机移动至mountTo逻辑中
- DOM比对主要从type props children 方面做对比

`参考：`
  - [React中JSX的本质：不是模板引擎，而是语法糖](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247489123&idx=1&sn=cd834b87ff89e1d88ecad5564756a0f8&chksm=f951a320ce262a364e11e0e5827682d23353d2a943cd1aa1a6f889bd95379df284b2b37d5f27&scene=27#wechat_redirect)

  ----
  `others：`
  - [toy-react](https://jtr354.github.io/Frontend-01-Template/week14/component/dist/index.html)