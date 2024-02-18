

interface IKun<T=number>{
  name:string
  age:T
  height:T
}


const ikun1:IKun<number> = {
  name:"小黑子1",
  age:18,
  height:1.88
} 

const ikun2:IKun = {
  name:"小黑子2",
  age:19,
  height:1.78
}