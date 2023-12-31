#  this的指向

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

## let/const基本使用

* ES6新增的两个关键字

### let关键字

* 从直观的角度再说，let和var是没有太大的区别的，都是用于声明一个变量

### const关键字

* 保存的数据一旦被赋值，就不能被修改
* 如果赋值的是应用类型，那么可以通过应用找到对应的对象，修改对象的内容

### let-const的注意事项

#### 注意事项一

* let和const不允许重复声明变量

#### 注意事项二

* let和const作用域没有被提升

##### 暂时性死区(TDZ)

* 在let、const定义的标识符真正被执行到声明的代码之前，是不能被访问的
  * 从块作用域的顶部一直到变量声明完成之前，这个变量处在暂时性死区

#### 注意事项三

* let和const是不会添加到window

### 块级作用域

* 从ES6开始，使用let、const、function、class声明的标识符是具备块级作用域的限制的；
* 虽然函数拥有块级作用域，但是外面依然是可以访问的
  * 因为引擎会对函数的什么进行特殊的处理，允许像var一样在外界直接访问

### 使用的选择

* 优先推荐使用const，保证数据的安全性不会被随意的修改
* 当明确知道一个变量后续会需要重新赋值时，这个时候使用let

## 模板字符串

* 使用``符号来编写字符串，称之为模板字符串
* 在模板字符串中，可以用过${expression}来嵌入动态的内容

* 可以在调用函数的时候使用标签模板字符串

  * 模板字符串被拆分了

  * 第一个元素是数组，是被模板字符串拆分的字符串组合

  * 后面的元素是一个个模板字符串传入的内容

  * ```javascript
     function foo(...args){
          console.log("ssss",args);
        }
      
        foo`我是一个模板字符串，${name},这是一个age属性${age}?`
    ```

## 函数增强

### 默认参数

* 在调用函数时，参数上可以添加默认参数

* ```javascript
  function foo(args1="默认参数"){
      console.log(args1);
    }
      foo()
  ```

#### 注意事项

* 有默认参数的形参尽量写到后面
* 有默认参数的形参，是不会计算在length之内（并且后面所有的参数都不会计算在length之内）
* 剩余参数放在默认参数之后

### 箭头函数

* 箭头函数没有显示原型prototype的，所以不能作为构造函数，使用new来创建对象
* 箭头函数也不绑定this、arguments、super参数

### 展开语法（Spread syntax）

* ```javascript
  //语法
  ...要展开的东西（和剩余参数很想，注意）
  ```

* 必须是可迭代对象：数组/string/arguments

* 展开运算符其实是浅拷贝

#### 使用场景

* 在函数调用时使用
* 在数组构造时使用
* 在构建对象字面量时，可以使用展开运算符。

### 数值的表示

* 十进制：100
* 二进制：0b100
* 八进制：0o100
* 十六进制：0x100
* 数字过长时，可以使用_作为连接符

### Symbol

![image-20231205142148873](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231205142148873.png)

#### 获取对应的值

* getOwnpropertySymbols(对象名)：来获取对象中所有的symbol属性

#### 添加描述

* 在创建Symbol时可以传一个描述

* 使用description来获取属性

* ```javascript
  const s1 = Symbol("ccc")
  s1.description
  ```

#### 相同的Symbol

* 使用Symbol.for(key)方法，传入相同的key时所创建的Symbol值是相同的

* 使用Symbol.keyFor()方法可以获取根据Symbol.for(key)方法创建的key值

* ```javascript
  const s2 = Symbol.for("bbb")
  const s3 = Symbol.for("bbb")
  console.log(s2===s3)//true
  console.log(Symbol.keyFor(s2))
  ```

## Set的基本使用

* 是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是元素不能重复

### 属性

* size：返回Set中元素的个数

### 常见的方法

* add(value):添加某个元素，返回Set对象本身
* delete(value):从set中删除和这个值相同的元素，返回boolean类型；
* has(value):判断set中是否存在某个元素，返回boolean类型
* clear():清空set中的所有元素，没有返回值
* forEach(callback,[,thisArg]):通过forEach遍历set
* 支持for of进行遍历

## WeakSet的基本使用

### 和set的区别

* 区别一：WeakSet只能保存对象类型
* 区别二：对对象的引用都是弱应用

### 常见方法

* add(value):添加某个元素，返回WeakSet对象本身
* delete(value):从WeakSet中删除和这个值相同的元素，返回boolean类型；
* has(value):判断WeakSet中是否存在某个元素，返回boolean类型

## Map的基本使用

* 是一个新增的数据结构，用于存储映射关系

### 属性

* size：返回Map中元素的个数

### 常见的方法

