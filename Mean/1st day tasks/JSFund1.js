console.log("Now im in a JS file")

var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

for (var ind in x){
  console.log(ind , x[ind])
}

x.push(100)

var newArr = ["hello", "world", "javascript is fun"]
x.push(newArr)
console.log(x)

var sum = 0
for (var i = 0; i <501; i++){
  sum += i
}

console.log(sum)

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja){
  console.log(key, newNinja[key])
}
