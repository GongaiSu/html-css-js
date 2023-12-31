# HTML常见的元素

## 文档声明

`<!DOCTYPE html>`:声明这个html使用的是html5

## html元素的属性

`lang`:表示使用的语言

## head元素的使用

`title`:网页的标题

`meta`:编写文档的配置信息

* `charset`:配置网页的编码格式

## body元素的使用

### 常用的元素

* p元素、h元素
* img元素、a元素、iframe元素
* div元素、span元素

#### h元素的使用

`<h1>-<h6>`标题Heading元素呈现了六种不用级别的标题

heading是头部的意思，通常会用来做标题

`<h1>`级别最高,`<h6>`级别最低

```html
 <h1>这是h1</h1>
 <h2>这是h2</h2>
 <h3>这是h3</h3>
 <h4>这是h4</h4>
 <h5>这是h5</h5>
 <h6>这是h6</h6>
```

#### p元素的使用

表示一个段落

p元素是paragraph单词的缩写,是段落、分段的意思

p元素多和段落之间会有一定的间距;

#### img元素的使用

img是image单词的缩写,是图像、图片的意思;

事实上img是一个可替换元素(replaced element)

* src属性:source单词的缩写,表示源:是必填,它包含了你想嵌入的图片文件路径
* alt:不是强制的,有两个作用
  * 作用一:当图片加载不成功(错误的地址或者资源不存在),那么会显示这段文本
  * 作用二:屏幕阅读器会将这些描述读给需要使用阅读器的使用者听,让他们知道图像的含义;

#### a元素的使用

HTML`<a>`元素(或称锚(anchor)元素):定义超链接,用于打开新的URL

a元素有两个常见的属性

* href:Hypertext Reference的简称
  * 指定要打开的RUL地址
  * 也可以是一个文本地址
* target:该属性指定在何处显示连接资源
  * _self:在当前窗户页面打开URL
  * _blank(空白):在一个新的空白页面打开URL
  * _parent:在父窗口中打开RUL
  * _top:在顶层窗口打开URL
  * 其他值不常用

描点连接可以实现:跳转到页面中的具体位置

重要的两个步骤

* 再要跳转的元素上定义一个id属性
* 定义a元素,并且a元素的href指向对应的id

可以定义其他协议,如下载文件,发送邮件等

#### iframe元素的使用

iframe网页嵌套,将其他网页嵌套到当前网页中

两个属性

* src:需要嵌套的网页地址
* frameborder:是否显示边框,0不显示;1显示

#### div元素和span元素

div元素和span元素都是"纯粹的"容器,也可以把他们理解为"盒子",它们都是用来包裹内容的;

div元素:divsion,分开、分配的意思;

* 多个div元素包裹的内容会在不用行显示;
  * 一般作为其他元素的父容器,把其他元素包住,代表一个整体
  * 用于把网页分割为多个独立的部分

span元素:跨域、涵盖的意思

* 多个span元素包裹的内容会在同一行显示
  * 默认情况下,跟普通文本几乎没有区别
  * 用于区分特殊文本和普通文本,比如用来显示一些关键字

# HTML全局属性

https://developer.mozilla.org/zh-CN/docs/Web/HTML

## 常用的全局属性

* id:唯一的标识符（ID)，该标识符在整个文档中必须是唯一的。它用于在链接（使用片段、脚本和样式（通过 CSS）中辨识元素。
* class:一个以空格分隔的元素的类名(classes)列表,他允许css和Javascript通过类选择器或者DOM方法来选择和访问特定的元素
* style:给元素添加内联样式
* title:包含表示与其所属元素相关信息的文本。这些信息通常可以作为提示呈现给用户,但不是必须的.

# 字符实体

是一段以连接符(&)开头，以分号(;)结尾的文本(字符串):

* 实体常常用于显示保留字符(这些字符会被解析为HTML代码)和不可见的字符(如"不换行空格")

# CSS

## 常见的CSS编写

### 内联样式

就是在元素的内部使用全局属性:style来进行编写样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style="color: red;">这是一个div的要使用内联样式</div>
</body>
</html>
```

### 内部样式

在html的head头中编写样式,使用`<style></style>`在内部编写样式,根据不同的元素,可以进行对不同元素区分不同的样式,后面会有选择器,

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div{
      color: red;
      background-color: orange;
    }
  </style>
</head>
<body>
  <div>这是一个div</div>
</body>
</html>
```

### 外部样式

在head头中使用link引入外部的css样式文件,多个样式文件可以使用多个link进行引入,可以使用一个总的css文件(如index.css文件)将其他css文件进行导入,在html中使用link导入index.css即可.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./css/index.css">
</head>
<body>
  <h1>我是一个黄色的h1</h1>
  <div>我是一个红色的div</div>
</body>
</html>
```

index.css

```css
@import url(./style.css);
@import url(./test.css);
```

其他css样式

style.css

```css
div{
  color:red;
  background-color: blue;
}
```

test.css

```css
h1{
  color: yellowgreen;
}
```

## 查询连接

http://www.w3.org/TR/tag=css

## 五个常见的样式

* font-size:字体颜色
* color:前景色(字体颜色)
* background-color:背景色
* width:宽
* height:高

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .title{
      /* 字体大小,浏览器默认大小为16px,最小不能小于12px */
      font-size: 24px;
      color: chocolate;
      background-color: black;
      width: 200px;
      height: 200px;
    }
  </style>
</head>
<body>
  <div class="title">Hello World</div>
</body>
</html>
```

### link元素

link元素是外部资源链接元素，规范了文档与外部资源的关系，通常是在head元素中使用，此外也可以被创建站点图标

* href：此属性指定被链接资源的URL。
* rel：指定链接的类型
  * icon：站点图标
  * stylesheet：css样式

# 文本属性

## text-decoration

用于设置文字的装饰线

decoration：装饰/装饰品的意思

### 常用值

none：无任何装饰线(可以去除a元素下的装饰线)

underline：下划线

overline：上划线

line-through：中划线（删除线）

## text-transform

用于文本大小写转换

transform：变形、变换（形变）

### 常用值

capitalioze：首字母转换大写

uppercase：全部转换大写

lowercase：全部转为小写

none：没有变化

## text-indent

用于设置第一行内容的缩进

### 常用值

text-indent：2em

em：相对于当前文本字体大小的2倍，刚好缩进2个字

## text-align

直接翻译：设置文本的对齐方式

MDN翻译：定义行内内容（例如文字）如何相对于它的块父元素对齐；

