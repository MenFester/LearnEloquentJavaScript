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

## 表单与v-model

* v-model，将控件与model双向绑定

## 用指令实现一个留言板

* 开发中不可能只用Vue，学会和其他框架配合使用
* bower install jQuery
* bower install bootstrap#3.4.1
* 通常的开发步骤，先做静态页面，再和Vue结合

## v-bind指令

* v-bind后面连一个HTML属性，用来控制元素的属性值
* v-bind:src
  * ` <img v-bind:src="imgURL">` 或 `<img :src="imgURL">`
* 不推荐把属性当做字符串处理（添加、删除等）
* v-bind:class
  * 字符串
  * 数组，应该当做数组（字符串数组）处理和控制，Vue会自动转换为HTML认识的字符串
  * JSON，推荐用json，比数组更加优雅：在模板里把属性值变成带开关json，将属性的值通过变量开关来决定是否启用。` <img :class="{red: isRed, border: hasBorder}"> `，通过控制isRed、hasBorder变量的true、false控制属性值
* v-bind:style
  * 字符串
  * JSON，json的key必须写成“小驼峰”格式（borderWidth)，Vue自动转为(border-width)；json的值就是变量，通过方法等控制设置为需要的值