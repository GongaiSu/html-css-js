interface IHeight {
  length:number
}


function getHeight<T extends IHeight>(obj:T):T{
  return obj
}


// const t1 = getHeight(123)
const t2 =getHeight("111")
const t3 =getHeight({length:123})