W3C：是行内级元素的对齐方式(div是块级元素，需要转换为行内级元素)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box{
      background-color: #f00;
      height: 300px;
      /* 只能对行内级元素进行对齐,如果div没有进行转换为行内级元素时,div是块级元素,无法进行对齐 */
      text-align: center;
    }
    .centent{
      background-color: #0f0;
      height: 200px;
      width: 200px;
      /* 将div设置为行内级元素,使其可以使用text-align的对齐属性 */
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="centent"></div>
  </div>
</body>
</html>
```

### 常用值

left：左对齐

right：右对齐

center：居中对齐

justify：两端对齐（首行和尾行需要特殊处理）,如果想要最后一行生效则需要使用`text-align-last:justify`

## letter-spacing和word-spacing

letter-spacing:设置字母之间的间距

word-spacing:设置单词之间的距离

默认值是0，可以设置为负数

# 字体属性

## font-size

设置字体的大小

### 常用设置

具体数值+单位

比如100px

可以以使用em单位:1em表示100%,2em代表200%

百分比(%):基于父元素发font-size计算

## font-family

设置文字的字体名称

可以设置1个或者多个字体名称

浏览器会选择列表中第一个该计算机上有安装的字体;

或者通过@font-face指定可以直接下载的字体

## font-weight

用于设置文字的粗细(重量)

### 常见取值

1-1000

normal(普通的):等于400

bold(大胆的):等于700

## font-style

用于设置文字的常规、斜体显示

### 常用值

normal:常规显示

italic(斜体):用文字的斜体显示(通常会有专门的字体)

oblique(倾斜):文本倾斜显示(仅仅是让文字倾斜)

## font-variant

设置小写字母的显示形式

variant:变形的意思

### 常用值

normal:正常显示

samll-caps:将小写字母变成大写字母,但是字母的高度不变

## line-height

简单理解：一行文字所占据的高度

严格定义：两行文字基线(baseline)之间的间距

基线：与小写字母x最底部对齐的线 

## font缩写属性 

 font属性可以用来作为 font-style，font-variant，font-weight，font-size，line-height和font-family属性的缩写；

 font-style font-variant font-weight font-size/line-height font-family

规则

*  font-style，font-variant，font-weight可以随意调换顺序，也可以省略
* /line-height也可以省略，如果不省略，必须跟在font-size后面
* font-size、font-family不可以调换顺序、不可以省略
* font-size/line-height如果出现（20px/1.5）表示行间距为字体大小的1.5倍

# 选择器

## 通用选择器

所有的元素都会被选中

一般用来给所有的元素作一些通用性的设置

```css
*{/* *表示所有的元素 */
    font-size：30px;
}
div,span,a{ /*表示对这个几个元素进行设置*/
    color:red;
}
```

## 简单选择器

元素选择器:使用元素的名称

类选择器:使用.类名

id选择器:使用#id

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>

    div{
      color: #f90;
    }
    .box{
      color: #009;
    }
    #id{
      color: #090;
    }
  </style>
</head>
<body>
  <div>这是一个div</div>
  <div class="box">这是一个div</div>
  <div id="id">这是一个div</div>
</body>
</html>
```

### id注意事项

id值是唯一的,不能重复

如果由多个单词组成,单词之间可以用中化纤`-`、下划线`_`，也可以使用驼峰标识

最好不要使用标签名作为id值

中划线又叫连字符

## 属性选择器

拥有某一个属性[att(属性名)]

属性等于某个值[att=val]

## 后代选择器

### 后代选择器一:所有的后代(直接/间接的后代)

选择器之间以空格分割

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .home span{
      color: rgb(218, 45, 45);
    }
  </style>
</head>
<body>
  <div class="home">
    <div class="box">
      <p>
        <span>哈哈哈</span>
      </p>
    </div>
    <div class="content">
      <span>好好好</span>
    </div>
  </div>
  <div>九九九</div>
  <span>哇哇哇哇</span>
</body>
</html>
```

### 后代选择器二:直接子代选择器(必须是直接子代)

选择器之间以`>`分割

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .home>span{
      color: rgb(218, 45, 45);
    }
  </style>
</head>
<body>
  <div class="home">
    <span>啦啦啦</span>
    <div class="box">
      <p>
        <span>哈哈哈</span>
      </p>
    </div>
    <div class="content">
      <span>好好好</span>
    </div>
  </div>
  <div>九九九</div>
  <span>哇哇哇哇</span>
</body>
</html>
```

## 兄弟选择器

### 兄弟选择器一:相邻兄弟选择器

使用符号`+`连接

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box + .content{
      color:red;
    }
  </style>
</head>
<body>
  <div class="box">这是一个div</div>

  <div class="content">这是一个div</div>
  
  <div >这是一个div</div>
  <div >这是一个div</div>
</body>
</html>
```

### 兄弟选择器二:普遍兄弟选择器

使用符号`~`连接

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box ~ div{
      color:red;
    }
  </style>
</head>
<body>
  <div class="box">这是一个div</div>

  <div class="content">这是一个div</div>
  
  <div >这是一个div</div>
  <div >这是一个div</div>
</body>
</html>
```

## 选择器组

### 交集选择器

需要同时符合两个选择器条件(两个选择器紧密连接)

在开发中通常为了精准的选择某一个元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div.box{
      color: red;
    }
  </style>
</head>
<body>
  


  <div class="box">这是一个div</div>
  <p class="box">这是一个p元素</p>
</body>
</html>
```

### 并集选择器

符合一个选择器条件即可(两个选择器以`,`号分割)

在开发中通常为了给多个元素设置相同的样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div,p,body{
      color: red;
    }
  </style>
</head>
<body>
  


  <div class="box">这是一个div</div>
  <p class="box">这是一个p元素</p>
</body>
</html>
```

## 伪类

### 什么是伪类

Pseudo-classes:翻译过来是伪类

伪类是选择器的一种，它用于选择处于特定状态的元素；

### 动态伪类（dynamic pseudo-classes）

`:link、:visited、:hover、:active、:focus`

#### 使用举例

* `a:link `未访问的链接
* `a:visited` 已访问的链接
* `a:hover` 鼠标挪动到链接上（重要）
* `a:active` 激活的链接（鼠标在链接上长按住未松开）

#### 使用注意

* `:hover`必须放在`:link`和`:visited`后面才能完全生效 
* `:active`必须放在`:hover`后面才能完全生效
* 所以建议的编写顺序是`:link`、`:visited`、`:hover`、`:active`
* 除了a元素，`:hover`、`:active`也能用在其他元素上

#### :focus

拥有输入焦点的元素(能接收键盘输入)

#### 记忆顺序`LVHA`,使用了`:focus`后记忆顺序是`LVFHA`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .mi:link{
      color: red;
      text-decoration: none;
    }
    .mi:visited{
      color: green;
    }
    .mi:focus{
      color: yellow;
    }
    .mi:hover{
      color: coral;
    }
    .mi:active{
      color: #000;
    }

  </style>
</head>
<body>
  

  <a class="mi" href="http://www.mi.com">小米</a>
  <a href="http://www.baidu.com">百度</a>
</body>
</html>
```

### 目标伪类（target pseudo-classes）

:target

### 语言伪类（language pseudo-classes）

:lang()

### 元素状态伪类（UI element states pseudo-classes）

:enabled、:disabled、:checked

### 结构伪类(structural pseudo-classes)(后续学习)

:nth-child()、:nth-last-child()、:nth-of-type()、:nth-last- of-type()

:first-child、:last-child、:first-of-type、:last-of-type

:root、:only-child、:only-of-type、:empty

### 否定伪类（negation pseudo-classes）

:not()

### 所有的伪类

https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes 

## 伪元素

### ::first-line和::first-letter

first-line:设置首行的元素

first-letter:设置首个字母的元素

### ::before和::after

`::before`:设置一个元素前面显示什么,可以设置样式,可以显示图片

`::after:`设置一个元素后面显示什么,可以设置样式,可以显示图片

注意要是显示一个8x8的红色小方格,`content`元素无法省略,省略后就不显示

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box::before{
      content: "这是一个before ";
      font-size: 20px;
      color: white;
      background-color: #f00;
    }
    .box::after{
      content:  url(../images/hot.92a15c5e.svg);
      position: relative;
      left: 2px;
      top: 2px;
    }
    .box1::after{
      content:'';
      display: inline-block;
      width: 18px;
      height: 18px;
      background-color: #f00;
    }
  </style>
</head>
<body>
  <div class="box">

    这是一个div
  </div>
  <div class="box1">这是一个div</div>
</body>
</html>
```

# CSS-继承-层叠-类型

## CSS继承

 css的某些属性具有继承性(inherited)

如果一个属性具备继承性,那么在该元素上设置后,它的后代元素都可以继承这个属性;

当然,如果后代元素自己有设置该属性,那么有优先使用后代元素自己设置的属性(不管继承过来的属性权重多大)

### 默认继承

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    .box{
      color: #f00;
    }
  </style>
</head>
<body>
  

  <div class="box">

    <p>这是一个p元素</p>
    <h1>这是一个h1</h1>
  </div>
</body>
</html>

```

### 继承过来的是计算值,而不是设置值(了解)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    .box{
      color: #f00;
      /* 2em 计算出来的值为32px  在继承的时候不会直接继承2em,而是将2em计算为最终的值进行继承 */
      font-size: 2em;
    }
  </style>
</head>
<body>
  

  <div class="box">

    <p>这是一个p元素</p>
    <h1>这是一个h1</h1>
  </div>
</body>
</html>
```

### 强制继承

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    .box{
      color: #f00;
      /* border不具备继承性,所以后代元素无法继承 */
      border: 2px solid purple;
    }
    p{
      /* 使用inherit(继承)进行强制继承 */
      border: inherit;
    }
  </style>
</head>
<body>
  

  <div class="box">

    <p>这是一个p元素</p>
    <h1>这是一个h1</h1>
  </div>
