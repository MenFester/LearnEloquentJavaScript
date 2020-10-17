# 学习笔记

## Vue.js是什么

* Vue是UI层的渐进式的框架
* 什么是框架：
  * 首先是可以被复用的代码
  * 用的人多，出名
* 与Vue.js齐名的：React、Angular
* Vue.js框架优势
  * 提高代码复用率
  * 降低模块之间耦合度
  * 提高开发速度
  * 提高代码质量：代码可维护、代码可读

## MV*模型

* 几代技术：直接操作DOM（jQuery）->MVC模型（React）->MVP模式->MVVM模型（Vue、Angular）
  * MVC：Model，用于存放数据；View，用于更新DOM；Controller：调用Model给View渲染
  * MVP：Model，用于存放数据；View，响应用户交互行为；Presenter：1）Model改变，修改DOM；2）View响应用户，Presenter修改Module及DOM
  * MVVM：Model，用于存放数据；View，响应用户交互行为；ViewModel：可以理解为自动化调用Presenter

## 开发环境搭建

* Vscode、HBuilder
* Vue.js安装
  * 直接使用：script引用vue.js
  * 安装node、bower，用bower安装Vue
  * 用npm或cnpm安装
* bower：
  * bower info vue
  * bower install vue 或 bower install vue#2.6.12

## 动手实验

* Vue实例创建后，形成双向绑定：DOM Listenners 和 Data Bindings
  * 从View侧看，DOM Listenners监听DOM变化
  * 从Model侧看，Data Bindings帮助更新View（通过自动生成getter、setter），也就是DOM
* 通过JavaScript原生代码动态加HTML元素，违反了JavaScript和HTML分离原则
* JavaScript和HTML分离的方法：
  * 第一步：模板放到HTML中
  * 第二步：渲染
  * 第三步：将模板Hide起来

## 指令初体验

* Vue的指令就是为了要实现JavaScript和HTML分离
  * HTML结构应该定义在HTML中，而不是散落在代码中
  * JavaScript应该是通过Model控制View，而不是定义View
