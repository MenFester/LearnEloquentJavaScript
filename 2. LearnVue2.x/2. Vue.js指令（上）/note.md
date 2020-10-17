# 学习笔记

## 条件渲染指令

* v-if：` v-if="expression" `
  * 它根据表达式true、false来显示、删除元素（变为HTML注释）
  * expression不一定是布尔型的变量，可以是字符串、数字、null、obj、undefined
  * expression可以是表达式（包括变量方法调用）、function
* v-show：` v-show="expression" `
  * 它根据表达式的true、false来显示、隐藏元素（style="display: none;"）
  * 其他和v-if相同
* v-else：` v-else="expression" `
  * 指令必须跟一个v-if或v-show元素后
  * 与最近的v-if配对使用

## 列表渲染指令

* v-for：` v-for="(val, index) in array" ` 或 ` v-for="(val, key, index) in json" `
  * 可以渲染数组
  * 可以渲染JSON
  * 循环谁（哪个标签），v-for就写在哪里
* 

## 表单与v-model

## 用指令实现一个留言板

## v-bind指令
