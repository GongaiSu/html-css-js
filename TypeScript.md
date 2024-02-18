# TypeScript的编译环境

* 安装命令 npm install typescript -g
* 查看版本 tsc --version

# 变量的声明

* 声明了类型后TypeScript就会进行类型检测，声明的类型可以称之为类型注解
  * var/let/const 标识符: 数据类型 = 赋值;

# 声明变量的关键字

* 在TypeScript定义变量（标识符）和ES6之后一致，可以使用var、let、const来定义
* 当然，在tslint中并不推荐使用var来声明变量：

# 变量的类型推导（推断）

* 声明一个标识符时, 如果有直接进行赋值, 会根据赋值的类型推导出标识符的类型注解，这个过程称之为类型推导
* let进行类型推导, 推导出来的通用类型
* const进行类型推导, 推导出来的字面量类型

# JavaScript和TypeScript的数据类型

* 我们经常说TypeScript是JavaScript的一个超集
* ![image-20240210212810128](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210212810128.png)

# JavaScript类型

## number类型

* TypeScript和JavaScript一样，不区分整数类型（int）和浮点型（double），统一为 number类型。
* ES6新增了二进制和八进制的表示方法，而TypeScript也是支持二进制、八进制、十六进制的表示：
  * ![image-20240210212942682](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210212942682.png)

## boolean类型

* boolean类型只有两个取值：true和false，非常简单

## string类型

* string类型是字符串类型，可以使用单引号或者双引号表示

## Array类型

* 数组类型的定义也非常简单，有两种方式：
  * Array事实上是一种泛型的写法，我们会在后续中学习它的用法
* ![image-20240210213446743](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210213446743.png)

##  Object类型

![image-20240210213833477](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210213833477.png)

## Symbol类型

![image-20240210213907608](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210213907608.png)

##  null和undefined类型

* 在 JavaScript 中，undefined 和 null 是两个基本数据类型。
* 在TypeScript中，它们各自的类型也是undefined和null，也就意味着它们既是实际的值，也是自己的类型：

![image-20240210213951299](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210213951299.png)

## 函数的参数类型

* 函数是JavaScript非常重要的组成部分，TypeScript允许我们指定函数的参数和返回值的类型。

* 参数的类型注解

  * 声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型：

  ![image-20240210215055182](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210215055182.png)

## 函数的返回值类型

* 我们也可以添加返回值的类型注解，这个注解出现在函数列表的后面：
  * ![image-20240210215124575](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210215124575.png)

* 和变量的类型注解一样，我们通常情况下不需要返回类型注解，因为TypeScript会根据 return 返回值推断函数的返回类型：
  * 某些第三方库处于方便理解，会明确指定返回类型，看个人喜好；

## 匿名函数的参数

* 匿名函数与函数声明会有一些不同：
  * 当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时；
  * 该函数的参数会自动指定类型；
  * ![image-20240210222429077](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210222429077.png)
* 我们并没有指定item的类型，但是item是一个string类型：
  * 这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型；
  * 这个过程称之为上下文类型（contextual typing），因为函数执行的上下

## 对象类型

* 如果我们希望限定一个函数接受的参数是一个对象，这个时候要如何限定呢？
  * 我们可以使用对象类型；
  * ![image-20240210224734300](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210224734300.png)

* 在这里我们使用了一个对象来作为类型：
  * 在对象我们可以添加属性，并且告知TypeScript该属性需要是什么类型；
  * 属性之间可以使用 , 或者 ; 来分割，最后一个分隔符是可选的；
  * 每个属性的类型部分也是可选的，如果不指定，那么就是any类型；

## 可选类型

* 对象类型也可以指定哪些属性是可选的，可以在属性的后面添加一个?：
* ![image-20240210224816408](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210224816408.png)

##   any类型

* 在某些情况下，我们确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用any类型（类似于Dart 语言中的dynamic类型）。
* any类型有点像一种讨巧的TypeScript手段：
  * 我们可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法；
  * 我们给一个any类型的变量赋值任何的值，比如数字、字符串的值；
  * ![image-20240210230307857](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210230307857.png)

* 如果对于某些情况的处理过于繁琐不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候我们可 以使用any：
  * 包括在Vue源码中，也会使用到any来进行某些类型的适配；

