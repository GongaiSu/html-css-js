


function foo<Type>(message:Type):Type{
  return message
}

// 完整的写法
const f1 = foo<string>("11111")

//省略的写法
const f2 = foo("ssss")
let f3 = foo(123)