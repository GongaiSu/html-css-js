interface IPerson {
  name:string
  age:number
}

interface IKun extends IPerson{
  slogan:string
}

const p1 :IKun = {
  name:"sss",
  age:12,
  slogan:"sssss"
}


export{}