## unknown类型

* unknown是TypeScript中比较特殊的一种类型，它用于描述类型不确定的变量。
  * 和any类型有点类似，但是unknown类型的值上做任何事情都是不合法的；

![image-20240210231040682](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210231040682.png)

## void类型

![image-20240210232631601](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240210232631601.png)

## never类型

* never 表示永远不会发生值的类型，比如一个函数
  *  如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗？
  * 不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型；
  * ![image-20240211002739147](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211002739147.png)

## tuple类型

* tuple是元组类型，很多语言中也有这种数据类型，比如Python、Swift等。

  ![image-20240211004101611](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211004101611.png)

* 那么tuple和数组有什么区别呢？

  * 首先，数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组中）

  * 其次，元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型；

    ![image-20240211004210690](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211004210690.png)

### Tuple的应用场景

![image-20240211004256508](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211004256508.png)

# 联合类型

* TypeScript的类型系统允许我们使用多种运算符，从现有类型中构建新类型。

* 我们来使用第一种组合类型的方法：联合类型（Union Type）

  * 联合类型是由两个或者多个其他类型组成的类型；

  * 表示可以是这些类型中的任何一个值；

  * 联合类型中的每一个类型被称之为联合成员（union's members）；

    ![image-20240211004852151](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211004852151.png)

## 使用联合类型

* 传入给一个联合类型的值是非常简单的：只要保证是联合类型中的某一个类型的值即可 

  * 但是我们拿到这个值之后，我们应该如何使用它呢？因为它可能是任何一种类型。
  * 比如我们拿到的值可能是string或者number，我们就不能对其调用string上的一些方法；

* 那么我们怎么处理这样的问题呢？

  * 我们需要使用缩小（narrow）联合（后续我们还会专门讲解缩小相关的功能）；

  * TypeScript可以根据我们缩小的代码结构，推断出更加具体的类型；

    ![image-20240211004955934](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211004955934.png)

# 类型别名

* 在前面，我们通过在类型注解中编写 对象类型 和 联合类型，但是当我们想要多次在其他地方使用时，就要编写多次。

* 比如我们可以给对象类型起一个别名：

  ![image-20240211171857620](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211171857620.png)

# 接口的声明

![image-20240211173120772](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211173120772.png)

* 那么它们有什么区别呢？
  * 类型别名和接口非常相似，在定义对象类型时，大部分时候，你可以任意选择使用。
  * 接口的几乎所有特性都可以在 type 中使用（后续我们还会学习interface的很多特性）；

## interface和type区别

* 我们会发现interface和type都可以用来定义对象类型，那么在开发中定义对象类型时，到底选择哪一个呢？
  * 如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function；
* 如果是定义对象类型，那么他们是有区别的
  * interface 可以重复的对某个接口来定义属性和方法；
  * 而type定义的是别名，别名是不能重复的；

![image-20240211173248005](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211173248005.png)

# 交叉类型

* 交叉类型（Intersection Types）：
  * 交叉类似表示需要满足多个类型的条件；
  * 交叉类型使用 & 符号；
* 来看下面的交叉类型：
  * 表达的含义是number和string要同时满足；
  * 但是有同时满足是一个number又是一个string的值吗？其实是没有的，所以MyType其实是一个never类型；
  * ![image-20240211194234369](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211194234369.png)

## 交叉类型的应用

* 所以，在开发中，我们进行交叉时，通常是对对象类型进行交叉的：

  ![image-20240211194320708](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211194320708.png)

# 类型断言as

* 有时候TypeScript无法获取具体的类型信息，这个我们需要使用类型断言（Type Assertions）。

  * 比如我们通过 document.getElementById，TypeScript只知道该函数会返回 HTMLElement ，但并不知道它具体的类型：

    ![image-20240211201307821](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211201307821.png)

* TypeScript只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换：

  ![image-20240211201408726](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211201408726.png)

  ![image-20240211201440503](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211201440503.png)

# 非空类型断言!

* 当我们编写下面的代码时，在执行ts的编译阶段会报错： 
  * 这是因为传入的message有可能是为undefined的，这个时候是不能执行方法的；
  * ![image-20240211202349863](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211202349863.png)

