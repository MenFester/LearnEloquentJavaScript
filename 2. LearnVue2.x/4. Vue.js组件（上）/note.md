# 学习笔记

## 自定义过滤器

* ` {{ expression | filter}} `，filter用于格式化输出
* 2.0以后，Vue没有缺省的过滤器，但是可以自定义
* 通过给Vue传入对象的filters属性内实现过滤器函数

## 组件

* 为什么需要组件：复用。从最基础的元素构建更复杂的且可以复用的代码单元
* 小组件能堆叠形成大组件
* 所谓组件，是可以自己定义标签
* template里的标记必须放置一个根标记下，不允许多个并列
* 组件的命名不是小驼峰的，因为html不区别大小写字母。要用“-”串联的小写字母单词

## 复合组件

* 复合组件是调用了其他组件的组件
* 根组件->层次组件->功能组件

## 组件生命周期

* 四个阶段，每个阶段都有前有后，可以对应事件处理函数：
  * beforeCreate，created
  * beforeMounte，mounted
  * beforeUpdate，updated
  * beforeDestroy，destroyed

## 监听属性

* 知道属性的变化而且可以控制它，使用watch，通过function对应需要watch的属性
