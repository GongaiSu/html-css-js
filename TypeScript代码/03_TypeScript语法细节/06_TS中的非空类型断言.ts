

interface Iinfo {
  name:string
  age:number
  firend?:{
    name:string
  }
}


const info : Iinfo = {
  name:"zs",
  age:14
}


//“info.firend”可能为“未定义”。   使用非空断言来确定一定有firend的值
info.firend!.name = "sss"