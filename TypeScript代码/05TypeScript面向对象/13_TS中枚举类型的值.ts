// enum EnumType{
//   LEFT = "left",
//   RIGHT = "right"
// }


enum EnumType{
  LEFT = 100,
  RIGHT 
}

const left:EnumType = EnumType.LEFT


function directionFn(direction:EnumType){
  switch(direction){
    case EnumType.LEFT:
      console.log("LEFT")
      break
    case EnumType.RIGHT:
      console.log("RIGTH")
      break
  }
}

export{}