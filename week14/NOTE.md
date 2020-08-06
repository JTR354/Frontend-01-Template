`tips: 前端训练营第14周笔记`

## 环境搭建
1. webpack配置
2. jsx配置
3. 编写jsx范式组件
4. jsx先创建子组件再创建父组件
5. 组件三大要素: attribute properties children

## 轮播图组件
### 1. 实现 自动轮播功能 和 拖拽轮播 功能
- 轮播的两大实现方案:
  +  整体轮播，即给轮播各项整体再套一层盒子，然后改变这个大盒子的偏移量。  
  +  局部轮播，即只该变需要移动的个体的偏移量
- 思路： 以结果为导向
  + 例如：做自动播放，先确定每个元素终点的位置，再反推起点位置要容易的多。
- 技巧
  + 用同余定理简化下标循环的实现方式
- 冷知识
  + setTimeout16s代替requestAnimationFrame双层嵌套的问题(或微任务Promise)
-  [走马灯实现演示地址](https://jtr354.github.io/Frontend-01-Template/week14/component/dist/index.html)
### 2. 组件封装