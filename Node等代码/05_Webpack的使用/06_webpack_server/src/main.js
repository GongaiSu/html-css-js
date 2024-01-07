import {sum} from "./utils/math"
// import "./component/div_cop"
import "./utils/demo"


console.log(sum(1,2));


console.log(123);

const bar = ()=>{
  console.log("ssssss");
}

bar()
bar()

if(module.hot){
  module.hot.accept("./utils/demo.js",()=>{
    console.log("/utils/demo.js更新了");
  })
}