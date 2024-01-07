const path = require("path")


const filename = "C://abc/cba/nba.txt"
console.log(path.extname(filename));
console.log(path.dirname(filename));
console.log(path.basename(filename));



const dirname1 = "/abc/bca"
const dirname2 = "../abc1/bca1"

console.log(path.join(dirname1,dirname2));



console.log(path.resolve("./abc","./cnnd/dnmd","./hsd/a.txt"))


console.log(path.resolve())