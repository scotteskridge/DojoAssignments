var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
console.log(first_variable);



// #2

var food = "Chicken";
function eat() {
  console.log(food);
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);


//#3

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
