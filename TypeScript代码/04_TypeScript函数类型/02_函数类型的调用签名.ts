



interface Ibar {
  name:string
  age:number
  //调用签名
  (num:number):number
}

const bar:Ibar = (num:number):number=>{
  return 123
}

bar.name = "sss"
bar.age=123
bar(123)