* 但是，我们确定传入的参数是有值的，这个时候我们可以使用非空类型断言：
  * 非空断言使用的是 ! ，表示可以确定某个标识符是有值的，跳过ts在编译阶段对它的检测；
  * ![image-20240211202417505](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211202417505.png)

# 字面量类型

* 除了前面我们所讲过的类型之外，也可以使用字面量类型（literal types）：

  ![image-20240211204730409](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211204730409.png)

* 那么这样做有什么意义呢？

  * 默认情况下这么做是没有太大的意义的，但是我们可以将多个类型联合在一起；

    ![image-20240211204800947](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211204800947.png)

## 字面量推理

![image-20240211204832095](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211204832095.png)

* 这是因为我们的对象在进行字面量推理的时候，info其实是一个\ {url: string, method: string}，所以我们没办法将一个 string  赋值给一个 字面量 类型。

  ![image-20240211204907873](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211204907873.png)

# 类型缩小

* 什么是类型缩小呢？
  * 类型缩小的英文是 Type Narrowing（也有人翻译成类型收窄）；
  * 我们可以通过类似于 typeof padding === "number" 的判断语句，来改变TypeScript的执行路径；
  * 在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小（ Narrowing ）;
  * 而我们编写的 typeof padding === "number 可以称之为 类型保护（type guards）；

* 常见的类型保护有如下几种：
  *  typeof 
  * 平等缩小（比如===、!==）
  * instanceof
  * in
  * 等等...

## typeof

* 在 TypeScript 中，检查返回的值typeof是一种类型保护：

  * 因为 TypeScript 对如何typeof操作不同的值进行编码。

    ![image-20240211213251339](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211213251339.png)

## 平等缩小

* 我们可以使用Switch或者相等的一些运算符来表达相等性（比如===, !==, ==, and != ）：

  ![image-20240211213319489](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211213319489.png)

## instanceof

* JavaScript 有一个运算符来检查一个值是否是另一个值的“实例”：

  ![image-20240211213352766](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211213352766.png)

## in操作符

* Javascript 有一个运算符，用于确定对象是否具有带名称的属性：in运算符

  * 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true；

  ![image-20240211213437755](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211213437755.png)

# TypeScript函数类型

*  在JavaScript开发中，函数是重要的组成部分，并且函数可以作为一等公民（可以作为参数，也可以作为返回值进行传递）。

* 那么在使用函数的过程中，函数是否也可以有自己的类型呢？

* 我们可以编写函数类型的表达式（Function Type Expressions），来表示函数类型；

  ![image-20240211220246528](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211220246528.png)

## TypeScript函数类型解析

* 在上面的语法中 (num1: number, num2: number) => void，代表的就是一个函数类型： 

  * 接收两个参数的函数：num1和num2，并且都是number类型；
  * 并且这个函数是没有返回值的，所以是void；

* 注意：在某些语言中，可能参数名称num1和num2是可以省略，但是TypeScript是不可以的：

  ![image-20240211220342507](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211220342507.png)

## 调用签名（Call Signatures）

* 在 JavaScript 中，函数除了可以被调用，自己也是可以有属性值的。

  * 然而前面讲到的函数类型表达式并不能支持声明属性；

  * 如果我们想描述一个带有属性的函数，我们可以在一个对象类型中写一个调用签名（call signature）；

    ![image-20240211223107496](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211223107496.png)

* 注意这个语法跟函数类型表达式稍有不同，在参数列表和返回的类型之间用的是 : 而不是 =>。

## 构造签名 （Construct Signatures）

* JavaScript 函数也可以使用 new 操作符调用，当被调用的时候，TypeScript 会认为这是一个构造函数(constructors)，因为 他们会产生一个新对象。

  * 你可以写一个构造签名（ Construct Signatures ），方法是在调用签名前面加一个 new 关键词；

    ![image-20240211233806706](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211233806706.png)

## 参数的可选类型

* 我们可以指定某个参数是可选的

  ![image-20240211234353339](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211234353339.png)

* 这个时候这个参数y依然是有类型的，它是什么类型呢？ number | undefined

  ![image-20240211234414269](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211234414269.png)

* 另外可选类型需要在必传参数的后面：

  ![image-20240211234435694](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211234435694.png)

## 默认参数

