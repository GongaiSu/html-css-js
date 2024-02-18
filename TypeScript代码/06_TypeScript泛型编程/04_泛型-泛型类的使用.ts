class Person<T = string> {
  name:T
  age:number

  constructor(name:T,age:number){
    this.name = name
    this.age = age
  }
}





const p1 = new Person<string>("z1",12)
const p2 = new Person("z2",13)
const p3:Person<number> = new Person(12,12)