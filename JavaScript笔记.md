# JavaScript

## noScript

* 当浏览器不支持javascript时，浏览器会执行noscript中的内容

```html
 <noscript>
    <p>您的浏览器不支持JavaScript，请更换浏览器。</p>
  </noscript>
```

## 编写的注意事项

* 注意一：script元素不能写成单标签
  * 不能在引入外部的javascript代码的标签中写其他代码
* 注意二：省略type属性
* 注意三：加载顺序
  * 默认遵循HTML加载顺序，自上而下的加载顺序
  * 推荐将JavaScript代码和编写位置放到body子元素的最后一行

* 注意四：JavaScript代码严格区分大小写

## 和浏览器的交互方式

![image-20230920172713336](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20230920172713336.png)

## 变量的定义

### 命名规范

* 第一个字符必须是一个字母、下划线(_)或一个美元符号($)
* 其他字符可以是字母、下划线、美元符号或数字
* 不能使用关键字和保留命名：
  * https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/lexical_grammar

* 变量命名规范：建议遵守
  * 多个单词使用驼峰标识
  * 赋值 = 两边都加一个空格

## 常见的数据类型

### 7种原始类型和1种复杂类型

* Number
* String
* Boolean
* Undefined
* Null
* Object(复杂类型)
* Bigint
* Symbol

### Number

* 代表整数和浮点数
* 特殊数值
  * Infinity：代表数学概念中的无穷大
  * NaN：表示一个计算错误，得到的一个不是数字类型的结果
* 获取最大值和最小值
  * 最大值：Number.MAX_VALUE
  * 最小值：Number.MIN_VALUE
* 判断是否时NaN
  *  Number.isNaN

### String

* 可以使用单引号和双引号还有反引号表示
  * 反引号是ES6中引入
* 转义字符：斜杠(\\)

### Boolean

* 用于表示真假

### Undefined

* 声明一个变量，但是没有对其进行初始化，默认值就是undefined



## typeof操作符

* 用来确定任意变量的数据类型