</body>
</html>
```

## CSS层叠

什么是层叠

* 对一个元素来说,相同一个属性我们可以通过不同的选择器给他进行多次设置;
* 那么属性会被一层层覆盖上去;
* 最终只有一个会生效;

生效判断依据

* 判断一:选择器的权重,权重大的生效,根据权重可以判断出优先级;
* 判断二:先后顺序;权重相同时,后面设置的生效;

权重大小

* !important:1000
* 内联样式:1000
* id选择器:100
* 类选择器、属性选择器、伪类:10
* 元素选择器、伪元素:1
* 通配符:0

## CSS类型(HTML元素类型)

在前面我们会经常提到div是块级元素会独占一行，span是行内级元素会在同一行显示. 

* 到底什么是块级元素，什么是行内级元素呢？

HTML定义元素类型的思路：

* HTML元素有很多，比如h元素／p元素／div元素／span元素／img元素／a元素等等；
* 当我们把这个元素放到页面上时，这个元素到底占据页面中一行多大的空间呢？
  *  为什么我们这里只说一行呢？因为垂直方向的高度通常是内容决定的；

* 比如一个h1元素的标题，我们必然是希望它独占一行的，其他的内容不应该和我的标题放在一起； 
* 比如一个p元素的段落，必然也应该独占一行，其他的内容不应该和我的段落放在一起；
* 而类似于img／span／a元素，通常是对内容的某一个细节的特殊描述，没有必要独占一行；

所以，为了区分哪些元素需要独占一行，哪些元素不需要独占一行，HTML将元素区分（本质是通过CSS的）成了两类： 

* 块级元素（block-level elements):独占父元素的一行
* 行内级元素（inline-level elements):多个行内级元素可以在父元素的同一行中显示

通过CSS修改元素类型

* 通过CSS中的display属性，能修改元素的显示，常用值
  * block：让元素显示为块级元素
    * 可以设置宽高
  * inline：让元素显示为行内级元素
    * 不可以设置宽高，以内容的大小决定
  * inline-block：让元素同时具备行内级、块级元素的特征
  * none：隐藏元素

## 编写HTML的注意事项

* 块级元素、inline-block元素
  * 一般情况下，可以包含其他任何元素（比如块级元素、行内级元素、inline-block元素）
  * 特殊情况：p元素不能包含其他块级元素
* 行内级元素（比如a、span、storng等）
  * 一般情况下，只能包含行内级元素

## 元素隐藏方式

### display设置为none

元素不显示，并且也不占据位置，不占据任何空间

### visibility设置hidden

设置hidden，虽然元素看不见，但是会占据元素应该占据的空间

默认visible，元素可见

### rgba设置颜色，将a的值设置为0

rgba的a设置的是alpha，可以设置透明度，不影响子元素(范围0-1)

### opacity设置透明度，设置为0

设置整个元素的透明度，会影响所有的子元素(范围0-1)

## 内容溢出-overflow

用于控制内容溢出时的行为

* visible：溢出的内容照样显示
* hidden：溢出的内容不显示
* scroll：溢出的内容被裁剪，但是可以通过滚动机制查看
  * 会一直显示滚动条区域，滚动条区域占用的空间属于width、height
* auto：自动根据内容是否溢出来决定是否提供滚动机制

# CSS盒子模型

html中每一个元素都可以看做是一个盒子，可以具备4个属性

* 内容（content）
  * 元素的内容width/height
* 内边距（padding）
  * 元素和内容之间的间距
* 边框（border）
  * 元素自己的边框
* 外边距（margin）
  * 元素和其他元素之间的间距

## 内容（content）

宽度设置：width

高度设置：height

最小宽度：min-width；宽度都要大于或等于min-width

最大宽度：max-width；宽度都要小于或等于max-width

最小高度：min-height；高度都要大于或等于min-height

最大高度：max-height；宽度都要小于或等于max-height

## 内边距（padding）

padding属性用于设置盒子的内边距，通常用于设置边距和内容之间的间距

### 四个方向：

* padding-top:上内边距
* padding-right:上右边距
* padding-bottom:上下边距
* padding-left：上左边距

### padding是缩写属性

padding缩写属性是从零时钟方向开始，沿着顺时针转动的，就是上右下左

##  边框（border）

用户设置盒子的边框

*  边框具备宽度
* 边框具备样式
* 边框具备颜色

### border也是四个方向设置

* border-top
* border-right
* border-bottom
* border-left

### 四个方向的宽度设置:

* border-top-width
* border-right-width
* border-bottom-width
* border-left-width
* 简写 border-width

### 四个方向的样式设置:

* border-top-style
* border-right-style
* border-bottom-style
* border-left-style
* 简写 border-style

### 四个方向的颜色设置:

* border-top-color
* border-right-color
* border-bottom-color
* border-left-color
* 简写 border-color

### 简写

border: width style color(这三个可以任意换位置,一般再开发中style是不会省略的,其他的可以省略)

### 样式的分类

常用的样式一般为solid和dashed

| `none`   | 和关键字 `hidden` 类似，不显示边框。在这种情况下，如果没有设定背景图片，[`border-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width) 计算后的值将是 `0`，即使先前已经指定过它的值。在单元格边框重叠情况下，`none` 值优先级最低，意味着如果存在其他的重叠边框，则会显示为那个边框。 |
| :------- | :----------------------------------------------------------- |
| `hidden` | 和关键字 `none` 类似，不显示边框。在这种情况下，如果没有设定背景图片，[`border-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width) 计算后的值将是 `0`，即使先前已经指定过它的值。在单元格边框重叠情况下，`hidden` 值优先级最高，意味着如果存在其他的重叠边框，边框不会显示。 |
| `dotted` | 显示为一系列圆点。标准中没有定义两点之间的间隔大小，视不同实现而定。圆点半径是 [`border-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width) 计算值的一半。 |
| `dashed` | 显示为一系列短的方形虚线。标准中没有定义线段的长度和大小，视不同实现而定。 |
| `solid`  | 显示为一条实线。                                             |
| `double` | 显示为一条双实线，宽度是 [`border-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width) 。 |
| `groove` | 显示为有雕刻效果的边框，样式与 `ridge` 相反。                |
| `ridge`  | 显示为有浮雕效果的边框，样式与 `groove` 相反。               |
| `inset`  | 显示为有陷入效果的边框，样式与 `outset` 相反。当它指定到 [`border-collapse`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-collapse) 为 `collapsed` 的单元格时，会显示为 `groove` 的样式。 |
| `outset` | 显示为有突出效果的边框，样式与 `inset` 相反。当它指定到 [`border-collapse`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-collapse) 为 `collapsed` 的单元格时，会显示为 `ridge` 的样式。 |

## 圆角(border-radius)

### 常见值

* 数值:通常用来设置小的圆角,比如6px;
* 百分比:通常用来设置一定的弧度或者圆形

border-radius其实是一个缩写属性

* 是将这四个属性border-top-left-radius,border-top-right-radius,border-bottom-right-radius,border-bottom-left-radius缩写为一个属性
* 开发中比较少见一个个圆角设置

如果是一个元素是正方形,设置border-radius大于或等于50%时,就会变成一个园

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div{
      width: 100px;
      height: 120px;
      background-color: #f00;
    }
    .box1{
      border:10px solid gold;
      border-radius: 20px;
    }
    .box2{
      border:10px solid green;
      border-radius: 20%;
    }
    .box3{
      width: 100px;
      height: 100px;
      border:10px solid blue;
      border-radius: 50%;
    }
  </style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</body>
</html>
```

## 外边距(margin)

用于设置盒子的外边距,通常用于设置元素和元素之间的距离

### margin也是四个方向设置

* margin-top
* margin-right
* margin-bottom
* margin-left

### margin是缩写属性

margin缩写属性是从零时钟方向开始，沿着顺时针转动的，就是上右下左

在使用margin设置外边距的时候,上下元素的margin-top和margin-bottom会重叠,而作用的margin不会重叠

### margin的上下传递

#### margin-top传递

* 如果块级元素的顶部线和父元素的顶部线重叠,那么这个块级元素的margin-top值会传递给父元素

#### margin-bottom传递

* 如果块级元素的底部线和父元素的底部线重叠,并且父元素的高度为auto,那么这个块级元素的margin-bottom值会传递给父元素

#### 如何防止

* 给父元素设置padding-top\padding-bottom
* 给父元素设置border
* 触发BFC:设置overflow为auto

### 上下margin折叠问题

垂直方向上相邻的2个margin(margin-top、margin-bottom)有可能会合并为1个margin,这种现象叫做collapse(折叠)

水平方向上的margin(margin-left,margin-right)拥有不会折叠

折叠后最终值的是取两个值之间较大的值

如果防止:只设置其中一个元素的margin

### 块级元素的居中

 设置margin-left和margin-right为auto

## 外轮廓(outline)

* 不占用空间
* 默认显示在border的外面

### 相关属性

* outline-width:外轮廓的宽度
* outline-style:取值和border的样式一样,比如solid dotted等
* outline-color:外轮廓的颜色
* outline：outline-width,outline-style,outline-color的简写属性,和border用法类似

### 应用实例

* 去除a元素、input元素的focus轮廓效果

## 盒子阴影（box-shadow）

### box-shadow

可以设置8ige或多个阴影

* 每个阴影用shadow表示
* 多个阴影之间用逗号`,`隔开，从前到后叠加

### 常见格式

`none|<shadow>#`   `<shadow>=inset? && <length>{2,4}&&<color>?`

* 第1个`<length>`:offset-x,水平方向的偏移，正数往右偏移
* 第2个`<length>`:offset-y,垂直方向的偏移，正数往下偏移
* 第3个`<length>`:blur-radius,模糊半径
* 第4个`<length>`:spread-radius，延伸半径
* `<color>`：阴影的颜色，如果没有设置，就跟随color属性的颜色
* inset：外框阴影变成内框阴影

在线网址：https://html-css-js.com/css/generator/box-shadow/

## 文字阴影（text-shadow)

和box-shadow用法类似，用于给文字添加阴影效果

`none|<shadow-t>#`   `<shadow-t>= <length>{2,3}&&<color>?`

没有spread和inset

## 行内非替换元素的特殊性

width和height是压根不生效

padding：上下会被撑起来，但是不占据空间

border：上下会被撑起来，但是不占据空间

margin：上下的margin是不生效的

## box-sizing

用来设置盒子模型中的宽高的行为

### content-box

* padding、border都布置在width、height外边

### border-box

* padding、border都布置在width、height里边

# CSS背景设置

## background-image（背景图）

用于设置元素的背景图片

* 会盖章（不是覆盖）background-color的上面

设置了多张图片

* 设置的第一张图片将显示在最上面，其他图片按照顺序层叠在下面

## background-repeat（背景图片是否平铺）

用于设置背景图片是否平铺

### 常用值

* repeat：平铺
* no-repeat：不平铺
* repeat-x：只在水平方向平铺
* repeat-y：只在垂直方向平铺

## background-size（背景的尺寸）

设置背景的尺寸

### 常用值

* 
  auto： 以背景图片的比例缩放背景图片。

* cover：缩放背景图，以完全覆盖铺面元素，可能背景图片部分看不到
* contain：缩放背景图，宽度或者高度铺面元素，但是图片保持宽高比
* `<percentage>`：百分比，相对于背景区
* length：具体的大小

## background-position（背景的位置）

设置背景图片在水平和垂直方向的位置

### 常用值

* 可以设置具体的数值
* 水平方向可以设置：left、center、right
* 垂直方向可以设置：top、center、bottom
* 如果只设置1个方向，另一个方向默认是center

## background-attachment（固定）

设置背景图片的位置是在视口内固定，或者随着包含它的区块滚动

### 常用值

* scroll：背景相对于元素本身固定，而不是随着它的内容滚动
* loacl：背景相对于元素的内容固定，如果一个元素用有滚动机制，背景将会随着元素的内容滚动
* fixed：背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动

## background

**`background`** 是一种 CSS简写属性，用于一次性集中定义各种背景属性，包括 color, image, origin 与 size, repeat 方式等等。

![image-20230905214905814](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230905214905814.png)

# HTML高级元素

## 有序列表-ol-li

### ol(ordered list)

* 有序列表，直接子元素只能是li

### li(list item)

* 列表中的每一项

## 无序列表-ul-li

### ul(unordered list)

* 无序列表，直接子元素只能是li

### li(list item)

* 列表中的每一项

## 定义列表-dl-dt-dd

### dl（definition list)

* 定义列表，直接子元素只能是dt，dd

### dt（definition term）

* trem是项的意思，列表中每一项的项目名

### dd（definition description）

* 列表中每一项的具体描述，是对dt的描述、解释、不错
* 一个dt后面一般紧跟1个或者多个dd

## 取消列表自带的样式

* list-style：none

## 表格

### 常用值

#### table

* 表格

#### tr(table row)

* 表格中的行

#### td（table data）

* 行中的单元格

#### border-collapse

* 用来决定表格边框的合并与分开

### 其他元素(更加语义化)

#### thend

* 表格的表头

##### th

* 表格的表头单元格

#### tbody

* 表格的主体

#### tfoot

* 表格的页脚

#### caption

* 表格的标题

### 单元格合并

特殊情况下。每个单元格占据的大小可能并不是固定的

* 一个单元格可能会跨对行或者多列来使用

#### 跨列合并

使用colspan：在最左边的单元格写上colspan属性。并且省略掉合并的td；

#### 跨行合并

使用rowspan：在最上面的单元格写上rowspan属性，并且省略掉后面tr中的td

## 表单

### 常见的表单元素

#### form

* 表单，一般情况下，其他表单相关元素都是它的后代

#### input

* 单行文本输入框、复选框、单选框、按钮等元素

#### textarea

* 多行文本框

#### select、option

* 下来选择框

#### button

* 按钮

#### label

表单元素的标题

### input元素的使用

#### 常见的属性

##### type属性

| 类型              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| button            | 没有默认行为的按钮，上面显示 `value` 属性的值，默认为空。    |
| checkbox          | 复选框，可将其值设为选中或未选中。                           |
| color             | 用于指定颜色的控件；在支持的浏览器中，激活时会打开取色器。   |
| date              | 输入日期的控件（年、月、日，不包括时间）。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。 |
| datetime-local    | 输入日期和时间的控件，不包括时区。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。 |
| email             | 编辑邮箱地址的字段。类似 `text` 输入，但在支持的浏览器和带有动态键盘的设备上会有验证参数和相应的键盘。 |
| file              | 让用户选择文件的控件。使用 `accept` 属性规定控件能选择的文件类型。 |
| hidden            | 不显示的控件，其值仍会提交到服务器。举个例子，右边就是一个隐形的控件。 |
| image             | 图形化 `submit` 按钮。显示的图像由 `src` 属性决定。如果 `src` 属性缺失，就会显示 `alt`的内容。 |
| month             | 输入年和月的控件，没有时区。                                 |
| number            | 用于输入数字的控件。如果支持的话，会显示滚动按钮并提供缺省验证（即只能输入数字）。拥有动态键盘的设备上会显示数字键盘。 |
| password          | 单行的文本区域，其值会被遮盖。如果站点不安全，会警告用户。   |
| radio             | 单选按钮，允许在多个拥有相同 `name`                          |
| range             | 此控件用于输入不需要精确的数字。控件是一个范围组件，默认值为正中间的值。同时使用 `min` 和 `max` 来规定可接受值的范围。 |
| reset             | 此按钮将表单的所有内容重置为默认值。不推荐使用该类型。       |
| search            | 用于搜索字符串的单行文字区域。输入文本中的换行会被自动去除。在支持的浏览器中可能有一个删除按钮，用于清除整个区域。拥有动态键盘的设备上的回车图标会变成搜索图标。 |
| submit            | 用于提交表单的按钮。                                         |
| tel               | 用于输入电话号码的控件。拥有动态键盘的设备上会显示电话数字键盘。 |
| text              | 默认值。单行的文本字段，输入值中的换行会被自动去除。         |
| time              | 用于输入时间的控件，不包括时区。                             |
| url               | 用于输入 URL 的控件。类似 `text` 输入，但有验证参数，在支持动态键盘的设备上有相应的键盘。 |
| week              | 用于输入以年和周数组成的日期，不带时区。                     |
| 废弃的值          |                                                              |
| `datetime` 已弃用 | 用于输入基于 UTC 时区的日期和时间（时、分、秒及秒的小数部分）。 |

##### 其他属性

| 属性             | 类型                                                         | 描述                                                         |
| :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `accept`         | `file`                                                       | 文件上传控件中预期文件类型的提示                             |
| `alt`            | `image`                                                      | 图片类型的 alt 属性。对无障碍是必需的                        |
| `autocomplete`   | 除了 `checkbox`、`radio` 和按钮以外                          | 表单自动填充特性提示                                         |
| `autofocus`      |                                                              | 自动聚焦                                                     |
| `capture`        | `file`                                                       | 文件上传控件中媒体捕获方法的提示                             |
| `checked`        | `checkbox`、`radio`                                          | 控件是否选中                                                 |
| `dirname`        | `search`、`text`                                             | 表单字段的名称，用于在提交表单时发送元素的方向性             |
| `disabled`       | 所有类型                                                     | 表单控件是否禁用                                             |
| `form`           | 所有类型                                                     | 将控件联系到表单元素中                                       |
| `formaction`     | `image`、`submit`                                            | 要提交表单的 URL 地址                                        |
| `formenctype`    | `image`、`submit`                                            | 提交表单时使用的表单数据编码类型                             |
| `formmethod`     | `image`、`submit`                                            | 提交表单时所使用的 HTTP 方法                                 |
| `formnovalidate` | `image`、`submit`                                            | 绕过表单提交时的表单控件验证                                 |
| `formtarget`     | `image`、`submit`                                            | 提交表单时的浏览上下文                                       |
| `height`         | `image`                                                      | 与 `img`) 元素的 height 属性有相同含义，垂直方向上的维度值   |
| `list`           | 除了 `hidden`、`password`、`checkbox`、`radio` 和按钮以外    | 自动完成选项的 `datalist` 的 id 属性的值                     |
| `max`            | `date`、`month`、`week`、`time`、`datetime-local`、`number`、`range` | 最大值                                                       |
| `maxlength`      | `text`、`search`、`url`、`tel`、`email`、`password`          | `value` 的最大长度（字符数）                                 |
| `min`            | `date`、`month`、`week`、`time`、`datetime-local`、`number`、`range` | 最小值                                                       |
| `minlength`      | `text`、`search`、`url`、`tel`、`email`、`password`          | `value` 的最小长度（字符数）                                 |
| `multiple`       | `email`、`file`                                              | 布尔值。是否允许多个值                                       |
| `name`           | 所有类型                                                     | 表单的控件名称，作为键值对的一部分与表单一同提交             |
| `pattern`        | `text`、`search`、`url`、`tel`、`email`、`password`          | 为了使得 `value` 有效，必须符合的模式                        |
| `placeholder`    | `text`、`search`、`url`、`tel`、`email`、`password`、`number` | 当没有值设定时，出现在表单控件上的文字                       |
| `readonly`       | 除了 `hidden`、`range`、`color`、`checkbox`、`radio` 和按钮以外 | 布尔值。如果存在，其中的值将不可编辑。                       |
| `required`       | 除了 `hidden`、`range`、`color` 和按钮以外                   | 布尔值。如果存在，一个值是必需的，或者必须勾选该值才能提交表格。 |
| `size`           | `text`、`search`、`url`、`tel`、`email`、`password`          | 控件的尺寸                                                   |
| `src`            | `image`                                                      | 与 `img` 元素的 `src` 属性含义相同，图片资源的地址           |
| `step`           | `date`、`month`、`week`、`time`、`datetime-local`、`number`、`range` | 有效的增量值                                                 |
| `type`           | 所有类型                                                     | 表单控件的类型                                               |
| `value`          | 所有类型                                                     | 表单控件的初始值                                             |
| `width`          | `image`                                                      | 与 `img`元素的 `width` 属性含义相同                          |

