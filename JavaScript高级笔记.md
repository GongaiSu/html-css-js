#  nthis的指向

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

* 所有的函数(非箭头函数) 都要一个prototype的属性：这是一个显式原型
* 函数原型作用
  * 在new操作创建对象时，将这个显式原型赋值给创建出来对象的隐式原型

### constructor属性

* 原型对象上是有一个属性的：constructor
  * 默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象；

### 内存表现图

![image-20231128173758267](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231128173758267.png)

# 面向对象的特性

## 继承

### 原型链

* 从一个对象上获取属性，如果在当前对象中没有获取到就会去它的原型上获取

### 通过原型链实现继承

* 在父类构造方法的显示原型上定义公共函数

* 将通过父类构造方法的生成的对象，绑定到子类构造方法的prototype显示原型上面，之后通过子类构造方法生成的子类对象都会继承父类中的函数
* 子类构造方法的显示原型上添加函数必须在绑定父类对象后才能绑定
* 问题：某些属性其实是保存在p对象上
  * 通过直接打印看不到对象的这些属性
  * 这些属性会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题
  * 不能给父类传递参数（让 每个stu有自己的属性），因为这个对象是一次性创建的（没办法定制化）

### 借用构造函数继承

* 为了解决原型链继承中存在的问题，开发人提供了一种新的技术：constructor stealing
  * steal是偷窃、剽窃的意思，但这里可以翻译成借用
* 在子类型构造函数的内部调用父类型构造函数
  * 函数可以在任意的时刻被调用
  * 通过apple()和call()方法也可以在新创建的对象执行构造函数

### 组合借用继承的问题

![image-20231129151306824](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231129151306824.png)

### 寄生式继承函数

![image-20231129171829327](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231129171829327.png)

### 寄生组合式继承

![image-20231129172135935](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231129172135935.png)

### Object是所有类的父类

### 对象方法的补充

#### hasOwnProperty

* 对象是否有一个属于自己的属性（不是在原型上的属性）

#### in/for in 操作符

* 判断某个属性是否在某个对象或者对象原型上

#### instanconf

* 用于检测构造函数的prototype,是否出现在某个实例对象的原型链上

#### isPrototypeOf

* 用于检查某个对象，是否出现在某个实例对象的原型链上

###  原型继承关系

![image-20231129223150269](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20231129223150269.png)

![image-20231129225042175](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20231129225042175.png)

# ES6

## 认识class定义类

  ![image-20231130145933015](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231130145933015.png)

## 类的构造函数

![image-20231129231222909](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20231129231222909.png)

## 类的访问器方法

* 在类中读取/设置属性可以使用访问器方法，
* set、get 是访问器属性；setter、getter 表示访问过程
* 可以用它来隐藏那些不想让外界直接访问的属性。一个对象内，每个变量只能有一个 getter 或 setter。

### 写法

- set 是一个设置含义的函数。定义对象和定义类中，set后面都是跟一个函数名。但是使用 Object.defineProperty 在已有对象中添加 set 方法时，不需要知道函数名，因为添加的属性名就是这个函数名。

- get 是一个获取含义的函数，定义对象和定义类中，get后面都是跟一个函数名。但是使用 Object.defineProperty 在已有对象中添加 get 方法时，不需要知道函数名，因为添加的属性名就是这个函数名。

  set 后面的函数中有一个参数，并且仅有一个参数，并且会将传进来的参数存储给当前对象的一个属性（临时属性）。

- get 后面的函数中不能有任何参数，并且必须使用 return 返回在 set 中存储的那个对象属性。

- 如果只写 set 方法，不写get方法，这个属性是一个只写属性，不可读；

- 如果只写 get 方法，不写set方法，这个属性是一个只读属性，不可写入；

- 在严格模式下，只写set ，会打印 undefined；只写get，会报错；

## 类的静态方法

* 静态方法中通常用于定义直接使用类来执行的方法，不需要有类的实例，使用static关键字来定义
* 今天方法中的this指向的是调用者

## 继承

* 在ES6中使用extends关键字进行继承

### super关键字

* 执行super.method(...)来调用一个父类方法
* 执行super(...)来调用一个父类constructor（只能在constructor中）
* 在子（派生）类的构造函数中使用this或者返回默认对象之前，必须先通过super调用父类的构造函数 
* super的使用位置有三个：子类的构造方法、实例方法、静态方法；

### 继承内置类

* 可以继承js自带的类，如Array等

### 类的混入mixin

* JavaScript的类只支持单继承：也就是只能有一个父类

## 多态

* 不同的数据类型进行同一个操作，表现出不同的行为，就是多态的体现

## 字面量的增强

* 属性的简写：Property Shorthand
* 方法的简写：Method Shorthand
* 计算属性名：Computed Property  Names

## 解构Destructuring

* 从数组或者对象中方便获取数据的方法，称之为解构Destructuring

  * 是一种特殊的语法，他使我们可以将数组或是在对象“拆包”至一系列变量中

* 数组的解构

  ```javascript
   // 1数组的解构
  //1.1基本使用
      // var [name1,name2,name3] = names
      // console.log(name1,name2,name3);
  
      // 1.2数组的解构顺序，数组有严格的解构顺序，如果不需要中间的某个值，需要用都逗号隔开
      // var [name1,,name3] = names
      // console.log(name1,name3);
  
      // 1.3解构出数组：当解构出前几个数据后，其余的数据放到一个数组中后
      // var [name1,name2,...newNames] = names
      // console.log(name1,name3,newNames);
       // 1.3解构的默认值：当解构过程中某个数据没有值(即undefined)可以给该数据添加默认值
       var [name1,name2,name3="defula"] = names
      console.log(name1,name2,name3);
  ```

* 对象的解构

  ```javascript
  // 2对象的解构
      // 2.1基本使用
      // var {name,height,age}=obj
      // console.log(name,age,height);
  
      // 2.2解构的顺序：没有顺序，按照key值解构
      // var {name,age,height}=obj
      // console.log(name,age,height);
      // 2.3重命名：解构出来的属性可以进行重命名，重命名之后需要使用新的名称
      // var {name:Wname,age,height}=obj
      // console.log(name,age,height);
      // 2.4默认值：当解构过程中某个属性没有值(即undefined)可以给该属性添加默认值
  	// var {name:Wname,age,height,address = "zg"}=obj
      // console.log(name,age,height,address);
      // 2.5对象剩余属性：当解构出前几个属性后，其余的属性放到一个新对象中
      var {name,...newObj}=obj
      console.log(name,newObj);
  ```

  