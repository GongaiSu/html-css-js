




const obj = {
  name:"zs",
  run(){
    console.log(this.name)
  }
}
obj.run()

function foo(this:{name:string},arg1:{name:string}){
  console.log(this,arg1)
}

foo.call({name:"ls"},{name:"sss"})

export{}