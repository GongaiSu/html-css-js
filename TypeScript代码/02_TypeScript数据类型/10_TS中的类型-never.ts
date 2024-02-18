

function foo(){
  return []
}






function getmessge(message:string|number){
  switch (typeof message){
    case "string":
      console.log(message)
      break
    case "number":
      console.log(message)
      break
    default:
      const check:never = message
      // 如果后面添加其他类型，上面这行代码会在编写的报错，提示never不是任何类型
  }
}



export{}