* set(key,value):在Map中添加key，value，并且返回整个Map对象
* get(key):根据key获取Map中的value
* has(key):判断是否包括一个key，返回Boolean类型
* delete(key):根据key删除一个键值对，返回Boolean类型
* clear():清空所有元素
* forEach(callback,[,thisArg]):通过forEach遍历Map
* 支持for of进行遍历

## WeakMap的基本使用

### 和Map的区别

* 区别一：WeakMap的Key必须是对象属性
* 区别二：WeakMap的key对对象的引用时弱引用

### 常见方法

* set(key,value):在Map中添加key，value，并且返回整个Map对象
* get(key):根据key获取Map中的value
* has(key):判断是否包括一个key，返回Boolean类型
* delete(key):根据key删除一个键值对，返回Boolean类型

# ES7 

## Array Includes

* 用来判断一个数组中是否包含一个指定的元素，返回值为Boolean类型

## 指数运算符

* 使用**运算符，可以对数字来计算乘方

# ES8

## Object values

* 通过Object.values来获取所有的value值

## Object entries

* 通过Object.entries可以获取一个数组，数组中会存放可枚举属性的键值对数组
  * 可以针对对象、数组、字符串进行操作

## padStart和padEnd

* 分别对字符串的收尾进行填充的

## Trailing Commas

* 允许在函数定义和调用时多加一个逗号

# ES10

## flat flatMap

* flat():会按照一个指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
* flatMap():首先使用映射函数映射每个元素，然后将结构压缩成一个新数组
  * 注意一：flatMap时先进行map操作，再做flat的操作
  * 注意二：flatMap中的flat相当于深度为1；

## Object fromEntries

* 可以将Object.entries转成的entries对象转回为元对象

## trimStart、trimEnd

* 去除一个字符串首尾空格可以使用trim
* 去除一个字符串首部空格可以使用trimStart
* 去除一个字符串尾部空格可以使用trimEnd

# ES11

## BigInt

* 当数字大于Number.MAX_SAFE_INTEGER时，可能无法展示，需要在数字后面加上n表示为BigInt类型

## Nullish Coalescing Operator

* 空值合并操作符 ??

## Optional Chaining

* 让代码中进行null和undefined判断时更加清晰和简洁
* 语法是`?.`

## for...in标准化

* 可以用于遍历对象的key

# ES12

## FinalizationRegistry

* 可以让对象被垃圾回收时请求一个回调
  * 通过调用register方法，注册任何你想要清理回调的对象，传入该对象和所含的值；

## WeakRefs

* 弱应用
* 使用
  * 需要对弱引用的对象使用deref()进行结构

## replaceAll

* 替换所有的字符串

# ES13

## method.at()

## Object.hasOwn(obj,propKey)

* 判断一个对象中是否有某个自己的属性

# Proxy

## 监听对象操作

![image-20231207163719865](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231207163719865.png)

## Proxy的基本使用

* 在ES6中，新增了一个Proxy类，这个类从名字就可以看出来，时用于帮助创建一个代理的；
  * 监听一个对象的相关操作，可以先创建一个代理对象
  * 之后对该对象的所有操作，都用过代理对象来完成，代理对象可以监听想要对源对象进行哪些操作
* 实现过程
  * 需要new Proxy对象，传入需要侦听的对象以及一个处理对象，可以称之为handler
    * const p = new Proxy(traget,handler)
  * 后续操作的都是直接对Proxy的操作，而不是原有的对象

## Proxy的set和get捕获器

* 想要监听某些具体的操作，那么需要再handler中添加对象的捕捉器
* set和get分别对应的是函数类型
  * set函数有四个参数
    * target：目标对象（侦听的对象）
    * property：将被设置的属性key；
    * value：新属性值
    * receiver：调用的代理对象
  * get函数有三个参数
    * target：目标对象（侦听的对象）
    * property：被捕获的属性key
    * receiver：调用的代理对象
* 其他的捕获器
  * ![image-20231211163900598](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231211163900598.png)

## Proxy的construct和apply

![image-20231211171244946](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231211171244946.png)

# Reflect

## Reflect的作用

* 是ES6新增的一个API，是一个对象，字面的意思是反射

## 常见的方法

* ![image-20231212110859784](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231212110859784.png)

# Promise

![image-20231212170755054](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231212170755054.png)

## 代码结构

![image-20231212172602628](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231212172602628.png)

## Executor

![](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jshtml-css-jsimage-20231212173446137.png)

## resolve不同的值

![image-20231212173611911](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231212173611911.png)

## then的返回值

![image-20231214164951016](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231214164951016.png)

## 类方法

### all

![image-20231213171647940](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231213171647940.png)

### allSettled

![](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jshtml-css-jsimage-20231213172149165.png)

### race

* 多个promise中获取最快返回值的那个promise

### any

![image-20231213173547961](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231213173547961.png)

# 迭代器

## 什么是迭代器

![image-20231214170423730](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231214170423730.png)

## 可迭代对象

