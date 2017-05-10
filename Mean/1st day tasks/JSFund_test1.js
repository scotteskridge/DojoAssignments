console.log('I am running from node');
console.log('and im useing nodemon');

var myarr = [1,5,25,125,42]

for (var index in myarr){
  console.log(myarr[index]*5)
}

var myobj = {
            language: "javascript",
            dojo: "seattle",
            instructor: "Jack"
            }

Object.keys(myobj).forEach(function(key,value){
  console.log(key, value, myobj[key])
})

for (var key in myobj){
  console.log(key, myobj[key])
}

// a ternary
var condition = false
condition ? console.log(true) : console.log(false)

var stop = false, age = 7;

age > 18 ? (
    console.log('OK, you can go.')

) : (
    stop = true,
    console.log('Sorry, you are much too young!')
);
var ninja = {
  name:'Susanna',
  MEAN_belt:10,
  iOS_belt:10,
  python_belt:10,
  php_belt:9, // she hadn't mastered deploying yet!
  ruby_belt:9.75 // done in 1.5 hrs though!
}
for (var key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(ninja[key]);
  }
}
