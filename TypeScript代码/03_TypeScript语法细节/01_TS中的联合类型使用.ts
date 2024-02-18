


function foo(ID:string|number){


  if(typeof ID === "string"){//类型缩小
    console.log(ID.length)
  }else{
    console.log(ID)
  }


}


foo("123")
foo(123)

export{}