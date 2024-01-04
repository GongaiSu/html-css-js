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

### export关键字

![image-20240104113434748](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240104113434748.png)

### import关键字

![image-20240104113355677](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240104113355677.png)

### export和import结合

```java
export {sayHello} from "./bar.js"
```

### default用法

![image-20240104142405144](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240104142405144.png)

### import函数

![image-20240104142938131](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240104142938131.png)

### ES Module的解析流程

![image-20240104144151252](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240104144151252.png)

# 包管理工具

## npm

### npm管理工具简介

![image-20240104151004307](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240104151004307.png)

### npm的配置文件

![image-20240104153255038](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240104153255038.png)

### 常见的属性

#### 必须填写的属性：name、version

* name：项目的名称；
* version：当前项目的版本号
* description：信息描述，很多时候作为项目描述
* author：作者相关信息
* license：开源协议

#### private属性

* 记录当前项目是否是私有的
* 当值为true是，npm是不能发不它的，防止私有项目活模块发布出去的方式

#### main属性

* 设置程序的入口
  * 比如使用axios模块 const axios = requier("axios")
  * 如果main属性，实际上是找到对应的main属性查找文件的

#### scripts属性

* 用于配置一些脚本命令，以键值对的形式存在；
* 配置后我们可以通过npm run 命令的key来执行这个命令
* npm start和npm run start的区别
  * 它们是等价的
  * 对于常用的start、test、stop、restart可以省略掉run直接通过npm start等方式运行；

#### dependencies属性

* dependencies属性是指定无论开发环境还是生成环境都需要依赖的包；
* 通常是我们项目实际开发用到的一些库模型等
* 与之对应的是devDependencies

#### devDependencies属性

* 一些包在生成环境是不需要的，比如webpack，babel
* 这个时候通过npn install webpack --save-dev 将它安装到devDependencies属性中

#### peerDependencies属性

* 还有一种项目依赖关系是对等依赖，也就是你依赖的一个包，他必须是以另一个宿主包为前提的；
* 比如element-plus是依赖于vue3的，ant design是依赖于react、react-dom；

#### 依赖的版本管理

![image-20240104214201100](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240104214201100.png)

#### ![image-20240104214343376](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240104214343376.png)

### npm install命令

* 安装npm包分两种情况
  * 全局安装（global install）：npm install webpack -g;
  * 项目（局部）安装（local install）：npm install webpack
* 全局安装
  * 全局安装是直接将某个包安装到全局
  * 比如全局安装yarn

### package-lock.json

![image-20240104221549902](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240104221549902.png)

### npm install 原理

![image-20240104222417908](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240104222417908.png)

![image-20240104222447208](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240104222447208.png)

### npm的其他命令

* 卸载某个依赖包：
  * npm uninstall package
  * npm uninstall package --save-dev
  * npm uninstall package -D
* 强制重新build
  * npm rebuild
* 清楚缓存
  * npm cache clean

* 详细文档：https://docs.npmjs.com/cli/v8/commands

## yarn工具

![image-20240104225719034](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240104225719034.png)

## cnpm

