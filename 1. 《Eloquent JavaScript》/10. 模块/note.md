# 学习笔记

## 10.1 模块作为构件

* 典型的真实程序是逐渐成长的，理想的程序具有水晶般清晰的解构
* 模块是一个程序，它指定它依赖的其他部分以及它为其他模块提供的功能（接口）
* 模块接口与对象接口有许多共通之处，构成了外部世界可用的一部分，并将其余部分保密
* 通过限制模块相互作用的方式，系统变得更像乐高积木。其中各个部分通过定义良好的连接器进行交互（而不像泥浆，一切都与所有东西混合）
* 模块之间的关系成为依赖关系，当模块需要来自另一个模块的部件时，就说它依赖于此模块
* 将JavaScript代码放入不同的文件未必满足分离的要求，这些文件仍然共享相同的全局命名空间，它们可能有意无意地干扰彼此的约束

## 10.2 包

* 软件包是可以分发（复制和安装）的一大块代码，它可能包含一个或多个模块
* 如果程序包中发现问题或添加了新功能，则会更新程序包
* 使用其他人的包时，请确保了解他们的许可证

## 10.3 简易模块

* 2015年前，JavaScript语言还没有内置模块系统，可以使用JavaScript函数创建局部作用域和对象来表示模块接口

## 10.4 将数据作为代码执行

* 有几种方法都可以获取数据（一串代码）并将其作为当前程序的一部分运行：
  * 方法一：eval，它将在当前作用域中执行一个字符串，这通常是一个坏方法
  * 方法二：将数据解释为代码的不那么危险的方法是使用Function构造函数，它有两个参数：
    * 一个包含以逗号分隔的参数名列表的字符串
    * 一个包含函数体的字符串
    * 这个方法包装着函数值中的代码，以便它获得自己的作用域，并且不会对其他作用域做奇怪的事情
    * 这正是我们需要的模块系统。将模块的代码包装在一个函数中，并把此函数的作用域用作模块作用域

## 10.5 CommonJS

* 最常用的连接JavaScript模块的方法称为CommonJS模块
* CommonJS模块的主要概念是一个名为require的函数，当使用依赖项的模块名调用它时，它会确保加载模块并返回其接口
* 加载器将模块代码包装在一个函数中，模块会自动获得它们自己的局部作用域
* 需要做的是：调用require来访问依赖项，将接口绑定到exports的对象中
* CommonJs模块的一个怪癖是，虽然模块系统会为你创建一个空接口对象（绑定到exports），但是你可以通过覆盖module.exports将其替换为任何值
* 当名称不是相对路径时，Node.js将按该名称查找已安装的包

## 10.6 ECMAScript模块

* CommonJS模块表示法略显过时，添加到exports的内容在局部作用域内不可用。而且因为require是一个普通的函数调用，可以采用任何类型参数而不仅仅是字符串文字，如果不运行代码就很难确定模块的依赖性
* 2015年后JavaScript标准引入了自己不同的模块系统，通常称为ES（ECMAScript）模块
  * 依赖关系和接口的主要概念不变，但细节不同
  * 表示法整合到语言中
  * 使用特殊的import关键字而不是函数来访问依赖项
  * 使用export关键字导出内容，它可能出现在函数、类、绑定（let、const、var）的前面
* ES模块的接口不是单个值，而是一组命名绑定。从其他模块导入时，导入绑定而不是值，这意味着导出模块可以随时更改绑定的值，导入的模块将看到新值
* 如果存在名为default的绑定，则将其视为模块的主要导出值。如果导入模块而没有绑定名称周围的大括号，则会获得其default绑定。要创造默认导出，在表达式、函数声明、类声明之前编写默认导出值
* 可以用单词as重命名导入的绑定
* ES模块导入发生在模块的脚本开始运行之前，import声明不可以出现在函数或块中，并且依赖的名称必须是带引号的字符串而不是任意表达式

## 10.7 构件和捆绑

* web程序员已经开始使用工具把多个文件（精心分成模块）的程序打包到单个大文件中，再将其发布到web上（因为获得单个大文件往往比获取许多小文件更快）。这些工具被称为打包器（bundler）
* 除文件数量，文件大小也严重影响它们通过网络传输的速度。缩小其（minifier）工具读入JavaScript程序，并通过自动删除注释和空格，重命名绑定，用较少空间的等效代码替换代码片段来使其变得更小
* 请注意，你运行的JavaScrip代码通常不是它们当初编写出来的样子

## 10.8 模块设计

* 任何重要的功能都可以通过多种方式建模
* 模块设计的一个方面是易用性，即使没有标准函数或广泛使用的包可供模仿，也可以通过使用简单的数据结构并做单一、有针对性的事情来保持模块的可预测性
* 模块设计的了另一个有用的方面是易于使用其他代码组合某些东西
* 有状态对象有时是有用的，甚至是必要的，但是如果可以使用函数完成某些操作，就使用函数完成（数据包装在一个专门的对象类型中，所有与它交互的代码都必须知悉类型，从而产生不必要的相互依赖）
* 通常无法避免定义新的数据结构，但当数组足够用时，就使用数组
* 当各种包使用不同的数据结构来描述类似的东西时，将它们组合起来是有难度的。如果你想设计出组合性好的模块，请找出其他人正在使用的数据结构，并在可能的情况下按照他们的示例进行操作
