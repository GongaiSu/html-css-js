# this的指向

## 启示

1. 函数在调用是，JavaScript会默认给this绑定一个值；
2. this的绑定和定义的位置（编写的位置）没有关系
3. this的绑定和调用方式以及调用的位置有关系
4. this是在运行时被绑定的

## 绑定的规则

### 绑定一：默认绑定

* 独立函数调用
  * 独立函数调用可以理解为函数没有绑定到某个对象上进行调用
  * 函数声明在对象中，但是独立调用
  * 严格模式下，独立调用的函数中的this指向的是underfunded

### 绑定二：隐式绑定

* 通过某个对象进行调用的

### 绑定三：显示绑定

* 不希望对象内部包含这个函数的应用，同时有希望在这个对象上进行强制调用，可以使用apply和call方法进行显示绑定
* apply和call方法的使用
  * 第一个参数式相同的，要求传入一个对象
    * 这个对象是给this准备的
    * 在调用这个函数时，会将this绑定到这个传入的对象上
  * 后面的参数，apply为数组，call为参数列表
  * ![image-20231107142008602](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231107142008602.png)
* bind方法
  * 使用bind方法，bind()方法创建一个新的绑定函数（bound function，BF）
  * 绑定函数时一个exoitc function object（怪异函数对象）
  * ![image-20231107143408076](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231107143408076.png)

### 绑定四：new绑定

* JavaScript中的函数可以当作一个类的构造函数来使用，也可以收i用new关键字
* 使用new关键字来调用函数，会执行一下的操作：
  1. 创建一个全新的对象
  2. 这个新对象会执行prototype连接
  3. 这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）
  4. 如果函数没有返回其他对象，表达式会返回这个新对象

### 规则优先级

1. 默认规则的优先级最低
2. 显示绑定优先级高于隐式绑定
3. new绑定优先级高于隐式绑定
4. new不可以和call和apply一起使用
5. new的优先级高于bind
6. bind的优先级高于apply和call

### 额外情况

1. 显示绑定null/undefined，那么使用的规则时默认绑定
2. 创建一个函数的间距引用，这种情况使用默认绑定规则

## 箭头函数

* 箭头函数是ES6之后新增的一中编写函数的方法，并且它比函数表达式要更加简洁

  * 箭头函数不会绑定this和argumnet属性
  * 箭头函数不能作为构造函数来使用

* 如何编写

  * ():函数的参数

  * {}:函数的执行体

  * ```javascript
    var bar = function(){
          console.log("非箭头函数");
        }
        bar()
    
        var foo = ()=>{
          console.log("箭头函数");
        }
        foo()
    ```

### 简写(优化)

1. 当参数只有一个的时候，()可以省略
2. 如果函数执行体中只有一行代码，那么可以省略大括号
   1. 并且这行代码返回值会作为整个函数的返回值
   2. 一行代码中不能带return关键字
   3. 只有一行代码是，这行代码的表达式结果会作为函数的返回值默认返回 
3. 如果默认返回时一个对象，那么这个对象必须加()

### 箭头函数的this

* 箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this。
* ![image-20231108161750814](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231108161750814.png)

# 深入浏览器的渲染原理

## script元素和页面解析的关系

![image-20231110153817043](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231110153817043.png)

一篇非常好的文章：https://web.dev/articles/howbrowserswork?hl=zh-cn

### defer属性

* 告诉浏览器不要等待脚本下载，而继续解析HTML，构建DOM Tree、
  * 脚本会有浏览器来进行下载，但是不会阻塞DOMTree的构建过程
  * 如果脚本提前下载还好了，他会等待DOM Tree构建完成，在DOMContentLoaded时间之前执行defer中的代码
* DOMContentLoaded总会等待defer中的代码限制性完成
* 多个带defer的脚本时可以保证正确的脚本执行的
* 从某些角度来说，defer可以提高页面的性能，并且推荐放到head元素中
* 注意：defer仅仅用于外部脚本，对于script默认内容会被忽略

### async属性

* 与defer有些类似，他也能够让脚本不阻塞页面
* 是让一个脚本完全独立
  * 浏览器不会因async脚本而阻塞（与defer类型）
  * async脚本不能保证顺序，它时独立下载、独立运行，不会等待其他脚本执行完毕；
  * async不能保证在DOMContentLoaded之前或者之后执行

## 闭包

### 闭包的定义

![image-20231116155145954](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231116155145954.png)

# 函数的增强知识

## 函数对象的属性

### 属性name

* 一个函数的名词我们可以勇敢name来访问；

### 属性length

* 用于返回函数参数的个数
  * 注意：rest参数不参与参数的个数的

## 认识arguments

* arguments是一个对应于传递给参数的类数组（array-like)对象
* array-like意味着它不是一个数组类型，而是一个对象属性
  * 拥有数组的一些特性，比如说length，可以通过index索引来访问
  * 但是它没有数组的一些方法，比如filter、map等

### arguments转换为Array

* 方法一：创建一个新的数组对象，使用for循环将arguments放入到数组中
* 方法二：使用数组中的slice(截断)函数的call方法，进行显示绑定到arguments，
* 方法三：使用ES6方法中的Array.from和[...arguments]

### 箭头函数不绑定arguments

* 箭头函数是绑定argument的，在箭头函数中使用argument会去上层作用域直接查找

## 函数的剩余(rest)参数

