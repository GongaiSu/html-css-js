import gyfRequest from "..";



interface IHome {
  data:any
  returnCode:string
  success:boolean
}
gyfRequest.request<IHome>({
  url:"/home/multidata"
}).then(res=>{
  console.log(res.data)
})