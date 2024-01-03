# Node.js

## Node.js架构

![image-20240102225526387](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240102225526387.png)

## 应用场景

![image-20240102230752014](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240102230752014.png)

## Node的版本工具

* nvm安装：https://github.com/coreybutler/nvm-windows/releases
* nvm list：展示本地安装的node所有版本
* nvm install latest：安装node最新的版本
* nvm use ：切换node版本

## Node的输入参数

![image-20240103140912860](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240103140912860.png)

## Node的输出

![image-20240103141131212](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240103141131212.png)

## 常见的全局对象

![image-20240103143940180](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240103143940180.png)

![image-20240103153541459](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240103153541459.png)

## 特殊的全局对象

* __dirname:获取当前文件所在的路径
* __filename:获取当前文件所在的路径和文件名称

## global和window的区别

![image-20240103154525340](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240103154525340.png)

## CommonJS

### 概述

![image-20240103212811775](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240103212811775.png)

### exports导出

![image-20240103214051307](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240103214051307.png)

### module.exports导出

![image-20240103215140412](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240103215140412.png)

### require的细节

![image-20240103220221951](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240103220221951.png)

#### 情况一

* X是一个Node核心模块，比如path、http
  * 直接返回核心模块，并且停止查找

#### 情况二

* X是以./或../或/(根目录)开头的
* ![image-20240103220812420](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240103220812420.png)

#### 情况三

* 直接是一个X（没有路径），并且X不是一个核心模块

* ![image-20240103221516758](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240103221516758.png)

### 模块加载过程

![image-20240103224120686](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240103224120686.png)

## ES Module

### 认识ES Module

![image-20240103230622941](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240103230622941.png)