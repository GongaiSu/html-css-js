import { gyfRequest2 } from "..";



gyfRequest2.get({
  url:"/entire/list",
  params:{
    offset:0,
    size:20
  }
}).then(res=>{
  console.log(res)
})