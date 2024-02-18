class Person{
  constructor(private _name:string, private age:number){
    this._name = _name,
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


const p1 =  new Person("123",113)
console.log(p1.name)