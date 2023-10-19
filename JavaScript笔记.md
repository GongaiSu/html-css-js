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
* toString(base)，将数字转换为字符串，并且按照base进制进行转换
  * base的范围可以从2到36，默认情况下是10
  * 注意：如果是直接对一个数字操作，需要使用..运算符

* toFixed(digits)，格式化一个数字，保留digits位的小数
  * digits的范围是0到20（包含）之间

* parseInt：将字符串解析成整数
* parstFloat:将字符串解析成浮点数

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
  
* 获取子字符串

  * | 方法                 | 选择方式                          | 负值参数        |
    | -------------------- | --------------------------------- | --------------- |
    | slice(start,end)     | 从start到end（不含end）           | 允许            |
    | substring(start,end) | 从start到end（不含end）           | 负值表示0       |
    | substr(start,length) | 从start开始获取长为length的字符串 | 允许start为负值 |


* 拼接字符串

  * concat()

* 删除首尾空格

  * trim()

* 字符串分割

  * splic

    * separator：以什么字符串进行分割，也可以是一个正则表达式
    * limit：限制返回的片段的数量


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

## JavaScript中的类和对象

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

### 内置对象

#### Math对象

* 拥有一些数学常见的属性和数学函数方法
* 常见的方法：
  * Math.floor()：向下舍入取整
  * Math.ceil()：向上舍入取整
  * Math.round()：四舍五入取整
  * Math.random()：生成0~1的随机数（包含0，不包含1）
  * Math.pow(x,y)：返回x的y次幂

### 数组Array对象

#### 添加、删除方法

* 在数组的尾部添加或删除元素
  * push：在未端添加元素
  * pop：从末端去除一个元素
* 在数组的首端添加或删除元素
  * unshift：在首端添加元素，整个其他数组元素向后移动
  * shift：去除队列中首端的一个元素，整个数组元素向前移动
* push/pop方法运行的比较快，而shift/unshift比较慢

#### splice方法

* 可以进行数组的添加，删除和替换元素

* 结构

  * ![image-20231007162736200](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20231007162736200.png)

  * 从start位置开始，处理数组中的元素
  * deleteCount：要删除元素的个数，如果是0或者负数表示不删除
  * item1，item2，...：在添加元素时，需要添加的元素
  * 这个方法修改的是原数组

####  concat方法

* 将多个数组进行拼接

#### spice方法

* 用于对数组进行截取（类似于字符串的slice方法）

#### join方法

*  将一个数组的所有元素连接成一个字符串并返回这个字符串

### Date对象

#### 创建方式

* 使用Date构造函数
*  传入参数：时间字符串
* 传入具体的年月日时分秒毫秒
* 传入一个Unix时间戳
* ![image-20231007205427301](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20231007205427301.png)

#### dateString的时间的表示方式

![image-20231007205617356](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20231007205617356.png)

## DOM

* 相当于是JavaScript和HTML、CSS之间的桥梁
  * 通过浏览器提供给我们的DOM API，我们可以对元素以及其中的内容做任何事情；

### 类型之间的继承关系

![image-20231010150435518](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231010150435518.png)

### document对象

* 对于最顶层html、head、body元素，我们可以之间在document对象中获取
  * html元素：<html>:document.documentElement
  * body元素：<body>:document.body
  * head元素：<head>:document.head
  * 文档声明：<!DOCtype html>:document.doctype

#### 导航

* 获取到一个节点后，更具这个(节点/元素)获取其他(节点/元素)就叫做导航

#### 节点之间的导航

* 获取一个节点后，可以根据这个节点去获取其他节点，称之为节点之间的导航

##### 节点之间存在的关系

* 父节点：parentNode
* 前兄弟节点：previousSibling
* 后兄弟节点：nextSibling

* 字节点：childNodes
* 第一个子节点：firstChild
* 第二个子节点：lastChild

![image-20231010154443015](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231010154443015.png)

#### 元素之间的导航

* 获取一个元素后，可以根据这个元素去获取其他元素，称之为元素之间的导航

##### 节点之间存在的关系

* 父节点：parentElement
* 前兄弟节点：previousElementSibling
* 后兄弟节点：nextElementSibling

* 字节点：children
* 第一个子节点：firstElementChild
* 第二个子节点：lastElementChild

![image-20231010155451198](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231010155451198.png)

#### 获取元素的方法

![image-20231010170412783](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231010170412783.png)

#### 节点的属性

##### nodeType