### 表单按钮

* 普通按钮（type=button）：使用value属性设置按钮文件
* 重置按钮（type=reset）：重置它所属form的所有表单元素（包括input、textarea、select）
* 提交按钮（type=submit）：提交它所属form的表单数据给服务器（包括input、textarea、select）

### label和input的关系

#### label元素一般跟input配合使用，用来表示input的标题

* label可以跟某个input绑定，点击label就可以急活对应的input变成选中

### radio(单选框)

* name值相同的radio才具备单选功能

### checkbox(复选框)

* name值相同的checkbox才具备复选功能

### textarea(多行输入)

#### 常用属性

* cols：列数
* rows：行数

#### 缩放的css设置

* 禁止缩放：resize：none
* 水平缩放：resize：horizontal
* 垂直缩放：resize：vertical
* 水平垂直缩放：resize：both

### select和option元素

* option是select的子元素，一个option代表一个选项

#### select常用属性

* multiple:可以多选
* size：显示多少项

#### option常用属性

* selected：默认被选中

### form元素

#### 常见属性

* action：用于提交表单的数据和请求URL
* method：请求方式（get和post），默认是get
* target：在什么地方打开URL（参考a元素的target）

# 结构伪类

##  :nth-child

* :nth-child(1):是父元素中的第一个子元素
* :nth-child(2n)
  * n代表任意正整数和0
  * 是父元素中的偶数个子元素
  * 跟:nth-child(event)同义

