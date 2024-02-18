
//1、使用typeof进行类型缩小
function getMessage(message :string|number){
  if(typeof message ==="string"){
    message.split(" ")
  }else{
    message+1
  }
}

//2、===、!== 的类型缩小使用 一般用于字面量类型
type Direction = "left"|"right"|"up"|"down"

function DirectionFn(direction:Direction){
  if(direction === "left"){
    console.log("向左移动")
  }else if(direction === "right"){
    console.log("向右移动")
  }else if(direction === "up"){
    console.log("向上移动")
  }else{
    console.log("向下移动")
  }
}

// 3、使用instanceof进行类型缩小
function fromatDate (date:string|Date){
  if(date instanceof Date){
    console.log(date);
  }else{
    date.split(" ")
  }
}

//4、使用in进行类型缩小
interface ISwim {
  swim:()=>void
}

interface IRun {
  run:()=>void
}

function move(animal:ISwim|IRun){
  if("swim" in animal){
    animal.swim() 
  }else if("run" in animal){
    animal.run()
  }
}