* 从ES6开始，JavaScript是支持默认参数的，TypeScript也是支持默认参数的：

  ![image-20240211234509942](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211234509942.png)

* 这个时候y的类型其实是 undefined 和 number 类型的联合。

## 剩余参数

* 从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中。

  ![image-20240211234532645](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211234532645.png)

# 函数的重载（了解）

* 在TypeScript中，如果我们编写了一个add函数，希望可以对字符串和数字类型进行相加，应该如何编写呢？

* 我们可能会这样来编写，但是其实是错误的：

  ![image-20240211235542339](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211235542339.png)

* 那么这个代码应该如何去编写呢？
  * 在TypeScript中，我们可以去编写不同的重载签名（overload signatures）来表示函数可以以不同的方式进行调用；
  * 一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现；

## sum函数的重载

* 比如我们对sum函数进行重构：

  * 在我们调用sum的时候，它会根据我们传入的参数类型来决定执行函数体时，到底执行哪一个函数的重载签名；

    ![image-20240211235635422](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211235635422.png)

* 但是注意，有实现体的函数，是不能直接被调用的：

  ![image-20240211235720883](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240211235720883.png)

## 联合类型和重载

* 我们现在有一个需求：定义一个函数，可以传入字符串或者数组，获取它们的长度。

* 这里有两种实现方案：

  * 方案一：使用联合类型来实现；

  * 方案二：实现函数重载来实现；

    ![image-20240212000137326](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212000137326.png)

* 在开发中我们选择使用哪一种呢？
  
  * 在可能的情况下，尽量选择使用联合类型来实现；

# 可推导的this类型

* 但是我们还是简单掌握一些TypeScript中的this，TypeScript是如何处理this呢？我们先来看两个例子：

  ![image-20240212002530592](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212002530592.png)

* 上面的代码默认情况下是可以正常运行的，也就是TypeScript在编译时，认为我们的this是可以正确去使用的：
  
  * 这是因为在没有指定this的情况，this默认情况下是any类型的；

## this的编译选项

* VSCode在检测我们的TypeScript代码时，默认情况下运行不确定的this按照any类型去使用。 

  * 但是我们可以创建一个tsconfig.json文件，并且在其中告知VSCodethis必须明确执行（不能是隐式的）；

  * 使用tsc --init 来生成tsconfig.json文件

    ![image-20240212002636379](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212002636379.png)

* 在设置了noImplicitThis为true时， TypeScript会根据上下文推导this，但是在不能正确推导时，就会报错，需要我们明确 的指定this。

  ![image-20240212002713834](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212002713834.png)

## 指定this的类型

* 在开启noImplicitThis的情况下，我们必须指定this的类型。

* 如何指定呢？函数的第一个参数类型：

  * 函数的第一个参数我们可以根据该函数之后被调用的情况，用于声明this的类型（名词必须叫this）；

  * 在后续调用函数传入参数时，从第二个参数开始传递的，this参数会在编译后被抹除；

    ![image-20240212002755774](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212002755774.png)

## this相关的内置工具

* Typescript 提供了一些工具类型来辅助进行常见的类型转换，这些类型全局可用。

* ThisParameterType：

  * 用于提取一个函数类型Type的this (opens new window)参数类型； 

  * 如果这个函数类型没有this参数返回unknown；

    ![image-20240212004634493](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212004634493.png)

* OmitThisParameter：

  * 用于移除一个函数类型Type的this参数类型, 并且返回当前的函数类型

    ![image-20240212004715239](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212004715239.png)

### ThisType

* 这个类型不返回一个转换过的类型，它被用作标记一个上下文的this类型。（官方文档）

  * 事实上官方文档的不管是解释，还是案例都没有说明出来ThisType类型的作用；

* 我这里用另外一个例子来给大家进行说明：

  ![image-20240212004945776](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212004945776.png)

# 认识类的使用

* 在早期的JavaScript开发中（ES5）我们需要通过函数和原型链来实现类和继承，从ES6开始，引入了class关键字，可以更加方 便的定义和使用类。
* TypeScript作为JavaScript的超集，也是支持使用class关键字的，并且还可以对类的属性和方法等进行静态类型检测。
* 实际上在JavaScript的开发过程中，我们更加习惯于函数式编程： 
  * 比如React开发中，目前更多使用的函数组件以及结合Hook的开发模式；
  * 比如在Vue3开发中，目前也更加推崇使用 Composition API；
