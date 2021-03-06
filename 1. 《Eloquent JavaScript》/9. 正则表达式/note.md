# 学习笔记

## 9.1 创建正则表达式

* 正则表达式是一种对象
* 正则表达式构造：
  * 使用RegExp构造函数
    * 使用RegExp构造函数时，模式将写为普通字符串，通常的反斜杠规则适用于此方式
  * 使用正斜杠（/）字符包含模式来写成字面值
    * 希望成为模式一部分的正斜杠之前要加上反斜杠
    * 不属于特殊字符的代码（如\n）的反斜杠将会被保留
    * 问号和加号等特殊字符在正则表达式中具有特殊含义，如果要表示它们字符本身，则必须以反斜杠开头
* 仅包含非特殊字符的正则表达式只表示字符序列

## 9.2 匹配测试

* 正则表达式对象有许多方法
* test方法：传递一个字符串，返回一个布尔值

## 9.3 字符集

* 正则表达式中的方括号，指的是取方括号中1个或多个字符作为模式参与匹配
* 方括号内两个字符之间的连字符（-），表示按字符Unicode编码确定顺序的字符范围
* 方括号中的点号（.）失去了它特殊字符的含义，其他特殊字符（+、?）也是如此
* 要对一组字符取反（要匹配除集合中的字符之外任何字符），可以在左方括号后面插入符号（^）。没有方括号的情况下使用^，代表严格匹配开头
* 角色组的快捷方式：
  * \d -- 任何数字字符
  * \w -- 字母数字字符
  * \s -- 任何空白字符（空格、制表符、换行符和类似字符）
  * \D -- 非数字字符
  * \W -- 非字母数字字符
  * \S -- 非空白字符
  * .  -- 除换行符之外的任何字符

## 9.4 模式的重复部分

* 在正则表达式中的某些内容后面加上加号（+），表示此元素可能会重复多次
* 星号（*）与加号（+）有类似含义，但它还允许模式匹配零次
* 问号（?）使模式一部分可选，意味着它可能出现零次或一次
* 要指示模式应该出现的次数，使用大括号：
  * {4}：4次
  * {2, 4}：至少出现2次，最多4次
  * {5, }：表示5次或更多次

## 9.5 对子表达式分组

* 要一次在多个元素上使用*或+，必须使用括号
* 正在表达式中包含在括号的一部分被当做单个元素，只涉及它后面的运算符
* 正则表达式末尾的i使得这个正则表达式不区分大小写

## 9.6 匹配和组

* 正则表达式exec方法：如果没有找到匹配则返回null，否则返回一个包含匹配信息的对象
* exec返回的对象有一个index属性，告诉我们字符串成功匹配的开始位置
* 当正则表达式包含用括号分组的子表达式：
  * 组匹配的文本也将显示在结果中
  * 整体匹配永远是匹配结果的第一个元素
  * 下一个元素由第一组匹配的，然后第二组
  * 当一个组最终没有匹配时，它在结果中的位置保持undefined
  * 当一个组被多次匹配时，结果中只包含最后一个匹配

## 9.7 Date类

* JavaScript有一个标准类Date来表示日期，更确切的说是表示时间点
* JavaScript月份编号从0开始，千万小心这一点
* 时间戳存储为UTC时区自1970年开始以来的毫秒数，这遵循“UNIX时间”设定的惯例。可以使用负数表示1970年之前的时间
* 可以通过创建一个新的日期对象并在其上调用getTime或调用Date.now函数来获取当前的毫秒数
* Date对象提供getFullYear、getMonth、getDate、getHour、getMinutes、getSeconds来提取部分内容，getYear返回年份减1900后的差

## 9.8 单词和字符串边界

* 如果想强制匹配必须包含整个字符串，可以添加标记^和$
  * /^!/：匹配任何以感叹号开头在字符串
  * /^\d+$/：匹配一个完全由一个或多个数字组成的字符串
* 如果只是想在单词边界上开始、结束，使用标记\b（b——记忆为边界）。边界标记不与实际字符匹配，它只强制正则表达式仅在模式中出现的位置满足特点条件时才匹配

