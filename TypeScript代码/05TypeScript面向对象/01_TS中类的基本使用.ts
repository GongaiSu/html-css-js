

class Person{

  name!:string
  age:number
  constructor(name:string,age:number){
    // this.name = name,
    this.age = age
  }

  running(){
    console.log(this.name)
  }
}


const p1 =  new Person("zs",12)
const p2 =  new Person("ls",19)

p1.age



class Student extends Person {

  id:string
  constructor(name:string,age:number,id:string){
    super(name,age)
    this.id =id 
  }

  studing(){
    console.log(this.id)
  }
}


const s1 =  new Student("wu",18,"111")
s1.running
s1.studing