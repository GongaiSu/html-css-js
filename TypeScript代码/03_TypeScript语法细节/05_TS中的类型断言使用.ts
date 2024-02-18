

const img = document.querySelector(".img") as HTMLImageElement
img.src = "xxx"
img.alt = "xxx"





//下面是错误的用法

const age:number = 18

const age2 = (age as any) as string

console.log(age2.split(" ")) //会报错



// const age3 = age as string








export {}