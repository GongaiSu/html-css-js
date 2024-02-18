class Person{

  readonly name!:string
  protected age:number
  constructor(name:string,age:number){
    // this.name = name,
    this.age = age
  }

  running(){
    console.log(this.name)
  }
}

const p1 =new Person("22",12)

// p1.name = "sss"


export{}