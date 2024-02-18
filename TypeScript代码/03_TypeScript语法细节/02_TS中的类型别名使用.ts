//类型别名：type


type MyNumber = number

const age :MyNumber = 18

type messageType = string | number
function foo(message:messageType){
  console.log(message)
}