![image-20231214173246919](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231214173246919.png)

## 原生可迭代对象

* String，Array，Set，Map，arguments对象，NodeList集合

![image-20231214174353771](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231214174353771.png)

## 迭代器的中断

![image-20231218103116106](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218103116106.png)

# 生成器

## 什么是生成器

* 是ES6新增的一种函数控制，使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等

## 生成器函数

* 和普通函数的区别

  ![image-20231218105000579](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218105000579.png)

## 生成器函数传递参数

![image-20231218112204757](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218112204757.png)

## 生成器函数提前结束

### return函数

* 传递return函数，生成器函数就会结束，之后调用next不会继续生成值

## 生成器函数抛出异常

### throw函数

* ![image-20231218113441143](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218113441143.png)

## 生成器替代迭代器

![image-20231218143249678](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218143249678.png)

# await、async

## 异步函数

* 再普通函数前加一个async关键字就变成了异步函数

## 异步函数的返回值

* 异步函数的返回值是返回一个Promise

## 异步函数的执行流程

![image-20231218161715047](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218161715047.png)

## await

* 必须再异步函数中使用，等待一个promise函数的resolve的返回值，继续执行后面的代码

![image-20231218170857989](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218170857989.png)

# 进程和线程

![image-20231218171411794](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218171411794.png)

![image-20231218171425748](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218171425748.png)

## JavaScript的单线程

![image-20231218174359561](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218174359561.png)

## 浏览器的事件循环

![image-20231218174742457](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231218174742457.png)

# 宏任务和微任务

![image-20231219101728489](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219101728489.png)

* 先执行微任务队列中的任务，在执行宏任务队列中的任务

![image-20231219102302002](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219102302002.png)

# 错误处理方案

![image-20231219111139940](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219111139940.png)

## throw关键字

![image-20231219112602231](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219112602231.png)

## Error类型

![image-20231219112711936](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219112711936.png)

## 异常的捕获

![image-20231219113304638](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219113304638.png)

# Storage

## 认识Storage

![image-20231219140853469](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219140853469.png)

## LocalStorage和sessionStorage的区别

![image-20231219142604604](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219142604604.png)

## Storage常见的属性和方法

### 常见的属性

* length：只读属性，返回一个整数，表示存储再Storage对象中的数据项数量

### 常见的方法

* ![image-20231219143326457](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219143326457.png)

# 正则表达式

## 什么是正则表达式

![image-20231219150912412](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219150912412.png)

## 正则表达式的使用方法

![image-20231219152239033](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219152239033.png)

## 规则

### 修饰符flag

![image-20231219163625991](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219163625991.png)

### 字符类

![image-20231219163412298](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219163412298.png)

### 反向类

![image-20231219163435611](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219163435611.png)

### 锚点

![image-20231219165421360](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219165421360.png)

### 转移字符

![image-20231219170058736](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219170058736.png)

### 集合和范围

![image-20231219172940281](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231219172940281.png)

* 排查范围：除了普通的范围匹配，还有类似`[^...]`的“排除”范围匹配

### 量词

![image-20231220165538919](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231220165538919.png)

### 贪婪(Greedy)和惰性(lazy)模式

![image-20231220171155581](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231220171155581.png)

### 捕获组

![image-20231220171638424](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231220171638424.png)

![image-20231220171953162](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231220171953162.png)

![image-20231220172020984](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231220172020984.png)

# 防抖和节流

## 防抖

### 认识防抖函数

![image-20231225101906011](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231225101906011.png)

## 节流

### 认识节流函数

![image-20231227161509746](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231227161509746.png)

# 深拷贝

![image-20231228162650021](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231228162650021.png)

# 网络请求

## 前后端分离

![image-20240102103846459](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102103846459.png)

![image-20240102104010531](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102104010531.png)

## 服务端渲染

![image-20240102103923519](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102103923519.png)

## HTTP的组成

![image-20240102104929640](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102104929640.png)

## HTTP的版本

![image-20240102105735893](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102105735893.png)

## HTTP的请求方式

**![image-20240102110116734](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102110116734.png)

## HTTP Request Header

![image-20240102111225058](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102111225058.png)

![image-20240102111910914](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102111910914.png)

## 常见的响应状态码

![image-20240102112409117](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102112409117.png)

具体的内容：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status

## AJAX发送请求

![image-20240102150129402](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102150129402.png)

## XMLHttpRequest的state状态

![image-20240102152056460](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102152056460.png)

![image-20240102152457265](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102152457265.png)

## 其他事件监听

![image-20240102154407450](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102154407450.png)

## 响应的类型和响应的数据

![image-20240102155221317](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102155221317.png)

## GET和POST的传参

![image-20240102164040698](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102164040698.png)

## Fetch

![image-20240102172534383](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102172534383.png)

### 响应

![image-20240102173221140](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240102173221140.png)