# 学习笔记

## 3.1 定义一个函数

* 函数定义是一个常规的绑定，其中绑定的值是函数
* 使用关键字function开头的表达式创建函数，函数有一组参数和一个函数体（必须始终用大括号括起来）
* return语句确定函数返回的值。当控制流遇到return语句时，立即跳出当前函数并将返回值提供给调用此函数的代码
* return关键字后面没有表达式将导致函数返回undefined，完全没有return语句的函数，同样返回undefined
* 函数的参数表现得像常规绑定，但它们的初始值由函数的调用者给出

## 3.2 绑定和作用域

* 每个绑定都有一个作用域
* 全局绑定：在任何函数或块之外定义的绑定，作用域是整个程序
* 局部绑定：为函数参数创建的绑定，或在函数内声明的绑定，只能在此函数中引用。每次调用此函数时，都会创建这些绑定的新实例
* 用let、const声明的绑定实际上是在声明它们的块中局部可见
* 在2015年之前的JavaScript中，只有函数才能创建新的作用域。因此使用var关键字创建的旧式绑定在出现它们的整个函数中是可见的（提升到函数作用域顶部），如果它们不是在一个函数中（在一个if、for等语句块中），则它们在全局作用域可见（提升到全局作用域顶部）
* 块内可见的绑定集由程序文本中此块的位置确定。

## 3.3 作为值的函数

* 函数容易与其名称混淆，但两者是不同的。函数值能执行其他值能执行的所有操作——可以在任何表达式中使用它，而不仅仅是调用它：可以将函数值存储在新绑定中；可以将其作为参数传递给函数等等

## 3.4 声明表示法

* 声明表示法：function开头的，常规函数声明、定义的表示法，不像变量/常量绑定那样需要=号将函数值绑定到名称上
* 声明表示法在函数后不需要分号
* 这种形式的定义有个不易察觉之处：即使函数是在使用它的代码下面定义的，前面的代码也可以工作。函数声明不是常规的从上到下的控制流的一部分，它们在概念上被移到了它们的作用域的顶部，可以由此作用域内的所有代码使用

## 3.5 箭头函数

* =>代替function关键字。
* 箭头位于参数列表之后，表达了：“这个输入（参数）产生这个结果（函数体）”的意思
* 如果只有一个参数名称，箭头函数可以省略参数列表周围的括号
* 如果函数体是单个表达式，而不是大括号中的块，且返回内容是表达式的值，箭头函数的函数体可以直接写这个表达式，省略大括号和return关键字

## 3.6 调用栈

* 因为函数返回时必须跳回到调用它的位置，所以计算机必须记住调用发生的上下文，计算机存储此上下文的位置是调用栈。每次调用函数时，当前上下文都存储在此栈的顶部。当函数返回时，它会从栈中删除顶层上下文并使用此上下文继续执行

## 3.7 可选参数

* JavaScript对于传递给函数的参数的数量极为宽容，如果传递太多参数——则会忽略额外的参数，如果传递的参数太少——则缺少的参数将被赋值为undefined
* 如果在参数之后写一个=运算符，后跟一个表达式，那么将在未给出某参数时用此表达式的值

## 3.8 闭包

* 闭包：能够引用封闭作用域中局部绑定的特定实例的功能
* 引用其周围局部作用域的绑定的一个函数称为一个闭包
* 一个号的思路模型是：将函数值视为同时包含“其函数体内的代码”和“创建它们的环境”。调用时，函数体会看到创建它的环境，而不只是调用它的环境

## 3.9 递归

* 函数调用自身是完全可以的，只要它不这样调用太多次就不会溢出栈
* 问题：用简单的循环实现的函数的运行成本，通常比多次调用函数的递归实现的成本低
* 担心效率可能会分散注意力，这是使程序设计复杂化的另一个因素。因此，总是先写一些正确且易于理解的东西。如果你担心它太慢——通常不是这样，大多数代码根本不会经常执行。所以你可以在之后进行测量，并在必要时进行改进

## 3.10 函数的增长方式

* 一个有用的原则是不增加功能，除非你绝对确定你需要它

## 3.11 函数和副作用

* 函数可以粗略地分为“为了副作用而调用的函数”和“为了其返回值而调用的函数”。
* 纯函数是一种特定的产生值的函数，它不仅仅没有副作用，而且不依赖于其它代码的副作用。
