




function foo(this:{name:string},arg1:{name:string}){
  console.log(this,arg1)
}

type FooType = typeof foo

type FooThisType = ThisParameterType<FooType>


type FooOmitType = OmitThisParameter<FooType>




interface IState{
  name:string
  age:number
}

interface IStore{
  sotre:IState
  running:()=>void
}

const obj:IStore & ThisType<IState> = {
  sotre:{
    name:"zs",
    age:14
  },
  running(){
    console.log(this.name);
    
  }
}

obj.running.call(obj.sotre)


export{}