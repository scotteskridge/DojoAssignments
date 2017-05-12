const mylib = require("./sandbox");
console.log(mylib)

// const times0 = mylib["times"]
// const times1 = mylib.times
// const {times} = mylib
// const {someclass} = mylib
// console.log(times0)
// console.log(times1)
// console.log(times)
// console.log(someclass)

for(let k of mylib.times(7)){
  console.log("foot", k)
}

console.log(mylib)
