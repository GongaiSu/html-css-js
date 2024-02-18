enum EnumType{
  LEFT,
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