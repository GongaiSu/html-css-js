


type ExecFnType = (...args:any[])=>void

function delayExecFn(fn:ExecFnType){
  setTimeout(() => {
    fn("zs",14)
  }, 1000);
}


delayExecFn((name,age)=>{

  console.log(name,age)
})