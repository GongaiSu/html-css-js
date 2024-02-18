
//字面量类型的基本使用
type DirectionType = "left" | "right" | "up" | "down"

const Direction :DirectionType = "left" 


// 例子


function request(url:string,method:"get"|"post"){

}

request("https://www.baidu.com","get")



// const info ={
//   url:"https://www.baidu.com",
//   method:"get"
// }


//报错信息：类型“string”的参数不能赋给类型“"get" | "post"”的参数
// request(info.url,info.method)


// 解决方法一：使用断言
// request(info.url,info.method as "get")

// 解决方法二：给info手动添加类型
// const info:{url:string,method:"get"} ={
//   url:"https://www.baidu.com",
//   method:"get"
// }

// request(info.url,info.method)

// 解决方法三
const info ={
  url:"https://www.baidu.com",
  method:"get"
} as const

request(info.url,info.method)




export {}