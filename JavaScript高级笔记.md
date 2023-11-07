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