* ES6中引用了rest parameter，可以将不定数量的参数放到一个数组中；
  * 如果最后一个参数是...为前缀的，那么它会将剩余的参数放到改参数中，并且最为一个数组；
  * 注意，剩余参数必须放到最后

## 纯函数

### 纯函数的条件

* 在此函数在相同的输入值时，需生产相同的输出
* 函数的输出和输入值以外的其他隐藏信息或状态无关，也和又I/O设置产生的外部输出无关
* 该函数不能又语义上可观察的函数副作用，诸如“触发事件”。使输出设备输出，或更改输出设值以外物件的内容等。

### 简单的总结

* 确定的输入，一定会产生确定的输出
* 函数在执行过程中，不能产生副作用

### 副作用

* 在执行一个函数时，除了返回函数值之外，还对调用函数产生了附加的影响，比如修改了全局变量，修改参数或者改变外部的存储；

## 柯里化

* 把接受多个参数的函数，变成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受剩余的参数，而且返回结果的新函数的技术
* 总结
  * 只传递给函数一部分参数来调用它，让他返回一个函数去处理剩余的参数；
  * 这个过程就称之为柯里化

## 组合函数

* 将不同函数进行组合

# 额外知识

## with语句的使用

* 扩展一个语句的作用域链
* 不建议使用

## eval函数

* 内建函数eval允许执行一个代码字符串
  * 是一个特殊的函数，可以将传入的字符串当作JavaScript代码来运行
  * 会将最后一句执行语句的结果作为返回值
* 不建议使用
  * 可读性差
  * 容易被修改，又被攻击的风险
  * 不能被JavaScript引擎优化

## 严格模式

### 支持选择粒度

* 可以在js文件中开启严格模式
* 也可以对某个函数开启严格模式

### 使用方法

* 在开头添加“use strict”来开启严格模式

### 使用限制

![image-20231128102123739](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231128102123739.png)

# 对象增强

## 对属性操作的控制

* 使用属性描述符对一个属性进行比较精准的操作控制
  * 使用Object.defineProperty来对属性进行添加或者修改

## 属性描述符分类

* 数据属性描述符
* 存取属性描述符

![image-20231128102948057](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231128102948057.png)

### 数据属性描述符

* [[Configurable]]：表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；
  * 当我们直接在一个对象定义某个属性时，这个属性的[[Configurable]]为true
  * 当我们通过属性描述符定义一个属性时，这个属性的[[Configurable]]为false
* [[Enumerable]]：表示属性是否可以通过for-in或者Object.keys()返回给属性
  * 当我们直接在一个对象定义某个属性时，这个属性的[[Enumerable]]为true
  * 当我们通过属性描述符定义一个属性时，这个属性的[[Enumerable]]为false
* [[Writable]]：表示是否可以修改属性的值
  * 当我们直接在一个对象定义某个属性时，这个属性的[[Writable]]为true
  * 当我们通过属性描述符定义一个属性时，这个属性的[[Writable]]为false
* [[value]]：属性的value值，读取属性时会返回该值，修改属性时，会将其进行修改
  * 默认情况下这个值时undefined

### 存取属性描述符

* [[Configurable]]：表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；
  * 当我们直接在一个对象定义某个属性时，这个属性的[[Configurable]]为true
  * 当我们通过属性描述符定义一个属性时，这个属性的[[Configurable]]为false
* [[Enumerable]]：表示属性是否可以通过for-in或者Object.keys()返回给属性
  * 当我们直接在一个对象定义某个属性时，这个属性的[[Enumerable]]为true
  * 当我们通过属性描述符定义一个属性时，这个属性的[[Enumerable]]为false
* [[get]]：获取属性时会被执行的函数。默认为undefined
* [[set]]：设置属性时会被执行的函数。默认为undefined

### 多个属性描述符

* Object.defineProperties方法直接在一个对象上定义多个新的属性或者修改现有属性

## 额外方法补充

* 获取对象的属性描述符
  * getOwnPropertyDescriptor
  * getOwnPropertyDescriptors
* 禁止对象扩展新属性：preventExtensions
  * 给一个对象添加新的属性会失败（严格模式下会报错）
* 密封对象，不允许配置和删除属性：seal
  * 实际上调用preventExtensions
  * 并且将现有属性的configurable:false
* 冻结对象，不允许修改现有属性：freere
  * 实际上是调用seal
  * 并且将现有属性的writable:false

# 原型和原型链

## 普通对象的原型

* JavaScript当中没有对象都有一个特殊的内置属性[[prototype]]，这个特殊的对象可以指向另一个对象
* 作用
  * 当通过引用对象的属性key来获取一个value是，她会触发[[Get]]的操作
  * 这个操作会首先检查改对象是否又对应的属性，如果有的话就使用它
  * 如果对象中没有该属性，那么会访问对象[[prototype]]内置属性指向的对象上的属性；
* 获取方法
  * 方法一：通过对象的`__proto__`属性可以获取到（浏览器兼容性问题）
  * 方法二：通过Object.getPrototypeOf方法可以获取到

## 函数的原型

* 所有的函数都要一个prototype的属性：这是一个显式原型
* 函数原型作用
  * 在new操作创建对象时，将这个显式原型赋值给创建出来对象的隐式原型

### constructor属性

* 原型对象上是有一个属性的：constructor
  * 默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象；

### 内存表现图

![image-20231128173758267](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231128173758267.png)