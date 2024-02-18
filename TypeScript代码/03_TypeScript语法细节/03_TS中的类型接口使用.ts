

// interface 无法定义基础类型，一般定义对象类型
// interface 可以重复的对某个接口来定义属性和方法
// interface 可以被继承
// interface 可以被实现



interface IPeran {
  name :string
  age:number
}

interface IPeran {
  height?:number
}


interface IKUN extends IPeran{

  hh:string
}


const student:IPeran = {
  name:"zs",
  age:14
}


const student1:IKUN = {
  name:"zs",
  age:14,
  hh:"sss"
}