* 获取节点属性的方法，返回一个数值类型 

* 常见值
* ![image-20231010224034582](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20231010224034582.png)

##### nodeName和tagName

* nodeName：获取node节点的名字

* tagName：获取元素的标签名字

* 区别
  * tagName属性适用于Element节点
  * nodeName是为任意Node定义的：
    * 对于元素，它的意义与tagName相同，所以使用哪一个都是可以的
    * 对于其他节点类型（text，comment等），它拥有一个对应节点类型的字符串

##### innerHTML和textContent

* innerHTML
  * 将元素中的HTML获取为字符串形式；
  * 设置元素中的内容
* outerHTML
  * 包含了元素的完整HTML
  * innerHTML加上元素本身
* textContent
  * 仅仅获取元素中的文本内容
* innerHTML和textContent写入时的区别
  * 使用innerHTML，我们将其“作为HTML”插入，带有所有HTML标签
  * 使用textContent，我们将其“作为文本”插入，所有的符号均按字面意义处理

#### 元素Element

##### Attribute

* hasAttribute(name)：检查特性是否存在
* getAttribute(name)：获取这个特征值
* setAttribute(name,value)：设置这个特征值
* removeAttribute(name)：移除这个特征值
* attribute：attr对象的集合，具有name、value属性；
* attribute具备的特性
  * 名字是大小写不敏感
  * 值总是字符串类型

##### property

* 对于标准的attribute，会在DOM对象上创建与其对应的property属性
* 在大多数情况下，它们是相互作用的
  * 改变property，通过attribute获取的值，会随着改变；
  * 通过attribute操作修改，property的值也会随着改变
    * 但是input的value修改只能通过attribute的方法

##### class

* className：动态设置class，会将原有的class属性覆盖

* classList

  * classList.add(class)：添加一个类

  * classList.remove(class)：移除一个类

  * classList.toggle(class)：如果类不存在就添加，存在就移除

    classList.contains(class)：检查给定类，返回true/false

##### style

* 需要单独修改一个CSS属性，可以通过style来操作
  * 对于多词属性，使用驼峰式
* 将值设置为空字符串，会使用CSS默认样式
* 多个样式的写法，使用cssText属性
  * 会覆盖style原有值
* 读取样式
  * 对于内敛样式，可以通过style.*方式读取
  * 对于style、css文件中的样式需要通过getComputedStyle的全局函数来进行读取
  * ![image-20231011142522723](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231011142522723.png)

##### 创建元素

* document.createElement(tag)：创建一个tag类型的元素

##### 插入元素

* node.append(...nodes or strings)：在node末尾添加节点或者字符串
* node.perpend(...nodes or strings)：在node开头添加节点或者字符串
* node.before(...nodes or strings)：在node前面添加节点或者字符串
* node.after(...nodes or strings)：在node后面添加节点或者字符串
* node.replaceWith(...nodes or strings)：将node替换为给定的节点或者字符串

![image-20231011160322189](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231011160322189.png)

##### 移除元素

* 调用元素本身的remove方法，它会将它的后代元素一起移除

##### 克隆元素

* 可以使用cloneNode方法进行克隆
  * 可以传入一个Boolean类型的值，来决定是否深度克隆
  * 深度克隆：将其本身及其后代一起克隆

##### 元素的大小、滚动 

![image-20231011222257879](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20231011222257879.png)

* clientWidth：contentWhith+padding(不包含滚动条)
* clientHeight：contentHeight+padding(不包含滚动条)

* clientTop：border-top的宽度
* clientLeft：border-left的宽度
* offsetWidth：元素完整的宽度
* offsetHeigth：元素完整的高度
* offsetTop：距离父元素的x
* offsetLeft：距离父元素的y
* scrollHeight：可滚动的高度
* scrollTop：滚动部分的高度 

##### window的大小、滚动

* innerWidth、innerHeight：获取window窗口的宽度和高度（包括滚动条）
* outerWidth、outerHeight：获取window窗口的整个宽度和高度（包括调试工具、工具栏）
* documentElement.clientHeigth、documentElement.clientWidth：获取html的宽度和高度（不包含滚动条）

###### window的滚动位置

* scrollX：X轴滚动的位置（别名pageXOffset）
* scrollY：Y轴滚动的位置（别名pageYOffset)

###### 滚动方法

* scrollBy(x,y):将页面滚动至相当于当前位置的（x,y)位置；
* scrollTo(pageX,pageY)将页面滚动至绝对坐标；

