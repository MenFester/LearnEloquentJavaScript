# 学习笔记

## 2.2 类型系统

* TypeScript身兼两种类型系统，可以显示注解类型，也可以让TypeScript推导多数类型

## 代码编辑器设置

* 安装TSC、TSLint或ESLint（推荐）和NodeJS的类型声明：
  * ` npm install --save-dev typescript tslint @types/node `
  * ` npm install --save-dev typescript eslint @types/node `

* 初始化tsconfig.json文件，` ./node_modules/.bin/tsc --init `，选项说明：
  * include：TSC在哪个文件夹中寻找TypeScript文件
  * lib：TSC假设运行代码的环境中有哪些API
  * module：TSC把代码编译成哪个模块系统（CommonJS、SystemJS、ES2015）
  * outDir：TSC把生成的JavaScript代码放在哪个文件夹中
  * strict：检查无效代码时尽量严格。该选项强制所有代码正确声明了类型
  * target：TSC把代码编译成哪个JavaScript版本

* 使用tslint或者eslint，初始化一个配置文件
  * ` ./node_modules/.bin/tslint --init `
  * ` ./node_modules/.bin/eslint --init `