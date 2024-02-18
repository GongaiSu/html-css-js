













type messageType = string&number




interface IKUN {
  name:string
  age:number
}

interface ICode {
  name:string
  codeing:()=>void
}


type InfoType = IKUN & ICode


const info:InfoType = {
  name:"zs",
  age:12,
  codeing() {
      
  },
}




export{}