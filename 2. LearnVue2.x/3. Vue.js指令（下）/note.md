# 学习笔记

## 事件

* v-on:<事件名>="functionName"
* v-on:<事件名>="functionName($event)"获得原生JS事件，为了解决捕获冒泡事件
* 事件名后面可以加modifier：
  * .stop：阻止事件继续冒泡
  * .prevent：阻止元素的默认行为
  * .13或.enter：回车后才触发事件
  * .left或者.right或者.middle：知道鼠标click是触发哪个键
  * .once：只触发一次
  * .ctrl或.shift或.alt：要求有相关按键时才触发事件

## 动手实验——分页

## v-model指令

* v-model.lazy，只有在回车或者onblur时改动
* v-model.number，只能输入数据
* v-moddl.trim，去除前后空格

## 自定义指令

* 传入Vue()对象中的directives
  * bind：钩子，绑定时执行一次
  * update
  * unbind

## 计算属性

* 把函数当做变量使用
* 传入Vue()对象中的computed