## 9.9 选择模式

* 管道符(|)表示在它左侧的模式和右侧的模式之间做出一个选择

## 9.10 匹配机制

* 为了进行实际匹配，引擎会将正则表达式当做一个流程图。如果我们可以找到从图的左侧到右侧的路径，则表达式匹配成功

## 9.11 回溯

* 匹配器回溯：当进入某个分支时，它会记住自己的当前位置。如果当前的一个分支匹配不上，它就可以返回并尝试另一个分支
* 匹配器在找到完全匹配后会立即停止。这意味着如果多个分支可能匹配，则仅使用第一个分支（按分支在正则表达式中出现的位置先后来排序）

## 9.12 replace方法

* 字符串的replace方法，可以用于将字符串的一部分替换为另一个字符串。它的第一个参数也可以是正则表达式：
  * 默认情况下，正则表达式的第一个匹配将被替换
  * 当把g选项添加到正则表达式时，字符串中所有匹配项都将被替换
* 使用带有正则表达式的replace的真正强大之处，在于可以引用替换字符串中匹配的组（$组号，最高$9），整个匹配可以用$&来引用
* 向replace传递的第二个参数可以是函数而不是字符串，对于每次替换，将使用匹配的组（以及整个匹配）作为参数调用那个函数，并将返回值替换到新字符串中

## 9.13 贪心

* 重复运算符（+、*、?和{}）是贪心的，意味着它们尽可能多的匹配并从那里回溯。
* 如果你在重复运算符后面加上一个问号（+?、*?、??、{}?），它们会变得不贪心，并且尽可能少地匹配。只有在剩余模式不满足较小的匹配时才继续匹配

## 9.14 动态创建RegExp对象

* 只有在程序实际运行时才知道要匹配的模式的情况下，不能使用基于斜杠的表示法。可以构建一个字符串并在其上使用RegExp构造函数

## 9.15 search方法

* 正则表达式无法调用字符串上的indexOf方法
* 字符串的search方法可以传入正则表达式，也接受普通字符串并把它当做正则表达式处理。它返回找到表达式的第一个索引，如果没有找到返回-1
* search没有办法表达匹配应该从给定的偏移量开始

## 9.16 lastIndex属性

* exec方法同样没有提供从字符串中给定位置开始搜索的便捷方法
* 正则表达式对象具有属性
  * 其中source属性包含从中创建表达式的字符串
  * 另一个属性lastIndex，它在某些有限的情况下能控制下一次匹配的开始。这种情况正则表达式必须启用全局（g）或黏性（y）选项，且必须通过exec方法进行匹配。如果匹配成功，则对exec的调用会自动更新lastIndex属性以指向匹配后的位置
  * 全局和黏性选项之间的区别在于：当启用黏性时，匹配仅在直接从lastIndex开始时才会成功（即从lastIndex开始的位置就匹配成功）；对于全局，它将向前搜索匹配可以开始的位置
* 多个exec调用使用共享正则表达式时，对lastIndex属性的自动更新会导致问题
* 全局选项改变了字符串上match方法的工作方式。当使用全局表达式调用时，match不会返回类似于exec返回的数组，而是查找字符串中模式的所有匹配项并返回包含匹配字符串的数组
* 循环匹配：可以在循环体重访问匹配对象，使用lastIndex和exec来做到

## 9.17 解析INI文件

* INI文件格式：
  * 忽略以分号开头的行和空白行
  * 包裹在[]中的行开始一个新的节
  * 包含后跟=字符的字母数字标识符的行将设置添加到当前节
  * 其他任何内容都无效
* 某些操作系统不使用单独的换行符来分隔行，而是使用回车字符后跟换行符（"\r\n"）来分隔行
* split方法也允许将一个正则表达式作为其参数

## 9.18 国际字符

* JavaScript的正则表达式对于未出现在英语中的字符而言相当不便
* 必须在正则表达式中启用u选项，以使其正确处理Unicode字符
* 在正则表达式中使用\p时必须启用Unicode选项
* 使用\p{Property=Value}表示法来匹配具有此属性的给定值的任何字符