### JavaScript的事件处理

#### 事件处理的三种方案

* 在script中直接监听
* DOM属性，通过元素的on来进行监听事件
* 通过EventTarget中的addEventListener来监听

#### 常见的事件

![image-20231016105447375](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231016105447375.png)

#### 事件冒泡和事件捕获

* 默认情况下事件时从最内层的span向外依次传递的顺序，这个顺序称之为事件冒泡（Event Bubble）

* 另一种监听事件流的方法是从外层到内层（body->span），这种称为事件捕获（Event Captrue）

* 如何改为事件捕获呢？

  * 在addEventListener方法中第3个属性填写true

  ![image-20231016111347560](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231016111347560.png)

![image-20231016111444371](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231016111444371.png)

#### 事件对象

* event：浏览器会自动回调，在方法中自动填写，可以直接使用

  ```javas
  function(event){
  console.log(event)
  }
  ```

##### 常见的属性

* type：事件的类型
* target：当前事件发生的元素
* currentTarget：当前处理事件的元素
* eventPhase：事件所处的阶段
* offsetX、offsetY：事件发生在元素内的位置
* clinetX、clientY：事件发生在客户端内的位置
* pageX、pageY：事件发生在客户端相对于document的位置
* screenX、screenY：事件发生相对于屏幕的位置

##### 常见的方法

* preventDefault：取数事件的默认行为；
* stopPropagation：阻止事件的进一步传递（冒泡或者捕获都可以阻止）

#### EventTarget类

##### 常见的方法

* addEventListener：注册某个事件类型以及事件处理函数

* removeEventListener：移除某哥事件类型以及事件函数
* dispatchEvent：派发某个事件类型到EventTarget上 

#### 事件委托

* 将事件委托给父级或其他代理

#### 鼠标事件

##### 常见的鼠标事件

| 属性          | 描述                                         |
| ------------- | -------------------------------------------- |
| onclick       | 当用户点击某个对象时调用的事件句柄           |
| oncontextmenu | 当用户点击鼠标右键打开上下文菜单时触发       |
| ondblclick    | 当用户双击某个对象时调用的事件句柄           |
| onmousedown   | 鼠标按钮被按下                               |
| onmouseup     | 鼠标按钮被松开                               |
| onmouseover   | 鼠标移到某元素之上。（支持冒泡）             |
| onmouseout    | 鼠标从某元素移开。（支持冒泡）               |
| onmouseenter  | 当鼠标指针移动到元素上时触发。（不支持冒泡） |
| onmouseleave  | 当鼠标指针移出元素时触发。（不支持冒泡）     |
| onmousemove   | 鼠标被移动                                   |

##### mouseover和mouseenter

* mouseenter和mouseleave
  * 不支持冒泡
  * 进入子元素依然属于该元素，没人任何反应
  * 不可以用在事件委托上面
* mouseover和mouseout
  * 支持冒泡
  * 进入元素的子元素时
    * 先调用父元素的mouseout
    * 在调用子元素的mouseover
    * 因为支持冒泡，所以会将mouseover传递到父元素中
  * 可以用在事件委托上面

![image-20231017163656673](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20231017163656673.png)

#### 键盘事件

##### 常见的键盘事件

| 属性       | 描述               |
| ---------- | ------------------ |
| onkeydown  | 某个键盘按键被按下 |
| onkeypress | 某个键盘按键被按下 |
| onkeyup    | 某个键盘按键被松开 |

##### 事件的执行顺序

* onkeydown、onkeypress、onkeyup
  * down事件先发生
  * press发现在文本输入
  * up发生在本都输入完成

##### 区分按键

* code：按键代码，“KeyA”，“ArrowLeft”等，特定于键盘上按键的物理位置
* key：字符（“A”,"a"等），对于非字符串的按键，通常具有于code相同的值

#### 表单事件

##### 常见的事件

| 属性     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| onchange | 该事件在表单元素的内容改变时触发（<input>,<keygen>,<select>和<textarea> |
| oninput  | 元素获取用户输入时触发                                       |
| onfocus  | 元素获取焦点时触发                                           |
| onblur   | 元素失去焦点时触发                                           |
| onreset  | 表单重置时触发                                               |
| onsubmit | 表单提交时触发                                               |

#### 文档加载事件

* DOMContentLoaded:浏览器已经完全加载HTML，并构建了DOM树，但是像<img>和样式表之类的外部资源可能尚未加载完成。