* :nth-child(2n+1)

  * n代表任意正整数和0

  * 是父元素中的奇数个子元素

  * 跟:nth-child(odd)同义

* :nth-child(-n+2):表示前2个元素

## :nth-last-child()

用法和nth-child用法基本一直，nth-child是从前往后数，而nth-last-child是从后往前数

* nth-last-child(1):最后一个元素
* nth-last-child(-n+2):表示最后2个子元素

## :nth-of-type()

和nth-child不同点在于只计算相同类型的元素

## :nth-last-of-type()

和nth-last-child不同点在于只计算相同类型的元素

## 其他结构伪类

:first-child：等同于:nth-child(1)

:last-child：等同于:nth-last-child(1)

:fist-of-type：等同于:nth-of-type(1)

:last-of-type：等同于:nth-last-of-type(1)

:only-child：是父元素中唯一的子元素

:only-of-type：是父元素中唯一的这种类型子元素

:root：根元素，就是HTML元素

:empty：表示里面内容完全空白的元素

# 否定伪类

### :not

* :not(x)：x是一个简单选择器

# 扩展知识

##  border的图形

使用border画出特殊的图形

https://css-tricks.com/the-shapes-of-css/#top-of-site

## 使用Web Fonts

* 第一步：下载字体或者设置字体
  *  https://www.fonts.net.cn/fonts-zh-1.html
* 第二步：使用字体
  * 将字体放到对应的目录中
  * 通过`@font-face`来引入字体
  * 使用字体

```css
@font-face{
    font-family:"";/*给使用的字体起名字，后面使用这个字体就要使用这个名字*/
    src:url("字体所放的位置")
}
```

* 浏览器兼容性
  * 对于不同浏览器需要的字体类型不一样
  * 使用https://font.qqe2.com/#可以转换字体类型

## 使用图标字体

* 和WebFonts的使用几乎一致
* 字体下载位置https://www.iconfont.cn/

## 精灵图

是通过显示图片的很小一部分来展示的

* 设置对应元素的宽度和高度
* 设置精灵图作为背景图片
* 调整背景图片的位置来展示

http://www.spritecow.com/ 用来获取精灵图的位置

## cursor(鼠标的样式)

### 常用值 

* auto：浏览器根据上下文决定指针的显示的样式，比如根据文本和非文本切换指针样式
* default：由操作系统决定，一般是一个小箭头
* pointer：一直小手，鼠标指针挪动到链接上面默认就是这个样式
* text：一条竖线，鼠标指针挪动到文本输入框上面默认就是这个样式
* nong：没有任何指针显示在元素上面

# 布局

## 元素定位

### 标准流（Normal Flow)

* 默认情况下，元素都是按照normal flow（标准流、常规流、正常流、文档流【document flow】）进行排布
  * 从左到右、从上到下按顺序摆放好
  * 默认情况下，相互之间不存在层叠现象

* 可以使用margin和padding调整位置但是有缺点
* 一般使用position来进行调节

### 元素的定位

定位允许从正常的文档流布局中提取元素，并使它们具有不同的行为

### position属性

#### 常用值

* static：默认值，静态定位
* relative：相对定位
* absolute：绝对定位
* fixed：固定定位
* sticky：粘性定位

#### relative-相对定位

* 元素按照normal flow布局
* 可以通过left、right、top、bottom进行定位
  * 定位参照对象是元素自己原来的位置 

#### fixed-固定定位

* 元素脱离normal flow（脱离标准流、脱标）
* 可以通过left、right、top、bottom进行定位
  * 定位参照对象是视口（viewport）
* 当画布滚动时，固定不动

#### absolute- 绝对定位

* 元素脱离normal flow（脱离标准流、脱标）

* 可以通过left、right、top、bottom进行定位
  * 定位参照对象是最邻近的定位祖先元素
  * 如果找不到这样的祖先元素，参考对象是视口

* 定位元素
  * position的值不为static的元素
  * 也就是position的值为relative，absolute，fixed  

#### 将position设置为fixed/absolute元素的特点(一)

* 可以随意设置宽高
* 宽度默认由内容决定
* 不再受标准流的约束
  * 不再严格按照从上到下、从左到右排布
  * 不再严格区分块级（block）、行内级（inline），行内块级（inline—block）的很多特性都会消失
* 不再给父元素汇报宽高数据
* 脱标元素内部默认还是按照标准流布局