* 但是在封装某些业务的时候，类具有更强大封装性，所以我们也需要掌握它们。
* 类的定义我们通常会使用class关键字：
  * 在面向对象的世界里，任何事物都可以使用类的结构来描述；
  * 类中包含特有的属性和方法；

## 类的定义

* 我们来定义一个Person类：

  * 使用class关键字来定义一个类；

* 我们可以声明类的属性：在类的内部声明类的属性以及对应的类型

  * 如果类型没有声明，那么它们默认是any的；
  * 我们也可以给属性设置初始化值；
  * 在默认的strictPropertyInitialization模式下面我们的属性是必须 初始化的，如果没有初始化，那么编译时就会报错；
    * 如果我们在strictPropertyInitialization模式下确实不希望给属 性初始化，可以使用 name!: string语法；

* 类可以有自己的构造函数constructor，当我们通过new关键字创建 一个实例时，构造函数会被调用；

  * 构造函数不需要返回任何值，默认返回当前创建出来的实例；

* 类中可以有自己的函数，定义的函数称之为方法；

  ![image-20240212151833161](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212151833161.png)

## 类的继承

* 面向对象的其中一大特性就是继承，继承不仅仅可以减少我们的代码量，也是多态的使用前提。

* 我们使用extends关键字来实现继承，子类中使用super来访问父类。

* 我们来看一下Student类继承自Person：

  * Student类可以有自己的属性和方法，并且会继承Person的属性和方法；

  * 在构造函数中，我们可以通过super来调用父类的构造方法，对父类中的属性进行初始化；

    ![image-20240212152208087](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212152208087.png)

## 类的成员修饰符

* 在TypeScript中，类的属性和方法支持三种修饰符： public、private、protected

  * public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的；
  * private 修饰的是仅在同一类中可见、私有的属性或方法；
  * protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法；

* public是默认的修饰符，也是可以直接访问的，我们这里来演示一下protected和private。

  ![image-20240212152517719](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212152517719.png)

## 只读属性readonly

* 如果有一个属性我们不希望外界可以任意的修改，只希望确定值后直接使用，那么可以使用readonly：

  ![image-20240212165822289](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212165822289.png)

## getters/setters

* 在前面一些私有属性我们是不能直接访问的，或者某些属性我们想要监听它的获取(getter)和设置(setter)的过程，这个时候我们 可以使用存取器。

  ![image-20240212170103595](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212170103595.png)

## 参数属性（Parameter Properties）

* TypeScript 提供了特殊的语法，可以把一个构造函数参数转成一个同名同值的类属性。

  * 这些就被称为参数属性（parameter properties）；
  * 你可以通过在构造函数参数前添加一个可见性修饰符 public private protected 或者 readonly 来创建参数属性，最后这些类 属性字段也会得到这些修饰符；

  ![image-20240212170814149](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212170814149.png)

## 抽象类abstract

* 我们知道，继承是多态使用的前提。

  * 所以在定义很多通用的调用接口时, 我们通常会让调用者传入父类，通过多态来实现更加灵活的调用方式。
  * 但是，父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法,，我们可以定义为抽象方法。

* 什么是抽象方法? 在TypeScript中没有具体实现的方法(没有方法体)，就是抽象方法。

  * 抽象方法，必须存在于抽象类中；
  * 抽象类是使用abstract声明的类；

* 抽象类有如下的特点：

  * 抽象类是不能被实例的话（也就是不能通过new创建）
  * 抽象类可以包含抽象方法，也可以包含有实现体的方法；
  * 有抽象方法的类，必须是一个抽象类；
  * 抽象方法必须被子类实现，否则该类必须是一个抽象类；

  ![image-20240212173826154](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212173826154.png)

## 类的类型

* 类本身也是可以作为一种数据类型的：

  ![image-20240212180027111](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jshtml-css-jsimage-20240212180027111.png)

* 类的作用
  * 可以创建类对应的实例对象
  * 类本身可以作为这个实例的类型
  * 类也可以当作有一个构造签名的函数

