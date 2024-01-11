# MVVM模型

* MVC是Model – View –Controller的简称，是在前期被使用非常框架的架构模式，比如iOS、前端；
* MVVM是Model-View-ViewModel的简称，是目前非常流行的架构模式；

![image-20240111154457382](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240111154457382.png)

# methods属性

## 描述

* methods熟悉是一个对象，通常我们会在这个对象中定义很多方法
  * 这些方法可以被绑定到 模板中；
  *  在该方法中，我们可以使用this关键字来直接访问到data中返回的对象的属性；

## methods中this绑定

* 不能使用箭头函数
  * 使用箭头函数this指向问题会发生变化

* ![image-20240111162004015](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20240111162004015.png)