#### 将position设置为fixed/absolute元素的特点(二)

* 绝对定位元素（absolutely positioned element）
  * position值为absolute或者fixed的元素
*  对于绝对定位元素来说
  * 定位参照对象的宽度＝left＋right＋margin-left＋margin-right＋绝对定位元素的实际占用宽度
  * 定位参照对象的高度＝top＋bottom ＋margin-top ＋margin-bottom＋绝对定位元素的实际占用高度 
* 如果希望绝对定位元素的宽高和定位参照对象一样，可以给绝对定位元素设置以下属性
  * left:0、right:0、top:0.bottom:0.margin:0
* 如果希望绝对定位元素在定位参照对象中居中显示，可以给绝对定位元素设置以下属性
  * left:0.right:0、top:0、bottom:0.margin:auto
  * 另外，还得设置具体的宽高值（宽高小于定位参照对象的宽高）

#### sticky-粘性定位

* 允许被定位的元素表现得像相对定位一样，知道它滚动到某个阈值点，当达到这个阈值点时，就会变成固定(绝对)定位

* 是相对于最近的滚动祖先包含滚动视口的

#### z-index 

* 用来设置定位元素的层叠顺序（仅对定位元素有效）
  * 取值可以是真正整数、负整数、0

## 浮动

### float

* 指定一个元素应沿其容器的左侧或者右侧放置，允许文本和内联元素环绕它
* 绝对定位和浮动都会让元素脱离标准流。以达到灵活布局的效果

#### 常用值

* none:不浮动，默认值
* left：左浮动
* right:右浮动

#### 规则一、二

* 元素一旦浮动后，就脱离标准流
  * 朝向向左或者向右方向移动，直到自己的边界紧贴着包含块(一般是父元素)或者其它浮动元素的边界为止
  * 定位元素会层顶在浮动元素上面

#### 规则三

* 浮动元素不能层叠
  * 如果一个元素浮动，另一个浮动元素已经在那个位置了，后浮动的元素将紧贴着前一个浮动元素（左浮找左浮，右浮找右浮）
  * 如果水平方向剩余的空间不够显示浮动元素，浮动元素将向下移动，直到有充足的空间为止

#### 规则四

* 浮动元素不能与行内级内容层叠，行内级内容将会被浮动元素推出

#### 规则五

* 行内级元素、inline-block元素浮动后，其顶部将与所在行的顶部对齐

### 浮动的问题-高度塌陷

* 由于浮动元素脱离了标准流，变成了脱标元素，所以不在想父元素汇报高度
  * 父元素计算高度时，就不会计算浮动子元素的高度，导致了高度坍塌的问题

* 解决父元素高度坍塌问题的过程，一般叫做清浮动（清除浮动、清理浮动）
* 清除浮动的目的是
  * 让父元素计算高度的时候，把浮动子元素的高度计算进去
* 使用clear属性清除浮动

#### clear元素

* clear属性可以指定一个元素是否必须移动（清除浮动后）到在它之前的浮动元素下面；

##### 常用值

* left：要求元素的顶部低于之前生成的所有左浮动元素的底部
* rigth：要求元素的顶部低于之前生成的所有右浮动元素的底部
* both：要求元素的顶部低于之前生成的所有浮动元素的底部
* none：默认值，无特殊要求

```css
.clear_fix::after{
      clear: both;
      content: "";
      display: block;

      /* 兼容其他浏览器 */
      visibility: hidden;
      height: 0;
    }
    /* 兼容IE6、7 */
    .clear_fix{
      *zoom: 1;
    }
```

## flex布局

### 认识FlexBox