# 对象类型的属性修饰符（Property Modifiers）

* 对象类型中的每个属性可以说明它的类型、属性是否可选、属性是否只读等信息。

* 可选属性（Optional Properties）

  * 我们可以在属性名后面加一个 ? 标记表示这个属性是可选的

* 只读属性（Readonly Properties）

  * 在 TypeScript 中，属性可以被标记为 readonly，这不会改变任何运行时的行为；
  * 但在类型检查的时候，一个标记为 readonly的属性是不能被写入的。

  ![image-20240212221507959](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212221507959.png)

# 索引签名（Index Signatures）

* 什么是索引签名呢？

  * 有的时候，你不能提前知道一个类型里的所有属性的名字，但是你知道这些值的特征；
  * 这种情况，你就可以用一个索引签名 (index signature) 来描述可能的值的类型；

  ![image-20240212222400220](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212222400220.png)

* 一个索引签名的属性类型必须是 string 或者是 number。

  * 虽然 TypeScript 可以同时支持 string 和 number 类型，但数字索引的返回类型一定要是字符索引返回类型的子类型；（了 解）

# 接口继承

* 接口和类一样是可以进行继承的，也是使用extends关键字：

  * 并且我们会发现，接口是支持多继承的（类不支持多继承）

  ![image-20240212223004948](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212223004948.png)

# 接口的实现

* 接口定义后，也是可以被类实现的：

  * 如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类传入；
  * 这就是面向接口开发；

  ![image-20240212223131001](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212223131001.png)

# 严格的字面量赋值检测

* 对于对象的字面量赋值，在TypeScript中有一个非常有意思的现象：

  ![image-20240212223534958](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212223534958.png)

## 为什么会出现这种情况呢？

![image-20240212223556793](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240212223556793.png)

* 简单对上面的英文进行翻译解释：
  * 每个对象字面量最初都被认为是“新鲜的（fresh）”。
  * 当一个新的对象字面量分配给一个变量或传递给一个非空目标类型的参数时，对象字面量指定目标类型中不存在的属性是错 误的。
  * 当类型断言或对象字面量的类型扩大时，新鲜度会消失。

# 抽象类和接口的区别（了解）

* 抽象类在很大程度上和接口会有点类似：都可以在其中定义一个方法，让子类或实现类来实现对应的方法。
* 那么抽象类和接口有什么区别呢？
  * 抽象类是事物的抽象，抽象类用来捕捉子类的通用特性，接口通常是一些行为的描述；
  * 抽象类通常用于一系列关系紧密的类之间，接口只是用来描述一个类应该具有什么行为；
  * 接口可以被多层实现，而抽象类只能单一继承；
  * 抽象类中可以有实现体，接口中只能有函数的声明；
* 通常我们会这样来描述类和抽象类、接口之间的关系：
  * 抽象类是对事物的抽象，表达的是 is a 的关系。猫是一种动物（动物就可以定义成一个抽象类）
  * 接口是对行为的抽象，表达的是 has a 的关系。猫拥有跑（可以定义一个单独的接口）、爬树（可以定义一个单独的接口） 的行为。

# TypeScript枚举类型

*  枚举类型是为数不多的TypeScript特性有的特性之一：

  * 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型；
  * 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型；

  ![image-20240213002648634](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213002648634.png)

## 枚举类型的值

* 枚举类型默认是有值的，比如上面的枚举，默认值是这样的：

* 当然，我们也可以给枚举其他值：

  * 这个时候会从100进行递增；

* 我们也可以给他们赋值其他的类型：

  ![image-20240213002957270](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213002957270.png)

# 认识泛型

* 软件工程的主要目的是构建不仅仅明确和一致的API，还要让你的代码具有很强的可重用性：

  * 比如我们可以通过函数来封装一些API，通过传入不同的函数参数，让函数帮助我们完成不同的操作；
  * 但是对于参数的类型是否也可以参数化呢？

* 什么是类型的参数化？

  * 我们来提一个需求：封装一个函数，传入一个参数，并且返回这个参数；

* 如果我们是TypeScript的思维方式，要考虑这个参数和返回值的类型需要一致：

  ![image-20240213005031857](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213005031857.png)

