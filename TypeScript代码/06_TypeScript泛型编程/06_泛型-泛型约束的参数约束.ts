


function getObj<O,T extends keyof O>(obj:O,key:T){
  return obj[key]
}


const info = {
  name:"sss",
  age:123,
  heigth:1.88
}

const s1 = getObj(info,"name")
const s2 = getObj(info,"age")