* Flexbox翻译为弹性盒子：
  * 弹性盒子是一种用于按行或按列布局元素的一维布局方法
  * 元素可以膨胀以填充额外的空间，收缩以适应更小的空间
  * 通常我们使用Flexbox来进行布局的方案称之为flex布局((flex layout),
* fIex布局是目前web开发中使用最多的布局方案：
  * flex布局(Flexible布局，弹性布局)；
  * 目前特别在移动端可以说已经完全普及：
  * 在PC端也几乎已经完全普及和使用，只有非常少数的网站依然在用浮动来布局，
* 为什么需要fex布局呢？
  * 长久以来，css布局中唯一可靠且跨浏览器兼容的布局工具只有floats和positioning.
  * 但是这两种方法本身存在很大的局限性，并且他们用于布局实在是无奈之举；

### flex布局的重要概念

####  两个重要的概念：

* 开启了flex布局的元素叫 flex container 
* flex container 里面的直接子元素叫做 flex item
* 当flex container中的子元素变成了flex item时，具备一下特点：
  * flex item的布局将受flex container属性的设置来进行控制和布局； 
  * flex item不再严格区分块级元素和行内级元素；
  * flex item默认情况下是包裹内容的，但是可以设置宽度和高度；
* ~设置 display 属性为 flex或者 inline-flex可以成为 flex container
* flex： flex container 以 block-level 形式存在
* inline-flex： flex container 以 inline-level 形式存在 

### flex布局的模型

![image-20230904175122220](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230905211844020.png)

### container （容器）

#### flex-direction(方向)

* flex items默认都是沿着main axis(主轴)从main start开始往main end方向排布
  * flex-direction决定main axis的方向，有4个取值
    * row：行（默认值）
    * row-reverse：行反转
    * column：列方向
    * column-reverse：列反转

#### flex-wrap

* 决定flex container是单行还是多行
  * nowrap：单行（默认）
  * wrap：多行
  * wrap-reverse：多行（对比wrap，cross start与cross end相反）

#### flex-flow

* 是flex-direction和flex-wrap的简写。可以省略

#### justify-content（调整内容）

* jsutify-content决定了flex items在mian axis上的对齐方式

  ##### 常用值

* flex-start:与main start对齐（默认值）

* flex-end：与main end对齐

* center：居中对齐

* space-between

  * flex items之间的距离相等
  * 与main start、main eng两端对齐

* space-around

  * flex items之间的距离相等
  * flex item与main start、main end之间的距离为flex items之间距离的一半

* space-enenly

  * flex items之间的距离相等
  * flex items与main start、main end之间的距离 等于flex items之间的距离

![justify-content](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230905211904244.png)

#### align-items

* align-items决定了flex items在cross axis上对齐方式

* 常用值
  * normal：在弹性布局中，效果和stretch一样
  * stretch：当flex items在cross axis方向的size为auto时，会自动拉伸至填充flex container
  * flex-start：与cross start对齐
  * flex-end：与cross end对齐
  * center：居中对齐
  * baseline：与基准线对齐

![image-20230905214320471](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230905214320471.png)

#### align-content

* align-content决定了多行flex items在cross axis上的对齐方式用法和justify-content类似

  ##### 常用值

* stretch：（默认值）与align-items的stretch类似

* flex-start：与cross start对齐

* flex-end：与cross end对齐

* center：居中对齐

* space-between

  * flex items之间的距离相等
  * 与cross start、cross eng两端对齐

* space-around

  * flex items之间的距离相等
  * flex item与crossstart、cross end之间的距离为flex items之间距离的一半

* space-enenly

  * flex items之间的距离相等
  * flex items与cross start、cross end之间的距离 等于flex items之间的距离

![image-20230905214406344](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230905214406344.png)

### item

#### order

* 决定了flex items的排布顺序
  * 可以设置任意整数（正整数，负整数，0），值越小就排排在前面
  * 默认值是0

#### align-self

* 可以用通过align-self覆盖flex container 设置的align-items
  * auto（默认值）：遵循flex container的align-items设置
  * stretch：当flex items在cross axis方向的size为auto时，会自动拉伸至填充flex container
  * flex-start：与cross start对齐
  * flex-end：与cross end对齐
  * center：居中对齐
  * baseline：与基准线对齐

![image-20230905214448563](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230905214448563.png)

#### flex-grow

* 决定了flex items如何扩展(拉伸/成长)
  * 可以设置任意非负数字（正小说、正整数、0）默认值是0
  * 当flex container 在main axis方向上有剩余size时，flex-grow属性才会有效
  * 尺寸大小不能大于max-width\max-height

![image-20230905214515224](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230905214515224.png)

#### flex-shrink

* 决定了flex items如何收缩(缩小)
  * 可以设置任意非负数字（正小说、正整数、0）默认值是1
  * 当flex items在main axis方向上超过了flex container的size时，flex-shrink属性才会有效

#### flex-basis

* 用来设置flex items在main axis方向上不高的base size
  * auto（默认值）、具体的宽度数值（100px）
* 决定flex items最终base size的因素，从优先级高到低
  * max-withd\max-height\min-width\min-height
  * flex-basis
  * width\height
  * 内容本身的size

#### flex(简写属性)

flex是 flex-grow ||flex-shrink||flex-basis的简写，flex属性可以指定1个，2个或3个值。

![image-20230905214658844](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230905214658844.png)

* 单值语法：值必须为以下其中之一：
  * 一个无单位数（＜number＞）：它会被当作＜flex-grow＞的值。
  * 一个有效的宽度（width）值：它会被当作 ＜flex-basis＞的值。
  * 关键字none，auto或initial.

* 双值语法：第一个值必须为一个无单位数，并且它会被当作＜flex—grow＞的值。

  * 第二个值必须为以下之一：
    * 一个无单位数：它会被当作＜flex—shrink＞的值。
    * 一个有效的宽度值：它会被当作＜flex—basis＞的值。

* 三值语法：
  * 第一个值必须为一个无单位数，并且它会被当作＜flex-grow＞的值。

  * 第二个值必须为一个无单位数，并且它会被当作 <flex-shrink＞的值。

  * 第三个值必须为一个有效的宽度值，并且它会被当作＜flex-basis＞的值。

# 形变和动画

## transform(形变)

* 运行对某一个元素进行某些形变，包括旋转，缩放，倾斜或者平移等
* 注意行内非替换元素不能进行形变

![image-20230911214228781](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230911214228781.png)

* 规则中以`+`结尾表示：一个或者多个，并且多个之间用空格分隔
* 规则中以`#`结尾表示：一个或者多个，并且多个之间用逗号分隔

### translate(位移)

* translate(X,Y):简写形式,只写一个值是给X赋值，Y默认为0
* translateX:向x方向平移
* translateY:向y方向平移
* 当单位使用`%`时，是相对于自身高度的占比

###  scale(缩放)

* scale(X,Y):简写形式,只写一个值会给x和y都会设置
  * 0~1：对元素缩小 
  * 大于1：对元素放大
* scaleX():在X方向缩放
* scaleY():在Y方向缩放

### rotate(旋转)

* rotate()
* 但是为deg，正数为顺时针，负数为逆时针

### skew(倾斜)

## transform-origin

* 修改形变的原点
* 一个值是修改x轴的原点
* 两个值是修改x和y轴的原点
* 可以使用center left right top bottom等关键字，也可以使用固定位置，或者百分比(参数自身大小)

## transition（动画）

* CSS transitions提供了一种在更改css属性时控制动画速度的方法。
* 可以让css属性变化成为一个持续一段时间的过程，而不是立即生效的；
* 比如将一个元素从一个位置移动到另外一个位置，默认在修改完CSS属性后会立即生效；
* 但是我们可以通过CSS transition，让这个过程加上一定的动画效果，包括一定的曲线速率变化；

### transition-property

* 指定应用过滤属性的名称
  * all：所有属性都要执行动画
  * none：所有属性都不执行动画
  * CSS属性名称：要执行动画的CSS属性名称

### transition-duration

* 指定过渡动画所需的时间
  * 单位可以是秒(s)或者毫秒(ms)

### transition-timing-function

* 指定动画的变化曲线

### transition-delay

* 指定过渡动画执行之间的等待时间

## Animation（动画）

 会分为两个步骤

* 步骤一
  * 使用keyframes定义动画序列（每一帧动画如何执行）

* 步骤二
  * 配置动画执行的名称、持续时间、动画曲线、延迟、执行次数、方向等等

### @Keyframes

* 用来定义多个变化状态，并且使用animation-name来声明匹配
  * 关键帧使用percentage来指定动画发生的时间点；
  * 0%表示动画执行的第一时刻，100%表示动画执行的最后时刻
  * 0%可以使用from表示。100%可以用to表示

### animation-name

* 指定执行哪一个动画帧

### animation-duration

* 指定动画的持续时间

### animation-timing-function

* 指定动画的变化曲线

### animation-delay

* 指定延迟执行的时间

### animation-iteration-count

* 指定动画执行次数，执行infinite表示无限动画

### animation-direction

* 指定方向，常用值normal和reverse

### animation-fill-mode

* none：回到没有执行动画的位置
* forwards：动画最后一帧的位置
* backwards：动画第一帧的位置

### animation-play-state

* 只当动画运行或者暂停(在javaScript中使用，用于暂停动画)

## vertical-align

### 行盒

* 将一行内容包裹的盒子，一个行盒会将一行的内容全部包裹，不考虑大小

### baseline

* 基线对齐（默认值）

### top

* 把行内级盒子的顶部跟line boxes顶部对齐

### middle

* 行内级盒子的中心点与父盒基线加上x—height一半的线对齐

### bottom

* 把行内级盒子的底部跟line box底部对齐

### ＜percentage＞

* 把行内级盒子提升或者下降一段距离（距离相对于line—height计算＼元素高度），0％意味着同baseline—样

### ＜length＞

* 把行内级盒子提升或者下降一段距离，0cm意味着同baseline一样

# meta元素

用于定于元数据

* 设置了charset属性，meta元素是一个字符集声明，告诉文档使用哪种字符编码
* 设置了http-equiv属性，meta元素是编译指令
* 设置了name属性，meta元素提供的是文档级别（document-level)的元数据，应用于整个页面

## http-equiv

`<meta http-equiv="X-UA-Compatible" content="IE=edge">`

* 告知IE浏览器去模仿哪一个浏览器的行为

## name

* robots：爬虫、协作搜索器，或者“机器人”，对此页面的处理行为，或者说，应答遵守的规则
* author：文档作者的名字
* Copyright：版权声明
* description：一段简短而精确的、对页面内容的描述
* keywords：与页面内容想换的关键词，使用逗号分隔。

# link图标

` <link rel="icon" href="../images/favicon.ico">`之前的用法

兼容用法：

![image-20230915232455203](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230915232455203.png)

可以将favicon文件放到根目录下面，浏览器可以之间访问

# CSS样式的字符编码

* 文件的开头的Unicode byte-order（字节顺序标记）字符值。 https://en.wikipedia.org/wiki/Byte_order_mark
* 由Content-Type：HTTP header 中的charset属性给出的值或用于提供样式表的协议中的等效值。 
* CSS＠规则 ＠charset。
* 使用参考文档定义的字符编码：＜link＞元素的charset属性。
  * 该方法在HTML5标准中已废除，无法使用。
* 假设文档是UTF-8。

# HTML5语义化元素

* 但是这样做有一个弊端：
  * 我们往往过多的使用div，通过id或class来区分元素；
  * 对于浏览器来说这些元素不够语义化；
  * 对于搜索引擎来说，不利于SEO的优化；
* HTML5新增了语义化的元素：
  * ＜header＞：头部元素 
  * ＜nav＞：导航元素
  * ＜section＞：定义文档某个区域的元素
  * < article>:内容元素 
  * ＜aside＞：侧边栏元素
  * ＜footer＞：尾部元素 

## audio(音频)

* 常见值

| 常见属性 | 值的方式           | 属性作用                                                     |
| -------- | ------------------ | ------------------------------------------------------------ |
| src      | URL地址            | 音频播放的URL地址                                            |
| controls | Boolean类型        | 是否显示控制栏，包括音量，进度。暂停/恢复播放                |
| autoplay | Boolean类型        | 是否显示自动播放（某些浏览器需要添加muted，比如Chrome）      |
| muted    | Boolean类型        | 是否静音                                                     |
| preload  | none/metadata/auto | 是否需要预加载视频，metadata表示预加载元数据(比如音频时长等) |

和video类似

## video(视频)

* 常见值

| 常见属性 | 值的方式           | 属性作用                                                     |
| -------- | ------------------ | ------------------------------------------------------------ |
| src      | URL地址            | 视频播放的URL地址                                            |
| width    | poxels(像素)       | 设置video宽度                                                |
| height   | poxels(像素)       | 设置video高度                                                |
| controls | Boolean类型        | 是否显示控制栏，包括音量，跨帧。暂停/恢复播放                |
| autoplay | Boolean类型        | 是否显示自动播放（某些浏览器需要添加muted，比如Chrome）      |
| muted    | Boolean类型        | 是否静音                                                     |
| preload  | none/metadata/auto | 是否需要预加载视频，metadata表示预加载元数据(比如视频时长等) |
| poster   | URL地址            | 一海报帧的URL                                                |

