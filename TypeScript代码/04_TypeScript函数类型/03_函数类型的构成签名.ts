class Person{

}

interface IFoo {
  new ():Person
}



function bar(foo:IFoo){
  const foo1 = new foo()
}



bar(Person)


export{}