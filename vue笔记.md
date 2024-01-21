# MVVM模型

* MVC是Model – View –Controller的简称，是在前期被使用非常框架的架构模式，比如iOS、前端；
* MVVM是Model-View-ViewModel的简称，是目前非常流行的架构模式；

![image-20240111154457382](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240111154457382.png)

# data属性

## 描述

* 传入一个函数，并且改函数需要返回一个对象：
  * 在Vue2.x的时候，也可以传一个对象
  * 在Vue3.x的时候，必须传一个函数
* data中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理；
  * 所以我们在template或者app中通过 {{counter}} 访问counter，可以从对象中获取到数据；
  *  所以我们修改counter的值时，app中的 {{counter}}也会发生改变；

# methods属性

## 描述

* methods熟悉是一个对象，通常我们会在这个对象中定义很多方法
  * 这些方法可以被绑定到 模板中；
  *  在该方法中，我们可以使用this关键字来直接访问到data中返回的对象的属性；

## methods中this绑定

* 不能使用箭头函数
  * 使用箭头函数this指向问题会发生变化

* ![image-20240111162004015](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240111162004015.png)

# Mustache双大括号语法

* 如果我们希望把数据显示到模板（template）中，使用最多的语法是 “Mustache”语法 (双大括号) 的文本插值。 
  * 并且我们前端提到过，data返回的对象是有添加到Vue的响应式系统中； 
  * 当data中的数据发生改变时，对应的内容也会发生更新。 
  * 当然，Mustache中不仅仅可以是data中的属性，也可以是一个JavaScript的表达式

# v-once指令

* 用于指定元素或者组件只渲染一次
  * 当数据发生变化时，元素或者组件以及其所有的子元素将视为静态内容并且跳过；
  *  该指令可以用于性能优化；

# v-text指令

* 用于更新元素的textContent

# v-html指令

* 如果展示的内容是html，那么vue并不会对其进行特殊的解析
* 如果需要内容可以被解析出来，那么可以使用v-html进行展示

# v-pre指令

* 用于跳过元素和它的子元素的编译过程，显示原始的mustache标签

# v-cloak

* 这个指令保持在原始上直到关联组件实例结束编译

  * 需要配置css属性使用：可以隐藏未编译的mustache标签直到组件实例完毕

    ```css
    <style>
    [v-cloak]:{
        display:none
    }
    </style>
    ```

    

# v-memo

* 当一个模板中有多个元素或组件时，当这些元素和组件的重新渲染依赖于某个/些元素或组件才进行渲染，可以使用v-memo进行控制。

* ```html
  <!--只有valueA, valueB其中一个发生了变化，div中的数据才会刷新-->
  <div v-memo="[valueA, valueB]">
    ...
  </div>
  ```


# v-bind

* 

# v-on

## 基本使用

```html

  <div id="app">
    <h2>{{counter}}</h2>
      <button v-on:mousemove="mouseMove" v-on:click="onClick">+1</button>
      <!--语法糖写法-->
    <button @mousemove="mouseMove" @click="onClick">+1</button>
  </div>
  <script src="../lib/vue.js"></script>
  <script>
    const app = Vue.createApp({
      data(){
        return{
            counter:1
        }
      },
      methods: {
          //鼠标事件
        mouseMove(){
            this.counter++
        },
          //点击事件
        onClick(){
            this.counter--
        }
      },
    })

    app.mount('#app')
```

## 参数传递

### 情况一

* 如果该方法不需要额外参数，那么方法后的()可以不添加。
  * 但是注意：如果方法本身中有一个参数，那么会默认将原生事件event参数传递进去

### 情况二

* 如果需要同时传入某个参数，同时需要event时，可以通过$event传入事件。

## 修饰符

* p.stop - 调用 event.stopPropagation()。
* p.prevent - 调用 event.preventDefault()。
* p.capture - 添加事件侦听器时使用 capture 模式。
* p.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
* p.{keyAlias} - 仅当事件是从特定键触发时才触发回调。
* p.once - 只触发一次回调。
* p.left - 只当点击鼠标左键时触发。
* p.right - 只当点击鼠标右键时触发。
* p.middle - 只当点击鼠标中键时触发。
* p.passive - { passive: true } 模式添加侦听器