* 支持的视频格式

![image-20230916225618231](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230916225618231.png)

* 兼容性写法
  * 通过< source>元素指定更多视频格式的源
  * 通过p/div等元素指定在浏览器不支持video元素的情况。显示内容

```html
 <video src="./assets/1.mp4">
    <source src="./assets/1.ogg">
    <p>您的浏览器不支持视频播放，请更换浏览器！</p>
  </video>
```

## input元素的扩展内容

* 新增属性
  * placeholder:输入框的占位文字
  * multiple：多个值
  * autofocus：自动聚焦
* 新增的type类型
  * 去MDN中查看 

## 新增的全局属性 data-*

* 用于自定义数据属性
  * data设置的属性可以在JavaScript的DOM操作中通过dataset轻松获取
  * 通常用于HTML和JavaScript数据之间的传递

## white-space

* 用来设置空白处理和换行规则
  * normal：合并所有连续的空白，允许单词超屏自动换行
  * nowrap：合并所有连续的空白，不允许单词超屏自动换行
  * pre：阻止合并所有连续的空白，不允许单词超屏自动换行
  * pre-wrap：阻止合并所有连续的空白，允许单词超屏自动换行
  * pre-line：合并所有连续的空白(单保留换行)，允许单词超屏自动换行

##  text_overflow

* 通常用于设置文字溢出时的行为
  * clip：溢出的内容直接裁剪（字符可能会显示不完整）
  * ellipsis:溢出那行的结尾处用省略号表示
* text-overflow生效的前提时overflow不为visible

# CSS中的函数

* var：使用css定义的变量
* calc：计算CSS值，通常用于计算元素的大小或位置
* blur：毛玻璃（高斯模糊）效果
* gradient：颜色渐变函数

## var

* 可以自定义属性
  * 属性名需要以两个减号（--）开始
  * 属性值则可以是任何有效的CSS值
* 可以使用var函数来使用
* 规则集定义的选择器，是自定义属性的可见作用域（只在选择器内部有效）
  * 所以推荐将自定义属性定义在heml中，也可以使用:root选择器；

## calc  

* 允许在声明css属性值是执行一些计算
  * 计算支持加减乘除的运算
    * +和-运算符的两边必须要有空白字符
  * 通常用来设置一些元素的尺寸或者位置

## blur

* 将高斯模糊应用于输出图片或者元素
  * blur（radius）
  * radius：模糊的半径，用于定义高斯函数的偏差值，偏差值越大，图片越模糊

* 通常会和两个属性一起使用
  * filter：将模糊或者颜色偏移等图形效果应用于元素
  * backdrop-filter：为元素后面的区域添加模糊或者其他效果

## gradient

* ＜gradient＞是一种＜image＞CSS数据类型的子类型，用于表现两种或多种颜色的过渡转变。
  * CSS的＜image＞数据类型描述的是2D图形；
  * 比如background-image、list-style-image、border-image、content等；
  * ＜image＞常见的方式是通过url来引入一个图片资源；
  * 它也可以通过CSS的＜gradient＞函数来设置颜色的渐变；
* ＜gradient＞常见的函数实现有下面几种：
  * linear—gradient（）：创建一个表示两种或多种颜色线性渐变的图片；
  * radial—gradient（）：创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成；
  * repeating-linear-gradient（）：创建一个由重复线性渐变组成的＜image＞；
  * repeating-radial-gradient（）：创建一个重复的原点触发渐变组成的＜image＞； 
  * 等等；

# 浏览器前缀

* 有的css属性前面带：-o-、-xv-、-ms-、mso-、-moz-、-webkit-

* -o-、-xv-：Opera等
* -ms-、mso-：IE等
* -moz-：Firefox等
* -webkit：safari、Chrome等

# 媒体查询

* 是一种提供开发着针对不同设备需求定制化开发的一个接口

* 可以根据设备的类型（比如屏幕设备、打印机设备）或者特定的特性（比如屏幕的宽度）来修改你的页面

* 使用的方式主要有三种
  * 方式一：通过@media和@import使用不同的CSS规则
  * 方式二：使用media属性为< style>,< link>,< source>和其他HTML元素指定特定的媒体类型
  * 方式三：使用Window.matchMedia()和MediaQueryList.addListener()方法来测试或监控媒体状态；

## 媒体类型

* 常见的媒体类型
  * all：适用于所有设备
  * print：适用于在打印预览模式下在屏幕上查看的分页材料和文档
  * screen（掌握）：主要用于屏幕
  * speech：主要用于语音合成

## 媒体特性

* 描述了浏览器、输出设备、或是预览环境的具体特征
  * 通常会将媒体特性描述为一个表达式
  * 每条媒体特性表达式都必须用括号括起来 

​		![image-20230917225500057](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230917225500057.png)

## 逻辑运算符

* 媒体查询的表达式最终会获得一个Boolean值，也就是真（true）或者假（false）
  * 如果结果为真（true） ，那么就会生效；
  * 如果结果为假（false） ，那么就不会生效；
* 如果有多个条件，我们可以通过逻辑操作符联合复杂的媒体查询：
  *  and： and 操作符用于将多个媒体查询规则组合成单条媒体查询
  * not： not运算符用于否定媒体查询，如果不满足这个条件则返回true，否则返回false.
  * only： only运算符仅在整个查询匹配时才用于应用样式。
  * ，（逗号）：逗号用于将多个媒体查询合并为一个规则。

# CSS中的单位

* 整体分为两类
  * 绝对长度单位
  * 相对长度单位

## 绝对单位

* 与其他任何我东西都没有关系，通常被认为总是相同的大小

![image-20230918211058623](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230918211058623.png) 

## 相对单位

* 相对于其他一些东西

![image-20230918211658218](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-js/image-20230918211658218.png)

### em

* 相对于自己的font-size的大小

### rem

* 相对于根元素的font-size的大小

### vw/wh

* 相对于视口的宽度和高度

# Less

在线引入

```html
<script src="https://cdn.jsdelivr.net/npm/less@4.2.0/dist/less.min.js"></script>
```

less文件结尾以.less

* 兼容css用法

## 变量

* 定义变量
  * 语法：`@变量名：变量值;`

## 嵌套

选择器中可以有选择器进行嵌套

```less
.container{
   width: 200px;
   height: 200px;
   background-color: red;
        
    .box{
        width: 200px;
   		height: 200px;
   		background-color: #f3c258
    }
}
```

* `&`:表示当前选择器的父级（所在选择器的名称）

## 运算

* 运算符+、-、*、/可以对任意数字、颜色或者变量进行运算
  * 算数运算哎加、减或者比较之前会进行单位换算，计算的结果以最左侧操作数的单位类型为准
  * 如果单位换算无效或失去意义，则忽略单位；

## 混合

* 是一种将一组属性从一个和规则集（或者混入）到另一个规则集的方法。

## 继承

* extend：类似于混入，一般用混入就行，会转换为并集选择器

## 函数

* 内置函数地址：https://less.bootcss.com/functions/

# 视口(viewport)

## 布局视口（layout viewport）

* 默认情况下，一个在PC端的网页在移动端会如何显示呢？
  * 第一，它会按照宽度为980px来布局一个页面的盒子和内容；
  * 第二，为了显示可以完整的显示在页面中，对整个页面进行缩小；
* 我们相对于980px布局的这个视口，称之为布局视口(layout viewport);
  * 布局视口的默认宽度是980px；

## 视觉视口（visual viewport）

* 如果默认情况下，我们按照980px显示内容，那么右侧有一部分区域就会无法显示，所以手机端浏览器会默认对页面进行缩放以显示到用户的可见区域中；
* 那么显示在可见区域的这个视口，就是视觉视口（visual viewport）

![image-20230919161120879](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20230919161120879.png)

* 如果所有的网页都按照980px在移动端布局，那么最终页面都会被缩放显示。
  * 事实上这种方式是不利于我们进行移动的开发的，我们希望的是设置100px，那么显示的就是100px；
  * 如何做到这一点呢？通过设置理想视口（ideal viewport）；

##  理想视口（ideal viewport：

* 默认情况下的layout viewport并不适合我们进行布局；
* 我们可以对layout viewport进行宽度和缩放的设置，以满足正常在一个移动端窗口的布局；
* 这个时候可以设置meta中的viewport；
* ![image-20230919161253383](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20230919161253383.png)

![image-20230919161227663](https://tryora.oss-cn-beijing.aliyuncs.com/html-css-jsimage-20230919161227663.png)



 