* 上面的代码虽然实现了，但是不适用于其他类型，比如string、boolean、Person等类型：

  ![image-20240213005055782](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213005055782.png)

## 泛型实现类型参数化

* 虽然any是可以的，但是定义为any的时候，我们其实已经丢失了类型信息：

  * 比如我们传入的是一个number，那么我们希望返回的可不是any类型，而是number类型；
  * 所以，我们需要在函数中可以捕获到参数的类型是number，并且同时使用它来作为返回值的类型；

* 我们需要在这里使用一种特性的变量 - 类型变量（type variable），它作用于类型，而不是值：

  ![image-20240213005208335](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213005208335.png)

* 这里我们可以使用两种方式来调用它：

  * 方式一：通过 <类型> 的方式将类型传递给函数；

    ![image-20240213005222369](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213005222369.png)

  * 方式二：通过类型推导（type argument inference），自动推到出我们传入变量的类型： ✓ 在这里会推导出它们是 字面量类型的，因为字面量类型对于我们的函数也是适用的

    ![image-20240213005231429](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213005231429.png)

## 泛型的基本补充

* 当然我们也可以传入多个类型：

  ![image-20240213005954589](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213005954589.png)

* 平时在开发中我们可能会看到一些常用的名称：

  * T：Type的缩写，类型
  * K、V：key和value的缩写，键值对
  * E：Element的缩写，元素
  * O：Object的缩写，对象

## 泛型接口

* 在定义接口的时候我们也可以使用泛型：

  ![image-20240213010118361](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213010118361.png)

## 泛型类

* 我们也可以编写一个泛型类

  ![image-20240213010221709](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213010221709.png)

## 泛型约束（Generic Constraints）

* 有时候我们希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中：

  * 比如string和array都是有length的，或者某些对象也是会有length属性的；

  * 那么只要是拥有length的属性都可以作为我们的参数类型，那么应该如何操作呢？

    ![image-20240213011454446](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213011454446.png)

* 这里表示是传入的类型必须有这个属性，也可以有其他属性，但是必须至少有这个成员。

* 在泛型约束中使用类型参数（Using Type Parameters in Generic Constraints）

  * 你可以声明一个类型参数，这个类型参数被其他类型参数约束；

* 举个栗子：我们希望获取一个对象给定属性名的值

  * 我们需要确保我们不会获取 obj 上不存在的属性；
  * 所以我们在两个类型之间建立一个约束；

  ![image-20240213011609432](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213011609432.png)

# 映射类型（Mapped Types）

* 有的时候，一个类型需要基于另外一个类型，但是你又不想拷贝一份，这个时候可以考虑使用映射类型。

  * 大部分内置的工具都是通过映射类型来实现的；
  * 大多数类型体操的题目也是通过映射类型完成的；

* 映射类型建立在索引签名的语法上：

  * 映射类型，就是使用了 PropertyKeys 联合类型的泛型；

  * 其中 PropertyKeys 多是通过 keyof 创建，然后循环遍历键名创建一个类型；

    ![image-20240213153148504](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213153148504.png)

# 映射修饰符（Mapping Modifiers）

* 在使用映射类型时，有两个额外的修饰符可能会用到：

  * 一个是 readonly，用于设置属性只读；
  * 一个是 ? ，用于设置属性可选；

* 你可以通过前缀 - 或者 + 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 + 前缀。

  ![image-20240213153708233](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213153708233.png)

  ![image-20240213153726163](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213153726163.png)

# declare 声明模块

* 我们也可以声明模块，比如lodash模块默认不能使用的情况，可以自己来声明这个模块：

  ![image-20240213203619398](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213203619398.png)

* 声明模块的语法: declare module '模块名' {}。

  * 在声明模块的内部，我们可以通过 export 导出对应库的类、函数等；

# declare 声明文件

* 在某些情况下，我们也可以声明文件：

  * 比如在开发vue的过程中，默认是不识别我们的.vue文件的，那么我们就需要对其进行文件的声明；

  * 比如在开发中我们使用了 jpg 这类图片文件，默认typescript也是不支持的，也需要对其进行声明；

    ![image-20240213203720601](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213203720601.png)

# declare 命名空间

* 比如我们在index.html中直接引入了jQuery：

  * CDN地址： https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js 

