
interface IPerson{
  name:string
  age:number
}

type MapPerson<T> = {
  readonly [P in keyof T]?:T[P]
}

type CopyPerson = MapPerson<IPerson>

export{}