# 条件渲染

## v-if、v-else、v-else-if

* 这些内容只有在条件为true时，才会被渲染出来；
* 这三个指令与JavaScript的条件语句if、else、else if类似；

### 渲染原理

* v-if是惰性的；
* 当条件为false时，其判断的内容完全不会被渲染或者会被销毁掉；
* 当条件为true时，才会真正渲染条件块中的内容；

## template

* 因为v-if是一个指令，所以必须将其添加到一个元素上：
  * 但是如果我们希望切换的是多个元素呢？
  * 此时我们渲染div，但是我们并不希望div这种元素被渲染
  * 这个时候，我们可以选择使用template；

* template元素可以当做不可见的包裹元素，并且在v-if上使用，但是最终template不会被渲染出来：
  * 有点类似于小程序中的block

## v-show

* v-show和v-if的用法看起来是一致的，也是根据一个条件决定是否显示元素或者组件

## v-if和v-show的区别

* 法上的区别：
  * v-show是不支持template；
  *  v-show不可以和v-else一起使用； 
*  本质的区别：
  * v-show元素无论是否需要显示到浏览器上，它的DOM实际都是有存在的，只是通过CSS的display属性来进行切换；
  * v-if当条件为false时，其对应的原生压根不会被渲染到DOM中；
* 开发中如何进行选择呢？
  * 如果我们的原生需要在显示和隐藏之间频繁的切换，那么使用v-show；
  * 如果不会频繁的发生切换，那么使用v-if；

# v-for

## 基本使用

* v-for的基本格式是 "item in 数组"：
  * 数组通常是来自data或者prop，也可以是其他方式；
  * item是我们给每项元素起的一个别名，这个别名可以自定来定义；
* 我们知道，在遍历一个数组的时候会经常需要拿到数组的索引：
  * 如果我们需要索引，可以使用格式： "(item, index) in 数组"；
  * 注意上面的顺序：数组元素项item是在前面的，索引项index是在后面的

## 其他类型

* v-for也支持遍历对象，并且支持有一二三个参数： 
  * 一个参数： "value in object"; 
  * 二个参数： "(value, key) in object"; 
  * 三个参数： "(value, key, index) in object";
*  v-for同时也支持数字的遍历： 
  * 每一个item都是一个数字；
* v-for也可以遍历其他可迭代对象(Iterable)

## 数组更新检测

![image-20240117224044653](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240117224044653.png)

# computed

## 什么是计算属性

* 官方并没有给出直接的概念解释；
* 而是说：对于任何包含响应式数据的复杂逻辑，你都应该使用计算属性；
* 计算属性将被混入到组件实例中
  *  所有 getter 和 setter 的 this 上下文自动地绑定为组件实例；

## 用法

* 选项：computed
* 类型：{ [key: string]: Function | { get: Function, set: Function } }

## 计算属性的缓存

* 计算属性是有缓存的，在数据不发生变化时，计算属性是不需要重新计算的

# watch

## 什么是侦听器

* 开发中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到template中；
* 当数据变化时，template会自动进行更新来显示最新的数据；
* 但是在某些情况下，我们希望在代码逻辑中监听某个数据的变化，这个时候就需要用侦听器watch来完成了；

## 用法

* 选项：watch
* 类型：{ [key: string]: string | Function | Object | Array}

## 配置

* deep：可以监听到对象内部属性的变化
* immediate：在第一次渲染的时候就会监听

## 其他用法

* 我们可以在created的生命周期中，使用 this.$watchs 来侦听；
  * 第一个参数是要侦听的源；
  * 第二个参数是侦听的回调函数callback；
  * 第三个参数是额外的其他选项，比如deep、immediate；

# v-model

## 基本使用

* 代码逻辑中获取到用户提交的数据，我们通常会使用v-model指令来完成
  * v-model指令可以在表单 input、textarea以及select元素上创建双向数据绑定；
  * 它会根据控件类型自动选取正确的方法来更新元素；
  * 尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件来更新数据，并在某种极端场景下进行一些特殊处理；

