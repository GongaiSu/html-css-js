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
