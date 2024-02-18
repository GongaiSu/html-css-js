class Person{

  private _name:string
  protected age:number
  constructor(name:string,age:number){
    this._name = name,
    this.age = age
  }

  running(){
    console.log(this._name)
  }

  set name(newValue:string){
    this._name = newValue
  }

  get name(){
    return this._name
  }
}

const p1 =new Person("22",12)

console.log(p1)

p1.name = "sss"

console.log(p1)
console.log(p1.name)



export{}