## v-model的原理

* v-model的原理其实是背后有两个操作：

  * v-bind绑定value属性的值；
  * v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中；

  ![image-20240119160508075](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119160508075.png)

## v-model绑定textarea

![image-20240119160553284](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119160553284.png)

## v-model绑定checkbox

### 单个勾选框

* v-model即为布尔值。 
* 此时input的value属性并不影响v-model的值。

![image-20240119160647425](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119160647425.png)

### 多个勾选框

* 当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组。
* 当选中某一个时，就会将input的value添加到数组中。

![image-20240119160733302](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119160733302.png)

## v-model绑定radio

![image-20240119160804304](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119160804304.png)

## v-model绑定select

### 单选

* 只能选中一个值 

  * v-model绑定的是一个值； 
  * 当我们选中option中的一个时，会将它对应的value赋值到fruit中；

  ![image-20240119160902114](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119160902114.png)

### 多选

* 只能选中一个值

  * v-model绑定的是一个数组；
  * 当选中多个值时，就会将选中的option对应的value添加到数组fruits中；

  ![image-20240119161007167](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119161007167.png)

## v-model的修饰符

### lazy

* 默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么会在每次内容输入后就将最新的值和绑定的属性进行同步；
* 如果我们在v-model后跟上lazy修饰符，那么会将绑定的事件切换为 change 事件，只有在提交时（比如回车）才会触发；

![image-20240119161107892](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119161107892.png)

### number

![image-20240119161149259](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119161149259.png)

### trim

* 如果要自动过滤用户输入的首尾空白字符，可以给v-model添加 trim 修饰符：

  ![image-20240119161241004](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240119161241004.png)

# 组件

## 组件通信

### 父传子

* 在开发中很常见的就是父子组件之间通信，比如父组件有一些数据，需要子组件来进行展示：
  * 这个时候我们可以通过props来完成组件之间的通信；
* 什么是Props呢？
  * Props是你可以在组件上注册一些自定义的attribute；
  * 父组件给这些attribute赋值，子组件通过attribute的名称获取到对应的值；
* Props有两种常见的用法：
  * 方式一：字符串数组，数组中的字符串就是attribute的名称；
  * 方式二：对象类型，对象类型我们可以在指定attribute名称的同时，指定它需要传递的类型、是否是必须的、默认值等等；

#### Props的对象用法

* 数组用法中我们只能说明传入的attribute的名称，并不能对其进行任何形式的限制，接下来我们来看一下对象的写法是如何让 我们的props变得更加完善的
* 当使用对象语法的时候，我们可以对传入的内容限制更多：
  * 比如指定传入的attribute的类型；
  * 比如指定传入的attribute是否是必传的；
  * 比如指定没有传入时，attribute的默认值；
  * ![image-20240121225049334](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240121225049334.png)

##### 细节一：type的类型都可以是哪些

* String
* Number
* Boolean
* Array
* Object
* Date
* Function
* Symbol

##### 细节二：对象类型的其他写法

![image-20240121225730716](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240121225730716.png)

##### 细节三：Prop 的大小写命名

*  Prop 的大小写命名(camelCase vs kebab-case)
  * HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符；
  * 这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名；

#### 非Prop的Attribute

* 什么是非Prop的Attribute呢？
  * 当我们传递给一个组件某个属性，但是该属性并没有定义对应的props或者emits时，就称之为 非Prop的Attribute；
  * 常见的包括class、style、id属性等
* Attribute继承 
  * 当组件有单个根节点时，非Prop的Attribute将自动添加到根节点的Attribute中：

![image-20240121230022930](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240121230022930.png)

#### 禁用Attribute继承和多根节点

* 如果我们不希望组件的根元素继承attribute，可以在组件中设置 inheritAttrs: false：
  * 禁用attribute继承的常见情况是需要将attribute应用于根元素之外的其他元素；
  * 我们可以通过 $attrs来访问所有的非props的attribute；

* 多个根节点的attribute
  * 多个根节点的attribute如果没有显示的绑定，那么会报警告，我们必须手动的指定要绑定到哪一个属性上：
  * ![image-20240121230157122](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20240121230157122.png)