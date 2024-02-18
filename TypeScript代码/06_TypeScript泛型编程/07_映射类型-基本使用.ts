
interface IPerson{
  name:string
  age:number
}

type MapPerson<T> = {
  [P in keyof T]:T[P]
}

type CopyPerson = MapPerson<IPerson>