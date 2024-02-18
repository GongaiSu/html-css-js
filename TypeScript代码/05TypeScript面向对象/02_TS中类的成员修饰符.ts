class Person{

  private name!:string
  protected age:number
  constructor(name:string,age:number){
    // this.name = name,
    this.age = age
  }

  running(){
    console.log(this.name)
  }
}



class Student extends Person {

  private id:string
  constructor(name:string,age:number,id:string){
    super(name,age)
    this.id =id 
  }

  studing(){
    console.log(this.age)
  }
}




export{}