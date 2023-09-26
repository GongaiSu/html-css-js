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

## 类型转换

### 转换为String

* 显示转换
  * String()函数：进行转换

### 转换为Number

* 显示转换
  * Number()函数：进行转换
  * ![image-20230923221317644](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923221317644.png)

### 转换为Boolean

* 隐式转换

  * 直观上为空的值（如0、空字符串、null、underfined和NaN）转换为false
  * 其他值为true

* 显示转换

  * Boolean()函数：进行转换

  ![image-20230923221642245](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923221642245.png)

* 注意：包含0的字符串是true

### 原始类型转换

![image-20230923225833094](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923225833094.png)

![image-20230923232543737](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923232543737.png)

## 运算符

### 算数运算符

![image-20230923222313604](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923222313604.png)

### 比较运算符

![image-20230923222802503](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923222802503.png)

### ==与===的区别

* ==
  * 在类型不相同的情况下比较时，会将判断符合== 两侧的值转换为数字
  * 空字符串和false也是如此。转换后她们都为数字0；
  * null比较特殊：null进行比较的时候，应该是会被当成一个对象和原生类型进行比较

* ===
  * 在类型不相同的情况下，直接返回false

### 逻辑运算符

![image-20230923233609196](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923233609196.png)

### for循环

![image-20230923234645442](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923234645442.png)

![image-20230923234619613](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230923234619613.png)

##  函数

### arguments（JS高级在学习）

* 是一个特别的对象：arguments对象
  * 默认情况下，arguments对象是所有（非箭头）函数中都可以使用的局部变量
  * 该对象中存放着所有的调用着传入的参数，从0位置开始，依次存放
  * arguments变量的类型是一个object类型（array-like），不是一个数组，但是和数组的用法看起来很相似
  * 如果调用者传入的参数多余函数接受的参数，可以通过arguments去获取所有的参数

### 头等函数

* (first-class function;第一级函数）是指在程序设计语言中，函数被当作头等公民

  * 函数可以作为别的函数的参数，函数从返回值，赋值的变量或存储在数据结构中；

## 对象

### 对象的创建

* 对象字面量：通过{}
* new Object+动态添加属性
* new其他类

### 对象的操作

* 删除对象的属性：delete操作符

### 对象的遍历

* 对象的遍历(迭代)：表示获取对象中所有的属性和方法
  * Object.keys()方法会返回一个有一个给定对象的自身可枚举属性组成的数组

## 堆内存和栈内存

* 原始类型占据的空间是在对内存中分配的
* 对象类型占据的空间是在堆内存中分配的

![image-20230926113750486](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20230926113750486.png)

## 值类型和引用类型

* 原始类型的保存方式：在变量中保存的是值本身
  * 所以原始类型也称为值类型
* 对象类型的保存方式：在变量中保存的是对象的“引用”
  * 所以对象类型也被称为引用类型

## 函数中的this

### this的指向

* 以默认的方式调用一个函数，this指向window
* 通过对象调用，this指向调用对象

### this在开发中的作用

* 在对象中的函数中使用对象中的变量
* 方便再一个方法中，拿去当前对象的一些属性

## JavaScript中的类

### 一个函数被使用new操作符调用了，他会执行如下操作

* 在内存中创建一个新的对象（空对象）；
* 这个对象内部的[[prototype]]属性会被赋值为该构造函数的portotype属性
* 构造函数内部的this，会指向创建出来的新对象
* 执行函数的内部代码（函数体代码）
* 如果构造函数没有返回非空对象，则返回创建出的新对象 

### 全局对象Window

* 作用一：查找变量时，最终会找到window头上
* 作用二：将一些浏览器全局提供给我们的变量/函数/对象，放在window对象上面，可以直接调用
* 作用三：使用var定义的变量会默认添加到window上面