* 我们可以进行命名空间的声明：

  ![image-20240213203815185](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213203815185.png)

* 在main.ts中就可以使用了：

  ![image-20240213203827146](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213203827146.png)

# 认识tsconfig.json文件

* 什么是tsconfig.json文件呢？（官方的解释）
  * 当目录中出现了 tsconfig.json 文件，则说明该目录是 TypeScript 项目的根目录；
  * tsconfig.json 文件指定了编译项目所需的根目录下的文件以及编译选项。
* 官方的解释有点“官方”，直接看我的解释。
* tsconfig.json文件有两个作用：
  * 作用一（主要的作用）：让TypeScript Compiler在编译的时候，知道如何去编译TypeScript代码和进行类型检测；
    * 比如是否允许不明确的this选项，是否允许隐式的any类型；
    * 将TypeScript代码编译成什么版本的JavaScript代码；
  * 作用二：让编辑器（比如VSCode）可以按照正确的方式识别TypeScript代码；
    * 对于哪些语法进行提示、类型错误检测等等；
* JavaScript 项目可以使用 jsconfig.json 文件，它的作用与 tsconfig.json 基本相同，只是默认启用了一些 JavaScript 相关的 编译选项。
  * 在之前的Vue项目、React项目中我们也有使用过

# tsconfig.json配置

* tsconfig.json在编译时如何被使用呢? 
  * 在调用 tsc 命令并且没有其它输入文件参数时，编译器将由当前目录开始向父级目录寻找包含 tsconfig 文件的目录。
  * 调用 tsc 命令并且没有其他输入文件参数，可以使用 --project （或者只是 -p）的命令行选项来指定包含了 tsconfig.json 的 目录；
  * 当命令行中指定了输入文件参数， tsconfig.json 文件会被忽略；
* webpack中使用ts-loader进行打包时，也会自动读取tsconfig文件，根据配置编译TypeScript代码。
* tsconfig.json文件包括哪些选项呢？
  * tsconfig.json本身包括的选项非常非常多，我们不需要每一个都记住；
  * 可以查看文档对于每个选项的解释：https://www.typescriptlang.org/tsconfig
  * 当我们开发项目的时候，选择TypeScript模板时，tsconfig文件默认都会帮助我们配置好的； 

# tsconfig.json顶层选项

![image-20240213204139933](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213204139933.png)

# tsconfig.json文件

* tsconfig.json是用于配置TypeScript编译时的配置选项：

  * https://www.typescriptlang.org/tsconfig

* 几个比较常见的：

  ![image-20240213204220620](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213204220620.png)

  ![image-20240213204240366](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240213204240366.png)

# 条件类型（Conditional Types）

* 很多时候，日常开发中我们需要基于输入的值来决定输出的值，同样我们也需要基于输入的值的类型来决定输出的值的类型。

* 条件类型（Conditional types）就是用来帮助我们描述输入类型和输出类型之间的关系。

  * 条件类型的写法有点类似于 JavaScript 中的条件表达式（condition ? trueExpression : falseExpression ）： 条件类型（Conditional Types） 
  * SomeType extends OtherType ? TrueType : FalseType;

  ![image-20240214192130464](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240214192130464.png)

# 在条件类型中推断（inter）

* 在条件类型中推断（Inferring Within Conditional Types）

  * 条件类型提供了 infer 关键词，可以从正在比较的类型中推断类型，然后在 true 分支里引用该推断结果；

* 比如我们现在有一个数组类型，想要获取到一个函数的参数类型和返回值类型：

  ![image-20240214192629026](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240214192629026.png)

# 分发条件类型（Distributive Conditional Types）

* ◼ 当在泛型中使用条件类型的时候，如果传入一个联合类型，就会变成 分发的（distributive）

  ![image-20240214192659928](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240214192659928.png)

* 如果我们在 ToArray 传入一个联合类型，这个条件类型会被应用到联合类型的每个成员：
  * 当传入string | number时，会遍历联合类型中的每一个成员；
  * 相当于ToArray | ToArray；
  * 所以最后的结果是：string[] | number[]；

# 内置工具

## `Partial<Type>`

* 用于构造一个Type下面的所有属性都设置为可选的类型

  ![image-20240214193231069](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240214193231069.png)

## `Required<Type>`